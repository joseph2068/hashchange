$().ready(function () {
    if (window.location.hash) {
        var hash = window.location.hash.substr(1); //Puts hash in variable, and removes the # character
        if (hash == "hidetop=1") {
            $("#hidetop").text("Hiện top 5");
            $("#Description").css("display", "none");
            $("#OneRow").hide("fast");
            $("#hidetop").attr("href", "#hidetop=0");
            $("[id$='hf_hash']").val("#hidetop=1");
        }
    }
    $(window).bind("hashchange", function () {
        if (window.location.hash) {
            var hash = window.location.hash.substr(1); //Puts hash in variable, and removes the # character
            if (hash != "hidetop=1") {
                $("#OneRow").show("fast");
                $("#hidetop").text("Ẩn top 5");
                $("#Description").css("display", "");
                $("#hidetop").attr("href", "#hidetop=1");
                //window.location.hash = "#hidetop=0";
                $("[id$='hf_hash']").val("#hidetop=0");
            }
            else {
                $("#hidetop").text("Hiện top 5");
                $("#Description").css("display", "none");
                $("#OneRow").hide("fast");
                $("#hidetop").attr("href", "#hidetop=0");
                //window.location.hash = "#hidetop=1";
                $("[id$='hf_hash']").val("#hidetop=1");
            }
        }
        else {
            $("#hidetop").text("Ẩn top 5");
            $("#Description").css("display", "");
            $("#OneRow").show("fast");
            $("#hidetop").attr("href", "#hidetop=1");
            var loc = window.location.href;
            var index = loc.indexOf('#');
            if (index > 0) {
                window.location = loc.substring(0, index);
            } //$("[id$='hf_hash']").val("#hidetop=0")

        }
    });
    $("#hidetop").click(function () {
        if ("onhashchange" in window) {
            if (window.location.hash) {
                var hash = window.location.hash.substr(1); //Puts hash in variable, and removes the # character
                if (hash == "hidetop=1") {
                    window.location.hash = "#hidetop=0";
                } else
                    window.location.hash = "#hidetop=1";
            }
        }
        else {
            if (window.location.hash) {
                var hash = window.location.hash.substr(1); //Puts hash in variable, and removes the # character
                if (hash == "hidetop=1") {
                    $("#OneRow").show("fast");
                    $(this).text("Ẩn top 5");
                    $("#Description").css("display", "");
                    $(this).attr("href", "#hidetop=1");
                    window.location.hash = "#hidetop=0";
                    $("[id$='hf_hash']").val("#hidetop=0");
                }
                else {
                    $(this).text("Hiện top 5");
                    $("#Description").css("display", "none");
                    $("#OneRow").hide("fast");
                    $(this).attr("href", "#hidetop=0");
                    window.location.hash = "#hidetop=1";
                    $("[id$='hf_hash']").val("#hidetop=1");
                }
            }
            else {
                $(this).text("Hiện top 5");
                $("#Description").css("display", "none");
                $("#OneRow").hide("fast");
                $(this).attr("href", "#hidetop=0");
                window.location.hash = "#hidetop=1";
                $("[id$='hf_hash']").val("#hidetop=1")

            }
        }
    });
});
