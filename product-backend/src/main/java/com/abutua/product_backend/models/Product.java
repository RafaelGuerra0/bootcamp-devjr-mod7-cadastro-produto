package com.abutua.product_backend.models;

public class Product {
    //atributos
    private int id;
    private String name;
    private double price;
    private String description;
   // private Category category;
    private int idCategory;
    private boolean onSale;
    private boolean OnRelease;
    

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
  
    

    public Product(int id, String name, double price, String description, int idCategory, boolean onSale, boolean OnRealease){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.idCategory = idCategory;
        this.onSale =onSale;
        this.OnRelease = OnRealease;
    } 
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

    public int getIdCategory() {
        return idCategory;
    }

    public void setIdCategory(int idCategory) {
        this.idCategory = idCategory;
    }

    public boolean isOnSale() {
        return onSale;
    }

    public void setOnSale(boolean onSale) {
        this.onSale = onSale;
    }

    public boolean isOnRelease() {
        return OnRelease;
    }

    public void setOnRelease(boolean isOnRelease) {
        this.OnRelease = isOnRelease;
    }


}
