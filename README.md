
# Data Visualization Dashboard (Full-Stack)

![Dashboard Preview](./img/dashboard.gif) 

## Project Description

This is a full-stack dashboard that turns raw data into easy-to-understand charts and graphs. The frontend uses Vue3 with DataV and ECharts to create interactive, real-time visualizations. The backend uses Node.js and MySQL to store and manage data securely. Built to show my ability to design complete systems (frontend + backend), it’s also easy to upgrade later—like adding logins, new charts, or live data feeds. Perfect for teams needing clear data insights without complicated setup.

Breakdown:
* What? Dashboard for data visualization.
* How? Vue3 frontend + Node.js/MySQL backend.
* Why? To prove I can build real-world tools from scratch.
* What’s next? More features (logins, 3D charts, etc.) if needed.

![Dashboard Preview](./img/Vue.png) 

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
