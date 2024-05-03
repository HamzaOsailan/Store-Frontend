package com.example.backend.service;


import com.example.backend.entity.Product;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductService {
    public List<Product> getProducts();
    public Product addNewProduct(Product product);
    public Product editProduct(long id,Product product);
    public String deleteProduct(long id);
    public Product getOneProduct(long id);
    public Product findByIdAndProductName(long id,String Description);
}
