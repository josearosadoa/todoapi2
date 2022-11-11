const Users = require("../models/users.models");
const bcrypt = require('bcrypt');




class AuthService {
    static async login (email, password){
        try {
            const result = await Users.findOne({
                where: {email},

            });
            if(result) {
                const isValid = bcrypt.compareSync(password, result.password);
                return {isValid, result};

            }
            return false;
        } catch (error) {
            throw error;
        }
    }
}


//el cliente envia por un post el user y la password
// el servidor busca en la bd al usuario con el email que mandaron
//para obtener la constrase;a hasheada
//compara la contrase'a con el hash y si es valida
// se genera el jwt o token

module.exports = AuthService;