/**
 * Created by Administrator on 2014/9/25.
 */
var bodyParser = require('body-parser')
    https=require("https")
    ,url=require("url")
    ,crypto=require("crypto")
    ,_config = require('./config.js')
    ,xmlparse = require('xml2js').parseString;
function wxhelp(){

}
function decrypt(strMess,straes){
    var alg = 'des-ede-cbc';
    var cryptkey=new Buffer(straes+"=", 'base64');
    var iv = new Buffer(16);
    cryptkey.copy(iv, 0, 0, 16);
    var encrypted = new Buffer(strMess, 'base64');
    var decipher = crypto.createDecipheriv('aes-256-cbc', cryptkey, iv);
    decipher.setAutoPadding(false);
    decoded  = decipher.update(encrypted, 'base64', 'utf8');
    decoded += decipher.final( 'utf8' );
    return decoded;
}
wxhelp.prototype.decrypt=decrypt;
function decryptMessage(strMess,corpid,straes){
    var decoded =decrypt(strMess,straes);
    //var strlen=decoded.substr(16,4);
    //var buf = new Buffer("strlen");console.log(buf.readUInt32BE(0));
    var  __end=decoded.lastIndexOf(corpid);
    return decoded.substring(20,__end);
}
wxhelp.prototype.decryptMessage=decryptMessage;
function encrypt(strMess,corpid,straes){
    var alg = 'des-ede-cbc';
    var cryptkey=new Buffer(straes+"=", 'base64');
    var iv = new Buffer(16);
    cryptkey.copy(iv, 0, 0, 16);
    var encrypted = new Buffer(strMess, 'utf8');
    decipher = crypto.createCipheriv('aes-256-cbc', cryptkey, iv);
    decoded  = decipher.update(encrypted, 'utf8', 'base64');
    decoded += decipher.final('base64');
    return decoded;

}
wxhelp.prototype.encrypt=encrypt;

function gen(count) {
    var out = "";
    for (var i=0; i<count; i++) {
        out += (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
    return out;
}

function AES_encrypt(Input,corpid,straes)
{
    var  xBuff = null;
    var len=Input.length + 32 - Input.length % 32;
    var msg = new Buffer(len);
    Input.copy(msg,0,0,Input.length);

    var pad = KCS7Encoder(Input.length);
    pad.copy(msg,Input.length,0,pad.length);

    var alg = 'des-ede-cbc';
    var cryptkey=new Buffer(straes+"=", 'base64');
    var iv = new Buffer(16);
    cryptkey.copy(iv, 0, 0, 16);//HostToNetworkOrder
    decipher = crypto.createCipheriv('aes-256-cbc', cryptkey, iv);
    decipher.setAutoPadding(false);
    decoded  = decipher.update(msg, 'utf8', 'base64');
    decoded += decipher.final('base64');
    return decoded;
}

function encryptMessage(strMess,corpid,straes){

    var Randcode = gen(4);
    var bRand = new Buffer(Randcode, 'utf8');
    var  bCorpid =new Buffer(corpid, 'utf8');
    var btmpMsg = new Buffer(strMess, 'utf8');
    var bMsgLen =HostToNetworkOrder(btmpMsg.length);
    var bMsg = new Buffer(bRand.length + bMsgLen.length + bCorpid.length + btmpMsg.length);
    bRand.copy(bMsg,0,0,bRand.length);
    bMsgLen.copy(bMsg,bRand.length,0,bMsgLen.length);
    btmpMsg.copy(bMsg,bRand.length+bMsgLen.length,0,btmpMsg.length);
    bCorpid.copy(bMsg,bRand.length+bMsgLen.length+btmpMsg.length,0,bMsgLen.length);
    return AES_encrypt(bMsg,corpid,straes);

}
wxhelp.prototype.encryptMessage=encryptMessage;

function getSignatur(timestamp,nonce,token,echostr){
    var array=new Array();
    array[0]=token;
    array[1]=timestamp;
    array[2]=nonce;
    array[3]=echostr;
    array.sort();
    var hasher=crypto.createHash("sha1");
    var msg=array[0]+array[1]+array[2]+array[3];
    hasher.update(msg);
    return hasher.digest('hex');
};
wxhelp.prototype.getSignatur=getSignatur;
function isLegel(signature,timestamp,nonce,token,echostr){
    return signature=getSignatur(timestamp,nonce,token,echostr);
};
wxhelp.prototype.isLegel=isLegel;

var normalize = function(str) {
    return str.toLowerCase();
};
function xmlToJson(_body,errback,callback){
    xmlparse(_body, {trim: true,async:false, ignoreAttrs:true,explicitArray :false,tagNameProcessors:[normalize]}, function(err, result) {
        if (err) return errback(err);
        callback(result["xml"]);
    });
}
wxhelp.prototype.xmlToJson = xmlToJson;


/**
 * KCS7,补位
 *
 * @param a 需要转化的数字
 * @return 转化得到的字符
 */
function KCS7Encoder(text_length)
{
    var  block_size = 32;
    // 计算需要填充的位数
    var  amount_to_pad = block_size - (text_length % block_size); //console.log(amount_to_pad);
    if (amount_to_pad == 0)
    {
        amount_to_pad = block_size;
    }
    // 获得补位所用的字符
    var pad_chr = chr(amount_to_pad);
    var tmp = "";
    for (var index = 0; index < amount_to_pad; index++)
    {
        tmp += pad_chr;
    }
    return  new Buffer(tmp, 'utf8');
}

/**
 * 将数字转化成ASCII码对应的字符，用于对明文进行补码
 *
 * @param a 需要转化的数字
 * @return 转化得到的字符
 */
function chr(a)
{
    return String.fromCharCode(a);
}

function   HostToNetworkOrder(inval)
{
    var outval = 0;
    for (var i = 0; i < 4; i++)
    outval = (outval << 8) + ((inval >> (i * 8)) & 255);
    var buf = new Buffer(4);
    buf.writeInt32LE(outval, 0);
    return buf;

}

function getAccess(errback,callback){
    if(!global.wxclient.tokenObj && global.wxclient.events.getToken){
        global.wxclient.events.getToken(function(data){
            if(data && isValid(data)){
                callback(data);
            }
            else{
                getTokenFormWeb(global.wxclient.config.corpid,global.wxclient.config.secret,errback,callback);
            }
        });
    }else{
        if(isValid(global.wxclient.tokenObj)){
            callback(global.wxclient.tokenObj);
        }
        else{
            getTokenFormWeb(global.wxclient.config.corpid,global.wxclient.config.secret,errback,callback);
        }
    }

}

function isValid(tokenObj) {
    if(!tokenObj){
        return false;
    }
    return (new Date().getTime()) < tokenObj.expireTime;
}

function getTokenFormWeb(corpid,corpsecret,errback,callback){console.log("getTokenFormWeb");
    global.wxclient.tokenObj=null;
    var pathurl=  url.parse(_config.token.url);
    var strhostname = pathurl.hostname;
    var strport = pathurl.port || 443;
    var strpath = pathurl.path+'?corpid='+corpid+'&corpsecret='+corpsecret;
    var _options = {
        hostname: strhostname,
        port:strport,
        path: strpath,
        method:_config.token.method
    };
    httpreq(_options,"",errback,function(data){
        var _obj=JSON.parse(data);
        var expireTime = (new Date().getTime()) + (_obj.expires_in - 100) * 1000;
        var _token={
            accessToken:_obj.access_token
            ,expireTime:expireTime
        }
        global.wxclient.tokenObj=_token;
        if(global.wxclient.events.saveToken){
            global.wxclient.events.saveToken(_token);
        }
        callback(_token);
    });
}

function sendObj(_cfg,obj,errback,callback){
    getAccess(errback,function(data){
        var pathurl=  url.parse(_cfg.url);
        var strhostname = pathurl.hostname;
        var strport = pathurl.port || 443;
        var strpath = pathurl.path+'?access_token='+data.accessToken;
        if(obj && _cfg.method.toLowerCase()=="get"){
            strpath+="&"+paramParse(obj);
        }
        var bpmMessage="";
        var _options = {
            hostname: strhostname,
            port:strport,
            path: strpath,
            method:_cfg.method
        };
        if(obj){
            bpmMessage=JSON.stringify(obj);
            _options.headers={
                'accept': '*/*',
                "Content-Type": 'text/xml'
                , 'Content-Length' : Buffer.byteLength(bpmMessage, 'utf8')
            }
        }
        httpreq(_options,bpmMessage,errback,callback);
    })

}
wxhelp.prototype.sendObj = sendObj;

function httpreq(options,obj,errback,callback){
    var req =https.request(options, function (res) {
        var sumlength = 0
            ,isEnd=true;
        if (res.headers["content-length"]) {
            sumlength = parseInt(res.headers["content-length"]);
        }
        res.socket.setTimeout(3000, function(){
            res.socket.destroy();
        });
        if (res.statusCode == 200) {
            var buffers=[];
            res.on('data', function (buffer) {
                buffers.push(buffer);
            });
            res.on('end',function () {
                callback(buffers.toString("utf8"));
            }).on('error', function (e) {
                errback(e);
            });
        }
        else if(res.statusCode == 302)
        {
            if(res.headers && res.headers.location)
            {
                var pathurl=  url.parse(res.headers.location);
                options.hostname=pathurl.hostname;
                options.port=pathurl.port || "443";
                options.path=pathurl.path;
                httpreq(options,obj,errback,callback);
            }
            else
            {
                errback(403);
            }
        }
        else {
            errback(res.statusCode);
        }
    });
    req.on('error', function(e) {
        errback(e);
    });
    req.write(obj+"\n");
    req.end();
}

function buildParams( prefix, obj, add ) {
    var name;
    add( prefix, obj );
}

function paramParse(obj){
    var s = [],
        add = function( key, value ) {
            s[s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
        };

    for (var  prefix in obj) {
        buildParams( prefix, obj[ prefix ], add );
    }

    // Return the resulting serialization
    return s.join( "&" );
}


function extend(toobj,baseobj){
   if(!toobj){
       toobj={};
   }
   if(baseobj){
       for(var attr in  baseobj){
           toobj[attr]=baseobj[attr];
       }
   }

}
wxhelp.prototype.extend = extend;
module.exports = new wxhelp();