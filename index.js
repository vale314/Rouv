const express = require('express');

const app = express();



app.use(express.static('./server/static/'));

app.use(express.static('./client/dist/'));

app.listen(process.env.PORT || 3000 , /*'192.168.1.76'*/ () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});
