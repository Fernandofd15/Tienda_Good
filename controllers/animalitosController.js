const multer = require('multer');
const multerConfig = require('../utils/multerConfig');
const Animalitos = require('../models/Animalito');

const upload = multer(multerConfig).single('image');

exports.fileUpload = (req, res, next) => {
    upload(req, res, function (error) {
        if (error) {
            res.json({ mesagge: error });
        }
        return next();
    });
};

//Agregar animalito
exports.add = async (req, res) => {
    const animalito = new Animalitos({
        strNombre: req.body.strNombre,
        strTipoAnimal: req.body.strTipoAnimal,
        nmbEdad: req.body.nmbEdad,
        strSexo: req.body.strSexo
    });
    try {
        if (req.file && req.file.filename) {
            animalito.image = req.file.filename;
        }
        await animalito.save();
        res.json({ 
            'ok':true,
            message: 'Información insertada correctamente’', 
            'estatus':'200',
            cont:animalito
        });

    } catch (error) {
        res.json({
            ok:false,
            mesagge: 'Error al procesar la peticion',
            status:400,
            cont:[]
        });
    }
};


//primera accion: list
exports.list = async (req, res) => {
    try {
        const animalito = await Animalitos.find({});
        res.json({
            ok: true,
            message: 'petición exitosa',
            status:200,
        cont: animalito
        });
    } catch (error) {
        res.json({
            ok:false,
            message: 'Error al procesar la peticion',
            status:400,
            cont:[]
        });
        next();
    }
};

// leer producto por id
exports.show = async (req, res, next) => {
    try {
        const animalito = await Animalitos.findById(req.params.id);
        if (!animalito) {
            res.status(404).json({ 
                ok:false,
                message: 'El producto no existe', 
                estatus:'404',
                cont:[]
            });
        }
        res.json({
            ok:true,
            message:'Peticion exitosa',
            estatus:'200',
            cont:animalito
        });
    } catch (error) {
        res.status(400).json({ 
            ok:false, 
            message: 'Error al procesar la peticion',
            estatus:'404',
            cont:[]
             
        });
    }
};

//Actualizar producto
exports.update = async (req, res, next) =>{
    try{
const animalito = await Animalitos.findOneAndUpdate(
{_id: req.params.id},
req.body,
{new: true }
);
res.json({
    ok:true,
    message:'Información actualizada correctamente’',
    estatus:'200',
    cont:animalito
});
}catch (error){
    res.status(400).json({
        ok:false,
        mesagge: 'Error al procesar la petición',
        estatus:'400',
        cont:[]
    });
}

}

//eliminar producto
exports.delete = async (req, res, next) => {
    try {
        await Animalitos.findByIdAndDelete({ _id: req.params.id });
        res.json({ 
            ok:true,
            message: 'El animalito ha sido eliminado',
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