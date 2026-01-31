import { PrismaClient } from "@prisma/client";
import getConnection from "config/database";
import {prisma} from "config/client";

const handleCreateUser = async (
    fullName: string,
    email: string,
    address: string
    // có thể thêm username, password, accountType vào tham số sau
) => {
    await prisma.user.create({
        data: {
            username: email.split('@')[0] || "user_" + Date.now(),  // tạm dùng phần trước @ của email, hoặc random
            password: "default123",                                 // ← thay bằng hash thật sau (bcrypt)
            accountType: "USER",                                    // hoặc "SYSTEM", "ADMIN",...

            name: fullName,   // ← sửa từ name → fullName
            email: email,
            address: address,

            // các trường optional khác có thể bỏ qua hoặc để undefined/null
        }
    });
};
const getAllUsers = async() =>{
   const users = await prisma.user.findMany()
    return users
}
const handleDeleteUser = async(id:string) =>{
    const deleteUser = await prisma.user.delete({
        where: {id: +id},
    })
    return deleteUser
}
const getUserById = async(id:string) =>{
    const user = prisma.user.findUnique({
        where:{id:+id}
    })
    return user
}
const updateUserById = async(
    id:string,
    name:string,
    email:string,
    address:string) => {
    const updateUser = await prisma.user.update({
        where: {id: +id},
        data: {
            name: name,
            email: email,
            address: address,
        }
    })
    return updateUser
}
export {handleCreateUser, getAllUsers, handleDeleteUser, getUserById, updateUserById}