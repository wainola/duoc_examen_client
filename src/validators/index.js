import Joi from 'joi'

export const signinUserSchema = Joi.object().keys({
  rut: Joi.string().max(8).required(),
  dv: Joi.string().required(),
  nombre: Joi.string().alphanum().min(3).required(),
  apellido_paterno: Joi.string().min(3).required(),
  apellido_materno: Joi.string().min(3).required(),
  fecha_nacimiento: Joi.string().required(),
  password: Joi.string().required(),
  repeated_password: Joi.string().required()
})

export const loginSchema = Joi.object().keys({
  rut: Joi.string().max(8).required(),
  password: Joi.string().required()
})

export const userSchema = Joi.object().keys({
  rut: Joi.string().max(8).required(),
  dv: Joi.string().required(),
  nombre: Joi.string().alphanum().min(3).required(),
  apellido_paterno: Joi.string().min(3).required(),
  apellido_materno: Joi.string().min(3).required(),
  fecha_nacimiento: Joi.string().required(),
  sexo: Joi.string().required(),
  estado_civil: Joi.string().required(),
  hijos: Joi.string().required(),
  telefono: Joi.string().required(),
  email: Joi.string().required(),
  direccion: Joi.string().required(),
  comuna: Joi.string().required(),
  educacion: Joi.string().required(),
  renta: Joi.string().required(),
  sueldo_liquido: Joi.string().required(),
  enfermedad_cronica: Joi.string().required()
})