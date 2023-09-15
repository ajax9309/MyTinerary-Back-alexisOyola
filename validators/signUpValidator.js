import joi from 'joi';
import joiPassword from 'joi-password-complexity';

const complexityOptions = {
    min: 6,
    max: 12,
    lowerCase: 1,
    upperCase: 1,
    numeric: 0,
    symbol: 0,
    requirementCount: 2,
};

export const singUpSchema = joi.object({

  email: joi.string().email().required().messages({
    "string.empty":"email cannot be empty",
}),
  password: joiPassword(complexityOptions).messages({
    "string.empty":"password cannot be empty",
  }),
  name: joi.string().min(4).max(12),
  picture: joi.string().uri().allow("").allow(null),
  country: joi.string().allow("").allow(null),
  birthdate: joi.date(),
  cellphone: joi.number()
}) 