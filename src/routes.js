import { randomUUID } from 'node:crypto'
import { Database } from './database'
import { buildRoutePath } from './utils/build-route-path'

const database = new Database()

export const routes = [

// ROTA POST - Inserir
    {
        method: 'POST',
        path: buildRoutePath('/tasks'),
        handler: (req, res) => {
            const {title, description} = req.body
            const date = new Date()
            const created_at = `${('0' + date.getDate()).slice(-2)}/${('0' + (date.getMonth()+1)).slice(-2)}/${date.getFullYear()} 
                                at ${date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()}`

            const task = {
                id: randomUUID(),
                title,
                description,
                completed_at: null,
                created_at,
                
            }
        }

    }

]