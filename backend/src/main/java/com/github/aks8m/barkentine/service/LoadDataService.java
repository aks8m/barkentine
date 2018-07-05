package com.github.aks8m.barkentine.service;

import com.github.aks8m.barkentine.model.ParsedData;
import com.github.aks8m.barkentine.repository.GraphRepository;

public class LoadDataService {

    private static GraphRepository graphRepository = new GraphRepository();
    private final ParsedData parsedData;

    public LoadDataService(ParsedData ParsedData) {
        this.parsedData = ParsedData;
    }

    public boolean load(){
        this.parsedData.getPersonaName();

        return graphRepository.writeTransaction(String.format("CREATE (n:Persona { name: '%s'})", this.parsedData.getPersonaName()));
    }
}
