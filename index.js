// index.js
$(document).ready(function (){
    // dont allow undefined vars
    "use strict";

    // var msg = "Hello Javascript";
    // console.log(msg);

    // var resultsDiv = document.getElementById("results");
    // // now have a refereence to our element
    // resultsDiv.innerHTML = "<p>This is from Javascript</p>";

    $("#githubSearchForm").on("submit", function (){
        var searchphrase = $("#searchphrase").val();
        console.log(searchphrase);
        var useStars = $("#useStars").val();
        console.log(useStars);        
        var langChoice = $("#langChoice").val();
        console.log(langChoice);        

        if (searchphrase){

            resultList.text("Performing Search ... ");
            
            var githubSearch = "https://api.github.com/search/repositories?q=" + encodeURIComponent(searchphrase);

            if (langChoice != "ALL"){
                githubSearch += "+language:" + encodeURIComponent(langChoice);
            }

            if (useStars){
                githubSearch += "&sort=stars";
            }

            // var githubSearch = "https://api.github.com/search/repositories?q=jquery+language:javascript&sort=stars";
            
            $.get(githubSearch)
                    // promise
                .success(function(r) {
                    // console.log(r.items.length);
                    displayResults(r.items);
                })
                .fail(function (err){
                    console.log("Failed to query Github");
                })
                .done(function() {
                    // 
                })        
            }
        return false;
        })

    
    var resultList = $("#resultList");
    resultList.text("this is from jquery");
    // resultList.css("font-weight","light")

    var toggleButton = $("#toggleButton");
    toggleButton.on("click", function (){
        resultList.toggle(500);

        if (toggleButton.text() == "Hide") toggleButton.text("Show");
        else toggleButton.text("Hide");
    });

    var listItems = $("header nav li");
    listItems.css("font-weight","light");
    listItems.filter(":first").css("font-size", "18px");

    // //  objects
    // var results = [{
    //     name:"jquery",
    //     language: "Javascript",
    //     score: 4.5,
    //     showLog: function (){

    //     },
    //     owner: {
    //         login: "luftwaffe1",
    //         id: 9403
    //     }
    // }, {
    //     name: "Jquery UI",
    //     language: "Javascript",
    //     score: 3.5,
    //     showLog: function (){

    //     },
    //    owner: {
    //         login: "luftwaffe",
    //         id: 9403
    //     }
    // }];

    function displayResults (results){
        resultList.empty();
        $.each(results, function (i, item){
            var newResult = $("<div class='result'>" +
            "<div class='title'>" + item.name + "</div>" +
            "<div>Language:" + item.language + "</div>" +
            "<div>Owner:" + item.owner.login + "</div>" +
            "</div>");
            
            newResult.hover(function (){
                // 2 params for entering and leaving
                // make darker
                $(this).css("background-color", "lightgray");
            }, function () {
                // reverse
                $(this).css("background-color", "transparent");            
            })

            resultList.append(newResult);
        })

    }
    // result.phoneNumber = "123-456-7890";
    // console.log(result.phoneNumber);

    // var results = [];

    // results.push(result);
    // results.push({

    // })

    // console.log(results.length);
    // console.log(results[1].name);

    // for (var x=0; x<results.length; x++){
    //     var result = results[x];
    //     if (results[x].score > 4) continue;
    //     console.log(results[x].name);
        
    // }

    // console.log("msg is " + typeof(msg));
    // console.log("resultsDiv is  " + typeof(resultsDiv));

    // var none;
    // console.log("none is " + typeof(none));

    // var trueFalse = true;
    // console.log("trueFalse is " + typeof(trueFalse));

    // // var can be called before intialization
    // // nonexistent = "shouldnt work"

    // if (!none){
    //     console.log("none is undefined")
    // }

    // // function showMsg(msg){
    // //     console.log("showMsg: " + msg)
    // // }

    // //  overriding
    // function showMsg(msg, more) {
    //     if (more){
    //     console.log("msg+: " + msg + more)
            
    //     } else{
    //     console.log("msg+: " + msg)
    //     }
    // }
    // showMsg("some info");
    // showMsg("some info", " other message");

    // // function type
    // var showIt = function (msg) {
    //     console.log(msg);
    // }

    // showIt("kwenda")

    // function showItThen(msg, callback){
    //     showIt(msg)
    //     callback();
    // }

    // showItThen("showItThen called", function(){
    //     console.log("callback called")
    // })

    // var inGlobal = true;

    // window.inGlobal;
    // window.showIt("window");

    // // func creates a scope

    // function testMe(){
    //     console.log("testMe()+: " + inGlobal);
    //     var someMsg = "some Message";
    //     showItThen("with closure", function(){
    //         showIt("testMe with closure():" + someMsg) 
    //     })
    // }

    // testMe();

    // console.log("outta scope+: " + someMsg)

    // // closures
})
