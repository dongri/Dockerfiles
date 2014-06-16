Dockerfiles
===========

VirtualBox    
https://www.virtualbox.org/wiki/Downloads

Docker Install    
http://docs.docker.com/installation/mac/

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

dongri% ./boot2docker ssh
docker@localhost's password: ← tcuser
                        ##        .
                  ## ## ##       ==
               ## ## ## ##      ===
           /""""""""""""""""\___/ ===
      ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~
           \______ o          __/
             \    \        __/
              \____\______/
 _                 _   ____     _            _
| |__   ___   ___ | |_|___ \ __| | ___   ___| | _____ _ __
| '_ \ / _ \ / _ \| __| __) / _` |/ _ \ / __| |/ / _ \ '__|
| |_) | (_) | (_) | |_ / __/ (_| | (_) | (__|   <  __/ |
|_.__/ \___/ \___/ \__|_____\__,_|\___/ \___|_|\_\___|_|
boot2docker: 0.7.0
docker@boot2docker:~$ 

```

### push to index.docker.io

```
$ docker ps -a
$ docker commit d28542da8e8f dongri/nginx
$ docker push dongri/nginx
```

