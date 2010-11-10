﻿$(document).ready(function () {

    //přidání elementu pro upload obrázku
    $("#addImg").click(function () {
        var new_row = $("<tr><td><input type=\"file\" id=\"picture" + indexImg + "\" name=\"picture" + indexImg + "\" /></td><td><textarea id=\"description" + indexImg + "\" name=\"description" + indexImg + "\" rows=\"4\" cols=\"20\"></textarea></td></tr>").hide();
        $("#imageInput:first").append(new_row);
        new_row.show("slow");
        indexImg++;
    });

    //odebrání elementu pro upload obrázku
    $("#removeImg").click(function () {
        if ($("#imageInput tr").size() < 4) { //abych neodstraňoval řádky nad obrázky
            return;
        }
        var old_row = $("#imageInput tr:last");
        old_row.fadeOut(300, function () { $(this).remove(); });
        indexImg--;
    });

    //přidání elementu pro upload souboru
    $("#addFile").click(function () {
        var new_row = $("<tr><td><input type=\"file\" id=\"file" + indexFile + "\" name=\"file" + indexFile + "\" /></td><td><textarea id=\"filedescription" + indexFile + "\" name=\"filedescription" + indexFile + "\" rows=\"4\" cols=\"20\"></textarea></td></tr>").hide();
        $("#fileInput:first").append(new_row);
        new_row.show("slow");
        indexFile++;
    });

    //odebrání elementu pro upload souboru
    $("#removeFile").click(function () {
        if ($("#fileInput tr").size() < 3) { //abych neodstraňoval řádky nad obrázky
            return;
        }
        var old_row = $("#fileInput tr:last");
        old_row.fadeOut(300, function () { $(this).remove(); });
        indexFile--;
    });

    //přidání textboxu pro uživatele
    $("#addUserBox").click(function () {
        var indexUser = document.getElementById("UserCounter").value;
        indexUser++;
        var new_row = $("<tr><td></td><td><input type=\"text\" id=\"ToUser" + indexUser + "\" name=\"ToUser" + indexUser + "\" /></td></tr>").hide();
        $("#userInput:first").append(new_row);
        new_row.show("slow");
        document.getElementById("UserCounter").value = indexUser;

        $("#ToUser" + indexUser).autocomplete({
            source: availableTagsUsers
        });

        if (indexUser > 1) {
            document.getElementById("removeUserBox").style = "display: inline;";
        }
    });

    //odebrání textboxu pro uživatele
    $("#removeUserBox").click(function () {
        var indexUser = document.getElementById("UserCounter").value;
        indexUser--;
        var old_row = $("#userInput tr:last");
        old_row.fadeOut(300, function () { $(this).remove(); });
        document.getElementById("UserCounter").value = indexUser;

        if (indexUser < 2) {
            document.getElementById("removeUserBox").style = "display: none;";
        }
    });

    //přidání textboxu pro skupiny
    $("#addGroupBox").click(function () {
        var indexGroup = document.getElementById("GroupCounter").value;
        indexGroup++;
        var new_row = $("<tr><td></td><td><input type=\"text\" id=\"ToGroup" + indexGroup + "\" name=\"ToGroup" + indexGroup + "\" /></td></tr>").hide();
        $("#groupInput:first").append(new_row);
        new_row.show("slow");
        document.getElementById("GroupCounter").value = indexGroup;

        $("#ToGroup" + indexGroup).autocomplete({
            source: availableTagsGroups
        });

        if (indexGroup > 1) {
            document.getElementById("removeGroupBox").style = "display: inline;";
        }
    });

    //odebrání textboxu pro skupiny
    $("#removeGroupBox").click(function () {
        var indexGroup = document.getElementById("GroupCounter").value;
        indexGroup--;
        var old_row = $("#groupInput tr:last");
        old_row.fadeOut(300, function () { $(this).remove(); });
        document.getElementById("GroupCounter").value = indexGroup;

        if (indexGroup < 2) {
            document.getElementById("removeGroupBox").style = "display: none;";
        }
    });

    $(function () {
        $("#ToUser1").autocomplete({
            source: availableTagsUsers
        });

        $("#ToGroup1").autocomplete({
            source: availableTagsGroups
        });
    });


});

var indexImg = 2; //index pro označení elementů jejich jednoznačné name a id - obrázek
var indexFile = 2; //index pro označení elementů jejich jednoznačné name a id - soubor

function AddLink(ajaxResponse) {
    var response = ajaxResponse.get_response().get_object();
    if (response == "null") {
        //zde jeste udelam aby byl textbox na pridavani enabled
        return;
    }
    var new_link;
    $("span").remove();
    var ele = document.getElementById("newLink");
    if (response == "error") {
        new_link = $("<span style=\"color: red;\">" + ele.value + " is not valid link</span>").hide();
    } else {
        new_link = $("<tr><td><input type=\"text\" name=\"link\" id=\"link\" disabled=\"disabled\" value=\"" + response + "\" /></td><td><input type=\"button\" onclick=\"$(this).parent().parent().fadeOut(300, function () { $(this).remove(); });\" value=\"delete\" /></td></tr>").hide();
    }
    $("#links").prepend(new_link);
    new_link.show("slow");
    $("#newLink").val("");
};

//funkce která se zavolá po předsubmitováním formuláře
function formSubmit() {
    $('input[name*="link"]').attr("disabled", false);
};