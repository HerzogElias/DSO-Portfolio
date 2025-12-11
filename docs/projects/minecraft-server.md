# Minecraft Server 

1. [Description](#description)  
2. [Prerequisites](#prerequisites)  
3. [Quickstart](#quickstart)  
4. [Usage](#usage)  

## Description
This is a description of a self-created Minecraft Server. 
This Minecraft Server is deployed by a Docker container with Docker Compose. 


## Prerequisites
- Docker 
- Docker Compose 


## Quickstart 
1. Clone the Github project: 
```bash
git clone git@github.com:HerzogElias/Minecraft_Server.git
```

2. Download your Minecraft Server from: 
```bash
wget https://piston-data.mojang.com/v1/objects/6bce4ef400e4efaa63a13d5e6f6b500be969ef81/server.jar
```

3. Copy your download to the root directory of your project. 
```bash
cp server.jar ./Minecraft_Server
```

4. Navigate to the correct directory: 
```bash
cd /Minecraft_Server
```

5. Start the build with Docker Compose: 
```bash
docker compose up --build 
```

## Usage
### Check Server Health Connection: 
Check your Minecraft Server status with the following command: 
```bash
mcstatus localhost:8888 status
```

### Configuration of your Minecraft Server 
You can configure your server in the server.properties file: 
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

If you don't configure your own server properties, you have a default configuration. 
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