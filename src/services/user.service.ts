import getConnection from "config/database";

const handleCreateUser =
   async (fullName :string,
          email :string,
          address:string
        ) => {
        //insert into database
        const connection = await getConnection();
       try {
           const sql = 'INSERT INTO `users`(`name`, `email`,`address`) VALUES (?, ?, ?)';
           const values = [fullName, email, address];

           const [result, fields] = await connection.execute(sql, values);
           return result;
       }catch(error){
           console.log(error)
           return [];
       }


}
const getAllUsers = async() =>{
    const connection  = await getConnection();
    // a simple SELECT query
    try {
        const [result, fields] = await connection.query('SELECT * FROM users');
        return result;
    }catch(error){
        console.log(error)
        return [];
    }

}
const handleDeleteUser = async(id:string) =>{
    try {
        const connection  = await getConnection();
        const sql = 'DELETE FROM `users` WHERE `id` = ?';
        const values = [id];

        const [result, fields] = await connection.execute(sql, values);
        return result;
    }catch(error){
        console.log(error)
        return [];
    }
}
const getUserById = async(id:string) =>{
    try {
        const connection  = await getConnection();
        const sql = 'SELECT * FROM `users` WHERE `id` = ?';
        const values = [id];

        const [result, fields] = await connection.execute(sql, values);
        return result[0];
    }catch(error){
        console.log(error)
        return [];
    }
}
const updateUserById = async(
    id:string,
    fullName:string,
    email:string,
    address:string) =>{
    try {
        const connection = await getConnection ();
        const sql  = 'UPDATE `users` SET `name` = ?, `email` = ?, `address` = ? WHERE `id` = ?';
        const values = [ fullName, email, address, id];

        const [result, fields] = await connection.execute(sql, values);
        return result;
    }catch(error){
        console.log(error)
        return [];
    }
}

export {handleCreateUser, getAllUsers, handleDeleteUser, getUserById, updateUserById}