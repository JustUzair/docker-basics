# Docker-101

## Build image
```bash
    docker build .
```

## Build image and assign name to it
```bash
    docker build -t docker_image_name .
```

## List your docker images
```bash
    docker image ls
```

## Run docker image
- `-d` runs image in detached mode
- `--name image-name`, is used to name the image-container
- `-p port_T:port_D`, `port_T` is where the traffic is coming from and `port_T` is where the traffic should be redirected to.
```bash
   docker run -d -p 3000:3000 --name container_name docker_image_name 
```

## List docker containers
```bash
    docker ps
```

## Run docker container in interactive mode
- `-it`, interactive mode
```bash
    docker exec -it container_name bash
```


## Run docker image and sync changes to a volume
- `-d` runs image in detached mode
- `--name image-name`, is used to name the image-container
- `-p port_T:port_D`, `port_T` is where the traffic is coming from and `port_T` is where the traffic should be redirected to.
- `-v from_src:to_dest`, `from_src` is folder in user's system that is to be synced to `to_dest` directory in docker image
- add another `-v` in same command to create a volume dependency on previous volume and prevent files from getting deleted.
- `:ro` stands for a read-only container that is able to read and update itself based on files but cannot write to directory
- `--env Dockerfile_ENV_Var=value`, is used to overwrite value of env variables in the `Dockerfile`. 
    - Instead `--env-file path_to_env_file` can also be used to load environment variables from the file instead.
```bash
    docker run -d -v ${pwd}:/app:ro -p 4000:3000 --env PORT=3000 --name  container_name docker_image_name 
```


## View Container logs
```bash
    docker logs container_name
```

## View Volumes
```bash
    docker volume ls
```

## Deleting Containers
- `-f`, remove forcefully
- `-v`, remove volumes
```bash
    docker rm container_name -fv
```
- Delete all volumes but the ones, used atleast by one container
```bash
    docker volume prune
```


# Docker-Compose

## Creating and Running Containers using `docker-compose`
```bash
    docker-compose up
```

## Stopping and Removing Containers using `docker-compose`
```bash
    docker-compose down
```

## Force build image using `docker-compose`
```bash
    docker-compose up --build
```

## Creating and running seperate environment containers using multiple YML files
- include `--build` to force re-build image
- Running development environment container
```bash
    docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d
```
- Running production environment container
```bash
    docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```
