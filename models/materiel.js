/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('materiel', {
    id_materiel: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    categorie: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    categorie_sup: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    intitule: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    descriptif: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    prix: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    situation_geo: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    num_RNA: {
      type: DataTypes.STRING(10),
      allowNull: false,
      references: {
        model: 'associations',
        key: 'num_RNA'
      },
      classMethods:{
        associate: function(models){
          models.materiel.hasMany(models.association)
        }
      }}
    
  }, {
    tableName: 'materiel'
  });
};
