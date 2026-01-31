import {prisma} from "config/client";

const initDatabase = async () => {
    const countUser = await prisma.user.count()
    const countRole = await prisma.role.count()

    if (countRole === 0) {
        await prisma.role.createMany({
            data: [
                { name: "ADMIN", description: "Admin full quyền" },
                { name: "USER", description: "User thông thường" },
            ]
        })
        console.log("✅ Created roles: ADMIN, USER")
    }

    if (countUser === 0) {
        await prisma.user.createMany({
            data: [
                {
                    username: "admin@gmail.com",
                    password: "123456",
                    fullName: "Administrator",
                    email: "admin@gmail.com",
                    address: "",
                    phone: "",
                    accountType: "SYSTEM",
                    avatar: ""
                }
            ]
        })
        console.log("✅ Created user: admin@gmail.com")
    }

    console.log("🎉 Init database done!")
}

export default {initDatabase}