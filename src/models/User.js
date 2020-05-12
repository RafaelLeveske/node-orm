const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(connection){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
           sequelize: connection 
        })
    }
    static associate(models) {
        this.hasMany(models.Address, { 
            foreignKey: 'userId',
            as: 'address'
            });

        this.belongsToMany(models.Tech, {
                foreignKey: 'UserId',
                through: 'UserTechs',
                as: 'techs'
            });
             
    }
}

module.exports = User;