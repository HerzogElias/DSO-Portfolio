# Conduit Fullstack Project
## Table of Contents
- [Conduit Fullstack Project](#conduit-fullstack-project)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Prerequisites](#prerequisites)
  - [Quickstart](#quickstart)
  - [Usage](#usage)
    - [CI/CD Pipeline](#cicd-pipeline)
    - [Description Fullstack Project](#description-fullstack-project)
    - [Stop Docker Container](#stop-docker-container)
    - [Delete Docker Container](#delete-docker-container)
## Introduction
This is a README description of our Conduit Project. The Conduit is a clone of [Medium.com](https://medium.com/)
## Prerequisites
- Docker 
- Docker Compose 
## Quickstart
1. Clone the following Git Repository: 
```bash
git clone git@github.com:HerzogElias/conduit-fullstack.git
```
2. Navigate to the correct directory: 
```bash
cd conduit-fullstack
```
3. Clone all submodules 
```bash
git submodule update --init --recursive
```
4. Copy your backend environment file.
Navigate: 
```bash
cd backend
```
Copy the file: 
```bash
cp example.env .env
```
Navigate back to root: 
```bash
cd ..
```
5. Start Docker Compose 
```bash
docker compose up --build
```
## Usage 
### CI/CD Pipeline
This project is using a CI and CD pipeline with Github Actions. 
Trigger: 
- Automatically runs on every push to Main/Default branch. 
- Manual run on Main/Default branch available. 

Description: 
This pipeline logs in to your VServer. After login, the pipeline runs a docker compose build. 

Secret Keys: 
To use the CI/CD pipeline on your own cloned repository, you need the following secret keys in your Github Repo Settings: 
```bash
      SERVER_IP
      SERVER_PORT
      SERVER_USER
      SERVER_SSH_KEY 
      SECRET_KEY
      production
      apiurl
      DJANGO_PW 
      DJANGO_EMAIL
      DJANGO_USER 
```
Example secret keys are from our environment files. 
### Description Fullstack Project 
This is a fullstack web application with Github submodules. 
Here you can see the root Github repository. 
To change to frontend or backend use the links: 
- <a href="https://github.com/HerzogElias/conduit-frontend/">Frontend</a>
- <a href="https://github.com/HerzogElias/conduit-backend/">Backend</a>
### Stop Docker Container 
To stop the container use the following command: 
```bash
docker compose down 
```
### Delete Docker Container 
To delete the Docker container including all networks and volumes use the following command: 
```bash
docker compose down -v
```