/**
 * 微信企业号，上传媒体文件
 * @namespace media
 * @module media
 * @class  media
 *
 */
var  _help = require('../wx_help.js');
var  _config = require('../config.js').media;
function _media(){


    /**
     * 上传媒体文件
     * 图片（image）:1MB，支持JPG格式
         语音（voice）：2MB，播放长度不超过60s，支持AMR格式
         视频（video）：10MB，支持MP4格式
         普通文件（file）：10MB
     * @method upload
     * @param type {String} 媒体文件类型，分别有图片（image）、语音（voice）、视频（video），普通文件(file)
     * @param media {String} form-data中媒体文件标识，有filename、filelength、content-type等信息
     * @param [errback] {Funciton} 发生错误时的回调函数
     * @param [callback] {Funciton} 正确响应后的回调函数
     * @return {JSON}
     {
           "type": "image",
           "media_id": "0000001",//媒体文件上传后获取的唯一标识
           "created_at": "1380000000"//媒体文件上传时间戳
        }
     * @example
     * {
       "type": "image",
       "media": " "
     }
     */
    this.upload=function(){
        var args =  Array.prototype.slice.call(arguments, 0)
            , has_callback = typeof args[args.length - 1] === 'function'
            , has_errback = typeof args[args.length - 2] === 'function'
            , callback = has_callback ? args.pop() : null
            , errback = has_errback ? args.pop() : null
            , len = args.length
            , obj = len >= 1 ? args[0] :null ;
        var _obj={
            "type": "",
            "media": ""
        };
        _help.extend(_obj,obj);
        _help.sendObj(_config.upload,_obj,errback,callback);
    }

    /**
     * 获取媒体文件
     * @method upload
     * @param media_id {String} 媒体文件id
     * @param [errback] {Funciton} 发生错误时的回调函数
     * @param [callback] {Funciton} 正确响应后的回调函数
     * @return {JSON}
     a)正确时返回：{
       HTTP/1.1 200 OK
       Connection: close
       Content-Type: image/jpeg
       Content-disposition: attachment; filename="MEDIA_ID.jpg"
       Date: Sun, 06 Jan 2013 10:20:18 GMT
       Cache-Control: no-cache, must-revalidate
       Content-Length: 339721

       Xxxx
    }
     b)错误时返回:{
       "errcode": "40004",
       "errmsg": "invalid media_id"
    }
     * @example
     * {
       "media_id": "1"
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
            "media_id": ""
        };
        _help.extend(_obj,obj);
        _help.sendObj(_config.model,_obj,errback,callback);
    }
}
module.exports =new _media();