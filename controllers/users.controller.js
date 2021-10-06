const axios = require("axios").default;

exports.authenticate = (req, res, next) => {
	console.log("authenticate invoked", req.body);
	// const data = {
	// 	Username: req.body.email,
	// 	Password: req.body.password,
	// 	PrivateKey: absorbKey,
	// };

	console.log(req.body.email,req.body.password)

    res.status(200).send('login success');

	// axios.post(absorbUrl + "Authenticate", data).then(
	// 	(r) => {
	// 		if (r.status == 200) {
	// 			token = r.data;
	// 			//res.status(200).send({ status: true, token: r.data });
	// 			const config = {
	// 				headers: {
	// 					Authorization: r.data,
	// 				},
	// 			};
	// 			axios
	// 				.get(absorbUrl + "mydetails", config)
	// 				.then(
	// 					(r) => {
	// 						res.status(200).send({ status: true, user: r.data });
	// 					},
	// 					(err) => {
	// 						if (err.message == "Request failed with status code 401") {
	// 							res
	// 								.status(401)
	// 								.send({ status: false, error: "invalid or expired token" });
	// 						} else {
	// 							res.status(401).send({ status: false, error: err });
	// 						}
	// 					},
	// 				)
	// 				.catch((err) => {
	// 					res.status(400).send({ status: false, error: err });
	// 				});
	// 		} else {
	// 			res.status(400).send({ status: false, error: r });
	// 		}
	// 	},
	// 	(err) => {
	// 		res.status(400).send("invalid credentials");
	// 	},
	// );
};
