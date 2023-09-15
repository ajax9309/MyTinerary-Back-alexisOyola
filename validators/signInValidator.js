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

export const singInSchema = joi.object({

  email: joi.string().email().required().messages({
    "string.empty":"incorrect email or password",
}),
  password: joiPassword(complexityOptions).required().messages({
    "string.empty":"incorrect email or password ",
  }),

  picture: joi.string().uri()

})