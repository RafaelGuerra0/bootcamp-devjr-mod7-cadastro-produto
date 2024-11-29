package com.abutua.product_backend.models;

public class AutoIncrementerIndex {
    private static int nextIndex = 0;

    public synchronized static int getNextIndex(){
        nextIndex++;
        return nextIndex;
    }

}
