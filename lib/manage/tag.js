/**
 * Created by Administrator on 2014/9/29.
 */
var  _help = require('../wx_help.js');
var  _config = require('../config.js').tag;
/**
 * 微信企业号，管理标签
 * @namespace manage.tag
 * @module manage
 * @class tag
 *
 */
function _tag(){
    /**
     * 创建标签
     * @method create
     * @param tagname {String} 标签名称。长度为1~64个字符，标签不可与其他同组的标签重名，也不可与全局标签重名
     * @param [errback] {Funciton} 发生错误时的回调函数
     * @param [callback] {Funciton} 正确响应后的回调函数
     * @return {JSON}
     {
       "errcode": 0,
       "errmsg": "created"
       "tagid": "1"
    }
     * @example
     *{
           "tagname": "UI"
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
            "tagname": ""
        };
        _help.extend(_obj,obj);
        _help.sendObj(_config.create,_obj,errback,callback);
    }
    /**
     * 更新标签名字
     * @method update
     * @param tagid {String} 标签ID
     * @param tagname {String} 标签名称。长度为1~64个字符，标签不可与其他同组的标签重名，也不可与全局标签重名
     * @param [errback] {Funciton} 发生错误时的回调函数
     * @param [callback] {Funciton} 正确响应后的回调函数
     * @return {JSON}
        {
           "errcode": 0,
           "errmsg": "updated"
        }
     * @example
     *{
           "tagid": "1",
           "tagname": "UI design"
        }
     */
    this.update=function(){
        var args =  Array.prototype.slice.call(arguments, 0)
            , has_callback = typeof args[args.length - 1] === 'function'
            , has_errback = typeof args[args.length - 2] === 'function'
            , callback = has_callback ? args.pop() : null
            , errback = has_errback ? args.pop() : null
            , len = args.length
            , obj = len >= 1 ? args[0] :null ;
        var _obj={
            "tagid": "",
            "tagname": ""
        };
        _help.extend(_obj,obj);
        _help.sendObj(_config.update,_obj,errback,callback);
    }
    /**
     * 删除标签
     * @method update
     * @param tagid {String} 标签ID
     * @param [errback] {Funciton} 发生错误时的回调函数
     * @param [callback] {Funciton} 正确响应后的回调函数
     * @return {JSON}
     {
        "errcode": 0,
        "errmsg": "deleted"
     }
     * @example
     *{
           "tagid": "1"
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
            "tagid": ""
        };
        _help.extend(_obj,obj);
        _help.sendObj(_config.delete,_obj,errback,callback);
    }
    /**
     * 获取标签成员
     * @method userlist
     * @param tagid {String} 标签ID
     * @param [errback] {Funciton} 发生错误时的回调函数
     * @param [callback] {Funciton} 正确响应后的回调函数
     * @return {JSON}
     {
           "errcode": 0,
           "errmsg": "ok",
           "userlist": [
                 {
                     "userid": "zhangsan",
                     "name": "李四"
                 }
             ]
        }
     * @example
     *{
           "tagid": "1"
        }
     */
    this.userlist=function(){
        var args =  Array.prototype.slice.call(arguments, 0)
            , has_callback = typeof args[args.length - 1] === 'function'
            , has_errback = typeof args[args.length - 2] === 'function'
            , callback = has_callback ? args.pop() : null
            , errback = has_errback ? args.pop() : null
            , len = args.length
            , obj = len >= 1 ? args[0] :null ;
        var _obj={
            "tagid": ""
        };
        _help.extend(_obj,obj);
        _help.sendObj(_config.userlist,_obj,errback,callback);
    }
    /**
     * 增加标签成员
     * @method userlist
     * @param tagid {String} 标签ID
     * @param userlist {Array} 企业员工ID列表
     * @param [errback] {Funciton} 发生错误时的回调函数
     * @param [callback] {Funciton} 正确响应后的回调函数
     * @return {JSON}
     a) 正确时返回:{
           "errcode": 0,
           "errmsg": "ok"
        }
     b) 若部分userid非法，则返回:{
           "errcode": 0,
           "errmsg": "invalid userlist failed"
           "invalidlist"："usr1|usr2|usr"   //不在权限内的员工ID列表，以“|”分隔
        }
     c) 当包含userid全部非法时返回{
           "errcode": 40070,
           "errmsg": "all list invalid "
        }
     * @example
     *{
           "tagid": "1",
           "userlist":[ "user1","user2"]
        }
     */
    this.adduser=function(){
        var args =  Array.prototype.slice.call(arguments, 0)
            , has_callback = typeof args[args.length - 1] === 'function'
            , has_errback = typeof args[args.length - 2] === 'function'
            , callback = has_callback ? args.pop() : null
            , errback = has_errback ? args.pop() : null
            , len = args.length
            , obj = len >= 1 ? args[0] :null ;
        var _obj={
            "tagid": "",
            "userlist":[]
        };
        _help.extend(_obj,obj);
        _help.sendObj(_config.adduser,_obj,errback,callback);
    }
    /**
     * 删除标签成员
     * @method userlist
     * @param tagid {String} 标签ID
     * @param userlist {Array} 企业员工ID列表
     * @param [errback] {Funciton} 发生错误时的回调函数
     * @param [callback] {Funciton} 正确响应后的回调函数
     * @return {JSON}
     a) 正确时返回:{
           "errcode": 0,
           "errmsg": "deleted"
        }
     b) 若部分userid非法，则返回:{
           "errcode": 0,
           "errmsg": "invalid userlist failed"
           "invalidlist"："usr1|usr2|usr"   //不在权限内的员工ID列表，以“|”分隔
        }
     c) 当包含userid全部非法时返回{
           "errcode": 40031,
           "errmsg": "all list invalid "
        }
     * @example
     *{
           "tagid": "1",
           "userlist":[ "user1","user2"]
        }
     */
    this.deluser=function(){
        var args =  Array.prototype.slice.call(arguments, 0)
            , has_callback = typeof args[args.length - 1] === 'function'
            , has_errback = typeof args[args.length - 2] === 'function'
            , callback = has_callback ? args.pop() : null
            , errback = has_errback ? args.pop() : null
            , len = args.length
            , obj = len >= 1 ? args[0] :null ;
        var _obj={
            "tagid": "",
            "userlist":[]
        };
        _help.extend(_obj,obj);
        _help.sendObj(_config.deluser,_obj,errback,callback);
    }
}
module.exports = _tag;