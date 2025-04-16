package com.example.clickhouse_ingestor.model;

public class ClickHouseConnectionRequest {
    private String host;
    private int port;
    private boolean useHttps;
    private String jwtToken;

    private String username;
    private String password;
    private String url; // JDBC connection URL

    // Getters and setters
    public String getHost() {
        return host;
    }
    public void setHost(String host) {
        this.host = host;
    }

    public int getPort() {
        return port;
    }
    public void setPort(int port) {
        this.port = port;
    }

    public boolean isUseHttps() {
        return useHttps;
    }
    public void setUseHttps(boolean useHttps) {
        this.useHttps = useHttps;
    }

    public String getJwtToken() {
        return jwtToken;
    }
    public void setJwtToken(String jwtToken) {
        this.jwtToken = jwtToken;
    }

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public String getUrl() {
        return url;
    }
    public void setUrl(String url) {
        this.url = url;
    }
}
