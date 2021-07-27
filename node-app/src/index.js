const express = require('express');
const path = require('path');
const faker = require('faker');

const People = require('./models/People');
require('./database');

const PORT = process.env.PORT || 3000;
const app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', async (req, res) => {
	let peoples = [];

	try {
		peoples = await People.findAll();
		const newPeople = await People.create({ name: faker.name.findName() });
		peoples.push(newPeople);
	} catch (err) {
		console.error(err);
	}

	res.render('index', { peoples });
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
