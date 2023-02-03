const knex = require("../DB/config")
const bcrypt = require('bcryptjs');
class usuarioModel {
    async auth(usuario, senha) {
        try {
            const user = await knex('usuarios').where({ usuario: usuario }).first();
            if (!user) {
                return { message: 'User not found' }
            } else {
                // Compare the plaintext password with the hashed password
                const isMatch = await bcrypt.compare(senha, user.senha);
                if (isMatch) {
                    return {valid: true, user:user.id}
                } else {
                    return{ message: 'Incorrect password' }
                }
            }
        } catch (err) {
            console.error(err);
            return { message: 'Error while fetching user' }
        }
    }
    async register() {
        var username = "caroline.shuster"
        var senha = "@n@minese"
        try {
            // Hash the password
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(senha, salt);
            // Save user in the database
            await knex('usuarios').insert({ usuario: username, senha: hash });
        } catch (err) {
            console.error(err);
        }
    }
}
module.exports = new usuarioModel()