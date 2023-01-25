const anamineseModel = require('../model/anamineseModel')
class anamineseController{
    async formulario(req,res){
        res.render("./anaminese/formulario.ejs")
    }
    async incluir (req,res){

    }
    async index (req,res){
        var itens = await anamineseModel.select(req.session.userID)
        res.render("./anaminese.ejs",{
            itens
        })
    }
}
module.exports = new anamineseController()