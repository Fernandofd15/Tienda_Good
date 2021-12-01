const Tiendas = require('../models/Tienda');


//Agregar Orden
exports.add = async (req, res, next) =>{
    const tienda = new Tiendas({
        strNombre: req.body.strNombre,
        strDireccion: req.body.strDireccion,
        strTelefono: req.body.strTelefono,
        strUrlWeb: req.body.strUrlWeb,
        arrAnimalitosDisponibles: req.body.arrAnimalitosDisponibles,
        aJsnCompra: req.body.aJsnCompra
    });
    try {        
        await tienda.save();

        res.json({
            ok:true,
            message:'Información insertada correctamente',
            estatus:'200',
            cont:tienda
        });
    } catch (error) {
        res.status(400).json({
            ok:false,
            message: 'Error al procesar la peticion',
            estatus:'400',
            cont:[] 
        });
    }
 
};

exports.list = async (req, res, next) => {
    try {
       const tienda = await Tiendas.find({})
       .populate({
        path: 'aJsnCompra', 
        populate: {
            path:'idUsuario',
            model:'Usuario'
        }
    })
    .populate({
        path: 'aJsnCompra', 
        populate: {
            path:'idAnimalito',
            model:'Animalito'
        }
    })

    .populate({
        path: 'aJsnCompra', 
        populate: {
            path:'arrMascotas',
            populate: {
                path:'idAnimalito',
                model:'Animalito'
            }
        }
    })

       .populate({
        path: 'arrAnimalitosDisponibles.idAnimalito',
        model: 'Animalito',
        
    });
       res.json({
        ok: true,
        message: 'petición exitosa',
        status:200,
        cont: tienda
       });
    } catch (error) {
        res.status(400).json({
            ok:false,
            message: 'Error al procesar la peticion',
            status:400,
            cont:[]
        });
    }
}

//Actualizar tienda
exports.update = async (req, res, next) =>{
    try{
const tiendas = await Tiendas.findOneAndUpdate(
{_id: req.params.id},
req.body,
{new: true }
);
res.json({
    ok:true,
    message:'Información actualizada correctamente’',
    estatus:'200',
    cont:tienda
});
}catch (error){
    
        res.status(400).json({
            ok:false,
            message: 'Error al procesar la petición',
            estatus:'400',
            cont:[]
        });
    }

}

// mostrar cliente por id
exports.show = async(req, res, next) =>{
    try{
const tienda = await Tiendas.findById(req.params.id)
.populate({
    path: 'aJsnCompra', 
    populate: {
        path:'idUsuario',
        model:'Usuario'
    }
})
.populate({
    path: 'aJsnCompra', 
    populate: {
        path:'idAnimalito',
        model:'Animalito'
    }
})

.populate({
    path: 'aJsnCompra', 
    populate: {
        path:'arrMascotas',
        populate: {
            path:'idAnimalito',
            model:'Animalito'
        }
    }
})

   .populate({
    path: 'arrAnimalitosDisponibles.idAnimalito',
    model: 'Animalito',
    
});
if (!tienda){
    res.status(404).json({ 
        ok:false,
                message: 'La tienda no existe', 
                estatus:'404',
                cont:[]
    });
    next();
}
res.json({
    ok:true,
    message:'Peticion exitosa',
    estatus:'200',
    cont:tienda
});
    }catch(error){
res.status(400).json({
    ok:false, 
    message: 'Error al procesar la peticion',
    estatus:'400',
    cont:[]
});
    }
};


//eliminar producto
exports.delete = async (req, res, next) => {
    try {
        await Tiendas.findByIdAndDelete({ _id: req.params.id });
        res.json({ 
            ok:true,
            message: 'La tienda ha sido eliminado',
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