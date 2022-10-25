const express = require("express");
const db = require("./configs/mongoose");
const expressLayout = require("express-ejs-layouts");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const localStrategy = require('./configs/passport')
const MongoStore = require('connect-mongo')

const port = process.env.PORT||8000;
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(expressLayout);

app.set("layout extractScripts", true);
app.set("layout extractStyles", true);

app.use(express.static("assets")); 

const dartScssMiddleware = require("./configs/sass-middleware");
app.use(dartScssMiddleware("assets/scss", "assets/styles"));

app.use(session({
  name:'employee-review-runinig',
  secret:'blahblahblah',
  saveUninitialized:false, 
  resave:false,  
  cookie:{
      maxAge:(1000*60*100)
  },
  store: MongoStore.create(
      {
          mongoUrl:'mongodb://localhost/employee-review',
          autoRemove:'disabled'
      },
      function(err){
          console.log(err||'connect to the mongo connect');
      }
  ),
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser)
app.use((req, res, next) => {
  res.locals.urlPath = req.url;
  console.log("Request for: ", `\x1b[36m"${req.url}"\x1b[0m`);
  next();
});
app.use("/", require("./routers"));
app.set("view engine", "ejs");
app.set("views", "./views");

// server is starts listening
app.listen(port, (error) => {
  if (error) console.log("server connection ERROR", error);
  else console.log("visit application by",'\x1b[36m"CTL+Click"\x1b[0m');
  console.log('\x1b[33m%s\x1b[0m', `http://localhost:${port}`); 
});