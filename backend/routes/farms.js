const router = require('express').Router()
const { Farm } = require('../models')

router.get('/', (req, res, next) => {
    Farm.find({}).then(farms => {
        res.send(farms)
    }).catch(next)
})

router.post('/', (req, res, next) => {
    Farm.create(req.body).then(farm => {
        res.json({
            status: 'Done!',
            message: `Farm ID ${farm._id} is created`
        })
    }).catch(next)
})

router.put('/:id', (req, res, next) => {
    const farmId = req.params.id
    Farm.findOneAndUpdate({_id: req.params.id}, req.body).then(farm => {
        res.json({
            status: 'Done!',
            message: `Farm ID ${farmId} is udpated`
        })
    }).catch(next)
})

router.delete('/:id', (req, res, next) => {
    const farmId = req.params.id
    Farm.findOneAndDelete({_id: farmId}).then(farm => {
        res.json({
            status: 'Done!',
            message: `Farm ID ${farmId} is deleted`
        })
    }).catch(next)
})

module.exports = router
