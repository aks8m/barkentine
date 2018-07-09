package com.github.aks8m.barkentine.controller;


import com.github.aks8m.barkentine.model.GraphStat;
import com.github.aks8m.barkentine.model.ParsedData;
import com.github.aks8m.barkentine.model.SankeyDiagram;
import com.github.aks8m.barkentine.service.GraphStatsService;
import com.github.aks8m.barkentine.service.LoadDataService;
import com.github.aks8m.barkentine.service.SankeyService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/barkentine")
public class BarkentineController {

    @PostMapping
    public ResponseEntity<?> loadData(@RequestBody ParsedData parsedData){
        LoadDataService loadDataService = new LoadDataService(parsedData);
        loadDataService.load();
        return ResponseEntity.noContent().build();
    }

    @GetMapping(value = "/stats")
    public GraphStat getGraphStats(){
        GraphStatsService graphStatsService = new GraphStatsService();
        return graphStatsService.getGraphStats();
    }

    @GetMapping(value = "/sankey")
    public SankeyDiagram getSankey(){
        SankeyService sankeyService = new SankeyService();
        return sankeyService.generateSankeyDiagram();
    }
}
