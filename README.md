# What is this?
This is a react app with very basic login and signup. This is something I made to learn reactjs and express. So I probably won't be updating this.

# Why?
I had some trouble while doing this. So thats why I decided to make this repo and explain why I did someparts, and what made me do that, in the hope of helping someone else that is having the same problem. So this is just "how to" login and signup page with react and express.

# Dependencies
- axios
- express
- mongoose
- react
- react-router

# How to run
To run this, you have to do few things.


To start only the app in development 
```
cd ReactLoginBasics
npm i
npm start
```

To start the server;


**Note:** Be sure to rename the config.example.json to config.json and edit the mongodb connection link. This is important since this app fully depends on database.
```
cd src\server

node server.js
```

To run the app as process you may want to check [forever package](https://www.npmjs.com/package/forever).

