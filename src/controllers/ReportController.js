const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
    async show(req, res){
        const users = await User.findAll({
            attribures: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@gmail.com' //retorna todos os emails que terminam em gmail.com
                }
            },
            include: [
                { 
                    association: 'address', 
                    where: {
                        street: 'Condominio Jardins dos Tapiriris Bloco K2' //retorna todos os perfis cadastrados com este endereço
                    }
                },
                {
                    association: 'techs',
                    required: false,
                    where: {
                        name: {
                            [Op.iLike]: 'React%'
                        }
                    }
                }
                    ]
        })
        return res.json(users);
    }
}