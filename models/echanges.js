/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('echanges', {
    id_echange: {
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
    num_RNA_pret: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'associations',
        key: 'num_RNA'
      }
    },
    num_RNA_emprunt: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'associations',
        key: 'num_RNA'
      }
    },
    id_periode_echange: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'periode_echange',
        key: 'id_periode_echange'
      }
    }
  }, {
    tableName: 'echanges'
  });
};
