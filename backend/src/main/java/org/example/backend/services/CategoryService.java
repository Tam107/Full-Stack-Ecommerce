package org.example.backend.services;

import lombok.RequiredArgsConstructor;
import org.example.backend.dto.CategoryDTO;
import org.example.backend.dto.CategoryTypeDTO;
import org.example.backend.entities.Category;
import org.example.backend.entities.CategoryType;
import org.example.backend.exception.ResourceNotFoundException;
import org.example.backend.repositories.CategoryRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;


    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    public Category getCategoryById(UUID categoryId) {
        // This is a stub implementation. Replace with actual logic to fetch category by ID.
        Optional<Category> category = categoryRepository.findById(categoryId);

        return category.orElse(null);
    }

    @Transactional(rollbackFor = Exception.class)
    public Category createCategory(CategoryDTO categoryDTO) {
        Category category = mapToEntity(categoryDTO);
        return categoryRepository.save(category);
    }

    //    map DTO to Entity
    private Category mapToEntity(CategoryDTO categoryDTO) {
        Category category = Category.builder()
                .code(categoryDTO.getCode())
                .name(categoryDTO.getName())
                .description(categoryDTO.getDescription())
                .build();

        if (null != categoryDTO.getCategoryTypeList()) {
            List<CategoryType> categoryTypes = maptoCategoryTypesList(categoryDTO.getCategoryTypeList(), category);
            category.setCategoryTypes(categoryTypes);
        }

        return category;
    }

    //    map Entity to DTO
    private List<CategoryType> maptoCategoryTypesList(List<CategoryTypeDTO> categoryTypeList, Category category) {
        List<CategoryType> categoryTypes = categoryTypeList.stream()
                .map(categoryTypeDTO -> CategoryType.builder()
                        .code(categoryTypeDTO.getCode())
                        .name(categoryTypeDTO.getName())
                        .description(categoryTypeDTO.getDescription())
                        .category(category)
                        .build()).collect(Collectors.toList());

        return categoryTypes;

    }

    @Transactional(rollbackFor = Exception.class)
    public Category updateCategory(CategoryDTO categoryDTO, UUID categoryId) {

        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Cannot found with Id" + categoryDTO.getId()));

        if (categoryDTO.getName() != null) {
            category.setName(categoryDTO.getName());
        }
        if (categoryDTO.getDescription() != null) {
            category.setDescription(categoryDTO.getDescription());
        }
        if (categoryDTO.getCode() != null) {
            category.setCode(categoryDTO.getCode());
        }

        List<CategoryType> existingCate = category.getCategoryTypes();
        List<CategoryType> list = new ArrayList<>();
        if (categoryDTO.getCategoryTypeList() != null) {
            categoryDTO.getCategoryTypeList().forEach(categoryTypeDTO -> {
                if (categoryTypeDTO.getId() != null) {
                    Optional<CategoryType> categoryType = existingCate.stream().filter(
                            t -> t.getId().equals(categoryTypeDTO.getId())).findFirst();
                    if (categoryType.isPresent()) {
                        CategoryType categoryType1 = categoryType.get();
                        categoryType1.setName(categoryTypeDTO.getName());
                        categoryType1.setCode(categoryTypeDTO.getCode());

                        categoryType1.setDescription(categoryTypeDTO.getDescription());
                        list.add(categoryType1);
                    } else {
                        throw new ResourceNotFoundException("CategoryType with ID " + categoryTypeDTO.getId() + " not found");
                    }

                } else {

                    CategoryType categoryType = new CategoryType();
                    categoryType.setName(categoryTypeDTO.getName());
                    categoryType.setCode(categoryTypeDTO.getCode());
                    categoryType.setDescription(categoryTypeDTO.getDescription());
                    categoryType.setCategory(category);
                    list.add(categoryType);
                }
            });
        }
        category.setCategoryTypes(list);

        return categoryRepository.save(category);
    }

    @Transactional(rollbackFor = Exception.class)
    public void deleteCategory(UUID categoryId) {
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Cannot found with Id" + categoryId));
        categoryRepository.delete(category);
    }
}
