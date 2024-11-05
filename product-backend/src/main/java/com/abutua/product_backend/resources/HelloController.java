package com.abutua.product_backend.resources;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController   //esta classe pode responder a um endpoint

public class HelloController {
    
    @GetMapping("hello")    //mapear o seguinte ao endpoint especificado
    public String getHello(){
        return "Hello Spring Boot!";

    }
}
