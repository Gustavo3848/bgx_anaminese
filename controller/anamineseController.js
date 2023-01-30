const anamineseModel = require('../model/anamineseModel')
class anamineseController {
    async formulario(req, res) {
        res.render("./anaminese/formulario.ejs")
    }
    async incluir(req, res) {
        var anaminese = req.body
        anaminese.id_usuario = req.session.userID
        await anamineseModel.insert(anaminese)
        res.redirect("/anaminese/index")
    }
    async index(req, res) {
        var itens = await anamineseModel.select(req.session.userID)
        res.render("./anaminese.ejs", {
            itens
        })
    }
    async visualizar(req, res) {
        const options = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        };   
        var anaminese = await anamineseModel.selectOne(req.params.id)
        var date = new Date(anaminese[0]._2);
        anaminese[0]._2 = date.toLocaleDateString('pt-BR', options);
        res.render("./anaminese/visualizar.ejs", {
            anaminese
        })
    }
    async delete(req,res){
        await anamineseModel.delete(req.params.id)
        res.redirect("/anaminese/index")
    }   
    async atualizar(req,res){
        const options = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        };   
        var anaminese = await anamineseModel.selectOne(req.params.id)
        //        var date = anaminese[0]._2.toISOString().substr(0,10)
        var date = new Date(anaminese[0]._2)
        res.render("./anaminese/atualizar.ejs",{
            anaminese,
            date
        })
    }
    async atualizarSave(req,res){
        var anaminese = req.body
        anaminese.id_usuario = req.session.userID
        await anamineseModel.update(anaminese.id,anaminese)
        res.redirect("/anaminese/index")
    }

}
module.exports = new anamineseController()