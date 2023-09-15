import { randomUUID } from 'node:crypto'
import { Database } from './database.js'
import { buildRoutePath } from './utils/build-route-path.js'

const database = new Database()

export const routes = [

// ROTA POST - Inserir
    {
        method: 'POST',
        path: buildRoutePath('/tasks'),
        handler: (req, res) => {
            const {title, description} = req.body
            const date = new Date()
            const created_at = `${('0' + date.getDate()).slice(-2)}/${('0' + (date.getMonth()+1)).slice(-2)}/${date.getFullYear()} at ${date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()}`
            const updated_at = created_at

            const task = {
                id: randomUUID(),
                title,
                description,
                completed_at: null,
                created_at,
                updated_at  
                
            }

            database.insert('tasks', task)

            return res.writeHead(201).end()
        }
    },

]