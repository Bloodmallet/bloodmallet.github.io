var firebase_connection = new function() {
    "use strict";
    this.connected = false;
    this.debug = false;
    this.query = "/fight_style/patchwerk/classes/";
    this.class_query = this.query;
    this.spec_query = this.query;
    this.config = {
        apiKey: "AIzaSyBX8fhpe9X4WufwbTxxMshqHnuzGrzde3A",
        authDomain: "trinket-comparator.firebaseapp.com",
        databaseURL: "https://trinket-comparator.firebaseio.com",
        projectId: "trinket-comparator",
        storageBucket: "trinket-comparator.appspot.com",
        messagingSenderId: "1080367683209"
    };

    this.connection_error = function(err) {
        console.log(err);
    };

    this.establish_connection = function() {
        try {
            firebase.initializeApp(this.config);
            // Fetch and KEEP data in local cache -- huge reduction in server load. DO NOT DELETE.
            firebase.database().ref(this.query).on('value', function() {});
            this.connected = true;
            if (this.debug) console.log("Connection successful.");
        } catch (e) {
            this.connected = false;
            this.connection_error(e);
        }
    };

    this.update_fight_style_query = function(fight_style) {
        this.query = "/fight_style/" + fight_style + '/classes/';
    };

    this.update_class_spec_query = function(class_name, spec_name) {
        this.class_query = this.query + class_name + '/';
        this.spec_query = this.class_query + spec_name + '/';
    };

    this.populate_options = function(select_id, option_type_query_string) {
        if (this.debug) console.log(select_id, option_type_query_string);
        let data = firebase.database().ref(option_type_query_string).once('value').then(function(snapshot) {
            let select = document.getElementById(select_id);
            snapshot.forEach(function(childSnapshot) {
                let datum = childSnapshot.key;
                if (childSnapshot.val() !== "0" && datum !== "baseline") {
                    let option = document.createElement("option");
                    option.value = datum;
                    option.innerText = (select_id === "spec_name") ? handle_spec_name(datum) : datum; // Special formatting because Beast Mastery...
                    select.appendChild(option);
                }
            })
        });
    };

    this.spec_name_promise = function() {
        /* Ran into trouble with asynchronously grabbing spec name and changing class name. 
        This resolves/rejects a promise so new trinket lists aren't accessed until a valid
        spec for the selected class has been found.
        */
        return new Promise((resolve, reject) => {
            let data = firebase.database().ref(this.class_query).once('value').then(function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    let datum = childSnapshot.key;
                    if (datum !== "") {
                        resolve(datum);
                    } else {
                        reject();
                    }
                });
            });
            setTimeout(reject, 5000, "Could not retrieve data in time.");
        });
    };

    this.get_trinket_dps_value = function(trinket_name, trinket_ilvl) {
        // Grabs trinket DPS data from db, returning as a promise
        return new Promise((resolve, reject) => {
            let data = firebase.database().ref(this.spec_query + trinket_name + '/' + trinket_ilvl).once('value').then(function(snapshot) {
                resolve(snapshot.val());
            });
            setTimeout(reject, 5000, "Could not retrieve data in time.");
        });
    };
};


function compare() {
    /* Make a comparison between trinkets and deliver the decision message. Called when the Compare button is clicked.  */
    var result_elem = document.getElementById("result");
    result_elem.innerText = "";
    result_elem.style.visibility = "hidden";

    var trinket1 = {};
    var trinket2 = {};

    trinket1['name'] = document.getElementById("trinket1_name").selectedOptions[0].value;
    trinket2['name'] = document.getElementById("trinket2_name").selectedOptions[0].value;

    trinket1['ilvl'] = document.getElementById("trinket1_ilvl").selectedOptions[0].value;
    trinket2['ilvl'] = document.getElementById("trinket2_ilvl").selectedOptions[0].value;

    let trinket1_promise = firebase_connection.get_trinket_dps_value(trinket1['name'], trinket1['ilvl']);
    let trinket2_promise = firebase_connection.get_trinket_dps_value(trinket2['name'], trinket2['ilvl']);

    Promise.all([trinket1_promise, trinket2_promise]).then(values => {
        trinket1['dps'] = parseInt(values[0]);
        trinket2['dps'] = parseInt(values[1]);

        var decision = compare_trinket_values(trinket1, trinket2);
        result_elem.innerHTML = decision;
        result_elem.style.visibility = "visible";
    });
}

function compare_trinket_values(trinket1, trinket2) {
    /* Generates the comparison/decision string from given trinket DPS values trinket1 and trinket2 */
    var difference = Math.abs(trinket1['dps'] - trinket2['dps']).toLocaleString();
    var difference_perc = Math.round(Math.abs(1 - (trinket1['dps'] / trinket2['dps'])) * 100);
    if (trinket1['dps'] > trinket2['dps']) {
        return "<p>Your " + trinket1['ilvl'] + " ilvl " + trinket1['name'] + " is <strong>" + difference + " DPS (~" + difference_perc + "%) better</strong> than your " + trinket2['ilvl'] + " ilvl " + trinket2['name'] + ".</p>";
    } else {
        return "<p>Your " + trinket2['ilvl'] + " ilvl " + trinket2['name'] + " is <strong>" + difference + " DPS (~" + difference_perc + "%) better</strong> than your " + trinket1['ilvl'] + " ilvl " + trinket1['name'] + ".</p>";
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
        firebase_connection.update_fight_style_query(fight_style.selectedOptions[0].value);
        firebase_connection.update_class_spec_query(class_name.selectedOptions[0].value, spec_name.selectedOptions[0].value)
    });

    class_name.addEventListener('change', function(e) {
        var query_string = firebase_connection.query + e.target.selectedOptions[0].value + "/"
        firebase_connection.populate_options("spec_name", query_string);
        if (spec_name.disabled == false) {
            trinket1_name.disabled = trinket2_name.disabled = trinket1_ilvl.disabled = trinket2_ilvl.disabled = compare_button.disabled = true
                // User has already selected a spec before
            if (spec_name.children.length > 1 && spec_name.children[1].value !== "") remove_options(spec_name);
            firebase_connection.update_class_spec_query(class_name.selectedOptions[0].value, "");
            var trinket1_promise = firebase_connection.spec_name_promise();
            Promise.all([trinket1_promise]).then(values => {
                remove_options(trinket1_name);
                remove_options(trinket2_name);
                firebase_connection.populate_options("trinket1_name", query_string + values[0] + '/');
                firebase_connection.populate_options("trinket2_name", query_string + values[0] + '/');
                firebase_connection.update_class_spec_query(class_name.selectedOptions[0].value, values[0]);
            });
        }
        if (spec_name.children.length > 1 && spec_name.children[1].value !== "") remove_options(spec_name);
        spec_name.disabled = false;
    });

    spec_name.addEventListener('change', function(e) {
        firebase_connection.update_class_spec_query(class_name.selectedOptions[0].value, e.target.selectedOptions[0].value);
        var query_string = firebase_connection.class_query + e.target.selectedOptions[0].value + "/";
        firebase_connection.populate_options("trinket1_name", query_string);
        firebase_connection.populate_options("trinket2_name", query_string);
        if (trinket1_name.children.length > 1) remove_options(trinket1_name);
        trinket1_name.disabled = false;
    });


    trinket1_name.addEventListener('change', function(e) {
        var query_string = firebase_connection.spec_query + e.target.selectedOptions[0].value + "/"
        firebase_connection.populate_options("trinket1_ilvl", query_string);
        if (trinket1_ilvl.children.length > 1 || trinket1_ilvl.children[0].value == "970") remove_options(trinket1_ilvl);
        trinket1_ilvl.disabled = false;
    }, false);

    trinket1_ilvl.addEventListener('change', function(e) {
        trinket2_name.disabled = false;
    }, false);

    trinket2_name.addEventListener('change', function(e) {
        var query_string = firebase_connection.spec_query + e.target.selectedOptions[0].value + "/"
        firebase_connection.populate_options("trinket2_ilvl", query_string);
        if (trinket2_ilvl.children.length > 1 || trinket2_ilvl.children[0].value == "970") remove_options(trinket2_ilvl);
        trinket2_ilvl.disabled = false;
    }, false);

    trinket2_ilvl.addEventListener('change', function(e) {
        compare_button.disabled = false;
    }, false);

    compare_button.addEventListener("click", compare, false);
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


function remove_options(caller) {
    caller.innerHTML = "<option value='' disabled selected hidden>Select one...</option>";
}

firebase_connection.establish_connection();
form_enabler();