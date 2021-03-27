import { DataTypes, Model } from "sequelize";

import sequelize from "./connection";

export class Company extends Model {}
Company.init(
  {
    logo: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    aboutDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { modelName: "company", sequelize }
);
