package com.abutua.product_backend.models;

public class Product {
    //atributos
    private int id;
    private String name;
    private double price;

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