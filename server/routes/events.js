import express from 'express'
import eventsController from '../controllers/events.js'

const router = express.Router()

router.get('/', eventsController.getEvents)
router.get('/:id', eventsController.getEventById)
router.get('/location/:id', eventsController.getEventsByLocation)

export default router