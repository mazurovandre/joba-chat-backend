import { celebrate, Joi } from 'celebrate';
import isValidURL from '../utils';

export const validateAuth = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email()
      .message('Неверный формат email')
      .messages({
        'string.required': 'Email обязателен',
      }),
    password: Joi.string().required()
      .messages({
        'string.empty': 'Пароль обязателен',
      }),
  }),
});

export const validateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30)
      .messages({
        'string.min': 'Минимальная длина имени - 2',
        'string.max': 'Максимальная длина имени - 30',
      }),
    about: Joi.string().min(2).max(200)
      .messages({
        'string.min': 'Минимальная длина описания - 2',
        'string.max': 'Максимальная длина описания - 200',
      }),
    password: Joi.string().required()
      .messages({
        'string.empty': 'Пароль обязателен',
      }),
    email: Joi.string().required().email()
      .message('Неверный формат email')
      .messages({
        'string.empty': 'Email обязателен',
      }),
    avatar: Joi.string()
      .custom((value, helpers) => {
        if (!isValidURL(value)) {
          return helpers.error('Неверный формат URL');
        }
        return value;
      }),
  }),
});
