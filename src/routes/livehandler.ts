import { Request, Response } from 'express';
const livehandler = (req: Request, res: Response) => {
    res.render('Live', {
        title: 'livehandler',
        streamname: req.params.streamname
    })
}

export default livehandler;