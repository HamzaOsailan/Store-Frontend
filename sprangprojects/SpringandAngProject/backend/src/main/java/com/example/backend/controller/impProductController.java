package com.example.backend.controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.backend.entity.Product;
import com.example.backend.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "*")
public class impProductController implements ProductController{
    private final ProductService productService;

    @GetMapping("/product")
    @Override
    public List<Product> getProduct() {
        return productService.getProducts();
    }
    @PostMapping( "/postNewProduct")
    @Override
    public Product addNewProduct(@RequestBody Product product) {
        return productService.addNewProduct(product);
    }
    @PutMapping( "/editProduct/{id}")
    @Override
    public String editProduct(@PathVariable("id") long id, @RequestBody Product product) {
         productService.editProduct(id,product);
        return "work";
    }
    @DeleteMapping( "/deleteProduct/{id}")
    @Override
    public String deleteProduct(@PathVariable("id") long id) {
         productService.deleteProduct(id);
         return "the product has been deleted";
    }

    @GetMapping( "/getOneProduct/{id}")
    @Override
    public Product getOneProduct(@PathVariable("id") long id) {
        return productService.getOneProduct(id);
    }

    @GetMapping( "/getOneProduct/{id}/{product}")
    @Override
    public Product findByIdAndProductName(@PathVariable("id") long id,@PathVariable("product") String Product) {
        return productService.findByIdAndProductName(id,Product);
    }

}
