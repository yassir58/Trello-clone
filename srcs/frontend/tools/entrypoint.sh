#!/bin/bash

# Download and install nvm (node version manager)


source ~/.bashrc

nvm install node

npm init -y

npm install react react-dom parcel react-router-dom typescript

npm pkg set 'scripts.test'='parcel index.html'

npm test