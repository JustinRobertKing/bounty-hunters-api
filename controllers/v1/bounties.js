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
		res.send(-createdBounty)
	})
	.catch((error) => {
		console.log('error in POST /v1/bounties', error)
		res.status(500).send('Something went wrong. Please contact an administrator')
	})
})

router.get('/:id', (req, res) => {
	db.Bounty.findById(req.params.id)
	.then(foundBounty => {
		res.send(foundBounty)
	})
	.catch((error) => {
		console.log('error in GET /v1/bounties/:id', error)
		res.status(500).send('Something went wrong. Please contact an administrator')
	})
})

router.put('/:id', (req, res) => {		
	// Args: ({WHERE}, data, {OPTIONS})
	db.Bounty.findOneAndUpdate(
		{ _id: req.params.id },
		req.body,
		{ new: true, useFindAndModify: false })
	.then((editedBounty) => {
		res.send(editedBounty)
	})
	.catch((error) => {
		console.log('error in PUT /v1/bounties/:id', error)
		res.status(500).send('Something went wrong. Please contact an administrator')
	})
})

router.delete('/:id', (req, res) => {		
	db.Bounty.findOneAndDelete({
		_id: req.params.id
	}, { useFindAndModify: false })
	.then(() => {
		res.status(204).send()
	})
	.catch((error) => {
		console.log('error in DELETE /v1/bounties/:id', error)
		res.status(500).send('Something went wrong. Please contact an administrator')
	})
})

module.exports = router