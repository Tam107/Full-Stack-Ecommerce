package org.example.backend.services;

import org.example.backend.dto.ProductDTO;
import org.example.backend.entities.Product;

import java.util.List;
import java.util.UUID;

public interface ProductService {

    public Product addProduct(ProductDTO productDTO);

    public List<Product> getAllProducts(UUID categoryId, UUID categoryTypeId);
}
