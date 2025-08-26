import express, { Request, Response } from 'express';
import { json } from 'body-parser';

const app = express();
app.use(json());

app.get('/health', (_req: Request, res: Response) => {
  res.send({ status: 'ok' });
});

app.listen(3000, () => {
  console.log('Gateway running on port 3000');
});
