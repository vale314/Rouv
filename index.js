const express = require('express');
const router = new express.Router();
const path = require('path');
const app = express();


app.use(express.static('./server/dev/static/'));

app.use(express.static('./client/dist/'));



router.get('*', (req,res)=>{

  res.sendFile(path.join(__dirname, './server/dev/static/', 'index.html'));
  console.log('404')
})



app.use('/', router);
app.listen(3001 /*process.env.PORT || 3000  ,*/ ,'192.168.1.76', () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});
