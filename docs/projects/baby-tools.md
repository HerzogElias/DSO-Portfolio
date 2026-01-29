# E-Commerce Project For Baby Tools

## Table of Contents
- [E-Commerce Project For Baby Tools](#e-commerce-project-for-baby-tools)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Prerequisites](#prerequisites)
  - [Quickstart](#quickstart)
    - [Clone Github Repository](#clone-github-repository)
    - [Build Docker Image](#build-docker-image)
  - [Usage](#usage)
    - [Creating Superuser](#creating-superuser)
    - [Hints](#hints)
    - [Photos](#photos)
        - [Home Page with login](#home-page-with-login)
        - [Home Page with filter](#home-page-with-filter)
        - [Product Detail Page](#product-detail-page)
        - [Home Page with no login](#home-page-with-no-login)
        - [Register Page](#register-page)
        - [Login Page](#login-page)

## Introduction 
This is a README description of our Baby-Tools-Project. The Baby-Tools-Project is an online shop for baby tools and baby clothes. 

## Prerequisites
To deploy your Baby-Tools-Shop, you need the following: 
- VServer with Ubuntu
- Python 3.9
- Docker 

## Quickstart
### Clone Github Repository  
1. Clone the following Github Repository on your VServer. 
```
    https://github.com/HerzogElias/baby-tools-shop/
```
### Build Docker Image 
1.  Build your Docker image 
```
    docker build -t babyshop_app ./babyshop_app/  
```

2.  Run your built Docker image 
```
    docker run -it --rm --name babytoolsshop -p 8025:8000 babyshop_app
```
## Usage 

### Creating Superuser
1. Go to Docker exec in your Docker container with 
```
    docker exec <container-id> /bin/bash
```

2. Create a new superuser for Django Admin Panel: 
```
    python manage.py createsuperuser
```
    Add a username and a secure password and save. 

3. Navigate to Django Admin Panel and log in with your created superuser account. 
```
    <localhost>/admin
```

### Hints
This section will cover some hot tips when trying to interact with this repository:

- Settings & Configuration for Django can be found in `babyshop_app/babyshop/settings.py`
- Routing: Routing information, such as available routes can be found from any `urls.py` file in `babyshop_app` and corresponding subdirectories

### Photos

##### Home Page with login

<img alt="" src="https://github.com/MET-DEV/Django-E-Commerce/blob/master/project_images/capture_20220323080815407.jpg"></img>
##### Home Page with filter
<img alt="" src="https://github.com/MET-DEV/Django-E-Commerce/blob/master/project_images/capture_20220323080840305.jpg"></img>
##### Product Detail Page
<img alt="" src="https://github.com/MET-DEV/Django-E-Commerce/blob/master/project_images/capture_20220323080934541.jpg"></img>

##### Home Page with no login
<img alt="" src="https://github.com/MET-DEV/Django-E-Commerce/blob/master/project_images/capture_20220323080953570.jpg"></img>


##### Register Page

<img alt="" src="https://github.com/MET-DEV/Django-E-Commerce/blob/master/project_images/capture_20220323081016022.jpg"></img>


##### Login Page

<img alt="" src="https://github.com/MET-DEV/Django-E-Commerce/blob/master/project_images/capture_202203230810"></img>