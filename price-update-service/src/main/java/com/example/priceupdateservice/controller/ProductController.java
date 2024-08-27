package com.example.priceupdateservice.controller;

import com.example.priceupdateservice.model.Product;
import com.example.priceupdateservice.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PutMapping("/{productId}/price")
    public ResponseEntity<?> updatePrice(@PathVariable String productId, @RequestBody double newPrice) {
        Product updatedProduct = productService.updatePrice(productId, newPrice);
        if (updatedProduct == null) {
            return ResponseEntity.badRequest().body("Product not found or invalid price");
        }
        return ResponseEntity.ok(updatedProduct);
    }
}
