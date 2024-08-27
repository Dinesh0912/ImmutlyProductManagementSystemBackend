# Digital Product API

This project consists of two main components: the **digital-product-api** (Node.js) and the **price-update-service** (Java Spring Boot). Follow the instructions below to set up and run both services.

## Initial Requirements

Before getting started, ensure you have the following installed:

1. **Node.js**: Latest version
2. **JDK 8**: Java Development Kit 8
3. **Maven**: Latest version

## Getting Started

### Step 1: Download the Repository

1. Download the repository as a ZIP folder from the source.

### Step 2: Extract the Folder

1. Extract the downloaded ZIP folder to your preferred location.

### Step 3: Install Node.js Dependencies

1. Open a terminal/command prompt.
2. Navigate to the `digital-product-api` directory:

   ```bash
   cd digital-product-api
3. Install the required Node.js dependencies:

   npm install

4. Start the Node.js Server

   npm start
   The server should now be running. You can verify this by checking the console output.

5. Build and Run the Java Service

   Open a new terminal/command prompt.
   Navigate to the price-update-service directory:

   cd price-update-service

6. Clean and Build the Maven project:

   mvn clean install

7. Run the Spring Boot application:

   mvn spring-boot:run

The Java service should now be running.

