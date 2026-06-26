const BASE_URL = '/api/events'

const getAllEvents = async () => {
    const response = await fetch(BASE_URL)
    return response.json()
}

const getEventById = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`)
    return response.json()
}

const getEventsByLocation = async (locationId) => {
    const response = await fetch(`${BASE_URL}/location/${locationId}`)
    return response.json()
}

export default {
    getAllEvents,
    getEventById,
    getEventsByLocation
}