# Use an official Maven image to build the application
FROM maven:3.8.4-openjdk-11-slim AS builder

# Set the working directory
WORKDIR /app

# Copy the pom.xml and source code to the container
COPY pom.xml .
COPY src ./src

# Build the application using Maven
RUN mvn clean package -DskipTests

# Use an OpenJDK image to run the application
FROM openjdk:11-jre-slim

# Set the working directory
WORKDIR /app

# Copy the .jar file from the build stage
COPY --from=builder /app/target/my-backend-app.jar /app/my-backend-app.jar

# Run the application
CMD ["java", "-jar", "/app/my-backend-app.jar"]
