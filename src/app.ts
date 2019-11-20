//copy video.js from module to server
import fs from 'fs';
fs.copyFile('node_modules/video.js/dist/video.js', 'public/javascripts/video.js', (err) => { if (err) { console.log(err) } });
fs.copyFile('node_modules/video.js/dist/video-js.css', 'public/stylesheets/video-js.css', (err) => { if (err) { console.log(err) } });
fs.copyFile('node_modules/@videojs/http-streaming/dist/videojs-http-streaming.js', 'public/javascripts/videojs-http-streaming.js', (err) => { if (err) { console.log(err) } });

//start rtmp server
import nms from './streamingserver';
nms();

//webserver:
import createError from 'http-errors';
import express from 'express';
const app = express();
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan'
import getIP from './getIP';

import router from './router/router';

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './../public')));
app.use(router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});


// error handler
app.use((err: any, req: any, res: any, next: any) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(3000, () => {
    console.log('------------------------------------');
    getIP().map((ip) => {
        console.log(`URL for OBS: rtmp://${ip}/live, use the desired stream name as the stream key.`);
        console.log(`URL for clients: http://${ip}:3000/`);
    })
    console.log('------------------------------------');
})