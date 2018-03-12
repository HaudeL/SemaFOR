/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('associations', {
    num_RNA: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    nom_asso: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    adresse: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    code_postal: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    ville: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    nom_referent: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    prenom_referent: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    telephone: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    etat_valid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'associations'
  });
};
