var database = new function() {
    this.debug = false;
    this.fightstyle = "patchwerk";
    this.class = "";
    this.spec = "";
    this.trinkets = trinket_data;

    this.get_baseline = function() {
        return this.trinkets['fight_style'][this.fightstyle]['classes'][this.class][this.spec]['baseline']['860'];
    };

    this.update_class_spec = function(class_name, spec_name) {
        this.class = class_name;
        this.spec = spec_name;
    };

    this.update_fightstyle = function(fightstyle) {
        this.fightstyle = fightstyle;
    };

    this.get_keys = function(query_type) {
        if (this.debug) console.log(this.class, this.spec)
        switch (query_type) {
            case "fightstyles":
                return Object.keys(this.trinkets['fight_style']);
            case "classes":
                return Object.keys(this.trinkets['fight_style'][this.fightstyle]['classes']);
            case "specs":
                return Object.keys(this.trinkets['fight_style'][this.fightstyle]['classes'][this.class]);
            case "trinkets":
                return Object.keys(this.trinkets['fight_style'][this.fightstyle]['classes'][this.class][this.spec]);
            default:
                return null;
        }
    };

    this.get_valid_ilvl = function(trinket_name) {
        var itemlevels = Object.keys(this.trinkets['fight_style'][this.fightstyle]['classes'][this.class][this.spec][trinket_name]);
        var return_list = []
        for (itemlevel in itemlevels) {
            let dps_value = this.trinkets['fight_style'][this.fightstyle]['classes'][this.class][this.spec][trinket_name][itemlevels[itemlevel]];
            if (dps_value !== "0") {
                return_list.push(itemlevels[itemlevel]);
            }
        }
        return return_list
    }

    this.get_trinket_dps_value = function(trinket_name, trinket_ilvl) {
        return this.trinkets['fight_style'][this.fightstyle]['classes'][this.class][this.spec][trinket_name][trinket_ilvl];
    };

    this.populate_options = function(select_id, keys) {
        let select = document.getElementById(select_id);
        for (var k in keys) {
            if (keys[k] !== "baseline") {
                let option = document.createElement("option");
                option.value = keys[k];
                option.innerText = (select_id === "spec_name") ? handle_spec_name(keys[k]) : keys[k];
                select.appendChild(option);
            }
        }
    };
}

function handle_spec_name(input) {
    /* Capitalise spec name, remove underscores (beast_mastery -> Beast Mastery) */
    initial = input;
    input = input.split('_');
    for (word in input) {
        input[word] = input[word].charAt(0).toUpperCase() + input[word].slice(1);
    }
    output = input.toString().replace(/,/i, " ");
    return output
}

function check_valid_trinket_combination() {
    /* Checks if all fields are completed with valid entries (a disabled field is OK).
        Enables the compare button if all fields are valid. */
    var trinket1_name = document.getElementById("trinket1_name");
    var trinket1_ilvl = document.getElementById("trinket1_ilvl");
    var trinket2_name = document.getElementById("trinket2_name");
    var trinket2_ilvl = document.getElementById("trinket2_ilvl");
    var compare_button = document.getElementById("compare_button");

    var valid_combination = true;
    Array(trinket1_name, trinket1_ilvl, trinket2_name, trinket2_ilvl).forEach(function(element) {
        if (element.selectedOptions[0].disabled) {
            valid_combination = false;
        }
    });
    if (valid_combination) {
        compare_button.disabled = false;
    }
}

function compare() {
    var t0 = performance.now();
    /* Make a comparison between trinkets and deliver the decision message. Called when the Compare button is clicked.  */
    var result_elem = document.getElementById("result");
    var trinket1_result = document.getElementById("trinket1_result");
    var trinket2_result = document.getElementById("trinket2_result");
    result_elem.innerText = "";
    result_elem.style.visibility = "hidden";

    var trinket1 = {};
    var trinket2 = {};

    trinket1['name'] = document.getElementById("trinket1_name").selectedOptions[0].value;
    trinket2['name'] = document.getElementById("trinket2_name").selectedOptions[0].value;

    trinket1['ilvl'] = document.getElementById("trinket1_ilvl").selectedOptions[0].value;
    trinket2['ilvl'] = document.getElementById("trinket2_ilvl").selectedOptions[0].value;

    trinket1['dps'] = parseInt(database.get_trinket_dps_value(trinket1['name'], trinket1['ilvl']));
    trinket2['dps'] = parseInt(database.get_trinket_dps_value(trinket2['name'], trinket2['ilvl']));
    let baseline = parseInt(database.get_baseline());

    trinket1_result.innerText = trinket1['name'] + " is worth " + (trinket1['dps'] - baseline).toLocaleString() + " DPS.";
    trinket2_result.innerText = trinket2['name'] + " is worth " + (trinket2['dps'] - baseline).toLocaleString() + " DPS.";

    if (trinket1['dps'] > trinket2['dps']) {
        trinket1_result.classList.add("alert-success");
        trinket1_result.classList.remove("alert-danger");
        trinket2_result.classList.add("alert-danger");
        trinket2_result.classList.remove("alert-success");
    } else {
        trinket2_result.classList.add("alert-success");
        trinket2_result.classList.remove("alert-danger");
        trinket1_result.classList.add("alert-danger");
        trinket1_result.classList.remove("alert-success");
    }
    trinket1_result.style.visibility = "visible";
    trinket2_result.style.visibility = "visible";

    var decision = compare_trinket_values(trinket1, trinket2, baseline);
    var t1 = performance.now();
    var time_string = "<p> Data fetched in " + Math.round(t1 - t0) + " ms.</p>";

    if (database.debug) {
        result_elem.innerHTML = decision + time_string;
    } else {
        result_elem.innerHTML = decision
    };
    result_elem.style.visibility = "visible";

    //ga('send', 'event', 'comparison', document.getElementById("fight_style").selectedOptions[0].value, document.getElementById("class_name").selectedOptions[0].value + "_" + document.getElementById("spec_name").selectedOptions[0].value);
}

function compare_trinket_values(trinket1, trinket2, baseline) {
    /* Generates the comparison/decision string from given trinket DPS values trinket1 and trinket2 */
    var difference = Math.abs(trinket1['dps'] - trinket2['dps']).toLocaleString();
    if (trinket1['dps'] > trinket2['dps']) {
        var difference_percentage = Math.round((((trinket1['dps'] - baseline) * 100) / (trinket2['dps'] - baseline)) - 100);
        return "<p>Your " + trinket1['ilvl'] + " ilvl " + trinket1['name'] + " is <strong>" + difference + " DPS (~" + difference_percentage + "%) better</strong> than your " + trinket2['ilvl'] + " ilvl " + trinket2['name'] + ".</p>";
    } else if (trinket2['dps'] > trinket1['dps']) {
        var difference_percentage = Math.round((((trinket2['dps'] - baseline) * 100) / (trinket1['dps'] - baseline)) - 100);
        return "<p>Your " + trinket2['ilvl'] + " ilvl " + trinket2['name'] + " is <strong>" + difference + " DPS (~" + difference_percentage + "%) better</strong> than your " + trinket1['ilvl'] + " ilvl " + trinket1['name'] + ".</p>";
    } else {
        return "<p>Both trinkets have the exact same DPS value. You might've tried to compare a trinket with itself.</p>";
    }
}

function form_enabler() {
    /* An unholy abomination of front-end code. You have been warned. */
    var fight_style = document.getElementById("fight_style");
    var trinket1_name = document.getElementById("trinket1_name");
    var trinket1_ilvl = document.getElementById("trinket1_ilvl");
    var trinket2_name = document.getElementById("trinket2_name");
    var trinket2_ilvl = document.getElementById("trinket2_ilvl");
    var compare_button = document.getElementById("compare_button");
    var class_name = document.getElementById("class_name");
    var spec_name = document.getElementById("spec_name");

    fight_style.addEventListener('change', function(e) {
        hide_results();
        database.update_fightstyle(fight_style.selectedOptions[0].value);
        database.update_class_spec(class_name.selectedOptions[0].value, spec_name.selectedOptions[0].value);
    });

    class_name.addEventListener('change', function(e) {
        disable_selectors();
        hide_results();
        remove_options(spec_name);
        compare_button.disabled = true;
        database.update_class_spec(class_name.selectedOptions[0].value, spec_name.selectedOptions[0].value);
        database.populate_options("spec_name", database.get_keys("specs"));
        trinket1_name.disabled = trinket2_name.disabled = trinket1_ilvl.disabled = trinket2_ilvl.disabled = compare_button.disabled = true
        remove_options(trinket1_name);
        remove_options(trinket2_name);
        remove_options(trinket1_ilvl);
        remove_options(trinket2_ilvl);
        spec_name.disabled = false;
    });

    spec_name.addEventListener('change', function(e) {
        disable_selectors();
        hide_results();
        if (trinket1_name.children.length > 1) remove_options(trinket1_name);
        if (trinket2_name.children.length > 1) remove_options(trinket2_name);
        remove_options(trinket1_ilvl);
        remove_options(trinket2_ilvl);
        compare_button.disabled = true;
        database.update_class_spec(class_name.selectedOptions[0].value, e.target.selectedOptions[0].value);
        let trinket_list = database.get_keys("trinkets");
        database.populate_options("trinket1_name", trinket_list);
        database.populate_options("trinket2_name", trinket_list);
        trinket1_name.disabled = false;
        trinket2_name.disabled = false;
    });


    trinket1_name.addEventListener('change', function(e) {
        hide_results();
        if (trinket1_ilvl.children.length > 1 || trinket1_ilvl.children[0].value == "970") remove_options(trinket1_ilvl);
        database.populate_options("trinket1_ilvl", database.get_valid_ilvl(trinket1_name.selectedOptions[0].value));
        trinket1_ilvl.disabled = false;
        compare_button.disabled = true;
        check_valid_trinket_combination();
    }, false);

    trinket2_name.addEventListener('change', function(e) {
        hide_results();
        if (trinket2_ilvl.children.length > 1 || trinket2_ilvl.children[0].value == "970") remove_options(trinket2_ilvl);
        database.populate_options("trinket2_ilvl", database.get_valid_ilvl(trinket2_name.selectedOptions[0].value));
        trinket2_ilvl.disabled = false;
        compare_button.disabled = true;
        check_valid_trinket_combination();
    }, false);

    trinket1_ilvl.addEventListener('change', function() {
        hide_results();
        compare_button.disabled = true;
        check_valid_trinket_combination();
    });

    trinket2_ilvl.addEventListener('change', function() {
        hide_results();
        compare_button.disabled = true;
        check_valid_trinket_combination();
    });

    compare_button.addEventListener("click", compare, false);
}

function remove_options(caller) {
    caller.innerHTML = "<option value='' disabled selected hidden>Select one...</option>";
}

function hide_results() {
    document.getElementById("trinket1_result").style.visibility = "hidden";
    document.getElementById("trinket2_result").style.visibility = "hidden";
    document.getElementById("result").style.visibility = "hidden";
}

function disable_selectors() {
    document.getElementById("trinket1_result").disabled = true;
    document.getElementById("trinket1_ilvl").disabled = true;
    document.getElementById("trinket2_result").disabled = true;
    document.getElementById("trinket2_ilvl").disabled = true;
    document.getElementById("result").disabled = true;
}

form_enabler();