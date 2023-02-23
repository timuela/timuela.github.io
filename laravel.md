# Instal Laravel
## Create a Project
If you're developing on Linux and `Docker Compose` is already installed, 
you can use a simple terminal command to create a new Laravel project. 
For example, to create a new Laravel application in a directory named "project1", 
you may run the following command in your terminal:
```bash
curl -s https://laravel.build/project1 | bash
```
Give permission to Laravel to access storage:
```bash
sudo chmod o+w ./storage/ -R
sudo chmod -R gu+w storage
sudo chmod -R guo+w storage
```
After the project has been created, you can navigate to the application directory and start Laravel Sail. Laravel Sail provides a simple command-line interface for interacting with Laravel's default Docker configuration:
```bash
cd project1
```
```bash
./vendor/bin/sail up
```
Github Desktop on Linux Mint:
```bash
https://github.com/shiftkey/desktop
```
## Configuring A Shell Alias
By default, Sail commands are invoked using the vendor/bin/sail script that is included with all new Laravel applications:
```bash
./vendor/bin/sail up
```
However, instead of repeatedly typing vendor/bin/sail to execute Sail commands, you may wish to configure a shell alias that allows you to execute Sail's commands more easily:
```
alias sail='[ -f sail ] && sh sail || sh vendor/bin/sail'
```
To make sure this is always available, you may add this to your shell configuration file in your home directory, such as `~/.zshrc` or `~/.bashrc`, and then restart your shell.

Once the shell alias has been configured, you may execute Sail commands by simply typing sail. The remainder of this documentation's examples will assume that you have configured this alias:
```bash
sail up
```
To stop all of the containers, you may simply press Control + C to stop the container's execution. Or, if the containers are running in the background, you may use the stop command:
```bash
sail stop
```
Running Artisan commands locally...
```bash
php artisan queue:work
```
Running Artisan commands within Laravel Sail...
```bash
sail artisan queue:work
```