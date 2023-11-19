Using Mongo DB

- install mongodb
- install mongoosejs
- require and setup connection
- make schema
- create model and export


## session and cookies

- understanding sessions
creating sessions, using sessions accross routes and destroying
sessions
I
understanding cookies
creating cookies, using cookies accross routes and destroyin
cookies


create
req.session.koibhinaam = koibhivalue;
read
req.session.koibhinaam
delete
req.session.destroy


- cookie setup
- res.cookie("name", value);
- cookie reading
- req.cookies.name
- cookie delete
- res.clearCookie (name) 

Final - Learning

### flash messages
- jab bhi aap kisi ejs page ko dekhege waha par aapko kisi prakaar ka koi information dena hai, wo kehlata hai flash messages, they are more like good looking alerts, warning and descriptions

#### Procedure:
install connect-flash
make sure you setup express-session
make sure you put connect flash in a app.use function
kisi bhi route mein aap ko flash create karna hai
kisi bhi doosre route par app use chalane ka try karein
AAP CONNECT FLASH KO USE NAHI KR SKTE BINA EXPRESS SESSION


intermediate mongodb
How can I perform a case-insensitive search in Mongoose?
How do I find documents where an array field contains all of a set of values?
How can I search for documents with a specific date range in Mongoose?
How can I filter documents based on the existence of a field in Mongoose?
How can I filter documents based on a specific field's length in Mongoose?


# Authentication and authorization

install these packages:
npm i passport passport-local passport-local-mongoose mongoose
express-session
write app.js code first in app.js file and write it after view engine
and before logger
setup users.js then properly
in index.js try register first and then other codes as well