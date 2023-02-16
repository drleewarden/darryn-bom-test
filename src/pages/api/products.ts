import axios from 'axios';

const url = `http://alltheclouds.com.au/api/Products`;
const config = {
  headers: {
    'api-key': process.env.ALL_THE_CLOUDS_TOKEN,
  },
};

export default async function handler(req: string, res: any) {
  let result = await axios.get(url, config);
  res.status(200).send(result.data);
}
