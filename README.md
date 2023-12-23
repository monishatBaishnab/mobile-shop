# Mobile Shop

This repository contains the server and client code for a mobile shop application. The server is built using Node.js, Express, and MongoDB, while the client is built using React.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- npm (Node Package Manager): This is typically installed with Node.js.
- Git: [Download and Install Git](https://git-scm.com/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)

### Clone the Repositories

```bash
# Clone the server repository
git clone https://github.com/monishatBaishnab/mobile-shop-server.git

# Clone the client repository
git clone https://github.com/monishatBaishnab/mobile-shop.git
```

### Set Up and Run the Server

```bash
# Navigate to the server directory
cd mobile-shop-server

# Install server dependencies
npm install

# Create a .env file in the root of the server directory and add the following content
# (replace <username> and <password> with your MongoDB Atlas credentials)

# .env
DB_PROD_URI=mongodb+srv://<username>:<password>@cluster0.viujuo0.mongodb.net/?retryWrites=true&w=majority
DB_DEV_URI=mongodb+srv://<username>:<password>@cluster0.viujuo0.mongodb.net/?retryWrites=true&w=majority
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
PROD_CLIENT_1=your_prod_client_1
PROD_CLIENT_2=your_prod_client_2
LOCAL_CLIENT=your_local_client

# Start the server
npm start
```

### Set Up and Run the Client

```bash
# Navigate to the client directory
cd mobile-shop

# Install client dependencies
npm install

# Start the client
npm start
```

Now, your server should be running on the specified port, and your client should be accessible at `http://localhost:3000` by default.

### Update API Endpoint in Client

In your client code, update the API endpoint to match the server's address.

```javascript
// src/api.js or wherever the API endpoint is specified
const API_ENDPOINT = 'http://localhost:your-server-port';
```

Replace `your-server-port` with the port on which your server is running.

### Run Both Server and Client Concurrently

If you want to run both the server and client concurrently during development, you can use `concurrently`. Install it globally:

```bash
npm install -g concurrently
```

Then, in your project's root directory, update the `scripts` section in your `package.json` file:

```json
"scripts": {
  "start": "concurrently \"npm run server\" \"npm run client\"",
  "server": "cd mobile-shop-server && npm start",
  "client": "cd mobile-shop && npm start",
  // ... other scripts
}
```

Now, you can run `npm start`, and both the server and client will start concurrently.

Remember to customize configurations, connection details, and API endpoints according to your project structure and needs.
