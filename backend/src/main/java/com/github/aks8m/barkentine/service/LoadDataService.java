package com.github.aks8m.barkentine.service;

import com.github.aks8m.barkentine.model.ParsedData;
import com.github.aks8m.barkentine.repository.GraphRepository;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.UUID;

public class LoadDataService {

    private static GraphRepository graphRepository = new GraphRepository();
    private final ParsedData parsedData;

    public LoadDataService(ParsedData ParsedData) {
        this.parsedData = ParsedData;
    }

    public boolean load(){

        boolean isLoadSuccessful = true;

        LocalDateTime startDateTime = LocalDateTime.now();
        System.out.println("~~~Load Started: " + startDateTime.toString());

        try {

            //Create Ego and connect to Persona, then Create Alters and connect to Ego
            parsedData.getParsedData().stream()
                    .forEach(papaParseObj -> {

                        final long egoId = UUID.randomUUID().getMostSignificantBits() & Long.MAX_VALUE;
                        graphRepository.writeTransaction(String.format("CREATE (e:Ego {id: %s, persona: \"%s\"})",
                                String.valueOf(egoId),
                                this.parsedData.getPersonaName()));

                        papaParseObj.getPapaParseObj().entrySet().stream()
//                                .filter(stringStringEntry -> { //Filter out integers
//                                    try
//                                    {
//                                        Integer.parseInt(stringStringEntry.getValue());
//                                        return false;
//                                    }
//                                    catch (NumberFormatException ex)
//                                    {
//                                        return true;
//                                    }
//                                })
//                                .filter(stringStringEntry -> { //Filter out doubles
//                                    try
//                                    {
//                                        Double.parseDouble(stringStringEntry.getValue());
//                                        return false;
//                                    }
//                                    catch (NumberFormatException ex)
//                                    {
//                                        return true;
//                                    }
//                                })
//                                .filter(stringStringEntry -> { //Filter out longs
//                                    try
//                                    {
//                                        Long.parseLong(stringStringEntry.getValue());
//                                        return false;
//                                    }
//                                    catch (NumberFormatException ex)
//                                    {
//                                        return true;
//                                    }
//                                })
                                .forEach(entry -> graphRepository.writeTransaction(String.format("MATCH (e:Ego) WHERE e.id = %s MERGE (a:Alter {value: \"%s\"}) CREATE (e)-[r:Has]->(a)",
                                        String.valueOf(egoId),
                                        entry.getValue())));
                    });

        }catch (GraphLoadException glE) {
            glE.printStackTrace();
            isLoadSuccessful = false;
        }

        System.out.println("~~~Load Finished: " + Duration.between(startDateTime, LocalDateTime.now()));

        return isLoadSuccessful;
    }
}
