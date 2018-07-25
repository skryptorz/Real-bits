var express = require('express'),
	http = require('http'),
	app = express(),
	server = http.createServer(app),
	mysql = require('mysql');

// Application initialization
var self = this;
var connection = mysql.createPool({
	connectionLimit: 100,
	waitForConnections: true,
	queueLimit: 0,
	host: 'ec2-34-210-11-118.us-west-2.compute.amazonaws.com',
	port: '/var/run/mysqld/mysqld.sock',
	user: 'root',
	password: 'root',
	database: 'userdatabase',
	debug: true,
	wait_timeout: 28800,
	connect_timeout: 10
});

// Database setup
app.use(express.bodyParser());

app.get('/users', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	var FirstName = req.query.FirstName;
	var LastName = req.query.LastName;
	var Email = req.query.Email;
	var Password = req.query.Password;
	var sql = "INSERT INTO register(FirstName, LastName, Email, Password) VALUES ?";
	var values = [
		[FirstName, LastName, Email, Password]
	];
	connection.query(sql, [values], (err, results) => {
		if (err) {
			return res.send(err)
		}
		else {
			return res.json({ data: "success" })
		}
	});
});

let check = 0;
app.get('/registerAccount', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	var FirstName = req.query.FirstName;
	var LastName = req.query.LastName;
	var Email = req.query.Email;
	var Phone_Number = req.query.Phone_Number;
	var Pan_Number = req.query.Pan_Number;
	var Passport_Number = req.query.Passport_Number;
	var Maiing_address = req.query.Maiing_address;
	var mailing_street = req.query.mailing_street;
	var mailing_city = req.query.mailing_city;
	var mailing_zipcode = req.query.mailing_zipcode;
	var permanent_address = req.query.permanent_address;
	var permanent_street = req.query.permanent_street;
	var permanent_city = req.query.permanent_city;
	var permanent_zipcode = req.query.permanent_zipcode;
	var insert_accountDetails = "INSERT INTO account_details(Email,Pan_Number, Passport_Number, Phone_Number) VALUES ? ON DUPLICATE KEY UPDATE Pan_Number =  VALUES (Pan_Number), Passport_Number =  VALUES (Passport_Number),Phone_Number= VALUES (Phone_Number) ";
	var values = [
		[Email, Pan_Number, Passport_Number, Phone_Number]
	];
	connection.query(insert_accountDetails, [values], (err, results) => {
		if (err) {
			check = 0;
		}
		else {
			check = 1;
		}
	});
	var insert_addressDetails = "INSERT INTO user_address_details(Email_Id,Maiing_address,mailing_street,mailing_city,mailing_country,mailing_state,mailing_zipcode,permanent_address,permanent_street,permanent_city,permanent_country,permanent_state,permanent_zipcode ) VALUES ? ON DUPLICATE KEY UPDATE  Maiing_address =  VALUES (Maiing_address), mailing_street =  VALUES (mailing_street), mailing_city= VALUES (mailing_city),mailing_zipcode= VALUES (mailing_zipcode),permanent_address= VALUES (permanent_address),permanent_street= VALUES (permanent_street),permanent_city= VALUES (permanent_city),permanent_zipcode= VALUES (permanent_zipcode)";
	var values = [
		[Email, Maiing_address, mailing_street, mailing_city, "united states", "california", mailing_zipcode, permanent_address, permanent_street, permanent_city, "India", "telangana", permanent_zipcode]
	];
	connection.query(insert_addressDetails, [values], (err, results) => {
		if (err) {
			check = 0;
			res.send(err);
		}
		else {
			check = 1;
		}
	});
	setTimeout(function () {
		if (check === 1) {
			res.json({ data: "success" })
		}
		else {
			res.json({ data: "failed" })
		}
	}, 3000);
});

app.get('/id', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	var Email = req.query.Email;
	var sql = "SELECT Password from register WHERE Email=?";
	var values = [
		[Email]
	];
	connection.query(sql, [values], (err, results) => {
		if (err) {
			return res.send(err)
		}
		else {
			Object.keys(results).forEach(function (key) {
				var Pass = results[key];
				return res.json({ data: Pass.Password })
			});
		}
	});
});

app.get('/account', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	var Email = req.query.Email;
	var sql = "SELECT FirstName,LastName from register WHERE Email=?";
	var values = [
		[Email]
	];
	connection.query(sql, [values], (err, results) => {
		if (err) {
			return res.send(err)
		}
		else {
			Object.keys(results).forEach(function (key) {
				var Pass = results[key];
				return res.json({
					firstname: Pass.FirstName,
					lastname: Pass.LastName
				})
			});
		}
	});
});


server.listen(4000, "ec2-34-210-11-118.us-west-2.compute.amazonaws.com");
