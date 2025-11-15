# 🏋️‍♂️ Fitness Tracker – Microservices Architecture (AI-Enabled)

A production-style microservices architecture built using **Spring Boot**, **Spring Cloud**, **RabbitMQ**, **Keycloak**, **Docker**, and **Gemini AI**.  
This project demonstrates real industry patterns like service discovery, API Gateway routing, centralized configuration, asynchronous communication, and modern authentication.

---

## 🚀 Tech Stack

### **Backend**
- Java, Spring Boot
- Microservices Architecture
- Spring Cloud (Eureka, Config Server, API Gateway)
- RabbitMQ (Asynchronous Message Broker)
- Keycloak (Authentication & Authorization)

### **Frontend**
- React.js (fitness-app-frontend)

### **Databases**
- MySQL  
- MongoDB  

### **DevOps**
- Docker & Docker Compose  
- GitHub Actions (CI/CD)  

### **AI Integration**
- Gemini API for personalized recommendations

---

## 📌 Features

- Modular microservices architecture  
- Service Discovery using **Eureka Server**  
- Centralized configuration using **Config Server**  
- API routing and filtering using **Spring Cloud Gateway**  
- Asynchronous communication between services via **RabbitMQ**  
- Authentication & RBAC using **Keycloak**  
- Personalized fitness suggestions powered by **Gemini AI**  
- Dockerized environment for services + databases  
- Clean folder separation for each microservice

---

## 🧱 Microservices Included

- **Auth Service (UserService)**  
- **Activity Service**  
- **Recommendation (AI) Service**  
- **API Gateway**  
- **Eureka Server**  
- **Config Server**  
- **RabbitMQ Message Broker**

---

## 📂 Project Structure

```txt
Fitness-Tracker-AI-Recommendation/
 ├── AIService/               # AI Recommendation microservice (Gemini API)
 ├── ActivityService/         # Activity tracking microservice
 ├── ApiGateway/              # Spring Cloud API Gateway
 ├── ConfigServer/            # Centralized configuration server
 ├── Eureka/                  # Eureka service registry
 ├── UserService/             # User/Auth microservice (Keycloak integrated)
 ├── fitness-app-frontend/    # React frontend for the application
 ├── docker/
 │    └── mysql_init/         # MySQL initialization scripts
 ├── docker-compose.yml       # Runs RabbitMQ, MySQL, MongoDB, and services
 ├── .gitignore
 └── README.md
```

---

## 🧪 How to Run

### **1️⃣ Start Infrastructure**
```bash
docker-compose up -d
```

### **2️⃣ Start Spring Cloud Services**
- Run **Eureka**
- Run **Config Server**

### **3️⃣ Start Each Microservice**
- UserService  
- ActivityService  
- AIService  
- ApiGateway  

### **4️⃣ Access APIs**
All requests go through:

```
http://localhost:8080
```

(API Gateway will route them internally)


---

## 🌟 Highlights

- Real microservices architecture  
- Asynchronous, event-driven communication  
- Industry-level folder structure  
- AI-powered recommendation engine  
- Dockerized deployment  
- Production-like security with Keycloak  

---

## 🔗 Project Links

- **Frontend:** React.js (fitness-app-frontend folder)  
- **Backend Services:** All individual service folders  
- **Docker Setup:** docker-compose.yml  

---

## 👤 Author

**Baskaran G**  
Java Developer | Full Stack Developer | Microservices | DevOps  
GitHub: https://github.com/Baskaran08  
LinkedIn: https://www.linkedin.com/in/baskaran--g/
