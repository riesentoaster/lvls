# localvideolivestream

lvls is a project designed to allow for local and offline video-livestreaming. It uses OBS as a streaming source and webbrowsers to play the video. It supports multiple stream sources and provides a basic GUI for users to choose which stream to watch.

- [Setup](#Setup)
  - [Server](#Server)
  - [OBS](#OBS)
  - [Clients](#Clients)
- [FAQ](#FAQ)

## Setup

### Server

1) In bash, navigate to the desired location and clone this git repository: 

```bash
git clone https://github.com/riesentoaster/lvls.git
```

2) Change directory to the folder just created:
```bash
cd lvls
```

3) If you haven't already, install [node.js](https://nodejs.org/en/download/).

4) Install nodejs-packages:
```bash
npm install
```

You will see a few `WARN optional` and `WARN notsup`. This is due to the [ffmpeg-installer-package](https://www.npmjs.com/package/@ffmpeg-installer/ffmpeg) and can be ignored.

5) Run the server:
```bash
npm run start
```

### OBS

Install [OBS](https://www.obsproject.com). The server will output you the address for OBS to stream to. It will take the form of `rtmp://[server ip]/live`. The stream key is used as the name of the livestream.

### Clients

The server will also output the address for the clients (smartphones, computers etc.) to connect to. It will take the form of `http://[server ip]:3000/`.


## FAQ

#### Can lvls be used without an internet connection?

The installation (steps 1-4) requires an internet connection, after that the server can be run offline with `npm run start`.

#### Can lvls be used to only stream audio?

Technically no, but if you don't have a video source you don't have to select one in OBS. In this case, all users will just see a black screen. You could also just select a static image for your users to see.
