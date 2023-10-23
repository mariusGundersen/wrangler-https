import * as fs from 'node:fs/promises';
import https from 'node:https';

const options = {
  key: await fs.readFile('localhost.key'),
  cert: await fs.readFile('localhost.crt')
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Hello world\n');
}).listen(8000);