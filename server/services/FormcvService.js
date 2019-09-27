const FormCV = require('../models/FormCV');

exports.getAllForm = async (req, res) => {
    try{
        const forms = await FormCV.find();
        res.json(forms);
    }catch(e){
        res.json({message:e});
    }
}

exports.getFormByIdUser = async (req, res) => {
    try{
        const forms = await FormCV.find({ creator: req.params.idUser });
        res.json(forms);
    }catch(e){
        res.json({message:e});
    }
}