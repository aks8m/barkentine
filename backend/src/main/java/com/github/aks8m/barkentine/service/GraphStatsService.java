package com.github.aks8m.barkentine.service;

import com.github.aks8m.barkentine.model.GraphStat;
import com.github.aks8m.barkentine.repository.GraphRepository;
import org.neo4j.driver.v1.StatementResult;

import java.time.LocalDateTime;

public class GraphStatsService {

    private GraphRepository graphRepository = new GraphRepository();

    public GraphStat getGraphStats(){

        int personaCount = 0;
        int egoCount = 0;
        int alterCount = 0;
        int relationshipCount = 0;
        int shareAlterCount = 0;
        StatementResult personaStatementResult, egoStatementResult,
                alterStatementResult, relationshipStatementResult, sharedALterStatementResult;

        personaStatementResult = graphRepository.readTransaction("MATCH (e:Ego) RETURN COUNT(distinct e.persona) as PersonaCount");
        egoStatementResult = graphRepository.readTransaction("MATCH (:Ego) RETURN COUNT(*) as EgoCount");
        alterStatementResult = graphRepository.readTransaction("MATCH (:Alter) RETURN COUNT(*) as AlterCount");
        relationshipStatementResult = graphRepository.readTransaction("MATCH ()-[:Has]->() RETURN COUNT(*) as RelationshipCount");
        sharedALterStatementResult = graphRepository.readTransaction("MATCH (:Ego)-[:Has]->(a:Alter)<-[:Has]-(:Ego) RETURN COUNT(distinct a) as SharedAlterCount");

        if(personaStatementResult.hasNext())
            personaCount = personaStatementResult.next().get("PersonaCount").asInt();
        if(egoStatementResult.hasNext())
            egoCount = egoStatementResult.next().get("EgoCount").asInt();
        if(alterStatementResult.hasNext())
            alterCount = alterStatementResult.next().get("AlterCount").asInt();
        if(relationshipStatementResult.hasNext())
            relationshipCount = relationshipStatementResult.next().get("RelationshipCount").asInt();
        if(sharedALterStatementResult.hasNext())
            shareAlterCount = sharedALterStatementResult.next().get("SharedAlterCount").asInt();

        return new GraphStat(
                LocalDateTime.now(),
                personaCount,
                egoCount,
                alterCount,
                relationshipCount,
                shareAlterCount);
    }
}
