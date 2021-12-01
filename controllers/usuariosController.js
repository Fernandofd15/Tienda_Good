const Usuarios = require('../models/Usuario');

//Agregar cliente
exports.add = async (req, res)=> {
    const usuario = new Usuarios(
        {
            strNombre: req.body.strNombre,
        strApellidos: req.body.strApellidos,
        nmbEdad: req.body.nmbEdad,
        strCorreo: req.body.strCorreo,
        strDireccion: req.body.strDireccion,
        strTelefono: req.body.strTelefono
        }
    );
    try{
        await usuario.save();
        res.json({ 
            ok:true,
            message:'Información insertada correctamente',
            estatus:'200',
            cont:usuario
        });

    }catch (error){
        if (error.code === 11000) {
            res.status(409).json({
                ok:false,
                message: `Ya existe un cliente con el correo: ${req.body.strCorreo}`,
                estatus:'409',
                cont:[]
            });
        }else{
            res.status(400).json({
                ok:false,
                message: 'Error al procesar la peticion',
                estatus:'400',
                cont:[]
            });
        }
    }
};


//primera accion: list
exports.list = async (req, res) => {
    try{
    const usuario = await Usuarios.find({})
    .populate({
        path: 'arrMascotas.idAnimalito',
        model: 'Animalito',
        
    });

    res.json({
        ok: true,
        message: 'petición exitosa',
        status:200,
    cont: usuario
    });
}catch(error){
    res.send({
        ok:false,
            message: 'Error al procesar la peticion',
            status:400,
            cont:[]
    });
    next();
}
};

// leer cliente por id
exports.show = async(req, res, next) =>{
    try{
const usuario = await Usuarios.findById(req.params.id);
if (!usuario){
    res.status(404).json({ 
        ok:false,
                message: 'El usuario no existe', 
                estatus:'404',
                cont:[]
            });
}
res.json({
    ok:true,
            message:'Peticion exitosa',
            estatus:'200',
            cont:usuario
});
    }catch(error){
res.status(400).json({
    ok:false, 
    message: 'Error al procesar la peticion',
    estatus:'400',
    cont:[]
});
    }
}

//Actualizar cliente
exports.update = async (req, res, next) =>{
    try{
const usuario = await Usuarios.findOneAndUpdate(
{_id: req.params.id},
req.body,
{new: true }
);
res.json({
    ok:true,
    message:'Información actualizada correctamente’',
    estatus:'200',
    cont:usuario
});
}catch (error){
    if (error.code === 11000) {
        res.status(400).json({
            ok:false,
            estatus:'400',
            cont:[],
            message: `Ya existe un cliente con el correo: ${req.body.strCorreo}`
        });
    }else{
        res.status(400).json({
            ok:false,
            message: 'Error al procesar la petición',
            estatus:'400',
            cont:[]
        });
    }
}

}

//eliminar cliente
exports.delete = async (req, res, next) =>{
    try {
        await Usuarios.findByIdAndDelete({ _id: req.params.id });
        res.json({
            ok:true,
            message: 'El usuario ha sido eliminado',
            estatus:'200',
            cont:[]
        
        })
    } catch (error) {
        res.status(400).json({
            ok:false,
            message: 'Error al procesar la petición',
            estatus:'400',
            cont:[]
        });
    }
}