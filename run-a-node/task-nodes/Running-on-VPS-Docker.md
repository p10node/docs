---
title: Docker Setup
description: Running on VPS
sidebar_label: Docker Setup
---

## **Installing Docker**

```bash
sudo apt install docker
```
```bash
sudo apt install docker-compose
```

## Run the Docker Compose in order to launch your node
Instructions for First-Time Runners:
```bash
# Change to the VPS-task directory
cd VPS-task

# Start the containers using docker-compose
docker-compose up
```
Instructions for Users Who Want to Upgrade:
```bash
# Navigate to the VPS-task working directory
cd VPS-task
# Stop all running containers
docker-compose down
# Remove all unused Docker images to free up space
docker image prune -af
# Download the latest versions of your Docker images
docker-compose pull
# Start the containers in detached mode
docker-compose up -d
```
This command creates a staking wallet, stakes on the tasks, and then runs the tasks.
### TypeError [ERR_INVALID_URL]: Invalid URL
If you encounter "TypeError [ERR_INVALID_URL]: Invalid URL" error, please verify Docker version!
```bash
docker-compose --version
```
### Docker Compose Version below 1.29
If you have a version below 1.29, please execute the next commands:

```bash
which docker-compose 
```


Update the docker-compose library. Make sure that the path in the end is the same as you retrieved from the previous command.

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
Give the system the permission

```bash
sudo chmod +x /usr/local/bin/docker-compose
```

Run the Docker Compose again in order to launch your node successfully

```bash
cd VPS-task
docker-compose up
```

**After completing this step you will have your node successfully running**

## Verify
In order to verify this:

```bash
docker logs -f --tail 100 task_node
```

If the logs return, something like i.e.

```bash
task_node    | [ '4ipWnABntsvJPsAkwyMF7Re4z39ZUMs2S2dfEm5aa2is' ] [ '2' ]
task_node    | Staking wallet already exists
task_node    | { isStakingWalletExists: true }
task_node    | Staked 2 on 4ipWnABntsvJPsAkwyMF7Re4z39ZUMs2S2dfEm5aa2is
.....
Cluster RPC URL: https://testnet.koii.network
task_node  | *********************ENDPOINTS*********************
task_node  | /attention*
task_node  | /
task_node  | /nodes/:taskId
task_node  | /register-node/:taskId
task_node  | /get-all-running-tasks
task_node  | /namespace-wrapper
task_node  | /tasks
task_node  | *********************END ENDPOINTS*********************
task_node  | currentInterval undefined
task_node  | running tasks now...
task_node  | SETTING UP EXPRESS
task_node  | setup function called
task_node  | Free Token Task! listening on port 10000
task_node  | getTaskLevelDBPath
```

It is success!
