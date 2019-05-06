let express = require('express')

let app = express()

// Controllers
app.use('/v1/bounties', require('./controllers/v1/bounties'))

app.get('*', (req, res) => {
	res.status(404).send('Not Found')	
})

app.listen(process.env.PORT || 3000)