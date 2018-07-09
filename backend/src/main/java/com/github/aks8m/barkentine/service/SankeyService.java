package com.github.aks8m.barkentine.service;

import com.github.aks8m.barkentine.model.SankeyData;
import com.github.aks8m.barkentine.model.SankeyDiagram;
import com.github.aks8m.barkentine.repository.GraphRepository;
import org.neo4j.driver.v1.StatementResult;

import java.util.*;

public class SankeyService {

    private static GraphRepository graphRepository = new GraphRepository();

    public SankeyDiagram generateSankeyDiagram(){

        StatementResult statementResult;
        SankeyData sankeyData;

        String query = String.format("MATCH (a1:Alter)<--(:Ego)-->(a2:Alter)<--(:Ego)-->(a3:Alter)<--(:Ego)-->(a4:Alter)<--(:Ego)-->(a5:Alter)" +
                "WHERE a1.value = \"%s\" AND a5.value = \"%s\" RETURN a1, a2, a3, a4, a5 limit 100","2289", "71.6");

        statementResult = graphRepository.readTransaction(query);

        Set<String> nodes = new HashSet<>();
        //count touple matches
        HashMap<Touple, Integer> toupleCounter = new HashMap<>();


        while (statementResult.hasNext()){
            //a1 -> a2 -> a3 -> a4 -> a5

            String a1 = statementResult.next().get("a1").asString();
            String a2 = statementResult.next().get("a1").asString();
            String a3 = statementResult.next().get("a1").asString();
            String a4 = statementResult.next().get("a1").asString();
            String a5 = statementResult.next().get("a1").asString();

            Touple a1a2 = new Touple(a1,a2);
            Touple a2a3 = new Touple(a2,a3);
            Touple a3a4 = new Touple(a3,a4);
            Touple a4a5 = new Touple(a4,a5);

            nodes.add(a1);
            nodes.add(a2);
            nodes.add(a3);
            nodes.add(a4);
            nodes.add(a5);

            //a1a2
            if(toupleCounter.containsKey(a1a2)){
                int oldvalue = toupleCounter.get(a1a2);
                toupleCounter.remove(a1a2, oldvalue + 1);
            }else{
                toupleCounter.put(a1a2, 0);
            }

            //a2a3
            if(toupleCounter.containsKey(a2a3)){
                int oldvalue = toupleCounter.get(a2a3);
                toupleCounter.remove(a2a3, oldvalue + 1);
            }else{
                toupleCounter.put(a2a3, 0);
            }

            //a3a4
            if(toupleCounter.containsKey(a3a4)){
                int oldvalue = toupleCounter.get(a3a4);
                toupleCounter.remove(a3a4, oldvalue + 1);
            }else{
                toupleCounter.put(a3a4, 0);
            }

            //a4a5
            if(toupleCounter.containsKey(a4a5)){
                int oldvalue = toupleCounter.get(a4a5);
                toupleCounter.remove(a4a5, oldvalue + 1);
            }else{
                toupleCounter.put(a4a5, 0);
            }


        }

        return new SankeyDiagram(null);
    }

    private class Touple{
        private String value1;
        private String value2;

        public Touple(String value1, String value2) {
            this.value1 = value1;
            this.value2 = value2;
        }

        public String getValue1() {
            return value1;
        }

        public String getValue2() {
            return value2;
        }

        public boolean equals(Touple touple) {
            return touple.getValue1().equals(this.getValue1()) && touple.getValue2().equals(this.getValue2());
        }
    }
}
