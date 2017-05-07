const express = require('express')
const app = express()

var fs = require('fs');

function file(filename, res) {
	fs.readFile(filename, 'utf8', function(err, data) {  
    	if (err) throw err;
    	console.log(filename)
    	res.setHeader('Content-Type', 'application/json');
    	res.send(data)
	});
}

app.get('/', (req, res) => file('root.json', res))
app.get('/api/status', (req, res) => file('status.json', res))
app.get('/api/login/mobile', (req, res) => file('login.json', res))
app.get('/api/user/visit', (req, res) => file('visits.json', res))
app.get('/api/languages', (req, res) => file('languages.json', res))
app.get('/api/country/631/site', (req, res) => file('site.json', res))
app.get('/api/country/631/type', (req, res) => file('type.json', res))
app.get('/api/user/visit/:id', (req, res) => file('visit.json', res))
app.get('/api/user/visit/:id/events', (req, res) => file('event.json', res))

app.listen(3443, () => console.log('Started!'))