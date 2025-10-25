const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

module.exports = {
    PORT : process.env.PORT
}