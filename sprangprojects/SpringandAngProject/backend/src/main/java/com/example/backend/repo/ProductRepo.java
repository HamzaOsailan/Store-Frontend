package com.example.backend.repo;

import com.example.backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepo extends JpaRepository<Product,Long> {

    public Product findByIdAndProductName (long id ,String Product);
}
