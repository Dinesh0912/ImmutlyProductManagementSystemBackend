package com.example.priceupdateservice.service;

import com.example.priceupdateservice.model.Product;
import com.example.priceupdateservice.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product updatePrice(String productId, double newPrice) {
        Product product = productRepository.findByProductId(productId);
        if (product != null && newPrice >= 0) {
            product.setPrice(newPrice);
            productRepository.save(product);
        }
        return product;
    }
}
