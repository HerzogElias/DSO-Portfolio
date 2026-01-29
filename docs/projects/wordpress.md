# Wordpress Docker Setup 


# Table of Contents
- [Wordpress Docker Setup](#wordpress-docker-setup)
- [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Prerequisites](#prerequisites)
  - [Quickstart](#quickstart)
  - [Usage](#usage)
    - [Login to Admin Panel](#login-to-admin-panel)
    - [Stop Container](#stop-container)
    - [Start Container in Detach Mode](#start-container-in-detach-mode)

## Description 
This is a README description of a Docker-based Wordpress website. 

## Prerequisites 
- Docker 
- Docker Compose 

## Quickstart 
1. Clone the following Github Repository: 
```bash 
git clone git@github.com:HerzogElias/Wordpress_Docker.git
```

2. Navigate to the correct directory: 
```bash
cd /Wordpress_Docker
```

3. Copy your env file: 
```bash
cp example.env .env 
```

4. Run your Docker image with Docker Compose: 
```bash
docker compose up --build
```

5. Navigate to your Wordpress site in your browser: 
```bash
<your-ip:8080>
```

## Usage 
### Login to Admin Panel
1. Navigate to your Wordpress Admin Panel: 
```bash
<your-ip:8080/admin>
```

2. Login to the Admin Panel. 
In your Docker Compose file you can find login data: 
```bash
      - WORDPRESS_USERNAME              
      - WORDPRESS_PASSWORD
      - WORDPRESS_EMAIL
```

### Stop Container
You can stop the container with the following command: 
```bash
docker compose down 
```

### Start Container in Detach Mode
To start the container in detach mode use the following command: 
```bash
docker compose up -d
```