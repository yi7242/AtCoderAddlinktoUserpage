// ==UserScript==
// @name         Add link to Problems
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add links to AtCoder Problems Userpage on AtCoder profile.
// @author       You
// @match        https://atcoder.jp/users/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=atcoder.jp
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    let dlTables = document.getElementsByClassName('dl-table');
    let tbody = dlTables[0].getElementsByTagName('tbody')[0];
    
    let userName = document.getElementsByClassName('username')[0].getElementsByTagName('span')[0].textContent;
    let link = "https://kenkoooo.com/atcoder/#/user/" + userName;
    let insertPoint = document.getElementsByClassName("col-md-3 col-sm-12")[0].getElementsByTagName('h3')[0];
    
    let newTr = '<tr><th class="no-break">Problems</th><td><a href=' +link+' target="_blank" style="">' + userName + '</a></td></tr>'
    tbody.insertAdjacentHTML("beforeend", newTr)



})();