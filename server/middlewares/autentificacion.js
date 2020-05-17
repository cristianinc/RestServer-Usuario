const jwt = require('jsonwebtoken');

// Verificacion de token
let verificaToken = (req, res, next) => {
    
    let token = req.get('token');
    jwt.verify( token, process.env.SEED, (err, decoded)=>{
        if(err){
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no Valido'
                }
            })
        }

        req.usuario = decoded.usuario;
        
        next();
    });

    
};


// Verificacion de AdminRole

let verificaAdminRole = (req, res, next) =>{
    let usuario = req.usuario;

    if( usuario.role === 'ADMIN_ROLE' ){
        next();
    }else{
        res.json({
            ok: false,
            message: 'El usuario no es administrador'
        });        
    }




}


module.exports = {
    verificaToken,
    verificaAdminRole
}