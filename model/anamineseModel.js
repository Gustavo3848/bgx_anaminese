const knex = require("../DB/config")
class anamineseModel {
    async select(userId) {
        try {
            const ret = await knex('anamineses').where({ id_usuario: userId });
            return ret
        } catch (error) {
            console.log(error)
        }
    }
    async insert(anaminese) {
        try {
            await knex('anamineses').insert(anaminese);
        } catch (error) {
            console.log(error)
        }
    }
    async selectOne(id) {
        try {
            const ret = await knex('anamineses').select().where({ id: id });
            var data = JSON.parse(JSON.stringify(ret))
            return data
        } catch (error) {
            console.log(error)
        }
    }
    async delete(id) {
        try {
            await knex('anamineses').delete().where({ id: id });

        } catch (error) {
            console.log(error)
        }
    }
    async update(id, data) {
        try {
            
            await knex('anamineses').update(data).where({id:id})
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = new anamineseModel()