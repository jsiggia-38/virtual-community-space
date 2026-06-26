import './dotenv.js'
import { pool } from './database.js'
import locationData from '../data/locations.js'
import eventData from '../data/events.js'

const createTables = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS events;
    DROP TABLE IF EXISTS locations;

    CREATE TABLE IF NOT EXISTS locations (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      city VARCHAR(255) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      event_date TIMESTAMP NOT NULL,
      image VARCHAR(255) NOT NULL,
      location_id INT REFERENCES locations(id)
    );
  `

  try {
    await pool.query(createTableQuery)
    console.log('✅ Tables created successfully')
  } catch (err) {
    console.error('⚠️ Error creating tables', err)
  }
}

const seedTables = async () => {
  await createTables()

  // Insert locations
  for (const location of locationData) {
    try {
      await pool.query(
        `
        INSERT INTO locations (name, city)
        VALUES ($1, $2)
        `,
        [
          location.name,
          location.city
        ]
      )

      console.log(`✅ ${location.name} added successfully`)
    } catch (err) {
      console.error(`⚠️ Error inserting ${location.name}`)
      console.error(err)
    }
  }

  // Insert events
  for (const event of eventData) {
    try {
      await pool.query(
        `
        INSERT INTO events
        (title, description, event_date, image, location_id)
        VALUES ($1, $2, $3, $4, $5)
        `,
        [
          event.title,
          event.description,
          event.event_date,
          event.image,
          event.location_id
        ]
      )

      console.log(`✅ ${event.title} added successfully`)
    } catch (err) {
      console.error(`⚠️ Error inserting ${event.title}`)
      console.error(err)
    }
  }

  await pool.end()
}

seedTables()