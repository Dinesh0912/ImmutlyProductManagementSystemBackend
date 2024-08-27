package com.example.priceupdateservice.repository;

import com.example.priceupdateservice.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<Product, String> {
    Product findByProductId(String productId);
}
