//Imports de los módulos
const path = require("path");
const fs = require("fs").promises;

const readFileUsers = async () => {
    //Imprimir en consola el arreglo de usuarios
    const usersPath = path.resolve("users.json");

    try{
        const data = fs.readFile(usersPath, "utf8");
        console.log(data)
    }catch(error){
        console.log(error)
    }
};

const writeHelloWorld = async () => {
    //Escribir hello world! en el archivo hello.txt
    const helloPath = path.resolve("hello.txt");

    try{
        await fs.writeFile(helloPath, "hello world!")
    }catch(error){
        console.log(error)
    }
};

const addUser = async (username) => {
    //Agregar un usuario en la lista users.json
    const usersPath = path.resolve("users.json");

    try{
        
        const data = await fs.readFile(usersPath, "utf8");
        const users = JSON.parse(data);
        users.push(username)
        await fs.writeFile(usersPath, JSON.stringify(users))
    }catch(error){
        console.log(error)
    }



};
//No hace falta ejecutar las funciones

module.exports = {
    readFileUsers,
    writeHelloWorld,
    addUser,
};
