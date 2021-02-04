PLEASE READ THIS DETAILED DOCUMENTATION </>

# </> connect
A project where you can create an account and build your own Resume !
And simply, connect with Developers.
Make it simple for recruiters to see your skills.

Features:
LOGIN & REGISTER
Integration with Github and Gravatar
Add and Edit Profile / Education / Experience
Add Posts
Add Comments
Add Likes
Add Social media 

#Frontend: React, React hooks, Redux.
#Backend: NodeJS, ExpressJs server.
#Database: mongoDB.
#Deployment: Heroku on :
https://immense-ravine-75457.herokuapp.com/

*-Dev API:
-concurrently
nodemon

*- Frontend Third party APIs:
-Axios
-React-moment
-Redux-thunk
-uuid
-redux-devtools-extension

*- Backend Third party APIs:
-Bcryptjs
-config
-express
-express-validator
-gravatar
-jsonwebtoken
-mongoose
-request

HOW TO USE:
Download the reposity with git clone.
Simply run : 'npm run server' if you are using npm, due to concurrently package, it will handle the environment for running Express, React and mongoDB !
By Default Express is running on your localhost PORT:5000/
by Default React is running on your localhost PORT:3000/

BACKEND End points:
you can test the end-points using POSTMAN or your client side application.

Auth:
// @route   GET api/auth
// @desc    Test route
// @access  Public

// @route   GET api/auth
// @desc    Authenticate user & get token
// @access  Public

Posts:
// @route   POST api/posts
// @desc    create a post
// @access  Private

// @route   GET api/posts
// @desc    GET all posts
// @access  Private

// @route   GET api/posts/:id
// @desc    GET post by ID
// @access  Private

// @route   DELETE api/posts/:id
// @desc    DELETE a post
// @access  Private

// @route   PUT api/posts/like/:id
// @desc    Like a post
// @access  Private

// @route   PUT api/posts/unlike/:id
// @desc    unLike a post
// @access  Private

// @route   POST api/posts/comment/:id
// @desc    comment on a post
// @access  Private

// @route   DELETE api/posts/comment/:id/:comment_id
// @desc    DELETE comment
// @access  Private









