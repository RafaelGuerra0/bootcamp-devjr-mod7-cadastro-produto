package com.abutua.product_backend.models;

public class AutoIncrementerIndex {
    private static int nextIndex = 0;

    public static synchronized int getNextIndex(){
        nextIndex++;
        return nextIndex;
    }

}
