import express from 'express'
import 'dotenv/config'
import familyRoutes from './routes/family.routes'
import memberRoutes from './routes/family-member.routes'
import childRoutes from './routes/child.routes'
import eventRoutes from './routes/events.routes'
import eventsRoutes from './routes/events.routes'
import authEoutes from './routes/auth.routes'
import cors from 'cors'

const app = express()
app.use(cors())
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Bienvenido a MomApp!')
})

app.use('/families', familyRoutes);
app.use('/members', memberRoutes);
app.use('/children', childRoutes);
app.use('/events', eventsRoutes);
app.use('/auth', authEoutes)
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

export default app

