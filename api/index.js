require('dotenv').config();
const express = require('express');
const showdown = require('showdown');
const { determineGleasonScores } = require('./services/openAIService');
const app = express();
const cors = require('cors');
const PORT = 3002;
const converter = new showdown.Converter();

// Without this middleware
app.use(cors());
app.use(express.json());
app.post('/parse', function (req, res) {
	determineGleasonScores(req.body).then(response => {
		if (!response?.choices || response.choices.length === 0) {
			return res.json({
				result: 'No scores found'
			});
		}

		console.log(response.choices);
		return res.json({
			result: response.choices[0].message.content
		});
	}).catch(e => {
		console.error(e);
		res.json({
			error: e.message
		});
	});
})

app.listen(PORT, function (err) {
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
