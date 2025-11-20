# Minecraft Server 

1. [Description](#Description)  
2. [Prerequisites](#Prerequisites)  
3. [Quickstart](#Quickstart)  
4. [Usage](#Usage)  

## Descripton
This is a Description of a Own created Minecraft Server. 
This Minecraft Server is doploled by a Docker Container with Docker Compose. 


## Prerequisites
Docker 
Docker Compose 


## Quickstart 
1. Clone the github Project: 
```bash
git clone git@github.com:HerzogElias/Minecraft_Server.git
```

2. Download your Minecraft Server from: 
```bash
wget https://piston-data.mojang.com/v1/objects/6bce4ef400e4efaa63a13d5e6f6b500be969ef81/server.jar
```

3. Copy your Donwolad on your Root Directory of your Project. 
```bash
cp server.jar ./Minecraft_Server
```

4. Navigate to the correct Directory: 
```bash
cd /Minecraft_Server
```

5. Start the Building with Docker Compose: 
```bash
docker compose up --build 
```

## Usage
### Check Sever Heatly Connection: 
Check your Minecraft Server Status with the following command: 
```bash
mcstatus localhost:8888 status
```

### Configurateion of your Minecraft Server 
You can configurate your Server on the server.properties File: 
```bash
motd
level-name
gamemode
difficulty
pvp
max-players
online-mode
allow-nether
enable-command-block
spawn-animals
spawn-monsters
spawn-npcs
generate-structures
view-distance
white-list
server-port
server-ip
hardcore
force-gamemode
enable-rcon
rcon.password
```

If you dont configurate your own Server Properties, you have s Default Configuration. 
```bash
motd=A Minecraft Server
level-name=world
gamemode=survival
difficulty=easy
pvp=true
max-players=20
online-mode=true
allow-nether=true
enable-command-block=false
spawn-animals=true
spawn-monsters=true
spawn-npcs=true
generate-structures=true
view-distance=10
white-list=false
server-port=25565
server-ip=
hardcore=false
force-gamemode=false
enable-rcon=false
rcon.password=geheim
```