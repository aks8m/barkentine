package com.github.aks8m.barkentine.repository;

import org.neo4j.driver.v1.*;
import org.neo4j.driver.v1.exceptions.ServiceUnavailableException;

public class GraphRepository {

    //TODO: Replace this with Spring ParsedData Neo4j
    private static final Driver neo4jDriver =
            GraphDatabase.driver(
                    "bolt://localhost:7687",
                    AuthTokens.basic( "neo4j", "!QAZXSW@1qazxsw2" ) );

    public Driver Neo4jDriver(){
        return neo4jDriver;
    }

    public boolean writeTransaction(String cypherQuery){
        try ( Session session = neo4jDriver.session() )
        {
            return session.writeTransaction(transaction -> {

                transaction.run( cypherQuery );
                return true;

            });
        }
        catch ( ServiceUnavailableException ex ) {
            return false;
        }

    }

    public void close(){
        neo4jDriver.close();
    }
}
