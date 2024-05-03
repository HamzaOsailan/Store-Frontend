package com.example.backend.service;

import com.example.backend.entity.Product;
import com.example.backend.repo.ProductRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor

public class impProductService implements ProductService{
private final ProductRepo productRepo;
    @Override
    public List<Product> getProducts() {
        return productRepo.findAll();
    }
    @Override
    public Product addNewProduct(Product product){
        return productRepo.save(product);
    }
    @Override
    public Product editProduct(long id,Product product){
        Product existingProduct = productRepo.findById(id).orElse(null);
          if (existingProduct !=null) {

              existingProduct.setImageUrl(product.getImageUrl());
              existingProduct.setProductName(product.getProductName());
              existingProduct.setQuantity(product.getQuantity());
              existingProduct.setPrice(product.getPrice());
              existingProduct.setDescription(product.getDescription());

              return productRepo.save(existingProduct);
          }
          else {
              throw new IllegalStateException("Product not found with id: "+id);
          }
    }

    @Override
    public String deleteProduct(long id) {
         productRepo.deleteById(id);
         return "the product";
    }

    @Override
    public Product getOneProduct(long id) {
        return productRepo.findById(id)
                .orElseThrow(() -> new IllegalStateException("Product with ID " + id + " does not exist"));
    }

//    @Override
    public Product findByIdAndProductName(long id, String Product) {
        return productRepo.findByIdAndProductName(id,Product);
    }


}
