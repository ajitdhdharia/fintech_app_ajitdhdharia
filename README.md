# Fintech App

## Overview

Fintech App is a financial technology application built with Node.js, Express, and MongoDB. The app is designed to manage user transactions securely, providing a robust and scalable solution for fintech needs.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [API Design](#apiDesign)
- [License](#license)

## Installation

To install the necessary dependencies, run the following command:

```
npm install
```

## Usage
To start the development server with nodemon and environment variable configuration, use:
```
npm run dev
```

## Project Structure
```
node_modules/           # npm packages
public/temp/            # Temporary public files
src/
  ├── controllers/      # Business logic
  ├── db/               # Database configuration
  ├── middlewares/      # Middleware functions
  ├── models/           # Mongoose schemas
  ├── routes/           # API routes
  └── utils/            # Utility functions and classes
.env                    # Environment variables
.gitignore              # Files to be ignored by Git
.prettierignore         # Files to be ignored by Prettier
.prettierrc             # Prettier configuration
jest.config.js
jest.setup.js
package-lock.json       # Locked versions of dependencies
package.json            # Project metadata and dependencies
README.md               # Project documentation
```


## Scripts
`dev`: Starts the development server using nodemon with environment variables configured via dotenv.

`test`: Runs the unit tests using Jest with an in-memory MongoDB instance.

## API Design
The API is designed to handle user authentication and transaction management. It is structured using the MVC (Model-View-Controller) pattern, where:

- Models define the data schema using Mongoose.
- Controllers contain the business logic.
- Routes define the API endpoints and link them to the appropriate controller methods.
- Middlewares handle authentication and other pre-processing tasks.

### Endpoints

#### User Endpoints
##### Register a New User
- `POST /api/v1/users/signup`
##### Login
- `POST /api/v1/users/signin`
##### Logout
- `POST /api/v1/users/logout`
##### Refresh Token
- `POST /api/v1/users/refresh-token`

#### Transaction Endpoints
##### Create new transaction
- `POST /api/v1/transaction/`
##### Get a transaction
- `GET /api/v1/transaction/`
##### Get all transactions
- `GET /api/v1/transaction/:transactionId`
##### Update a transaction
- `PATCH /api/v1/transaction/:transactionId`
##### Delete a transaction
- `DELETE /api/v1/transaction/:transactionId`

#### Summary Endpoints
##### Get summary of transactions
- `POST /api/v1/summary/total`
##### Get category-wise summary
- `GET /api/v1/summary/category`

