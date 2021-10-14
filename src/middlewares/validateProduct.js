const {check} = require ('express-validator')

module.exports = [
    check('name')
        .notEmpty().withMessage('Nombre del producto no puede estar vacío'),
    check('price')
        .notEmpty().withMessage('El precio del producto no puede estar vacío').bail()
        .isFloat().withMessage('El precio tiene que ser un número'),
    check('category')
        .notEmpty().withMessage('La categoría del producto no puede estar vacía'),
    check('description')
        .notEmpty().withMessage('La descripción del producto no puede estar vacía')
]