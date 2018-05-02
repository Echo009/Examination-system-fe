/**
 * Author : Ech0
 * Email  : ech0.extreme@foxmail.com
 * Time   : 05/03/2018 12:28 AM
 */



// const params = new URLSearchParams();
// params.append("title", title);



/**
 * 获取我的题目信息
 * @param page 页数
 */
var myQuestionData ;
function myQuestions(page) {
    instance.post("/question/find").then(function (response) {
        console.log(response.data.desc);
        if (response.data.code == 0) {
           myQuestionData = response.data.data
        } else {
            simpleErrorInfo(response.data.desc);
            if(response.data.code == RESPONSE_CODE.NO_LOGIN) {
                setTimeout(function () {
                    window.location.href = CONTEXT+"page/login.html";
                }, MIDDLE_DELAY);
            }
        }
    }).catch(function (error) {
        console.log(error);
    });
}