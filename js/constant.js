/**
 * Author : Ech0
 * Email  : ech0.extreme@foxmail.com
 * Time   : 04/21/2018 12:33 AM
 */


const CURRENT_USER = "currentUser_exam";
const USER_NAME = "userName_exam";
const PASSWORD = "password_exam";
const MICRO_DELAY = 100;
const SHORT_DELAY = 500;
const MIDDLE_DELAY = 700;
const LONG_DELAY = 1000;
const USER = 1;
const ADMIN = 0;
/**
 SINGLE_SELECT(0,"单选"),
 MULTI_SELECT(1,"多选"),
 GAP_FILLING(2,"填空"),
 ASK(3,"问答"),
 CODE(4,"编程"),
 */
if(typeof QUESTION_TYPE == "undefined"){
    var QUESTION_TYPE = {};
    QUESTION_TYPE.SINGLE_SELECT = 0;
    QUESTION_TYPE.MULTI_SELECT = 1;
    QUESTION_TYPE.GAP_FILLING = 2;
    QUESTION_TYPE.ASK = 3;
    QUESTION_TYPE.CODE = 4;
}
/**
 * 状态码常量
 */
if(typeof RESPONSE_CODE == "undefined"){
    var RESPONSE_CODE = {};
    RESPONSE_CODE.NO_LOGIN = 121;
}