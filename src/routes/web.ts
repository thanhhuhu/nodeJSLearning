import express, { Express, Router } from 'express'
const router: Router = express.Router()
import {getHomePage, getCreateUserPage, postCreateUser} from '../controllers/user.controller'
const webRoutes = (app :Express) =>{
    router.get("/",getHomePage)
    // receive data
    router.get('/create-user', getCreateUserPage)
    // send data
    router.post('/handle-create-user',postCreateUser)

    app.use('/', router)
}
export default webRoutes