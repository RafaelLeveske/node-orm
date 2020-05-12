const { Model, DataTypes } = require('sequelize');

class Tech extends Model {
    static init(connection){
        super.init({
            name: DataTypes.STRING,
            
        }, {
           sequelize: connection,
           tableName: 'Techs'
        })
    }
    static associate(models) {
       this.belongsToMany(models.User, {
           foreignKey: 'techId',
           through: 'UserTechs',
           as: 'users'
       });
    }
}

module.exports = Tech;