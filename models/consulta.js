
//Definición modelo consulta

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('Isodata',
		{param: DataTypes.STRING,
			reparam:DataTypes.STRING});
}