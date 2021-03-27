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
        allowNull: false,
        required: true,
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
