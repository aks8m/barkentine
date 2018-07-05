package com.github.aks8m.barkentine.controller;


import com.github.aks8m.barkentine.model.ParsedData;
import com.github.aks8m.barkentine.service.LoadDataService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/barkentine")
public class UploadController {

    @RequestMapping(value = "/upload",method = RequestMethod.POST)
    public ResponseEntity<?> loadData(@RequestBody ParsedData parsedData){
        LoadDataService loadDataService = new LoadDataService(parsedData);
        return loadDataService.load()? ResponseEntity.ok().build() : ResponseEntity.badRequest().build();
    }
}
