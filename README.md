# 🏋️‍♂️ Fitness Tracker – Microservices Architecture (AI-Enabled)

A production-style microservices system built with **Spring Boot, RabbitMQ, Keycloak, Eureka, API Gateway, Docker**, and **Gemini AI** for personalized fitness recommendations.

## 🚀 Tech Stack
**Backend:** Java, Spring Boot  
**Architecture:** Microservices, Eureka Server, Config Server, API Gateway  
**Messaging:** RabbitMQ  
**Security:** Keycloak (OIDC), Role-Based Access  
**Database:** MySQL, MongoDB  
**AI Integration:** Gemini API  
**Containerization:** Docker & Docker Compose  

---

## 📌 Features
- Microservices for Auth, Activity, Recommendation
- Asynchronous event communication via **RabbitMQ**
- Centralized configuration and service discovery
- Keycloak authentication + RBAC
- Fitness recommendation using **Gemini AI**
- Dockerized environment (DB + RabbitMQ + Services)
- Secure REST APIs with global exception handling

---

## 🧱 Microservices Included
- **Auth Service**  
- **Activity Service**  
- **Recommendation Service**  
- **Eureka Server**  
- **API Gateway**  
- **Config Server**  
- **RabbitMQ Message Broker**

---

## 📂 Project Structure

Fitness-Tracker-AI-Recommendation/
 ├── AIService/               # AI Recommendation microservice (Gemini API)
 ├── ActivityService/         # Activity tracking microservice
 ├── ApiGateway/              # Spring Cloud API Gateway
 ├── ConfigServer/            # Centralized configuration server
 ├── Eureka/                  # Eureka service registry
 ├── UserService/             # Authentication / User microservice (Keycloak integrated)
 ├── fitness-app-frontend/    # React frontend for the app
 ├── docker/
 │    └── mysql_init/         # MySQL initialization scripts
 ├── docker-compose.yml       # Runs RabbitMQ, MySQL, MongoDB, and services
 ├── .gitignore
 └── README.md

---

## 🧪 How to Run
1. Start services using Docker Compose  
2. Start Eureka + Config Server  
3. Run each microservice  
4. Access protected APIs via API Gateway  

---

## 🔗 Highlights
- Designed using real industry patterns  
- Scalable, asynchronous, secure  
- AI-powered insights  
