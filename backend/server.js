let express = require("express"),
  path = require("path"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  dbConfig = require("./database/db");

// Connecting with mongo db
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log("Database sucessfully connected");
    },
    (error) => {
      console.log("Database could not connected: " + error);
    }
  );

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

/* add all routes here */
//const registerRoute = require("../backend/routes/register.route");
//const loginRoute = require("../backend/routes/login.route");

require("../backend/routes/login.route")(app);
require("../backend/routes/register.route")(app);
require("../backend/routes/initialSetup.route")(app);

//app.use("/api", registerRoute);
//app.use("/api", loginRoute);

app.use("/", express.static(path.join(__dirname, "angular")));
// var distDir = __dirname + "/dist/";
// app.use(express.static(distDir));
app.use(cors());
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "angular", "index.html"));
});

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message); // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});
