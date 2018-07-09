package com.github.aks8m.barkentine.model;

public class SankeyNode {

    private int node;
    private String name;

    public SankeyNode(int node, String name) {
        this.node = node;
        this.name = name;
    }

    public int getNode() {
        return node;
    }

    public void setNode(int node) {
        this.node = node;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
