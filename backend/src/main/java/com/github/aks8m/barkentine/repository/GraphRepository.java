package com.github.aks8m.barkentine.repository;

import com.github.aks8m.barkentine.service.GraphLoadException;
import org.neo4j.driver.v1.*;
import org.neo4j.driver.v1.exceptions.ServiceUnavailableException;

import java.util.concurrent.ExecutionException;

public class GraphRepository {

    //TODO: Replace this with Spring ParsedData Neo4j
    private static final Driver neo4jDriver =
            GraphDatabase.driver(
                    "bolt://localhost:7687",
                    AuthTokens.basic( "neo4j", "!QAZXSW@1qazxsw2" ) );

    public Driver Neo4jDriver(){
        return neo4jDriver;
    }

    public void writeTransaction(String cypherQuery){
        try ( Session session = neo4jDriver.session() )
        {
            session.writeTransaction(transaction -> transaction.run(cypherQuery));
        }
        catch (ServiceUnavailableException suE ) {
            throw new GraphLoadException(suE.getMessage());
        }catch (Exception e){
            throw new GraphLoadException(e.getMessage());
        }
    }

    public StatementResult readTransaction(String cypherQuery){
        StatementResult statementResult = null;
        try ( Session session = neo4jDriver.session() )
        {
            statementResult = session.run(cypherQuery);
        }
        catch (ServiceUnavailableException suE ) {
            suE.printStackTrace();
        }catch (Exception e){
            e.printStackTrace();
        }
        return statementResult;
    }

    public void close(){
        neo4jDriver.close();
    }
}
