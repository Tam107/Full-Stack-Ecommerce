package org.example.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.backend.entities.ProductVariant;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductDTO {

    private UUID id;
    private String name;

    private String description;
    private BigDecimal price;
    private String brand;
    private boolean isNewArrival;
    private Float rating;
    private UUID categoryId;
    private String categoryName;
    private String categoryTypeName;
    private UUID categoryTypeId;
    private String categoryTypename;
    private List<ProductVariantDTO> variants;
    private List<ProductResourceDTO> productResources;

}
