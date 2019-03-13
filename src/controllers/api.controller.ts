import _express from "express";
import _http from 'http';
import _io from 'socket.io';

export class api {

    app: any;
    http: any;
    io: any;

    constructor() {
        this.app = _express();
        // @ts-ignore
        this.http = _http.Server(this.app);
        this.io = _io(this.http);

        this.app.get('/', (req: any, res: any) => {
            res.send(`<h1>Hello world!</h1>`);
        });

        this.http.listen(3000, () => {
            console.log('listening on *:3000')
        })
    }
}