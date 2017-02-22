# AT&T Hackathon Raspberry Pi Sound Sensor Data to Websocket Starter Kit

In this demo, we will be getting our hands dirty the Raspberry Pi and Nodejs. We will be writing a simple program in Node.js to listen to a sound sensor and then send that data to a webpage so we can visualize the data live! Sounds cool right?

Okay, first of all, what are WebSockets? Well, WebSockets is a technology, based on the ws protocol, that makes it possible to establish a continuous full-duplex connection stream between a client and a server.  A typical websocket client would be a user's browser, but the protocol is platform independent. It is the closest API to a raw network socket in the browser. Except a WebSocket connection is also much more than a network socket, as the browser abstracts all the complexity behind a simple API and provides a number of additional services:

* Connection negotiation and same-origin policy enforcement
* Interoperability with existing HTTP infrastructure
* Message-oriented communication and efficient message framing
* Subprotocol negotiation and extensibility

This is a demo shows a demo of a client connecting to a websocket server and sharing data.

## Materials

* 1 x Raspberry Pi (We used a Raspberry Pi 3 Model B for this demo)
* 1 x Breadboard
* 1 x PCF8591
* 1 x Sound Sensor Module
* 1 x 3-Pin anti reverse jumper cable
* Several M to F jumper cables

## Schematics

![3](https://cloud.githubusercontent.com/assets/4650739/23232681/4937d5c8-f8f0-11e6-82f6-17ee0f1e27a1.png)


## Prerequesites

* Node js should be installed on your Pi - [Check out this article for tips](https://www.losant.com/blog/how-to-install-nodejs-on-raspberry-pi)
* NPM should be installed on your Pi


## Setup Your Project

Download and unpack [the project](https://github.com/devleague/ATT-Hack-RPi-Sound-Sensor-Websocket-Starter-Kit) on your Raspberry Pi in the directory of your choice. Or alternatively checkout from source:

    git clone git@github.com:devleague/ATT-Hack-RPi-Sound-Sensor-Websocket-Starter-Kit.git
    cd ATT-Hack-RPi-Sound-Sensor-Websocket-Starter-Kit

Next, inside the project, you need to install the project's various NPM dependencies:

    npm install

And you should now be ready to spin up a development build of your new project:

    npm start

Navigate to [http://localhost:3001](http://localhost:3001) in your browser of choice.

## For use on a Rasperberry Pi
Since this is the IoT, let us expose our localhost as a publicly accessible URL. For that we will use ngrok.


To use Ngrok you need to download ngrok application to your Raspberry Pi.  To do that type the following command on your Raspberry Pi terminal:

    sudo wget https://dl.ngrok.com/ngrok_2.0.19_linux_arm.zip

and then unzip it using:

    sudo unzip ngrok_2.0.19_linux_arm.zip


This will take a few minutes, please be patient. Once the download is completed, we will unzip it. Run

    unzip ngrok.zip

You will have to sign up with ngrok to establish a secure connection with your Pi. To create a ngrok account click here and then click signup to get an authtoken key. This token is necessary if you want your own custom domain doing an online SSH.

You need to embed this token to your Raspberry Pi in the command line using:

    ./ngrok authtoken  yourauthtoken

Now, that is done, we will restart the node server. Run

    sudo node server.js

Open a new terminal/putty into the Pi and cd into the ngrok folder. And from there run

    ./ngrok http 3001

3001 is the port number we have used in server.js. This will give you a public URL. You can use either the http or https version. Open a browser on your computer and navigate to  http://41b9687d.ngrok.com/trigger where  http://41b9687d.ngrok.com needs to be replaced with your ngrok URL.

If everything is okay, as soon as you connect to the address, a new websocket will be created and you will be able to tranmist data between the client and the server.


##Contributing

1. Fork it!
2. Create your feature branch: ```git checkout -b my-new-feature```
3. Commit your changes: ```git commit -am 'Add some feature'```
4. Push to the branch: ````git push origin my-new-feature````
5. Submit a pull request :D

##Credits

- [DevLeague](http://www.devleague.com/)
- [Jr. DevLeague](http://jrdevleague.com/)