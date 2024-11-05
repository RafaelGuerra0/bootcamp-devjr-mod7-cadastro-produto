package com.abutua.product_backend.resources;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.abutua.product_backend.models.Product;

import jakarta.annotation.PostConstruct;

@RestController
public class ProductController {

    private List<Product> products = new ArrayList<>();

    @PostConstruct // apos a construcao do objeto product controller, o metodo init() sera chamado
    public void init() {
        Product p1 = new Product();
        p1.setId(1);
        p1.setName("Product 01");
        p1.setPrice(100.50);

        Product p2 = new Product();
        p2.setId(2);
        p2.setName("Product 02");
        p2.setPrice(200.50);

        Product p3 = new Product();
        p3.setId(3);
        p3.setName("Product 03");
        p3.setPrice(300.50);

        products.add(p1);
        products.add(p2);
        products.add(p3);
    }

    @GetMapping("products/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable int id) {    // @PathVariable pega a variavel que veio no caminho la no endpoint, no caso, variavel id
        //                                                                     responseentity devolve status code, ex 404

        // if (id<=products.size() && id>0){
        //     return ResponseEntity.ok(products.get(id-1));
        // }else{
        //     //return ResponseEntity.notFound().build();
        //     throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found");
        // }
        Product prod = products.stream()  //programacao funcional
                                .filter(p -> p.getId() == id)
                                .findFirst()
                                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"));
                                // ao lancar uma excessao, as proximas linhas nao serao executadas
        return ResponseEntity.ok(prod);
    }

    @GetMapping("products")
    public List<Product> getProducts() {
        return products;
    }

}
