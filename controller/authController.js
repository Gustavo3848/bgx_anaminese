const usuarioModel = require('../model/usuarioModel')
class authController{
    async auth(req,res){
        const {usuario, password}  = req.body;
        const valid = await usuarioModel.auth(usuario,password)
        if(valid.valid == true){
            req.session.user = usuario
            req.session.userID = valid.user
        }
        res.redirect('/anaminese/index')
    }
    
}
module.exports = new authController()