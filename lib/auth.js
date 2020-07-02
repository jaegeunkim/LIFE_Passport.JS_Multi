module.exports = {
    IsOwner : function (request,response){
    if(request.user){   //유저 유무에 따라 로그인 및 로그아웃을 판단 합니다. 
        return true;
    } else {
        return false;
    }
},
    StatusUI : function (request,response){
    var authStatusUI= `<a href="/auth/login">login</a>`
    if(this.IsOwner(request,response)){
        console.log(request.user.nickname);    
        authStatusUI= `${request.user.nickname} | <a href="/auth/logout">logout</a>`
    } 
        return authStatusUI;
    }
}
