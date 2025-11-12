import getConnection from "../config/database";

const handleCreateUser =
    (fullName :string,
     email :string,
     address:string) => {

    //insert into database

        //return result
        console.log("insert a new user ")

}
const getAllUsers = async() =>{
    const connection  = await getConnection();
    // a simple SELECT query
    try {
        const [results, field] = await connection.query (
            'SELECT * FROM `users`'
        )
        return results;
    }catch(error){
        console.log(error)
        return [];
    }
}
export {handleCreateUser, getAllUsers}