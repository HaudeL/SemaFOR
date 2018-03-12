/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('periode_echange', {
    id_periode_echange: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_materiel: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'materiel',
        key: 'id_materiel'
      }
    },
    date_debut_ech: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    date_fin_ech: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    tableName: 'periode_echange'
  });
};
