# Getting Started On Linux
1. If you're developing on Linux and `Docker Compose` is already installed, 
you can use a simple terminal command to create a new Laravel project. 
For example, to create a new Laravel application in a directory named "project1", 
you may run the following command in your terminal:
```bash
curl -s https://laravel.build/project1 | bash
```
1. Give permission to Laravel to access storage:
```bash
sudo chmod -R gu+w storage
&&
sudo chmod -R guo+w storage
```
1. After the project has been created, you can navigate to the application directory and start Laravel Sail. Laravel Sail provides a simple command-line interface for interacting with Laravel's default Docker configuration:
```bash
cd project1
```
```bash
./vendor/bin/sail up
```
1. Github Desktop on Linux Mint:
```bash
https://github.com/shiftkey/desktop
```