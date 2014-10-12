/**
 * Created by Administrator on 2014/9/26.
 */
var https=require("https")
    ,url=require("url");
function client(conf){
    var _client=global.wxclient =this;
    _client.manage=require("./manage");
    _client.send=require("./send");
    //deptmanage.apply(this);
    var _config=_client.config={
        corpid:""
        ,userid:""
        ,secret:""
        ,rediscfg:null
    }
    var _events=_client.events={
        getToken:getToken
        ,saveToken:saveToken
    }
    if(conf){
        for(var attr in _events){
            if(typeof conf[attr]==="function"){
                _events[attr]=conf[attr];
                delete  conf[attr];
            }
        }
        for(var attr in conf){
            _config[attr]= conf[attr];
        }
    }
    var _tokenObj=_client.tokenObj=null;//{accessToken:"",expireTime:""}
    var _redis=_client._redis=null;
    function saveToken(data){
        var rjredis=require("rjredis");
        if(rjredis && _config.rediscfg){
            _redis=new rjredis(_config.rediscfg);//key,exp,val
            _redis.setWenXinTempValue(_config.userid,7000,JSON.stringify(data),function(err){
                //console.log(err);
            },function(data){
               // console.log(data);
            });
        }
    }
    function getToken(callback){
        var rjredis=require("rjredis");
        if(_redis){
            _redis.getWenXinTempValue(_config.userid,function(){},function(data){
                callback(JSON.parse(data));
            });
        }
        else{
            if(rjredis && _config.rediscfg){
                _redis=new rjredis(_config.rediscfg);
                _redis.getWenXinTempValue(_config.userid,function(){},function(data){
                    callback(JSON.parse(data));
                });
            }
        }

    }






//    var _manage=require("./manage");
//    for(var attr in _manage){
//        var _baseattr=_client[attr]={};
//        var _fromattr=_manage[attr];
//        for(var func in _fromattr){
//            _baseattr[func]=function(){
//                var args =  Array.prototype.slice.call(arguments, 0)
//                    , has_callback = typeof args[args.length - 1] === 'function'
//                    , has_errback = typeof args[args.length - 2] === 'function'
//                    , callback = has_callback ? args.pop() : null
//                    , errback = has_errback ? args.pop() : null;
//                _fromattr[func](args,function(data){
//
//                });
//            };
//        }
//
//    }

}
module.exports = client;