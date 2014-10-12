/**
 * 微信企业号，主动发送消息
 * @namespace send
 * @module send
 * @class send
 *
 */
var  _help = require('../wx_help.js');
var  _config = require('../config.js').send;
function _message(){


/**
 * msgtype	 是	 消息类型，此时固定为：text
 agentid	 是	 企业应用的id，整型。可在应用的设置页面查看
 content	 是

 如果对应用或收件人、部门、标签任何一个无权限，则本次发送失败；如果收件人、部门或标签不存在，发送仍然执行，但返回无效的部分。
 {
    "errcode": 0,
    "errmsg": "ok",
    "invaliduser": "UserID1",
    "invalidparty":"PartyID1",
    "invalidtag":"TagID1"
 }

 (content,agentid,touser,toparty,totag,issafe,errback,callback)
 */
this.text=function(){
    var args =  Array.prototype.slice.call(arguments, 0)
        , has_callback = typeof args[args.length - 1] === 'function'
        , has_errback = typeof args[args.length - 2] === 'function'
        , callback = has_callback ? args.pop() : function(){}
        , errback = has_errback ? args.pop() : function(){}
        , len = args.length
        , content = len >= 1 ? args[0] :""
        , agentid = len >= 2 ? args[1] : 1
        , touser = len >= 3 ? args[2] : ""
        , toparty = len >= 4 ? args[3] : ""
        , totag = len >= 5 ? args[4] : ""
        , issafe = len >=6 ? args[5] :false;
    var _obj={
        "touser": touser,
        "toparty": toparty,
        "totag": totag,
        "msgtype": "text",
        "agentid": agentid,
        "text": {
            "content": content
        },
        "safe":(issafe?"1":"0")
    };
    _help.sendObj(_config,_obj,errback,callback);
}

/**
 * msgtype	 是	 消息类型，此时固定为：text
 agentid	 是	 企业应用的id，整型。可在应用的设置页面查看
 content	 是
 (MEDIA_ID,agentid,touser,toparty,totag,issafe,errback,callback)
 */
this.image=function(){
    var args =  Array.prototype.slice.call(arguments, 0)
        , has_callback = typeof args[args.length - 1] === 'function'
        , has_errback = typeof args[args.length - 2] === 'function'
        , callback = has_callback ? args.pop() : null
        , errback = has_errback ? args.pop() : null
        , len = args.length
        , media_id = len >= 1 ? args[0] :""
        , agentid = len >= 2 ? args[1] : 1
        , touser = len >= 3 ? args[2] : ""
        , toparty = len >= 4 ? args[3] : ""
        , totag = len >= 5 ? args[4] : ""
        , issafe = len >=6 ? args[5] :false;
    var _obj={
        "touser": touser,
        "toparty": toparty,
        "totag": totag,
        "msgtype": "image",
        "agentid": agentid,
        "image": {
            "media_id": media_id
        },
        "safe":(issafe?"1":"0")
    };
    _help.sendObj(_config,_obj,errback,callback);
}
/**
 * msgtype	 是	 消息类型，此时固定为：text
 agentid	 是	 企业应用的id，整型。可在应用的设置页面查看
 content	 是
 (media_id,agentid,touser,toparty,totag,issafe,errback,callback)
 */
this.voice=function(){

    var args =  Array.prototype.slice.call(arguments, 0)
        , has_callback = typeof args[args.length - 1] === 'function'
        , has_errback = typeof args[args.length - 2] === 'function'
        , callback = has_callback ? args.pop() : null
        , errback = has_errback ? args.pop() : null
        , len = args.length
        , media_id = len >= 1 ? args[0] :""
        , agentid = len >= 2 ? args[1] : 1
        , touser = len >= 3 ? args[2] : ""
        , toparty = len >= 4 ? args[3] : ""
        , totag = len >= 5 ? args[4] : ""
        , issafe = len >=6 ? args[5] :false;
    var _obj={
        "touser": touser,
        "toparty": toparty,
        "totag": totag,
        "msgtype": "voice",
        "agentid": agentid,
        "image": {
            "media_id": media_id
        },
        "safe":(issafe?"1":"0")
    };
    _help.sendObj(_config,_obj,errback,callback);
}
/**
 * msgtype	 是	 消息类型，此时固定为：text
 agentid	 是	 企业应用的id，整型。可在应用的设置页面查看
 content	 是
 (MEDIA_ID,agentid,touser,toparty,totag,title,Description,issafe,errback,callback)
 */
this.video=function(){
    var args =  Array.prototype.slice.call(arguments, 0)
        , has_callback = typeof args[args.length - 1] === 'function'
        , has_errback = typeof args[args.length - 2] === 'function'
        , callback = has_callback ? args.pop() : null
        , errback = has_errback ? args.pop() : null
        , len = args.length
        , media_id = len >= 1 ? args[0] :""
        , agentid = len >= 2 ? args[1] : 1
        , touser = len >= 3 ? args[2] : ""
        , toparty = len >= 4 ? args[3] : ""
        , totag = len >= 5 ? args[4] : ""
        , title = len >= 6 ? args[5] : ""
        , description = len >= 7 ? args[6] : ""
        , issafe = len >=8 ? args[7] :false;
    var _obj={
        "touser": touser,
        "toparty": toparty,
        "totag": totag,
        "msgtype": "video",
        "agentid": agentid,
        " video": {
            "media_id": media_id,
            "title": title,
            "description": description
        },
        "safe":(issafe?"1":"0")
    };
    _help.sendObj(_config,_obj,errback,callback);
}


    /**
     * msgtype	 是
     agentid	 是	 企业应用的id，整型。可在应用的设置页面查看
     content	 是
     (MEDIA_ID,agentid,touser,toparty,totag,issafe,errback,callback)
     */
this.file=function( ){

    var args =  Array.prototype.slice.call(arguments, 0)
        , has_callback = typeof args[args.length - 1] === 'function'
        , has_errback = typeof args[args.length - 2] === 'function'
        , callback = has_callback ? args.pop() : null
        , errback = has_errback ? args.pop() : null
        , len = args.length
        , media_id = len >= 1 ? args[0] :""
        , agentid = len >= 2 ? args[1] : 1
        , touser = len >= 3 ? args[2] : ""
        , toparty = len >= 4 ? args[3] : ""
        , totag = len >= 5 ? args[4] : ""
        , issafe = len >=6 ? args[5] :false;
    var _obj={
        "touser": touser,
        "toparty": toparty,
        "totag": totag,
        "msgtype": "file",
        "agentid": agentid,
        "image": {
            "media_id": media_id
        },
        "safe":(issafe?"1":"0")
    };
    _help.sendObj(_config,_obj,errback,callback);
}

/**
 * msgtype	 是	 消息类型，此时固定为：text
 agentid	 是	 企业应用的id，整型。可在应用的设置页面查看
 content	 是
 [
 {
     "title": "Title",
     "description": "Description",
     "url": "URL",
     "picurl": "PIC_URL",
 }
 ]
 title	 否	 标题
 description	 否	 描述
 url	 否	 点击后跳转的链接。企业可根据url里面带的code参数校验员工的真实身份。具体参考“9 微信页面跳转员工身份查询”
 picurl	 否	 图文消息的图片链接，支持JPG、PNG格式，较好的效果为大图640*320，小图80*80。如不填，在客户端不显示图片
 (newslist,agentid,touser,toparty,totag,errback,callback)
 */
this.news=function(){
    var args =  Array.prototype.slice.call(arguments, 0)
        , has_callback = typeof args[args.length - 1] === 'function'
        , has_errback = typeof args[args.length - 2] === 'function'
        , callback = has_callback ? args.pop() : null
        , errback = has_errback ? args.pop() : null
        , len = args.length
        , newslist = len >= 1 ? args[0] :""
        , agentid = len >= 2 ? args[1] : 1
        , touser = len >= 3 ? args[2] : ""
        , toparty = len >= 4 ? args[3] : ""
        , totag = len >= 5 ? args[4] : ""
        , issafe = len >=6 ? args[5] :false;
    var _obj={
        "touser": touser,
        "toparty": toparty,
        "totag": totag,
        "msgtype": "news",
        "agentid": agentid,
        "news": {
            "articles":newslist
        }
    };
    _help.sendObj(_config,_obj,errback,callback);
}

/**
 * msgtype	 是	 消息类型，此时固定为：text
 agentid	 是	 企业应用的id，整型。可在应用的设置页面查看
 content	 是
 [
 {
                     "thumb_media_id": "id",
                     "author": "Author",
                     "content_source_url": "URL",
                     "content": "Content"
                     "digest": "Digest description",
                     "show_cover_pic": "0"
                 }
 ]

 humb_media_id	 是	 图文消息缩略图的media_id, 可以在上传多媒体文件接口中获得。此处thumb_media_id即上传接口返回的media_id
 title	 是	 图文消息的标题
 author	 否	 图文消息的作者
 content_source_url	 否	 图文消息点击“阅读原文”之后的页面链接
 content	 是	 图文消息的内容，支持html标签
 digest	 否	 图文消息的描述
 show_cover_pic	 否	 是否显示封面，1为显示，0为不显示
 (newslist,media_id,agentid,touser,toparty,totag,issafe,errback,callback)
 */
this.mpnews=function(){
    var args =  Array.prototype.slice.call(arguments, 0)
        , has_callback = typeof args[args.length - 1] === 'function'
        , has_errback = typeof args[args.length - 2] === 'function'
        , callback = has_callback ? args.pop() : null
        , errback = has_errback ? args.pop() : null
        , len = args.length
        , newslist = len >= 1 ? args[0] :""
        , media_id= len >= 2 ? args[1] :""
        , agentid = len >= 3 ? args[2] : 1
        , touser = len >= 4 ? args[3] : ""
        , toparty = len >= 5 ? args[4] : ""
        , totag = len >= 6 ? args[5] : "";
    var _obj={
        "touser": touser,
        "toparty": toparty,
        "totag": totag,
        "msgtype": "mpnews",
        "agentid": agentid,
        "mpnews": {
            "articles":newslist
            ,"media_id": media_id
        },
        "safe":(issafe?"1":"0")
    };
    _help.sendObj(_config,_obj,errback,callback);
}

}
module.exports =new _message();