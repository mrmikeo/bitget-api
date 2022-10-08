"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitgetWsClient = exports.Listenner = void 0;
const events_1 = require("events");
const util_1 = require("../util");
const config_1 = require("../config");
const ws_1 = __importDefault(require("ws"));
const Console = __importStar(require("console"));
const WsLoginReq_1 = require("../model/ws/WsLoginReq");
const WsBaseReq_1 = require("../model/ws/WsBaseReq");
class Listenner {
}
exports.Listenner = Listenner;
class BitgetWsClient extends events_1.EventEmitter {
    constructor(callBack, apiKey, apiSecret, passphrase) {
        super();
        this.websocketUri = config_1.API_CONFIG.WS_URL;
        this.callBack = callBack;
        this.socket = new ws_1.default(config_1.API_CONFIG.WS_URL, {});
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
        this.passphrase = passphrase;
        this.socket.on('open', () => this.onOpen());
        this.socket.on('close', (code, reason) => this.onClose(code, reason));
        this.socket.on('message', data => this.onMessage(data));
    }
    login() {
        const timestamp = Math.floor(Date.now() / 1000);
        const sign = util_1.encrypt('GET', '/user/verify', null, timestamp, this.apiSecret);
        const wsLoginReq = new WsLoginReq_1.WsLoginReq(this.apiKey, this.passphrase, timestamp.toString(), sign);
        const args = new Array();
        args.push(wsLoginReq);
        const request = new WsBaseReq_1.WsBaseReq('login', args);
        this.send(request);
    }
    subscribe(args) {
        const request = new WsBaseReq_1.WsBaseReq('subscribe', args);
        this.send(request);
    }
    unsubscribe(args) {
        const request = new WsBaseReq_1.WsBaseReq('unsubscribe', args);
        this.send(request);
    }
    send(messageObject) {
        const that = this;
        if (!this.socket)
            throw Error('socket is not open');
        const jsonStr = util_1.toJsonString(messageObject);
        Console.info('sendInfo:' + jsonStr);
        setInterval(() => {
            var _a;
            if (that.isOpen) {
                (_a = this.socket) === null || _a === void 0 ? void 0 : _a.send(jsonStr);
            }
        }, 1000);
    }
    onOpen() {
        this.isOpen = true;
        Console.info(`on open Connected to ${this.websocketUri}`);
        this.initTimer();
        this.emit('open');
    }
    initTimer() {
        this.interval = setInterval(() => {
            if (this.socket) {
                this.socket.send('ping');
            }
        }, 5000);
    }
    onMessage(data) {
        var _a;
        if (typeof data === 'string') {
            (_a = this.callBack) === null || _a === void 0 ? void 0 : _a.reveice(data);
        }
    }
    onClose(code, reason) {
        Console.log(`Websocket connection is closed.code=${code},reason=${reason}`);
        this.socket = undefined;
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
        this.emit('close');
    }
    close() {
        if (this.socket) {
            Console.log(`Closing websocket connection...`);
            this.socket.close();
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
            this.socket = undefined;
        }
    }
}
exports.BitgetWsClient = BitgetWsClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQml0Z2V0V3NDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3dzL0JpdGdldFdzQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBb0M7QUFDcEMsa0NBQTZDO0FBQzdDLHNDQUFxQztBQUNyQyw0Q0FBMkI7QUFDM0IsaURBQW1DO0FBQ25DLHVEQUFrRDtBQUNsRCxxREFBZ0Q7QUFHaEQsTUFBc0IsU0FBUztDQUU5QjtBQUZELDhCQUVDO0FBR0QsTUFBYSxjQUFlLFNBQVEscUJBQVk7SUFVNUMsWUFBWSxRQUFrQixFQUFDLE1BQWMsRUFBRSxTQUFpQixFQUFFLFVBQWtCO1FBQ2hGLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFlBQVksR0FBRyxtQkFBVSxDQUFDLE1BQU0sQ0FBQztRQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksWUFBUyxDQUFDLG1CQUFVLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBRTdCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFD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