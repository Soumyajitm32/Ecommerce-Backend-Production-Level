function pingControllerV1(request, response) {
    
    return response.json({message: 'OK from V1 API'});
}

function pingControllerV2(request, response) {
    return response.json({message: 'OK from V2 API'});
}



module.exports = {
    pingControllerV1:pingControllerV1,
    pingControllerV2:pingControllerV2
}