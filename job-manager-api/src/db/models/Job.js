import { DataTypes, Model } from "sequelize";

import sequelize from "../connection";

export class Job extends Model {}
Job.init(
  {
    companyId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: "companies",
        key: "id",
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    salary: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    benefits: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    skills: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    allowRemote: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    ended: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  { modelName: "job", sequelize }
);
