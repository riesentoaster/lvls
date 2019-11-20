# localvideolivestream

lvls is a project designed to allow for local video-livestreaming even without a internet connection. It uses [OBS](www.obsproject.com) as a streaming source and uses webbrowsers to play the video.

## setup

### server

In bash, navigate to the desired location and clone this git repository: 

```bash
git clone https://github.com/riesentoaster/lvls.git
```

Change directory to the folder just created:
```bash
cd lvls
```

If you haven't already, install [node.js](https://nodejs.org/en/download/).

Install nodejs-packages:
```bash
npm install
```

Run the server:
```bash
npm run start
```

### obs

The server will output you the address for obs to stream to. It will take the form of `rtmp://\[server ip\]/live`.
The stream key is used as the name of the livestream.

### clients

The server will also output the address for the clients (smartphones, computers etc.) to connect to. It will take the form of `http://\[server ip\:3000/]`.