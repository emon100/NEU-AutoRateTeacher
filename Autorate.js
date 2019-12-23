// JavaScript source code
// ==UserScript==
// @name         AutoRateTeacher
// @namespace    http://github.com/emon100
// @version      0.1
// @description  自动评老师
// @author       Inspired by DuckSoft & Nekokir & wanghaiwei. Edited by emon100.
// @match        *://219.216.96.4/*
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('dblclick',function(){
        var box = document.getElementById('question-list');
        if (box) {
                //选中每个问题的第一个单选框
                [].forEach.call(document.getElementsByClassName('option-list'), e => {e.children[0].children[0].checked=true});
                //点击提交按钮
                setTimeout(f=>{document.getElementById('sub').click()},10);
        }
    });
})();


