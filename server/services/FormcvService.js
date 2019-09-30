const FormCV = require('../models/FormCV');

exports.getAllForm = async (req, res) => {
    try{
        const forms = await FormCV.find().populate('creator');
        res.json(forms);
    }catch(e){
        res.json({message:e});
    }
}

exports.getFormByIdUser = async (req, res) => {
    try{
        const forms = await FormCV.find({ creator: req.params.idUser }).populate('creator');
        res.json(forms);
    }catch(e){
        res.json({message:e});
    }
}

exports.getFormByChucDanh = async (req, res) => {
    try{
        const forms = await FormCV.find({ action: req.params.chucDanh }).populate('creator');
        res.json(forms);
    }catch(e){
        res.json({message:e});
    }
}