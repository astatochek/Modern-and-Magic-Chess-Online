'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Style extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, UserStyle }) {
      Style.belongsToMany(User, { through: UserStyle });
    }
  }

  Style.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      pieceColor: {
        type: DataTypes.ENUM('black', 'white'),
        allowNull: false,
      },

      typeOfPiece: {
        type: DataTypes.ENUM('bishop', 'king', 'pawn', 'queen', 'rook'),
        allowNull: false,
      },

      packName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      fileId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'style',
      modelName: 'Style',
    }
  );
  return Style;
};
