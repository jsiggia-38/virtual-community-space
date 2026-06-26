import express from 'express'
import locationsController from '../controllers/locations.js'

const router = express.Router()

router.get('/', locationsController.getLocations)
router.get('/:id', locationsController.getLocationById)

export default router