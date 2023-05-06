const express = require('express');
const app = express();
const PORT = 3002;

// Without this middleware
app.use(express.json());
app.post('/', function (req, res) {
	console.log(req.body.name)
	res.end();
})

app.listen(PORT, function (err) {
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
