/**
 * 微信企业号，自定义菜单
 * 菜单最多为两级，一级菜单最多为3个，二级菜单最多为5个
 * @namespace media
 * @module media
 * @class  media
 *
 */
var  _help = require('../wx_help.js');
var  _config = require('../config.js').menu;
function _menu(){


    /**
     * 创建应用菜单
     * @method create
     * @param agentid {String} 企业应用的id，整型。可在应用的设置页面查看
     * @param button {String} 一级菜单数组，个数应为1~3个
     * @param [sub_button] {String} 二级菜单数组，个数应为1~5个
     * @param type {String} 菜单的响应动作类型，目前有click、view两种类型
     * @param name {String} 菜单标题，不超过16个字节，子菜单不超过40个字节
     * @param key {String} click类型必须,菜单KEY值，用于消息接口推送，不超过128字节
     * @param url {String} view类型必须,网页链接，员工点击菜单可打开链接，不超过256字节
     * @param [errback] {Funciton} 发生错误时的回调函数
     * @param [callback] {Funciton} 正确响应后的回调函数
     * @return {JSON}
     {
           "errcode":0,
           "errmsg":"ok"
        }
     * @example
     * {
           "button":[
               {
                   "type":"click",
                   "name":"今日歌曲",
                   "key":"V1001_TODAY_MUSIC"
               },
               {
                   "name":"菜单",
                   "sub_button":[
                       {
                           "type":"view",
                           "name":"搜索",
                           "url":"http://www.soso.com/"
                       },
                       {
                           "type":"click",
                           "name":"赞一下我们",
                           "key":"V1001_GOOD"
                       }
                   ]
              }
           ]
        }
     */
    this.create=function(){
        var args =  Array.prototype.slice.call(arguments, 0)
            , has_callback = typeof args[args.length - 1] === 'function'
            , has_errback = typeof args[args.length - 2] === 'function'
            , callback = has_callback ? args.pop() : null
            , errback = has_errback ? args.pop() : null
            , len = args.length
            , obj = len >= 1 ? args[0] :null ;
        var _obj={
        };
        _help.extend(_obj,obj);
        _help.sendObj(_config.create,_obj,errback,callback);
    }

    /**
     * 删除菜单
     * @method delete
     * @param agentid {String} 企业应用的id，整型。可在应用的设置页面查看
     * @param [errback] {Funciton} 发生错误时的回调函数
     * @param [callback] {Funciton} 正确响应后的回调函数
     * @return {JSON}
     {
       "errcode":0,
       "errmsg":"ok"
    }
     * @example
     * {
       "agentid": "1"
     }
     */
    this.delete=function(){
        var args =  Array.prototype.slice.call(arguments, 0)
            , has_callback = typeof args[args.length - 1] === 'function'
            , has_errback = typeof args[args.length - 2] === 'function'
            , callback = has_callback ? args.pop() : null
            , errback = has_errback ? args.pop() : null
            , len = args.length
            , obj = len >= 1 ? args[0] :null ;
        var _obj={
            "agentid": ""
        };
        _help.extend(_obj,obj);
        _help.sendObj(_config.delete,_obj,errback,callback);
    }
    /**
     * 获取菜单列表
     * @method list
     * @param agentid {String} 企业应用的id，整型。可在应用的设置页面查看
     * @param [errback] {Funciton} 发生错误时的回调函数
     * @param [callback] {Funciton} 正确响应后的回调函数
     * @return {JSON}
     {
           "button":[
               {
                   "type":"click",
                   "name":"今日歌曲",
                   "key":"V1001_TODAY_MUSIC"
               },
               {
                   "name":"菜单",
                   "sub_button":[
                       {
                           "type":"view",
                           "name":"搜索",
                           "url":"http://www.soso.com/"
                       },
                       {
                           "type":"click",
                           "name":"赞一下我们",
                           "key":"V1001_GOOD"
                       }
                   ]
              }
           ]
        }
     * @example
     * {
       "agentid": "1"
     }
     */
    this.list=function(){
        var args =  Array.prototype.slice.call(arguments, 0)
            , has_callback = typeof args[args.length - 1] === 'function'
            , has_errback = typeof args[args.length - 2] === 'function'
            , callback = has_callback ? args.pop() : null
            , errback = has_errback ? args.pop() : null
            , len = args.length
            , obj = len >= 1 ? args[0] :null ;
        var _obj={
            "agentid": ""
        };
        _help.extend(_obj,obj);
        _help.sendObj(_config.list,_obj,errback,callback);
    }
}
module.exports =new _menu();