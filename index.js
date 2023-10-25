// import json-server

const jsonServer = require('json-server')

// creare json server using json-server library
const realEstateServer = jsonServer.create()

//set up path/route for db.json file
const router = jsonServer.router("db.json")

// Return middlewares used by JSON Server
const middleware = jsonServer.defaults()

//set up port for server
const port = 4000 || process.env.PORT

// use middleware and router in server 
realEstateServer.use(middleware)
realEstateServer.use(router)

// Server listen for request from frontend
realEstateServer.listen(port,()=>{
    console.log(`Media player server started at port ${port} and waiting from request!!!`)
})