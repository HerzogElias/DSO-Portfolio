---
id: linux-nginx
title: Linux NGINX Install 
sidebar_label: Linux Nginx Install 
---

# Install Nginx 

## Table of Contents
- [Install Nginx](#install-nginx)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Prerequisites:](#prerequisites)
  - [Login to your V-Server](#login-to-your-v-server)
  - [Create-alternatvie-Webseite and install nginx](#create-alternatvie-webseite-and-install-nginx)


## Introduction
In this Section we learn to install nginx on a V Server and create a alternative Start Website for your V Server on the Web. 

## Prerequisites: 
    You need a Ubuntu Cloud VM to setting your VServer.

## Login to your V-Server 
1. Update Respoitories on your Server. 
    ``` bash
    sudo apt update" 
    ```

2. Install Nginx on your Server.
    Use the following command: 
    ``` bash 
    sudo apt install nginx -y
    ```
## Create-alternatvie-Webseite and install nginx
 3. Crearte Alternative html side for your nginx Serrver: 
    1. Create a new Directory 
    ``` bash
    mkdir -p /var/www/alternatives
    ```
    2. Create a new HTML file:
    ``` bash 
    sudo touch /var/www/alternatives/alternate-index.html
     ```
 
    3. Add a new configuration to: 
    ``` bash
    sudo nano /etc/nginx/sites-enabled/alternatives
    ```
        1. Open File
        2. Add: 
            ``` bash
            server {
            listen 8081;
            listen [::]:8081;

            root /var/www/alternatives;
            index alternate-index.html;git 

            location / {
                try_files $uri $uri/ =404;
            }
            ```
        3. Save this file and close it. 
    4. Open the new html file.
    ``` bash 
    sudo nano var/www/alternatives/alternate-index.html
    ```
    5. Take your HTML Code into this file. 
    6. Save and Close this file. 
    7. Open your new Websiete on[ "<your_ip>:8081"](http://`<your_ip>`:8080)