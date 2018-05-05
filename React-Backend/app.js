var express = require('express'),
	http=require('http'),
	app = express(),
	server=http.createServer(app),
	mysql = require('mysql');

// Application initialization
    var self = this;
    var connection     =    mysql.createPool({
        connectionLimit : 100,
        waitForConnections : true,
        queueLimit :0,
        host     : 'ec2-34-210-11-118.us-west-2.compute.amazonaws.com',
	port: '/var/run/mysqld/mysqld.sock',
        user     : 'root',
        password : 'root',
        database : 'userdatabase',
        debug    :  true,
        wait_timeout : 28800,
        connect_timeout :10
    });
console.log(connection);

// Database setup
app.use(express.bodyParser());
// Main route sends our HTML file
// Update MySQL database
app.get('/users', (req, res) => {
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
			res.send("success")
		}
	});
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

server.listen(4000,"ec2-34-210-11-118.us-west-2.compute.amazonaws.com");
