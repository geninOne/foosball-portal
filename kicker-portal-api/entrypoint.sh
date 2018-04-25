#!/bin/sh

echo "Installing dependencies..."
npm install

echo "Starting development server..."
node_modules/.bin/nodemon --inspect=0.0.0.0:5555 app.js