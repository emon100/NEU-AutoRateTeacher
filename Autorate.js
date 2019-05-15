// JavaScript source code
// ==UserScript==
// @name         AutoRateTeacher
// @namespace    http://github.com/emon100
// @version      0.1
// @description  自动评老师
// @author       Inspired by DuckSoft & Nekokir & wanghaiwei.Edited by emon100.
// @match        *://219.216.96.4/*
// ==/UserScript==

window.addEventListener('dblclick',function(){
        console.log("oK!");
        var box = document.getElementById('question-list');
        if (box) {
            [].forEach.call(document.getElementsByClassName('option-list'), e => {e.children[0].children[0].checked=true});
            document.getElementById('sub').click();
        }
    });

