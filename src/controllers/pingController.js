function pingController(req,res){
    return res.json({
        message:"Hi"
    })

}
module.exports = {
    pingController:pingController
}