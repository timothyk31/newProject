import Joi from 'joi';

// User Registration Validation Schema
export const registrationSchema = Joi.object({
    username: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
});

// User Login Validation Schema
export const loginSchema = Joi.object({
    username: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
});
