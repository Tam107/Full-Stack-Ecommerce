package org.example.backend;

import org.example.backend.entities.Product;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.math.BigDecimal;

@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner() {

        Product product = new Product();
        product.setName("Sample Product");
        product.setDescription("This is a sample product.");
        product.setPrice(BigDecimal.valueOf(19.99));
        product.setBrand("Sample Brand");
        product.setRating(4.5f);
        product.setNewArrival(true);
        product.setCreatedAt(new java.util.Date());
        product.setUpdatedAt(new java.util.Date());
        product.setProductVariants(null); // Assuming you have a method to set product variants



        return args -> {
            // This is where you can add any startup logic if needed

            System.out.println("Product "+  product.toString());
            System.out.println("Backend application started successfully!");
        };
    }


}
