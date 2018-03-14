Steps for building Aurelia Demo App
-----------------------------------

These steps will be used for building the Aurelia demo application. Please clone this repo, copy all the steps
directories and paste them in the Aurelia app that we will setup using the __Aurelia CLI__

```sh
# Setup Aurelia app with Aurelia's CLI (install the CLI)
npm install aurelia-cli -g

# Create the application using CLI (folder will be created here)
au new aurelia-demo

# Would you like to use the default setup or customize your choices?
3 (Custom)

# Which module loader / bundler would you like to use?
3 (Webpack)

# What platform are you targeting?
1 (Web - Default)

# What transpiler would you like to use?
2 (Typescript)

# How would you like to setup your template?
1 (Default)

# What css processor would you like to use?
3 (Sass)

# Which unit test runners would you like to use?
2 (Karma)

# Would you like to configure integration testing?
2 (No)

# What is your default code editor?
(make your choice)

# Would you like to create this project?
1 (Yes - Default)

# Would you like to install the project dependencies?
1 (Yes - Default)
```

Your application is ready to go! Run development server with live reload:
```
au run --watch
```
