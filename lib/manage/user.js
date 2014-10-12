var  _help = require('../wx_help.js');
var  _config = require('../config.js').user;
/**
 * 微信企业号，员工管理
 * @namespace manage.user
 * @module manage
 * @class user
 *
 */
function _user(){
    /**
     * 创建员工
     * @method create
     * @param userid {String} 员工UserID。对应管理端的帐号，企业内必须唯一。长度为1~64个字符
     * @param name {String} 成员名称。长度为1~64个字符
     * @param [department] {String} 成员所属部门id列表。注意，每个部门的直属员工上限为1000个
     * @param [position] {String} 职位信息。长度为0~64个字符
     * @param [mobile] {String} 手机号码。企业内必须唯一，mobile/weixinid/email三者不能同时为空
     * @param [gender] {Int} 性别。gender=0表示男，=1表示女。默认gender=0
     * @param [tel] {String} 办公电话。长度为0~64个字符
     * @param [email] {String} 邮箱。长度为0~64个字符。企业内必须唯一
     * @param [weixinid] {String} 微信号。企业内必须唯一
     * @param [errback] {Funciton} 发生错误时的回调函数
     * @param [callback] {Funciton} 正确响应后的回调函数
     * @return {JSON}
        {
           "errcode": 0,
           "errmsg": "created"
        }
     * @example
     * {
       "userid": "zhangsan",
       "name": "张三",
       "department": [1, 2],
       "position": "产品经理",
       "mobile": "15913215421",
       "gender": 1,
       "tel": "62394",
       "email": "zhangsan@gzdev.com",
        "weixinid": "zhangsan4dev"
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
            "userid": "",
            "name": "",
            "department":"",
            "position": "",
            "mobile": "",
            "gender": 0,
            "tel": "",
            "email": "",
            "weixinid": ""
        };
        _help.extend(_obj,obj);
        _help.sendObj(_config.create,_obj,errback,callback);
    }
    /**
     * 更新成员
     * @method update
     * @param userid {String} 员工UserID。对应管理端的帐号，企业内必须唯一。长度为1~64个字符
     * @param name {String} 成员名称。长度为1~64个字符
     * @param [department] {String} 成员所属部门id列表。注意，每个部门的直属员工上限为1000个
     * @param [position] {String} 职位信息。长度为0~64个字符
     * @param [mobile] {String} 手机号码。企业内必须唯一，mobile/weixinid/email三者不能同时为空
     * @param [gender] {Int} 性别。gender=0表示男，=1表示女。默认gender=0
     * @param [tel] {String} 办公电话。长度为0~64个字符
     * @param [email] {String} 邮箱。长度为0~64个字符。企业内必须唯一
     * @param [weixinid] {String} 微信号。企业内必须唯一
     * @param [enable] {Int} 启用/禁用成员。1表示启用成员，0表示禁用成员
     * @param [errback] {Funciton} 发生错误时的回调函数
     * @param [callback] {Funciton} 正确响应后的回调函数
     * @return {JSON}
     {
        "errcode": 0,
        "errmsg": "updated"
     }
     * @example
     * {
       "userid": "zhangsan",
       "name": "张三",
       "department": [1, 2],
       "position": "产品经理",
       "mobile": "15913215421",
       "gender": 1,
       "tel": "62394",
       "email": "zhangsan@gzdev.com",
        "weixinid": "zhangsan4dev",
        "enable": 1
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
            "userid": "",
            "name": "",
            "department":"",
            "position": "",
            "mobile": "",
            "gender": 0,
            "tel": "",
            "email": "",
            "weixinid": "",
            "enable": 1
        };
        _help.extend(_obj,obj);
        _help.sendObj(_config.update,_obj,errback,callback);
    }
    /**
     * 删除成员
     * @method delete
     * @param userid {String} 员工UserID。对应管理端的帐号，企业内必须唯一。长度为1~64个字符
     * @param [errback] {Funciton} 发生错误时的回调函数
     * @param [callback] {Funciton} 正确响应后的回调函数
     * @return {JSON}
     {
        "errcode": 0,
        "errmsg": "deleted"
     }
     * @example
     * {
       "userid": "zhangsan"
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
            "userid": ""
        };
        _help.extend(_obj,obj);
        _help.sendObj(_config.update,_obj,errback,callback);
    }
    /**
     * 获取成员
     * @method model
     * @param userid {String} 员工UserID。对应管理端的帐号，企业内必须唯一。长度为1~64个字符
     * @param [errback] {Funciton} 发生错误时的回调函数
     * @param [callback] {Funciton} 正确响应后的回调函数
     * @return {JSON}
     {
       "errcode": 0,
       "errmsg": "ok",
       "userid": "zhangsan",
       "name": "李四",
       "department": [1, 2],
       "position": "后台工程师",
       "mobile": "15913215421",
       "gender": 1,
       "tel": "62394",
       "email": "zhangsan@gzdev.com",
         "weixinid": "lisifordev",
         //头像url。注：如果要获取小图将url最后的"/0"改成"/64"即可
         "avatar": "http://wx.qlogo.cn/mmopen/ajNVdqHZLLA3WJ6DSZUfiakYe37PKnQhBIeOQBO4czqrnZDS79FH5Wm5m4X69TBicnHFlhiafvDwklOpZeXYQQ2icg/0",
        //关注状态: 1=已关注，2=已冻结，4=未关注
         "status": 1
     }
     * @example
     * {
       "userid": "zhangsan"
        }
     */
    this.model=function(){
        var args =  Array.prototype.slice.call(arguments, 0)
            , has_callback = typeof args[args.length - 1] === 'function'
            , has_errback = typeof args[args.length - 2] === 'function'
            , callback = has_callback ? args.pop() : null
            , errback = has_errback ? args.pop() : null
            , len = args.length
            , obj = len >= 1 ? args[0] :null ;
        var _obj={
            "userid": ""
        };
        _help.extend(_obj,obj);
        _help.sendObj(_config.model,_obj,errback,callback);
    }

    /**
     * 获取部门成员
     * @method list
     * @param department_id {String} 获取的部门id
     * @param fetch_child {Int} 1/0：是否递归获取子部门下面的成员
     * @param status {Int} 0获取全部员工，1获取已关注成员列表，2获取禁用成员列表，4获取未关注成员列表。status可叠加
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
     * {
       "department_id": "1"
       ,"fetch_child": "0"
       ,"status": "0"
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
            "department_id": ""
            ,"fetch_child": 0
            ,"status": 0
        };
        _help.extend(_obj,obj);
        _help.sendObj(_config.model,_obj,errback,callback);
    }
}
module.exports = _user;