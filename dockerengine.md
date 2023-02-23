

# Install Docker Engine using the repository

## Set up the repository

Update the `apt` package index and install packages to allow `apt` to use a repository over HTTPS:

  ```bash
  sudo apt-get update &&
  sudo apt-get install \
      ca-certificates \
      curl \
      gnupg \
      lsb-release
  ```

Add Docker’s official GPG key:

  ```bash
  sudo mkdir -m 0755 -p /etc/apt/keyrings &&
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
  ```

Use the following command to set up the repository:

  ```bash
  echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
    $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
  ```

## Install Docker Engine

Update the apt package index:

  ```bash
  sudo nano /etc/apt/sources.list.d/docker.list
  ```

Change `vera` to `jammy` and Save it.

  ```bash
  sudo apt-get update
  ```

Install Docker Engine, containerd, and Docker Compose.

  ```bash
  sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
  ```

Verify that the Docker Engine installation is successful by running the hello-world image:

  ```bash
  sudo docker run hello-world
  ```

## Linux post-installation

(To use `docker` instead of `sudo docker`)

Create the docker group.

  ```bash
  sudo groupadd docker
  ```

Add your user to the docker group.

  ```bash
  sudo usermod -aG docker $USER
  ```

Log out and log back in so that your group membership is re-evaluated.

You can also run the following command to activate the changes to groups:

  ```bash
  newgrp docker
  ```

Verify that you can run `docker` commands without `sudo`.

  ```bash
  docker run hello-world
  ```
  
Now you can [Install Laravel](laravel.md)
