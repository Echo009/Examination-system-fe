/**
 * Author : Ech0
 * Email  : ech0.extreme@foxmail.com
 * Time   : 04/30/2018 12:02 AM
 */



/**
 * 示例标题数据
 * @type {string}
 */

var title = "若路由器接收的ip报文的目的地址不是路由器的接口ip地址，并且未匹配的路由项，则采取的策略是（）";

/**
 * 示例选项数据
 * @type {{A: string, B: string, C: string, D: string, E: string, F: string}}
 */
var choice={"A":"丢掉该分组","B":"将该分组分片","C":"转发该分组","D":"将分组转发或分片","E":"将分组保留存储","F":"以上都有可能"}
/**
 * 示例答案选项
 * @type {[string,string]}
 */
var choiceAnswer = ["a"];

/**
 * 添加题目成功响应
 * @type {{code: number, desc: string, data: {id: number, type: number, title: string, choices: string, answer: string, errorRate: string}}}
 */
var response1 = {
    "code": 0,
    "desc": "success !",
    "data": {
        "id": 3,
        "type": 1,
        "title": "若路由器接收的ip报文的目的地址不是路由器的接口ip地址，并且未匹配的路由项，则采取的策略是（）",
        "choices": "{\"A\":\"丢掉该分组\",\"B\":\"将该分组分片\",\"C\":\"转发该分组\",\"D\":\"将分组转发或分片\",\"E\":\"将分组保留存储\",\"F\":\"以上都有可能\"}",
        "answer": "[\"a\"]",
        "errorRate": "0.00%"
    }
}


var choices = JSON.parse(response1.data.choices);
var correctChoice = JSON.parse(response1.data.answer);
