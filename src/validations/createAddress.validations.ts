import Joi from "joi";


const createAddressValidations = {
  
  body: Joi.object().keys({
    street: Joi.string().required(),
    country: Joi.string().required(),
    numbreStreet: Joi.number().required(),
    stateProvince: Joi.any()
  }),
};

export default { createAddressValidations }