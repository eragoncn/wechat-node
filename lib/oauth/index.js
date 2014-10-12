/**
 * 微信企业号，OAuth2验证接口
 * 企业应用中的URL链接（包括自定义菜单或者消息中的链接），可以通过OAuth2.0来获取员工的身份信息。
 * 注意，此URL的域名，必须完全匹配企业应用设置项中的'可信域名'，否则获取用户信息时会返回50001错误码。
 * @namespace oauth
 * @module oauth
 * @class  oauth
 *
 */
var  _help = require('../wx_help.js');
var  _config = require('../config.js').media;
function _oauth(){


    /**
     * 企业获取code
     * @method authorize
     * @param appid {String} 企业的CorpID
     * @param redirect_uri {String} 授权后重定向的回调链接地址，请使用urlencode对链接进行处理
     * @param response_type {String} 返回类型，此时固定为：code
     * @param scope {String} 应用授权作用域，此时固定为：snsapi_base
     * @param [state] {String} 重定向后会带上state参数，企业可以填写a-zA-Z0-9的参数值
     * @param wechat_redirect {String} 微信终端使用此参数判断是否需要带上身份信息
     * @param [errback] {Funciton} 发生错误时的回调函数
     * @param [callback] {Funciton} 正确响应后的回调函数
     * @return  员工点击后，页面将跳转至 redirect_uri/?code=CODE&state=STATE，企业可根据code参数获得员工的userid
     * @example
     * https://open.weixin.qq.com/connect/oauth2/authorize?appid=CORPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect
     * {
       "appid": "",
       "redirect_uri": " ",
       "response_type": "",
       "scope": "",
       "state": "",
       "wechat_redirect": ""
     }
     */
    this.authorize=function(){
        var args =  Array.prototype.slice.call(arguments, 0)
            , has_callback = typeof args[args.length - 1] === 'function'
            , has_errback = typeof args[args.length - 2] === 'function'
            , callback = has_callback ? args.pop() : null
            , errback = has_errback ? args.pop() : null
            , len = args.length
            , obj = len >= 1 ? args[0] :null ;
        var _obj={
            "appid": "",
            "redirect_uri": "",
            "response_type": "",
            "scope": "",
            "state": "",
            "wechat_redirect": ""
        };
        _help.extend(_obj,obj);
        _help.sendObj(_config.authorize,_obj,errback,callback);
    }

    /**
     * 根据code获取成员信息
     * @method userinfo
     * @param code {String} 通过员工授权获取到的code，每次员工授权带上的code将不一样，code只能使用一次，5分钟未被使用自动过期
     * @param agentid {String} 跳转链接时所在的企业应用ID
     * @param [errback] {Funciton} 发生错误时的回调函数
     * @param [callback] {Funciton} 正确响应后的回调函数
     * @return {JSON}
     a)正确时返回示例如下：
     {
        “UserId”:”USERID”
     }
     出错时返回示例如下：
     {
        "errcode": "40029",
        "errmsg": "invalid code"
     }
     * @example
     {
        "code": ""
        ,"agentid": ""
    }
     */
    this.userinfo=function(){
        var args =  Array.prototype.slice.call(arguments, 0)
            , has_callback = typeof args[args.length - 1] === 'function'
            , has_errback = typeof args[args.length - 2] === 'function'
            , callback = has_callback ? args.pop() : null
            , errback = has_errback ? args.pop() : null
            , len = args.length
            , obj = len >= 1 ? args[0] :null ;
        var _obj={
            "code": ""
            ,"agentid": ""
        };
        _help.extend(_obj,obj);
        _help.sendObj(_config.userinfo,_obj,errback,callback);
    }
}
module.exports =new _oauth();