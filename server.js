import express from 'express';
import morgan from "morgan";
import bodyParser from 'body-parser';
import cors from 'cors';

import {home,about,bufferTest,dnsTest} from './src/apiList.js';

const PORT = 8080;
const HOST = "0.0.0.0";

try {
	const app = express();
	app.use(morgan('combined'));
	const corsOptions = {
		origin: ['*'],
		// exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar'], # just for learning ...
		optionsSuccessStatus: 200
	};
	app.use(cors(corsOptions));
	// Configuring body parser middleware
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	app.options('/') // preflight 


	app.get('/', (req, res) => { 
		home(req,res)
	});  
	app.get('/about', (req, res) => {  
		about(req,res)
	}); 
	app.get('/bufferTest', (req, res) => {  
		bufferTest(req,res)
	}); 
	app.get('/dnsTest', (req, res) => {  
		dnsTest(req,res)
	});


	
	var server = app.listen(PORT,HOST,() => {  
		console.log(server.address())
		var host = server.address().address;  
		var port = server.address().port;  
		console.log(`Server listening at http://${host}:${port}`);  
	});  
}
catch (err){
	console.log("Unable to create the server!")
	console.log(`Unable to listen at port : ${PORT} for the server!`)
	console.log("Error Details : ",err)
	console.trace("Server Error")
}




	