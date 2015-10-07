# Vio
Photo Album App built with React and Instagram API

## User Flow

#### Login with Instagram Account using OAuth

![login](http://imgur.com/iMMJMkM)

#### Main Screen with the list of saved photo albums
![main](http://imgur.com/7uGEAC4)

#### Customize or Create your Album
![customize](http://imgur.com/5MdeiTl)


#### View Your Album when Finished
![albumview](http://imgur.com/zVKY8Cx)

## Author
Eric Le, therealericle@gmail.com

## Installing Dependencies
Type these commands to get started:

1. `npm install` node dependencies
2. `brew install mongodb` if you need to install mongoDB client
3. create `/data/db` folder at root directory if it doesn't exist already
4. run `mongod --dbpath ./data/db` process from the root directory in terminal
5. run gulp
## Tech Stack

### Front End

- React
- Redux

### Back End

- Node/Express
- MongoDB/Mongoose

### API

**'/api/users/'**

  post '/saveuser'         : Save a new user
  post '/createnewalbum'   : Create a new album schema and save
  post '/savephototoalbum' : Save a photo to an album 

**'/api/albums/'**

  post '/searchpicbytag'         : Search recent photo with a tag
  post '/searchpicbylocation'    : Search recent photo with a location
  post '/searchuser'             : Search for user info with their names
  post '/searchmediabyuserid'    : Search for recent photo of a user

### EXTERNAL APIS

Vio use of external APIs Instagram and Oauth.io

**Build System**

- Gulp


