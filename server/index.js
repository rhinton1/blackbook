import express from 'express';
import http from 'http';
import chalk from 'chalk';

const app = express();
const server = http.createServer(app);

app.use(express.json())

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(chalk.greenBright(`BlackBook Server listening on ${port}...`));
});