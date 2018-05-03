/**
 * Author : Ech0
 * Email  : ech0.extreme@foxmail.com
 * Time   : 05/04/2018 03:33 AM
 */
/**
 * 试卷答案对象
 * @param examPaperId
 * @param examRecordId
 * @param answers
 * @constructor
 */

function ExamAnswer(examPaperId,examRecordId,answers) {
    this.examPaperId = examPaperId;
    this.examRecordId = examRecordId;
    this.answers = answers;
}

/**
 * 单道题目答案
 * @param examPaperId
 * @param seq
 * @param questionId
 * @param answer
 * @constructor
 */
function AnswerItem(examPaperId,seq,questionId,answer) {
    this.examPaperId = examPaperId;
    this.questionId = questionId;
    this.answer = answer;
    this.seq = seq;
}