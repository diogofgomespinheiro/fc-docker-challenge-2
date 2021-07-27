const { Model, DataTypes } = require('sequelize');

class People extends Model {
	static init(sequelize) {
		super.init(
			{
				name: DataTypes.STRING,
			},
			{
				sequelize,
				modelName: 'people',
				tableName: 'peoples',
			}
		);
	}
}

module.exports = People;
