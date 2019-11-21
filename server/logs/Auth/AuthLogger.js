const { authLogger } = require('../index');

const authLogInfo = () => {
    if(isLog) //trang thai ghi log la true
    {
        authLogger.info("auth log info");
        console.log("Co ghi log error");
    }else{
        console.log("Khong ghi log info");
    }
}

const authLogError = () => {
    if(isLog) //trang thai ghi log la true
    {
        authLogger.error("auth log error");
        console.log("Co ghi log error");
    }else{
        console.log("Khong ghi log error");
    }
}

module.exports = {
    authLogInfo,
    authLogError
};