import Joi from 'joi';

const idSchema = Joi.number().required()
const NomeSchema = Joi.string().min(1).required();
const productSchema = Joi.object({
  name: Joi.string(),
  observation: Joi.string().allow(''),
  additional: Joi.array().allow(''),
  quantity: Joi.number()
});
const productsSchema = Joi.array().items(productSchema).required();
const StatusSchema = Joi.string().required();


export const schemaNewCustomer = Joi.object({
  products: productsSchema,
  customerName: NomeSchema,
  status: StatusSchema
});

export const schemaUpdateCustomer = Joi.object({
  codCustomer: idSchema,
  products: productsSchema,
  customerName: NomeSchema,
  status: StatusSchema
});
