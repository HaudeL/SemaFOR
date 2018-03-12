/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('periode_indispo', {
    id_periode_indispo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_materiel: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    date_debut_ind: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    date_fin_ind: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    tableName: 'periode_indispo'
  });
};
