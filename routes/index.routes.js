import {Router} from "express"
const router = Router()

router.get('/', (req, res) => res.send('hola erick '));

router.get('/ping', (req, res) => res.send('hola pong'));

export default router