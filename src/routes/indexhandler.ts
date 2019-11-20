import { Request, Response } from 'express';
import axios from 'axios';
const indexhandler = async (req: Request, res: Response) => {
    let streamnames: any[] = [];
    await axios.get('http://localhost:3000/streamsapi')
        .then((response: any) => {
            if (Object.keys(response.data).length !== 0) {
                streamnames = Object.keys(response.data['live']);
                streamnames.sort();
            }
        }).catch((err) => { throw err });
    res.render('index', {
        title: 'Home',
        streamnames: streamnames,
    })
}

export default indexhandler;