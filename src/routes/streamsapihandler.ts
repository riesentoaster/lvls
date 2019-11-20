import axios from 'axios';
import { Request, Response } from 'express';
const streamapihandler = (req: Request, res: Response) => {
    axios.get('http://localhost:8000/api/streams')
        .then((response) => {
            res.send(JSON.stringify(response.data));
        }).catch(err => { throw err });
}

export default streamapihandler;