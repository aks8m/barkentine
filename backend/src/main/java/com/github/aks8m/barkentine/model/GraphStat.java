package com.github.aks8m.barkentine.model;

import java.time.LocalDateTime;

public class GraphStat {

    private LocalDateTime lastRefreshedTime;
    private int personaCount;
    private int egoCount;
    private int alterCount;
    private int relationshipCount;
    private int sharedAlterCount;

    public GraphStat(LocalDateTime lastRefreshedTime, int personaCount, int egoCount, int alterCount, int relationshipCount, int sharedAlterCount) {
        this.lastRefreshedTime = lastRefreshedTime;
        this.personaCount = personaCount;
        this.egoCount = egoCount;
        this.alterCount = alterCount;
        this.relationshipCount = relationshipCount;
        this.sharedAlterCount = sharedAlterCount;
    }

    public LocalDateTime getLastRefreshedTime() {
        return lastRefreshedTime;
    }

    public void setLastRefreshedTime(LocalDateTime lastRefreshedTime) {
        this.lastRefreshedTime = lastRefreshedTime;
    }

    public int getPersonaCount() {
        return personaCount;
    }

    public void setPersonaCount(int personaCount) {
        this.personaCount = personaCount;
    }

    public int getEgoCount() {
        return egoCount;
    }

    public void setEgoCount(int egoCount) {
        this.egoCount = egoCount;
    }

    public int getAlterCount() {
        return alterCount;
    }

    public void setAlterCount(int alterCount) {
        this.alterCount = alterCount;
    }

    public int getRelationshipCount() {
        return relationshipCount;
    }

    public void setRelationshipCount(int relationshipCount) {
        this.relationshipCount = relationshipCount;
    }

    public int getSharedAlterCount() {
        return sharedAlterCount;
    }

    public void setSharedAlterCount(int sharedAlterCount) {
        this.sharedAlterCount = sharedAlterCount;
    }
}
