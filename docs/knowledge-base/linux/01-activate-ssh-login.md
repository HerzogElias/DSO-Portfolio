---
id: linux-ssh
title: Linux SSH Key 
sidebar_label: Linux Server Administraion
---


# Linux Server Administration
## Table of Contents: 
- [Linux Server Administration](#linux-server-administration)
  - [Table of Contents:](#table-of-contents)
  - [Introduction](#introduction)
  - [Create-SSH-Keys](#create-ssh-keys)
  - [Login-with-Passwort](#login-with-passwort)
  - [Deacitvate-Passwortlogin](#deacitvate-passwortlogin)


## Introduction
In this Section we learn to Configurate a V Server. 


## Create-SSH-Keys
1. Create SSH-Keys with Sandard ed22591 on your local maschine. 
    ``` bash
    ssh-keygen -t ed25519 -C "your-email@example.com"
    ```


## Login-with-Passwort
2. Login to your VServer with your Username and passwort: 
    ```bash
    ssh <username>@<ip-adress> 
    ```

## Deacitvate-Passwortlogin
3. Use "type" on your local maschine to copy your generated public key on your VServer: 
    ``` bash
    type C:/Path/to/key| ssh username@ip-adress "cat >> /home/user/.ssh/authorized_keys"
    ```

4. Try to login to your VServer with your copied public key.
    ```bash
    ssh -i C:/Path1/to/key <usernema>@<ip-adress>
    ```

5. Deatkivate Password Login. 
    1. Go to "etc/ssh/sshd.config" with Bash 
    ``` bash
    sudo nano /etc/ssh/sshd_config
    ```
    2. Serarch to "#PasswortAuthentication yes" and change it to "PasswortAuthentication no"
    3. Save the file and exit 
    4. Restart the sshd service. 
    ``` bash
    sudo sysrtemctl restart ssh.service
    ```