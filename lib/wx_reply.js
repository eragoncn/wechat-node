/**
 * Created by Administrator on 2014/9/25.
 */
var crypto=require("crypto")
    ,wx_help = require('./wx_help.js');
function wx_replay(req,res){
    var _replay=this;
    res.header("Content-Type", "text/xml;charset=utf-8");
    _replay={
        req:req
       ,res:res
    };
    function getRaplayArr(){
        return  ['<xml>',
                '<ToUserName><![CDATA['+_replay.req.body.fromusername+']]></ToUserName>',
                '<FromUserName><![CDATA['+_replay.req.body.tousername+']]></FromUserName>']
    }
    _replay.text=function(text){
        var _text="您发送的是："+_replay.req.body.content+".现在的时间是："+new Date().toString();
        var _config= _replay.req.wechat;
        var _timestamp = new Date().getTime().toString().substr(0,10);
        var encrypt =getRaplayArr();
        encrypt.push('<CreateTime>'+_timestamp+'</CreateTime>');
        encrypt.push('<MsgType>text</MsgType>');
        encrypt.push('<Content><![CDATA['+_text+']]></Content>');
//        encrypt.push('<MsgId>'+_config.msgid+'></MsgId>');
//        encrypt.push('<AgentID>'+_config.agentid+'></AgentID>');
        encrypt.push('</xml>');
        var _encrypt=wx_help.encryptMessage(encrypt.join(''),_config.corpid,_config.straes);

        var _signature=wx_help.getSignatur(_timestamp,_config.nonce,_config.token,_encrypt);
        var _xml = ['<xml>'];
        _xml.push('<Encrypt><![CDATA['+_encrypt+']]></Encrypt>');
        _xml.push('<MsgSignature><![CDATA['+_signature+']]></MsgSignature>');
        _xml.push('<TimeStamp><![CDATA['+_timestamp+']]></TimeStamp>');
        _xml.push('<Nonce><![CDATA['+_config.nonce+']]></Nonce>');
        _xml.push('</xml>');
        console.log(_xml.join(''));
        _replay.res.end(_xml.join(''));
        _replay=null;
    };
    return _replay;
//https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=ACCESS_TOKEN
}
module.exports = wx_replay;


