//index.html 을 위한 js file
function login(username, password) {
    if(!password){
        console.log("패스워드 값이 없습니다");
    }
    if(username){
        console.log("로그인 메시지" + username + " " + password);
    }
};

function logout() {
    console.log('logout');
}
function fixBugA(){
    console.log("fixBugA");
}
function fixBugB(){
    console.log("fixBugB");
}