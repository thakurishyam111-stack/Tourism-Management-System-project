 
const app = require('./src/app');
const port = process.env.PORT || 8080;
connect();

app.listen(8080, () => {
  console.log(`server is running on port ${port} `)
});