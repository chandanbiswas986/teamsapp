const express = require("express");
const app = express();
const authRoute=require('./routes/auth.route');

app.use(express.json());
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Methods",
		"GET,POST,HEAD,OPTIONS,PUT,PATCH,DELETE",
	);
	res.header(
		"Access-Control-Allow-Headers",
		"Origin,X-Requested-With,Content-Type,Accept,token",
	);
	next();
});

app.use('/auth',authRoute);

app.listen(3000,'172.31.25.233', () => {
	console.log("server started and listening on port 3000");
});