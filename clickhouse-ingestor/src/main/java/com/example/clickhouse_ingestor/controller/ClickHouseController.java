package com.example.clickhouse_ingestor.controller;

import com.example.clickhouse_ingestor.model.ClickHouseConnectionRequest;
import com.example.clickhouse_ingestor.service.ClickHouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/clickhouse")
@CrossOrigin(origins = "*")
public class ClickHouseController {

    @Autowired
    private ClickHouseService clickHouseService;

    @PostMapping("/test-connection")
    public String testConnection(@RequestBody ClickHouseConnectionRequest request) {
        boolean isConnected = clickHouseService.testConnection(request);
        return isConnected ? "Connection successful" : "Connection failed";
    }
}
