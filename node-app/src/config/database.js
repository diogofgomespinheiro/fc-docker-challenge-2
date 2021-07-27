module.exports = {
	dialect: 'mysql',
	host: process.env.SQL_DATABASE_HOST,
	username: process.env.SQL_DATABASE_USER,
	password: process.env.SQL_DATABASE_PASSWORD,
	database: process.env.SQL_DATABASE_NAME,
	define: {
		timestamps: true,
		underscored: true,
	},
};
