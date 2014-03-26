Dockerfiles
===========

VirtualBox    
https://www.virtualbox.org/wiki/Downloads

Docker Install    
http://docs.docker.io/en/latest/installation/mac/

### boot2docker
```
$ cd ~/bin

$ curl https://raw.github.com/boot2docker/boot2docker/master/boot2docker > boot2docker

$ chmod +x boot2docker
```

### Docker OS X Client
```
curl -o docker https://get.docker.io/builds/Darwin/x86_64/docker-latest

chmod +x docker

export DOCKER_HOST=tcp://127.0.0.1:4243

sudo cp docker /usr/local/bin/
```

### boot2docker
```
# Initiate the VM
./boot2docker init

# Run the VM (the docker daemon)
./boot2docker up

# To see all available commands:
./boot2docker

# Usage ./boot2docker {init|start|up|pause|stop|restart|status|info|delete|ssh|download}
```
