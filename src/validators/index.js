import Joi from 'joi'

export const signinUserSchema = Joi.object().keys({
  rut: Joi.string().max(8).required(),
  nombre: Joi.string().alphanum().min(3).required(),
  apellido_paterno: Joi.string().min(3).required(),
  apellido_materno: Joi.string().min(3).required(),
  fecha_nacimiento: Joi.string().required(),
  password: Joi.string().required()
})