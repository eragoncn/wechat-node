var  _help = require('../wx_help.js');
var  _config = require('../config.js').dept;
/**
 * 微信企业号，部门管理
 * @namespace manage.department
 * @module manage
 * @class department
 *
 */
function _dept(){
    /**
     * 创建部门
     * @method create
     * @param name {String} 部门名称。长度限制为1~64个字符
     * @param parentid {String} 父亲部门id。根部门id为1
     * @param [order] {Int} 在父部门中的次序。从1开始，数字越大排序越靠后
     * @param [errback] {Funciton} 发生错误时的回调函数
     * @param [callback] {Funciton} 正确响应后的回调函数
     * @return {JSON}
        {
            "errcode": 0,//返回码
            "errmsg": "created",//对返回码的文本描述内容
            "id": 2 //创建的部门id
        }
     * @example
     *
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
            "name": "",
            "parentid": "",
            "order": 0
        };
        _help.extend(_obj,obj);
        _help.sendObj(_config.create,_obj,errback,callback);
    }
    /**
     * 更新部门
     * @method update
     * @param id {String} 部门id
     * @param name {String} 部门名称。长度限制为1~64个字符
     * @param parentid {String} 父亲部门id。根部门id为1
     * @param [order] {Int} 在父部门中的次序。从1开始，数字越大排序越靠后
     * @param [errback] {Funciton} 发生错误时的回调函数
     * @param [callback] {Funciton} 正确响应后的回调函数
     * @return {JSON}
     {
         "errcode": 0,//返回码
         "errmsg": "updated",//对返回码的文本描述内容
     }
     * @example
     *
     */
    this.update=function(){
        var args =  Array.prototype.slice.call(arguments, 0)
            , has_callback = typeof args[args.length - 1] === 'function'
            , has_errback = typeof args[args.length - 2] === 'function'
            , callback = has_callback ? args.pop() : null
            , errback = has_errback ? args.pop() : null
            , len = args.length
            , id = len >= 1 ? args[0] :""
            , name = len >= 2 ? args[1] :""
            , parentid = len >= 3 ? args[2] : 1
            , order = len >= 4 ? args[3] : "" ;
        var _obj={
            "id": id,
            "name": name,
            "parentid": parentid,
            "order": order
        };
        _help.sendObj(_config.update,_obj,errback,callback);
    }
    /**
     * 删除部门
     * @method delete
     * @param id {String} 部门id
     * @param [errback] {Funciton} 发生错误时的回调函数
     * @param [callback] {Funciton} 正确响应后的回调函数
     * @return {JSON}
     {
         "errcode": 0,//返回码
         "errmsg": "deleted",//对返回码的文本描述内容
     }
     * @example
     *
     */
    this.delete=function(){
        var args =  Array.prototype.slice.call(arguments, 0)
            , has_callback = typeof args[args.length - 1] === 'function'
            , has_errback = typeof args[args.length - 2] === 'function'
            , callback = has_callback ? args.pop() : null
            , errback = has_errback ? args.pop() : null
            , len = args.length
            , id = len >= 1 ? args[0] :""  ;
        var _obj={
            "id": id
        };
        _help.sendObj(_config.delete,_obj,errback,callback);
    }
    /**
     * 获取部门列表
     * @method list
     * @param [errback] {Funciton} 发生错误时的回调函数
     * @param [callback] {Funciton} 正确响应后的回调函数
     * @return {JSON}
     {
       "errcode": 0,
       "errmsg": "ok",
       "department": [//部门列表数据。以部门的order字段从小到大排列
           {
               "id": 2,
               "name": "广州研发中心",
               "parentid": 1
           },
           {
               "id": 3
               "name": "邮箱产品部",
               "parentid": 2
           }
       ]
    }
     * @example
     *
     */
    this.list=function(){
        var args =  Array.prototype.slice.call(arguments, 0)
            , has_callback = typeof args[args.length - 1] === 'function'
            , has_errback = typeof args[args.length - 2] === 'function'
            , callback = has_callback ? args.pop() : null
            , errback = has_errback ? args.pop() : null;
        _help.sendObj(_config.list,null,errback,callback);
    }
}
module.exports = _dept;