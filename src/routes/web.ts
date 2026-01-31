import express, { Express, Router } from 'express'
const router: Router = express.Router()
import {
    getHomePage,
    getCreateUserPage,
    postCreateUser,
    postDeleteUser,
    getViewUser,
    postUpdateUser
} from 'controllers/user.controller'
import {
    getAdminOrderPage,
    getAdminProductPage,
    getAdminUserPage,
    getDashboardPage
} from 'controllers/admin/dashboard.controller'
const webRoutes = (app :Express) =>{
    router.get("/",getHomePage)
    // receive data
    router.get('/create-user', getCreateUserPage)
    // send data
    router.post('/handle-create-user',postCreateUser)
    router.post ('/handle-delete-user/:id',postDeleteUser)
    router.get ('/handle-view-user/:id',getViewUser)
    router.post ('/handle-update-user',postUpdateUser)
    //admin routes

    router.get ( "/admin", getDashboardPage)
    router.get('/admin/create-user', getCreateUserPage)

    router.get("/admin/user", getAdminUserPage)
    router.get("/admin/product", getAdminProductPage)
    router.get("/admin/order", getAdminOrderPage)

    app.use('/', router)
}
export default webRoutes