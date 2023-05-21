'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Board extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Game, {
        foreignKey: 'gameId',
      }); 
      this.hasMany(models.Character, {
        foreignKey: 'id',
      }); 
      this.belongsTo(models.Player, {
        foreignKey: 'playerId',
      }); 
    }
  }
  Board.init({
    playerId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER,
    misterious: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Board',
  });
  return Board;
};