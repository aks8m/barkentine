package com.github.aks8m.barkentine.model;

public class SankeyDiagram {

    SankeyData sankeyData;

    public SankeyDiagram(SankeyData sankeyData) {
        this.sankeyData = sankeyData;
    }

    public SankeyData getSankeyData() {
        return sankeyData;
    }

    public void setSankeyData(SankeyData sankeyData) {
        this.sankeyData = sankeyData;
    }
}
