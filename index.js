let express = require('express')

lep app = express()

app.get('*', (req, res) => {
	res.send('butts')	
})

app.listen(process.env.PORT || 3000)