/**
 * Created by Administrator on 2014/9/26.
 */
var bodyParser = require('body-parser')
    ,wx_help = require('./wx_help.js')
    ,wx_reply = require('./wx_reply.js')
    ,wx_send = require('./wx_send.js');
function qywechat(conf){
    var _config={
        signature:""
        ,timestamp:""
        ,nonce:""
        ,corpid:""
        ,token:""
        ,straes:""
        ,echostr:""
    }
    var events={
        text:function(req, res, next){next();}
        ,image:function(req, res, next){next();}
        ,voice:function(req, res, next){next();}
        ,video:function(req, res, next){next();}
        ,location:function(req, res, next){next();}
        ,event:{
            subscribe:function(req, res, next){next();}//订阅
            ,unsubscribe:function(req, res, next){next();}//取消订阅
            ,click:function(req, res, next){next();}//
            ,view:function(req, res, next){next();}//
            ,location:function(req, res, next){next();}//
        }
    }
    if(conf){
        for(var attr in events){
            if(typeof conf[attr]==="function"){
                events[attr]=conf[attr];
                delete  conf[attr];
            }
        }
        for(var attr in conf){
            _config[attr]= conf[attr];
        }
    }
    //首次验证
    function  firstVerifyAuth(req, res, next) {
        if(wx_help.isLegel(_config.signature,_config.timestamp,_config.nonce,_config.token,req.query.echostr)){
            res.writeHead(200);
            res.end(wx_help.decryptMessage(req.query.echostr,_config.corpid,_config.straes));
        }
        else{
            res.writeHead(401);
            res.end('Invalid signature');
        }
    }

    //处理接收到的微信信息
    function getWeixin(req, res, next){
        wx_help.xmlToJson(req.body,function(err){
            next(err)},function(_body){
            req.body=_body;
            var _message=wx_help.decryptMessage(req.body["encrypt"],_config.corpid,_config.straes);
            wx_help.xmlToJson(_message,function(err){
                next(err)},function(data){
                req.body=data;
                req.wechat.agentid=data.agentid;
                req.wechat.msgid=data.msgid;
                var _type=req.body["msgtype"];
                var _func=events[_type];
                if(typeof _func==="function"){
                    res.replay=new wx_reply(req, res);
                    _func(req, res, next);
                }
                else{
                    next();
                }
            });
        });


    }
    return function (req, res, next) {
        // console.log(req);  console.log(req.url);console.log(url.parse(req.url,true));
        // req.query=url.parse(req.url,true).query;
        _config.signature=req.query.msg_signature;
        _config.timestamp=req.query.timestamp;
        _config.nonce=req.query.nonce;
        req.wechat =_config;
        if(req.method.toLowerCase()=="get"){
            firstVerifyAuth(req, res, next);
        }
        else
        {
            var _funcbody=bodyParser.text({ type: 'text/xml' });
            _funcbody(req,res,function(){
                getWeixin(req, res, next);
            });
        }
    };
}
module.exports = qywechat;