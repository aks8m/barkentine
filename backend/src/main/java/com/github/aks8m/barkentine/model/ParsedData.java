package com.github.aks8m.barkentine.model;


import java.util.ArrayList;
import java.util.List;

public class ParsedData {

    private String personaName;
    private List<PapaParseObj> parsedData = new ArrayList<>();

    public String getPersonaName() {
        return personaName;
    }

    public void setPersonaName(String personaName) {
        this.personaName = personaName;
    }

    public List<PapaParseObj> getParsedData() {
        return parsedData;
    }

    public void setParsedData(List<PapaParseObj> parsedData) {
        this.parsedData = parsedData;
    }
}
