/**
 * Author : Ech0
 * Email  : ech0.extreme@foxmail.com
 * Time   : 04/18/2018 08:59 AM
 */
// it depends on jQuery , sweetalert.js , axios.js
function simpleSuccessInfo(content) {
    swal({
        icon: "success",
        text: content,
        button: false,
        timer: MIDDLE_DELAY,
    });
    return true;
}

function simpleErrorInfo(content) {
    swal({
        icon: "error",
        text: content,
        button: false,
        timer: MIDDLE_DELAY,
    });
    return true;
}

function simpleWarningInfo(content) {
    swal({
        icon: "warning",
        text: content,
        button: false,
        timer: LONG_DELAY,
    });
    return true;
}

// xhr config
var instance = axios.create({
    baseURL: 'http://localhost/exam/',
    timeout: 500,
    withCredentials: true,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});

function logout() {
    instance.get('/common/logout')
        .then(function (response) {
            console.log(response);
            simpleSuccessInfo("注销成功 ！")
        })
        .catch(function (error) {
            console.log(error);
        });
    store.remove(CURRENT_USER);
    //refresh page
    setTimeout("window.location.href='index.html'", MIDDLE_DELAY);
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return false;
}

function updateUserInfo() {

    instance.get('/common/userInfo')
        .then(function (response) {
            console.log("update userInfo :" + response.data.data.userName);
            store.set(CURRENT_USER, response.data.data);
        })
        .catch(function (error) {
            console.log(error);
        });
};


$(function () {

    $(document).on("click", ".search-option", function () {
        var $this = $(this);
        $("#searchOption").text($this.text());
        $("#searchOption").attr("data-category-code",$this.attr("data-category-code"));

    });
    $(document).on("click", ".personal-center-nav", function () {
        var $this = $(this);
        var href = $this.attr("data-target-href");
        if (href == undefined) {
            return;
        }
        window.location.href = href;
    });
    $("[data-toggle='tooltip']").tooltip();
    // todo modify
    $("#search-btn").on("click", function () {
        var category = $("#searchOption").attr("data-category-code");
        var keyword = $.trim($("#search-keyword").val());
        console.log("search category is  " + category);
        console.log("search keyword is  " + keyword);
        var targetLink = CONTEXT+"page/search.html?title=" + keyword;
        if (category != 6) {
            targetLink += "&category=" + category;
        }
        console.log(targetLink);
        window.location.href = targetLink;
    })
});

function remove(arr, item) {
    var newArr = arr.slice(0);
    for(var i=0; i<newArr.length; i++) {
        if(newArr[i] == item) {
            newArr.splice(i, 1);
        }
    }
    return newArr;
}


function getCategoryName(value) {
    try {
        switch (value-0){
            case 0 : return "编程语言" ;
            case 1 : return "算法" ;
            case 2 : return "数据结构" ;
            case 3 : return "数学和逻辑" ;
            case 4 : return "计算机基础" ;
            case 5 : return "软件开发" ;
        }
    }catch (e){
        console.log(e);
    }
}


function getTypeName(value) {
    try {
        switch (value-0){
            case 0 : return "单选" ;
            case 1 : return "多选" ;
            case 2 : return "填空" ;
            case 3 : return "问答" ;
            default : return "编程" ;
        }
    }catch (e){
        console.log(e);
    }
}