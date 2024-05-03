package com.example.backend.controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.backend.entity.Product;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController

public interface ProductController {
    @CrossOrigin(origins = "http://localhost:4200")

    public List<Product> getProduct();

    public Product addNewProduct(Product product);

    public String editProduct(long id,Product product);

    public String deleteProduct(long id);
    public Product getOneProduct(long id);

    public Product findByIdAndProductName(long id,String Product);
}
