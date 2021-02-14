const router = require('express').Router()
const { Tractor } = require('../models')

router.get('/', (req, res, next) => {
    Tractor.find({}).then(tractors => {
        res.send(tractors)
    }).catch(next)
})

router.post('/', (req, res, next) => {
    Tractor.create(req.body).then(tractor => {
        res.json({
            status: 'Done!',
            message: `Tractor ID ${tractor._id} is created`
        })
    }).catch(next)
})

router.put('/:id', (req, res, next) => {
    const tractorId = req.params.id
    Tractor.findOneAndUpdate({}, req.body).then(tractor => {
        res.json({
            status: 'Done!',
            message: `Tractor ID ${tractorId} is udpated`
        })
    }).catch(next)
})

router.delete('/:id', (req, res, next) => {
    const tractorId = req.params.id
    Tractor.findOneAndDelete({_id: tractorId}).then(tractor => {
        res.json({
            status: 'Done!',
            message: `Tractor ID ${tractorId} is deleted`
        })
    }).catch(next)
})

module.exports = router
