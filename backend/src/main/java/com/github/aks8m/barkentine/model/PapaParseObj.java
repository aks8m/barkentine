package com.github.aks8m.barkentine.model;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;

import java.util.HashMap;
import java.util.Map;

public class PapaParseObj {

    private Map<String, String> papaParseObj = new HashMap<>();

    @JsonAnyGetter
    public Map<String, String> getPapaParseObj() {
        return papaParseObj;
    }

    @JsonAnySetter
    public void setPapaParseObj(String key, String value) {
        this.papaParseObj.put(key, value);
    }
}
