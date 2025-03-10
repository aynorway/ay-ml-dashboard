
# Data Visualization Dashboard (Full-Stack)
# ay-ml-dashboard 

![Dashboard Preview](./img/dashboard.gif) 

## Project Overview
 A full-stack data visualization dashboard implementing frontend-backend separation architecture. The frontend utilizes Vue3+DataV+ECharts for multi-dimensional data presentation, while the backend employs Node.js+MySQL for data management.

## Project Objectives
1. **Full-Stack Demonstration**: Showcase end-to-end development capabilities from database to frontend visualization
2. **Extensible Architecture**: Modular design allows easy integration of new data sources/chart types

## Repository Links
- Frontend: [https://github.com/aynorway/ay-ml-dashboard](https://github.com/aynorway/ay-ml-dashboard)
- Backend: [https://github.com/aynorway/ay-webjs-backend](https://github.com/aynorway/ay-webjs-backend)

## Technology Stack

### Frontend
- **Framework**: Vue3 
- **Visualization**: DataV + ECharts + GeoJSON
- **Routing**: Vue Router4
- **HTTP Client**: Fetch API
- **UI**: Element Plus
- **Build Tool**: Vite

### Backend
- **Runtime**: Node.js18+
- **Web Framework**: Express
- **Database**: MySQL 8 (Docker)
- **API Style**: RESTful

### DevOps
- **Database Management**: MySQL Workbench
- **Containerization**: Docker
- **API Testing**: curl 
- **Version Control**: Git


## Features
### Visualization Modules
- Real-time stock price dashboard
- Interactive charts (Bar/Line/Pie/Rader)
- GeoJSON-based geographic visualization
- Responsive layout for multiple screen sizes
- Component reuse with Vue props


![Dashboard Preview](./img/Vue.png) 

## System Architecture
```
ay-ml-dashboard/ (Frontend)
├── src/
│   ├── components/    # Reusable visualization components
│   ├── assets/        # GeoJSON/Images
│   ├── utils/         # ECharts configurations
│   └── api/           # Axios endpoints

aywebjs/ (Backend)
├── models/            # Data models
├── routes/            # API endpoints
├── handlers/          # Business logic
└── config/            # DB/JWT configurations
```

## Database Management
### MySQL Workbench 
![MySQL Workbench Screenshot](./img/mysql.png) 

## Installation
### Prerequisites
- Node.js 18+
- Docker
- MySQL Workbench

### Frontend Setup
```bash
cd ay-ml-dashboard
npm install
npm run dev
```
![npm start Screenshot](./img/fend.png) 

### Backend Setup
Start MySQL container:

![mysql start Screenshot](./img/docker.png)

.env in backend

Initialize backend:
```bash
cd aywebjs
npm install
npm start
```

![npm start Screenshot](./img/bend.png) 


## Architecture Diagram：
graph LR
    A[Frontend:8088] -->|API Calls| B[Backend:3000]
    B -->|MySQL Protocol| C[(MySQL:3310:3306)]

## License
MIT License
