package org.example.backend.services.impl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.backend.dto.ProductDTO;
import org.example.backend.dto.ProductResourceDTO;
import org.example.backend.dto.ProductVariantDTO;
import org.example.backend.entities.*;
import org.example.backend.repositories.ProductRepository;
import org.example.backend.services.CategoryService;
import org.example.backend.services.ProductService;

import org.example.backend.specification.ProductSpecification;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j(topic = "ProductServiceImpl")
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final CategoryService categoryService;


    @Override
    @Transactional(rollbackFor = Exception.class)
    public Product addProduct(ProductDTO productDTO) {
        log.info("Adding product: {}", productDTO);
        Product product = mapToProductEntity(productDTO);

        return productRepository.save(product);
    }

    @Override
    public List<Product> getAllProducts(UUID categoryId, UUID categoryTypeId) {
        Specification<Product> productSpecification = Specification.where(null);
        if(categoryId != null){
            productSpecification = productSpecification.and(ProductSpecification.hasCategoryId(categoryId));
        }
        if (categoryTypeId != null){
            productSpecification = productSpecification.and(ProductSpecification.hasCategoryTypeId(categoryTypeId));
        }

        List<Product> products = productRepository.findAll(productSpecification);
        return products;
    }


    private Product mapToProductEntity(ProductDTO productDTO) {
        Product product = new Product();
        product.setName(productDTO.getName());
        product.setDescription(productDTO.getDescription());
        product.setBrand(productDTO.getBrand());
        product.setNewArrival(product.isNewArrival());
        product.setPrice(productDTO.getPrice());
        product.setRating(productDTO.getRating());

        Category category = categoryService.getCategoryById(productDTO.getCategoryId());
        if (category != null) {
            product.setCategory(category);
            UUID categoryTypeId = productDTO.getCategoryTypeId();
            CategoryType categoryType = category.getCategoryTypes().stream().filter(
                    categoryType1 -> categoryType1.getId().equals(categoryTypeId)).findFirst().orElse(null);
            product.setCategoryType(categoryType);
        } else {
            throw new IllegalArgumentException("Category not found");
        }

        if (productDTO.getVariants() != null) {
            product.setProductVariants(mapToProductVariant(productDTO.getVariants(), product));
        }

        if (product.getResources() != null) {
            product.setResources(mapToProductResources(productDTO.getProductResources(), product));
        }


        return product;
    }

    private List<Resources> mapToProductResources(List<ProductResourceDTO> productResources, Product product) {

        return productResources.stream().map(productResourceDTO -> {
            Resources resources = new Resources();
            resources.setName(productResourceDTO.getName());
            resources.setType(productResourceDTO.getType());
            resources.setUrl(productResourceDTO.getUrl());
            resources.setIsPrimary(productResourceDTO.getIsPrimary());
            resources.setProduct(product);
            return resources;
        }).collect(Collectors.toList());
    }


    private List<ProductVariant> mapToProductVariant(List<ProductVariantDTO> productVariantDTOS, Product product) {
        return productVariantDTOS.stream().map(productVariantDTO -> {
            ProductVariant productVariant = new ProductVariant();
            productVariant.setColor(productVariantDTO.getColor());
            productVariant.setSize(productVariantDTO.getSize());
            productVariant.setStockQuantity(productVariantDTO.getStockQuantity());
            productVariant.setProduct(product);
            return productVariant;
        }).collect(Collectors.toList());
    }
}


