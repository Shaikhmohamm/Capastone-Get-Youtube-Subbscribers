# GET-YOUTUBE-SUBSCRIBER-BACKEND-PROJECT
Get-Youtube-Subscribers is simple API based project where we have provided 3 different routes to get the data from database.

## Libraries used
- Node.js
- Expressjs
- Mongoose
- Dotenv
- Nodemon
- HTML,CSS,JS for Docs Page


## 🔗 Quick Links

> - [📍 Overview](#-overview)
> - [📦 Features](#-features)
> - [📂 Repository Structure](#-repository-structure)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running get-youtube-subscriber-backend-project](#-running-get-youtube-subscriber-backend-project)
>   - [🌐 Deployment Link](#-deployment-link)
> - [📄 API Documentation](#-api-documentation)
> - [🤝 Contributing](#-contributing)


## 📍 Overview

A simple project to understand how API works in real life scenario.
Simply getting the data from get req from mongodb.

---

## 📦 Features

- /subscribers ➡️ GET request for fetch all youtube subscriber data from database
- /subscribers/names ➡️ GET request for fetch all youtube subscriber data from database with only two field (names and subscribedChannel)
- /subscribers/:id ➡️ GET request for fetch specified youtube subscriber data from database on the basis of id parameter pass in url.

---

## 📂 Repository Structure

```sh
└── Subscribers-Mongo-Node-BoilerPlate-main/
    ├── package-lock.json
    ├── package.json
    ├── src
    |    ├── app.js
    |    ├── createDatabase.js
    |    ├── index.html
    |    ├── data.js
    |    └── models
    |          └── subscribers.js
    |   
    ├── .env
    └──  index.js
    

```

## 🚀 Getting Started

1. Clone the get-youtube-subscriber-backend-project repository:

```sh
git clone https://github.com/Shaikhmohamm/Capastone-Get-Youtube-Subbscribers.git
```

2. Change to the project directory:

```sh
cd Subscribers-Mongo-Node-BoilerPlate-main
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Running get-youtube-subscriber-backend-project

Use the following command to run get-youtube-subscriber-backend-project:

```sh
node index.js or npm start

### 🌐 Deployment-Link

  You can access live api from [here]()

---

## 📄 API Documentation

You can visit API documentation from [here]()