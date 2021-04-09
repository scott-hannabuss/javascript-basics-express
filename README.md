# JavaScript Basics in Express

An API that makes a series of basic javascript functions accessible through HTTP requests.

The project is designed to give an overview on the basics of RESTful APIs and how they operate.

## Using this repo locally

Please feel free to fork and clone the repo down to your local machine. Once done, you can view the basic javascript functions that we will be gaining access to through our HTTP requests. These are located in the lib folder. You can also see the routing we have set up in app.js to be able to access these basic functions. If you start your app with npm start and make requests to the appropriate routes in postman, you should be able to get responses which are appropriate to each function. For example, if you make a get request to '/strings/upper/:hello' you should see the response HELLO, as your HTTP parameter should have been passed through the uppercase function.

If you would like to run the tests that are built into the application, you can do so by running 'npm test' inside your terminal.

## Technologies and applications used

Node and NPM <br>
Git and GitHub <br>
Jest <br>
Express <br>
Postman <br>
Nodemon <br>
Supertest <br>

## Author

Scott Hannabuss

## Acknowledgements

Thanks to Manchester Codes for designing the exercise and guiding us through it.
