import Joi from 'joi';

const NomeSchema = Joi.string().min(3).required();
const productSchema = Joi.object({
  name: Joi.string(),
  observation: Joi.string(),
  quantity: Joi.number()
});
const productsSchema = Joi.array().items(productSchema).required();
const StatusSchema = Joi.string().required();




export const schemaNewCustomer = Joi.object({
  products: productsSchema,
  customerName: NomeSchema,
  status: StatusSchema
});
