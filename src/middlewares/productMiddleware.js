const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const BadRequest = require("../errors/badRequestError");
const errorResponse = require("../utils/errorResponse");

function createProductValidator(req, res, next) {
    if(!req.body.title) {
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("Title")))
    }

    if(!req.body.description) {
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("Description")))
    }

    if(!req.body.price) {
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("Price")))
    }

    if(!req.body.image) {
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("Image")))
    }

    if(!req.body.category) {
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(errorResponse(ReasonPhrases.BAD_REQUEST, new BadRequest("Category")))
    }

   
    next();
}

module.exports = {
    createProductValidator:createProductValidator
}