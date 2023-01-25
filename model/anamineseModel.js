const knex = require("../DB/config")
class anamineseModel{
    async select(userId){
        try {
            const ret = await knex('anamineses').where({ id_usuario: userId });
            return ret
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = new anamineseModel()