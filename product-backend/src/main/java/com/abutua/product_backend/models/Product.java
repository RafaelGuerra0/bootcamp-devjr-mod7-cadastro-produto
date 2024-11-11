package com.abutua.product_backend.models;
public class Product {
    //atributos
    private int id;
    private String name;
    private double price;
    private String description;
    private Category category;
    private boolean onSale;
    private boolean isOnRelease;
    

    //contador indice
    
    //metodos construtores

    public Product(int id, String name, double price){
        System.out.println("construindo um produto");
        this.id = id;
        this.name = name;
        this.price = price;

    }
    
    public Product(){

        
    }
    AutoIncrementerIndex incr = new AutoIncrementerIndex();
    public Product(String name, double price, String description, Category category, boolean onSale, boolean isOnRealease){
        this.name = name;
        this.price = price;
        this.description = description;
        this.category = category;
        this.onSale =onSale;
        this.isOnRelease = isOnRealease;
        this.id = incr.getNextIndex();

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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public boolean isOnSale() {
        return onSale;
    }

    public void setOnSale(boolean onSale) {
        this.onSale = onSale;
    }

    public boolean isIsOnRelease() {
        return isOnRelease;
    }

    public void setIsOnRelease(boolean isOnRelease) {
        this.isOnRelease = isOnRelease;
    }


    


}
