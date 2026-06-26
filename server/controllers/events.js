import { pool } from '../config/database.js'

const getEvents = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM events ORDER BY event_date')
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getEventById = async (req, res) => {
    try {
        const id = parseInt(req.params.id)

        const results = await pool.query(
            'SELECT * FROM events WHERE id = $1',
            [id]
        )

        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getEventsByLocation = async (req, res) => {
    try {
        const id = parseInt(req.params.id)

        const results = await pool.query(
            'SELECT * FROM events WHERE location_id = $1 ORDER BY event_date',
            [id]
        )

        res.status(200).json(results.rows)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export default {
    getEvents,
    getEventById,
    getEventsByLocation
}