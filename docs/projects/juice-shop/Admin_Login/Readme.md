# Admin Login with SQL Injection 
You can find a video description on the following link:
```bash
https://www.loom.com/share/bf3255d1e2d344f9b22b60c12c3f3687
```

## Goal of this Challenge: 
The goal of this challenge is to log in to the OWASP Juice Shop with the Administrator Account. 

## Type of Cyberattack
This is a SQL Injection Security Vulnerability 

## Consequences of this Vulnerability
Exploiting this vulnerability allows an attacker to log in as the administrator and obtain full privileges within the OWASP Juice Shop application.


## Disclaimer
The vulnerabilities and exploits shown in this repository are provided strictly for educational purposes. Do not attempt to use these techniques on systems without clear and explicit authorization.

## Description of Solution: 
1. Navigate to login: 
```
Account-Login
```
![Example Banner](/assets/images/Navigate_login.png)

2. Login 

For email use the following command: 
```bash
'OR 1=1--
```
Type in any password — it can be anything, just make sure the field isn't empty.
![Example Banner](/assets/images/Login_SQLAdmin.png)

Congratulations! You are logged in as an admin on the OWASP Juice Shop.