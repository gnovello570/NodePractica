


const jwt = require('jsonwebtoken');
let verificaToken = ( req, res, next) => {

   let token = req.get('token');

   jwt.verify( token, process.env.SEED, (err, decoded) => {

      if ( err) {
         return res.status(401).json({
            ok : false,
            err : {
               message: 'Token no valido',
            }
         })
      }

      req.usuario = decoded.usuario;

      next();
   })
};

let verificaAdminRole = ((req,res,next) => {


   let adminRole = req.get("role");
   let usuario = req.usuario;

   if(adminRole === 'ADMIN_ROLE') {
      next();
   } else {
      res.json({
         ok: false,
         err: {
            message: "Error no es ADMIN_ROLE"
         }
      })
   }
   next();
})


module.exports = {
   verificaToken,
   verificaAdminRole
}