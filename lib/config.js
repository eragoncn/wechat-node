/**
 * Created by Administrator on 2014/9/28.
 */
var _dept={
    create:{
        url: "https://qyapi.weixin.qq.com/cgi-bin/department/create",
        method:"POST"
    }
    ,update:{
        url: "https://qyapi.weixin.qq.com/cgi-bin/department/update",
        method:"POST"
    }
    ,delete:{
        url: "https://qyapi.weixin.qq.com/cgi-bin/department/delete",
        method:"GET"
    }
    ,list:{
        url: "https://qyapi.weixin.qq.com/cgi-bin/department/list",
        method:"GET"
    }
}
var _user={
    create:{
        url: "https://qyapi.weixin.qq.com/cgi-bin/user/create",
        method:"POST"
    }
    ,update:{
        url: "https://qyapi.weixin.qq.com/cgi-bin/user/update",
        method:"POST"
    }
    ,delete:{
        url: "https://qyapi.weixin.qq.com/cgi-bin/user/delete",
        method:"GET"
    }
    ,model:{
        url: "https://qyapi.weixin.qq.com/cgi-bin/user/get",
        method:"GET"
    }
    ,simplelist:{
        url: "https://qyapi.weixin.qq.com/cgi-bin/user/simplelist",
        method:"GET"
    }
}
var _tag={
    create:{
        url: "https://qyapi.weixin.qq.com/cgi-bin/tag/create",
        method:"POST"
    }
    ,update:{
        url: "https://qyapi.weixin.qq.com/cgi-bin/tag/update",
        method:"POST"
    }
    ,delete:{
        url: "https://qyapi.weixin.qq.com/cgi-bin/tag/delete",
        method:"GET"
    }
    ,userlist:{
        url: "https://qyapi.weixin.qq.com/cgi-bin/tag/get",
        method:"GET"
    }
    ,adduser:{
        url: "https://qyapi.weixin.qq.com/cgi-bin/tag/addtagusers",
        method:"POST"
    }
    ,deluser:{
        url: "https://qyapi.weixin.qq.com/cgi-bin/tag/deltagusers",
        method:"POST"
    }
}
var _token={
    url: "https://qyapi.weixin.qq.com/cgi-bin/gettoken",
    method:"GET"
};
var _send={
    url: "https://qyapi.weixin.qq.com/cgi-bin/message/send",
    method:"POST"
};
var _media={
    upload:{
        url: "https://qyapi.weixin.qq.com/cgi-bin/media/upload",
        method:"POST"
    }
    ,model:{
        url: "https://qyapi.weixin.qq.com/cgi-bin/media/get",
        method:"GET"
    }

};
var _menu={
    create:{
        url: "https://qyapi.weixin.qq.com/cgi-bin/menu/create",
        method:"POST"
    }
    ,delete:{
        url: "https://qyapi.weixin.qq.com/cgi-bin/menu/delete",
        method:"GET"
    }
    ,list:{
        url: "https://qyapi.weixin.qq.com/cgi-bin/menu/get",
        method:"GET"
    }

};
var _oauth={
    authorize:{
        url: "https://open.weixin.qq.com/connect/oauth2/authorize",
        method:"GET"
    }
    ,userinfo:{
        url: "https://qyapi.weixin.qq.com/cgi-bin/user/getuserinfo",
        method:"GET"
    }

};
module.exports = {
    dept: _dept
    ,user: _user
    ,token: _token
    ,send: _send
    ,tag: _tag
    ,media:_media
    ,menu:_menu
    ,oauth:_oauth
};