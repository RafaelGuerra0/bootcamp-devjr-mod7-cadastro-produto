package com.abutua.product_backend.models;

public class Product {
    //atributos
    private int id;
    private String name;
    private double price;

    //metodos construtores
    public Product(int id, String name, double price){
        System.out.println("construindo um produto");
        this.id = id;
        this.name = name;
        this.price = price;

    }
    
    public Product(){

        
    }



    //metodos    
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        this.price = price;
    }
    


}
