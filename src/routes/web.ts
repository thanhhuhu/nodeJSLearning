import express, { Express, Router } from 'express'
const router: Router = express.Router()
import {getHomePage, getCreateUserPage} from '../controllers/user.controller'
const webRoutes = (app :Express) =>{
    router.get("/",getHomePage)
    router.get('/create-user', getCreateUserPage)


    app.use('/', router)
}
export default webRoutes