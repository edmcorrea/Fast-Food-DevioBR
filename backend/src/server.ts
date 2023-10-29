import "dotenv/config";
import app = require('./App');

const port = 3001;

app.listen(port, () => console.log('RUNNING PORT -', port));