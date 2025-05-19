package org.example.backend.controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.backend.dto.ProductDTO;
import org.example.backend.entities.Product;
import org.example.backend.services.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
@Slf4j(topic = "ProductController")
public class ProductController {

    private final ProductService productService;

    @GetMapping("/controller")
    public String getController() {
        return "hehe controller";
    }

//    @GetMapping
//    public ResponseEntity<List<Product>> getAllProducts() {
//        try {
//            List<Product> products = productService.getAllProducts();
//            if (products == null || products.isEmpty()) {
//                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//            }
//            // This method should return a list of all products
//            return new ResponseEntity<>(products, HttpStatus.OK);
//        } catch (Exception e) {
//            // Handle the exception and return an appropriate response
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts(@RequestParam(required = false, name = "categoryId")UUID categoryId,
                                                        @RequestParam(required = false, name = "typeId")UUID categoryTypeId) {
        List<Product> productList = productService.getAllProducts(categoryId, categoryTypeId);
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody ProductDTO productDTO) {

            Product createdProduct = productService.addProduct(productDTO);
            return new ResponseEntity<>(createdProduct, HttpStatus.CREATED);

    }
}

