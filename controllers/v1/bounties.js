let express = require('express')

let router = express.Router()

let db = require('../../models')

router.get('/', (req, res) => {
	db.Bounty.find()
	.then(foundBounties => {
		res.send(foundBounties)
	})
	.catch((error) => {
		console.log('error in GET /v1/bounties', error)
		res.status(500).send('Something went wrong. Please contact an administrator')
	})
})

router.post('/', (req, res) => {
	db.Bounty.create(req.body)
	.then(createdBounty => {
		res.send(createdBounty)
	})
	.catch((error) => {
		console.log('error in POST /v1/bounties', error)
		res.status(500).send('Something went wrong. Please contact an administrator')
	})
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