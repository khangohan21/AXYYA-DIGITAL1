const  express = require('express');
const  app = express();
app.get('/', function (req, res) {
    res.send('{ "response": "Hello World" }');
});
app.listen(process.env.PORT || 3000);
console.log('Server ready')
