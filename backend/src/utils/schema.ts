import Joi from 'joi';

const NomeSchema = Joi.string().min(1).required();
const productSchema = Joi.object({
  name: Joi.string(),
  observation: Joi.string().allow(''),
  quantity: Joi.number()
});
const productsSchema = Joi.array().items(productSchema).required();
const StatusSchema = Joi.string().required();


export const schemaNewCustomer = Joi.object({
  products: productsSchema,
  customerName: NomeSchema,
  status: StatusSchema
});
