/**
 * Author : Ech0
 * Email  : ech0.extreme@foxmail.com
 * Time   : 04/21/2018 12:33 AM
 */

const CONTEXT = "http://localhost:63342/examination-system-fe/";
const CURRENT_USER = "currentUser_exam";
const USER_NAME = "userName_exam";
const PASSWORD = "password_exam";
// 试卷编号
const EXAM_PAPER_ID = "paper_id_exam";
// 题目数量
const EXAM_PAPER_TITLE_NUM = "title_num_exam";
// 试卷题目
const EXAM_PAPER_QUESIONS = "questions_exam";
// 试卷时长
const EXAM_PAPER_DURATION = "duration_exam";
// 考试记录id
const EXAM_RECORD_ID = "record_id_exam";
// title
const EXAM_TITLE = "title_exam";

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