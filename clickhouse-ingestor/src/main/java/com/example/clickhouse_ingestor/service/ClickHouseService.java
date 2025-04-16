package com.example.clickhouse_ingestor.service;

import com.example.clickhouse_ingestor.model.ClickHouseConnectionRequest;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

@Service
public class ClickHouseService {

    public boolean testConnection(ClickHouseConnectionRequest request) {
        try {
            Connection connection = DriverManager.getConnection(
                    request.getUrl(),
                    request.getUsername(),
                    request.getPassword()
            );

            // Optional: print some metadata
            System.out.println("Connected to ClickHouse: " + connection.getMetaData().getURL());
            connection.close();
            return true;
        } catch (SQLException e) {
            System.err.println("Connection failed: " + e.getMessage());
            return false;
        }
    }
}
