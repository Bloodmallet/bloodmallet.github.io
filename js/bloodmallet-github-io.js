var fight_style = "patchwerk";
var active_spec = "";

function switch_fight_style() {
    if (fight_style == "patchwerk") {
        fight_style = "beastlord";
        document.getElementById("fight_style_button").innerHTML = "&lt; Switch to patchwerk";
    } else if (fight_style == "beastlord") {
        fight_style = "patchwerk";
        document.getElementById("fight_style_button").innerHTML = "Switch to beastlord &gt;";
    } else {
        fight_style = "patchwerk";
        document.getElementById("fight_style_button").innerHTML = "Switch to beastlord &gt;";
    }
    // hide/show beastlord disclaimer
    if (fight_style == "beastlord") {
        document.getElementById("beastlord-disclaimer").style.display = 'block';
    } else {
        document.getElementById("beastlord-disclaimer").style.display = 'none';
    }
    switch_chart_to(active_spec);
}

function switch_chart_to(spec) {
    if (spec == "") {
        return;
    }

    document.getElementById("fight_style_button").style.display = 'block';

    // hide/show charts
    var container = document.getElementsByClassName("container");
    for (var i = container.length - 1; i >= 0; i--) {
        if (container[i].id === spec + "_" + fight_style) {
            container[i].style.display = 'block';
            active_spec = spec;
        } else {
            container[i].style.display = 'none';
        }
    }
    // hide/show TC-resource and Discord of the spec
    var tc_boxes = document.getElementsByClassName("tc-box");
    for (var i = tc_boxes.length - 1; i >= 0; i--) {
        if (tc_boxes[i].id === spec) {
            tc_boxes[i].style.display = 'block';
        } else {
            tc_boxes[i].style.display = 'none';
        }
    }
    ga('send', 'event', 'spec', 'show ' + fight_style + ' chart', active_spec);
}