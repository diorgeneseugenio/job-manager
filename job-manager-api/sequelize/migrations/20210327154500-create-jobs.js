module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "jobs",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      companyId: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
          model: "companies",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
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
      },
      skills: {
        type: DataTypes.STRING,
      },
      allowRemote: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      ended: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      charset: "utf8",
    }
  );
};

module.exports.down = (queryInterface) => queryInterface.dropTable("jobs");
