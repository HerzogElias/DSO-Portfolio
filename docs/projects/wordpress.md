# Wordpress Docker Setup 


# Table of Contents
- [Wordpress Docker Setup](#wordpress-docker-setup)
- [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Prerequisites](#prerequisites)
  - [Quickstart](#quickstart)
  - [Usage](#usage)
    - [Login-To-Adminpanel](#login-to-adminpanel)
    - [Stop-Container:](#stop-container)
    - [Start Container in Detach Mode:](#start-container-in-detach-mode)

## Description 
This is a Reademe Description of a Docker based Wordpress Website. 

## Prerequisites 
-Docker 
-Docker Compose 

## Quickstart 
1. Clone the following Github Repository: 
```bash 
git clone git@github.com:HerzogElias/Wordpress_Docker.git
```

2. Navigate to the Correct Directory: 
```bash
cd /Wordpress_Docker
```
3. Copy your env File: 
```bash
cp example.env env 
```

3. Run your Docker Image with Docker Compose: 
```bash
docker compose up --build
```

4. Navigate to your Wortpress Site on your Browser: 
```bash
<your-ip:8080>
```

## Usage 
### Login-To-Adminpanel
1. Navigate to your Wordpress Admin Panel: 
```bash
<your-ip:8080/admin>
```

2. Login to the Admin Panel. 
In your Docker Compose File you can find Login Data: 
```bash
      - WORDPRESS_USERNAME              
      - WORDPRESS_PASSWORD
      - WORDPRESS_EMAIL
```

### Stop-Container: 
You can stop the container with the following Command: 
```bash
docker compose down 
```

### Start Container in Detach Mode: 
To Start the Container in Detach Mode use this following Command: 
```bash
docker-compose up -d
```
