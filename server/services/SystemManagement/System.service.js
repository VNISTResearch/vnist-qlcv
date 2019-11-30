exports.toggleLogger = (req, res) => {
    try {
        console.log("log start: ",isLog);
        isLog = !isLog;
        console.log("log end: ",isLog);
        
        res.status(200).json({ msg: 'Successfully!', status: isLog})
    } catch (error) {
        res.status(400).json(error)
    }
}