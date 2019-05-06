let express = require('express')

let router = express.Router()

router.get('/', (req, res) => {
	res.send('stub')	
})

router.post('/', (req, res) => {
	res.send('stub')	
})

router.get('/:id', (req, res) => {
	res.send('stub')	
})

router.put('/:id', (req, res) => {		
	res.send('stub')	
})


router.delete('/:id', (req, res) => {		
	res.send('stub')	
})

module.exports = router