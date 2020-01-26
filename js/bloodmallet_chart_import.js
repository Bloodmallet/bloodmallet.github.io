/******************************************************************************
 * Script to include charts from bloodmallet.com.
 * Linking back to bloodmallet.com as the origin is appreciated.
 * Please consider supporting the project via Patreon or Paypal.
 *
 * https://www.patreon.com/bloodmallet
 * https://www.paypal.me/bloodmallet
 *
 * Requirements:
 *    - Highcharts license on your end (if you're a commercial website)
 *    - include Highcharts scripts before this script
 *
 * The script collects all elements with the class 'bloodmallet_chart'
 *
 * Minimal example of a patchwerk trinket chart for elemental shamans:
 * <div id="unique-id" class="bloodmallet_chart" data-wow-class="shaman" data-wow-spec="elemental"></div>
 *
 * For more information read the wiki at https://github.com/Bloodmallet/bloodmallet.github.io/wiki/How-to-import-charts-or-data
 *
 */

function bloodmallet_chart_import() {

  /**
   *  Adjust the 'default_' variables to your liking if you host this script yourself.
   *
   */

  /**
   * Variable determines how many bars are visible
   */
  const default_data_entries = 7;

  /**
   * Options:
   *  wowhead - default
   *  wowdb
   */
  const default_tooltip_engine = "wowhead";

  /**
   * Options:
   *  highcharts - default
   *  highcharts_old
   */
  const default_chart_engine = "highcharts";

  const bar_colors = [
    "#7cb5ec",
    "#d9d9df",
    "#90ed7d",
    "#f7a35c",
    "#8085e9",
    "#f15c80",
    "#e4d354",
    "#2b908f",
    "#f45b5b",
    "#91e8e1"
  ];

  const default_background_color = "#343a40";
  const default_font_color = "#f8f9fa";
  const default_axis_color = "#828282";

  const font_size = "1.1rem";

  /**
   * options:
   *  patchwerk - default
   *  hecticaddcleave
   */
  const default_fight_style = "patchwerk";

  /**
   * options:
   *   trinkets - default
   *   azerite_items_chest
   *   azerite_items_head
   *   azerite_items_shoulders
   *   azerite_traits_itemlevel
   *   azerite_traits_stacking
   */
  const default_data_type = "trinkets";

  const default_azerite_tier = "all"

  const default_corruption_representation = "dps";

  const default_language = "en";

  /******************************************************************************
   * Actual code starts here.
   * The toggles you want are all above this section.
   */

  const debug = false;

  const path_to_data = "https://bloodmallet.com/json/";


  /**
   * Scheme
   *  {
   *    [data_type]: {
   *      [fight_style]: {
   *        [wow_class]: {
   *          [wow_spec]: data
   *        }
   *      }
   *    }
   *  }
   */
  let loaded_data = {};

  /**
   *
   * Functions
   *
   */

  this.init_charts = new function () {
    if (debug) {
      console.log("init_charts");
    }
    // scan for divs / what data is wanted
    let chart_list = document.querySelectorAll("div.bloodmallet_chart, [data-bloodmallet='chart']");

    for (let i = 0; i < chart_list.length; i++) {
      const html_element = chart_list[i];

      if (html_element) {

        var state = {
          wow_class: undefined,
          wow_spec: undefined,
          data_type: default_data_type,
          azerite_tier: default_azerite_tier,
          fight_style: default_fight_style,
          corruption_representation: default_corruption_representation,
          filters: {},
          // style
          axis_color: default_axis_color,
          background_color: default_background_color,
          font_color: default_font_color,
          // settings
          data_entries: default_data_entries,
          chart_engine: default_chart_engine,
          tooltip_engine: default_tooltip_engine,
          language: default_language
        };

        // Get general settings from in-page variable
        try {
          if (bloodmallet.style.axis_color !== undefined) {
            state.axis_color = bloodmallet.style.axis_color;
          }
          if (bloodmallet.style.background_color !== undefined) {
            state.background_color = bloodmallet.style.background_color;
          }
          if (bloodmallet.style.font_color !== undefined) {
            state.font_color = bloodmallet.style.font_color;
          }
          if (bloodmallet.settings.entries !== undefined) {
            state.data_entries = bloodmallet.settings.entries;
          }
          if (bloodmallet.settings.chart_engine !== undefined) {
            state.chart_engine = bloodmallet.settings.chart_engine;
          }
          if (bloodmallet.settings.tooltip_engine !== undefined) {
            state.tooltip_engine = bloodmallet.settings.tooltip_engine;
          }
          if (bloodmallet.settings.language !== undefined) {
            state.language = bloodmallet.settings.language;
          }
          if (bloodmallet.settings.corruption_representation !== undefined) {
            state.corruption_representation = bloodmallet.settings.corruption_representation;
          }
        } catch (error) {
          if (debug) {
            console.log("Applying page wide settings failed.");
          }
        }

        // optional input
        if (html_element.getAttribute("data-entries")) {
          state.data_entries = html_element.getAttribute("data-entries");
        }
        if (html_element.getAttribute("data-fight-style")) {
          state.fight_style = html_element.getAttribute("data-fight-style");
        }
        if (html_element.getAttribute("data-type")) {
          state.data_type = html_element.getAttribute("data-type");
        }
        if (html_element.getAttribute("data-azerite-tier")) {
          state.azerite_tier = html_element.getAttribute("data-azerite-tier");
        }
        if (html_element.getAttribute("data-background-color")) {
          state.background_color = html_element.getAttribute("data-background-color");
        }
        if (html_element.getAttribute("data-font-color")) {
          state.font_color = html_element.getAttribute("data-font-color");
        }
        if (html_element.getAttribute("data-axis-color")) {
          state.axis_color = html_element.getAttribute("data-axis-color");
        }
        if (html_element.getAttribute("data-tooltip-engine")) {
          state.tooltip_engine = html_element.getAttribute("data-tooltip-engine");
        }
        if (html_element.getAttribute("data-chart-engine")) {
          state.chart_engine = html_element.getAttribute("data-chart-engine");
        }
        if (html_element.getAttribute("data-corruption-representation")) {
          state.corruption_representation = html_element.getAttribute("data-corruption-representation");
        }
        if (html_element.getAttribute("data-language")) {
          state.language = html_element.getAttribute("data-language");
        }

        // filters (opt-out)
        if (html_element.getAttribute("data-filter-essence-types")) {
          state.filters.essence_types = html_element.getAttribute("data-filter-essence-types").split(";");
        }

        // preparing necessary input to load data
        let requirements = true;
        if (!html_element.getAttribute("data-wow-class")) {
          console.error("Required 'data-wow-class' attribute wasn't found in the following element.")
          console.log(html_element);
          requirements = false;
        }
        state.wow_class = html_element.getAttribute("data-wow-class");
        if (!html_element.getAttribute("data-wow-spec")) {
          console.error("Required 'data-wow-spec' attribute wasn't found in the following element.")
          console.log(html_element);
          requirements = false;
        }
        state.wow_spec = html_element.getAttribute("data-wow-spec");

        let styled_chart = update_chart_style(state);

        // create new chart without data
        let new_chart = false;
        if (state.chart_engine == "highcharts") {
          try {
            new_chart = Highcharts.chart(html_element, styled_chart);
          } catch (error) {
            console.error("When trying to create a highcharts chart the following error occured. Did you include the necessary Highcharts scripts?");
            console.log(error);
            return;
          }
        } else if (state.chart_engine == "highcharts_old") {
          try {
            let tmp_styled_chart = styled_chart;
            tmp_styled_chart["chart"]["renderTo"] = html_element;
            new_chart = new Highcharts.Chart(tmp_styled_chart);
          } catch (error) {
            console.error("When trying to create a highcharts_old chart the following error occured. Did you include the necessary Highcharts scripts?");
            console.log(error);
            return;
          }
        }

        if (requirements) {
          let error = load_data(state);
          if (error === true) {
            new_chart.setTitle(
              { // title
                text: "Connection error"
              },
              { // subtitle
                text: "Establishing a connection to bloodmallet.com failed. Is the website blocked?"
              },
              false
            );
          } else {
            setTimeout(update_chart, 0, state, html_element, new_chart, 0);
          }
        } else {
          requirements_error(new_chart);
        }

      }
    }
  }

  /**
   *
   * @param {string} data_type what kind of data will be looked for
   * @param {string} wow_class wow class name
   * @param {string} wow_spec wow spec name
   * @param {string} fight_style simc baseline fight style
   */
  function load_data(state) {
    if (debug) {
      console.log("load_data");
    }

    let data_type = state.data_type;
    let fight_style = state.fight_style;
    let wow_class = state.wow_class;
    let wow_spec = state.wow_spec;

    // early exit if the data is already present
    try {
      if (loaded_data[data_type][fight_style][wow_class][wow_spec]) {
        return;
      }
    } catch (error) {
      if (debug) {
        console.log("Data needs to be loaded.");
      }
    }

    let data_group = data_type;

    // partial fix to link to get data
    if (data_group.indexOf("azerite") > -1) {
      data_group = "azerite_traits";
    }

    let data_name = wow_class;
    data_name += "_" + wow_spec;
    if (data_type.indexOf("azerite_items") > -1) {
      data_name += data_type.replace("azerite_items", "");
    }
    data_name += "_" + fight_style;
    data_name += ".json";

    if (debug) {
      console.log("Fetching data from: " + path_to_data + data_group + "/" + data_name);
    }


    let request = new XMLHttpRequest();
    request.open("GET", path_to_data + data_group + "/" + data_name + "?" + (new Date()).getTime(), true); // async request

    request.onload = function (e) {
      if (request.readyState === 4) {
        if (request.status === 200) {
          let json = JSON.parse(request.responseText);

          if (!loaded_data[data_type]) {
            loaded_data[data_type] = {};
          }
          if (!loaded_data[data_type][fight_style]) {
            loaded_data[data_type][fight_style] = {};
          }
          if (!loaded_data[data_type][fight_style][wow_class]) {
            loaded_data[data_type][fight_style][wow_class] = {};
          }

          loaded_data[data_type][fight_style][wow_class][wow_spec] = json;
          if (debug) {
            console.log(json);
            console.log("Load and save finished.");
          }
        } else {
          console.error(request.statusText);
        }
      }
    };
    let error = false;
    request.onerror = function (e) {
      console.error('Fetching data from bloodmallet.com encountered an error, ', e);
      error = true;
    };
    request.send(null);
    return error;
  }

  /**
   * Update a chart with data from bloodmallet.com
   */
  function update_chart(state, html_element, chart, count) {
    if (debug) {
      console.log("update_charts");
    }

    let data_type = state.data_type;
    let fight_style = state.fight_style;
    let wow_class = state.wow_class;
    let wow_spec = state.wow_spec;
    let data_entries = state.data_entries;
    let chart_engine = state.chart_engine;

    try {
      var spec_data = loaded_data[data_type][fight_style][wow_class][wow_spec];
    } catch (error) {
      // console.warn("Data for ", data_type, fight_style, wow_class, wow_spec, " wasn't loaded yet. Either chart setup is wrong, connection to bloodmallet.com is slow or failed.");
      if (count < 10) {
        setTimeout(update_chart, 100, state, html_element, chart, count + 1);
      }
      return;
    }
    const data = spec_data;

    // Azerite Trait stacking and Corruption representation dps/rating use the
    // second sorted data key list
    let dps_ordered_keys;
    let baseline_dps;
    if (data_type.indexOf("azerite_traits") > -1) {

      if (data_type === "azerite_traits_stacking") {

        if (state.azerite_tier === "all") {
          dps_ordered_keys = data["sorted_data_keys_2"].slice(0, data["sorted_data_keys_2"].length);
        } else if (state.azerite_tier === "1" || state.azerite_tier === "3") {
          dps_ordered_keys = data["sorted_azerite_tier_3_trait_stacking"].slice(0, data["sorted_azerite_tier_3_trait_stacking"].length);
        } else if (state.azerite_tier === "2") {
          dps_ordered_keys = data["sorted_azerite_tier_2_trait_stacking"].slice(0, data["sorted_azerite_tier_2_trait_stacking"].length);
        }
        baseline_dps = data["data"]["baseline"][data["simulated_steps"][0]];

      } else if (data_type === "azerite_traits_itemlevel") {

        if (state.azerite_tier === "all") {
          dps_ordered_keys = data["sorted_data_keys"].slice(0, data["sorted_data_keys"].length);
        } else if (state.azerite_tier === "1" || state.azerite_tier === "3") {
          dps_ordered_keys = data["sorted_azerite_tier_3_itemlevel"].slice(0, data["sorted_azerite_tier_3_itemlevel"].length);
        } else if (state.azerite_tier === "2") {
          dps_ordered_keys = data["sorted_azerite_tier_2_itemlevel"].slice(0, data["sorted_azerite_tier_2_itemlevel"].length);
        }
        baseline_dps = data["data"]["baseline"][data["simulated_steps"][data["simulated_steps"].length - 1]];

      } else {
        console.log("Chart found, but unknown data-type detected.")
        return;
      }

    } else if (data_type === "corruptions" && state.corruption_representation === "dps/rating") {
      dps_ordered_keys = data["sorted_data_keys_2"].slice(0, data["sorted_data_keys_2"].length);
      baseline_dps = data["data"]["baseline"]["1"];
    } else {
      dps_ordered_keys = data["sorted_data_keys"].slice(0, data["sorted_data_keys"].length);
      if (data_type === "races") {
        baseline_dps = 0;
      } else if (data_type === "essence_combinations") {
        baseline_dps = data["data"]["baseline"];
      } else {
        baseline_dps = data["data"]["baseline"][data["simulated_steps"][data["simulated_steps"].length - 1]];
      }
    }

    if (debug) {
      console.log(dps_ordered_keys);
      console.log("Baseline dps: " + baseline_dps);
    }

    let simulated_steps = [];
    if (data_type === "azerite_traits_stacking") {
      let base_ilevel = data["simulated_steps"][0].replace("1_", "");
      simulated_steps.push("3_" + base_ilevel);
      simulated_steps.push("2_" + base_ilevel);
      simulated_steps.push("1_" + base_ilevel);
    } else {
      simulated_steps = data["simulated_steps"];
    }
    if (debug) {
      console.log("simulated_steps: " + simulated_steps);
    }

    // Applying filters
    if (data_type === "essences") {
      purge_list = [];
      for (let essence of dps_ordered_keys) {
        // filter essence types
        // if it's a major + minor essence, so no "minor" name addition
        if (state.filters.hasOwnProperty("essence_types")) {
          if (state.filters.essence_types.indexOf('minor') > -1 && essence.indexOf(' minor') > -1) {
            purge_list.push(essence);
          } else if (state.filters.essence_types.indexOf('combined') > -1 && essence.indexOf(' minor') === -1) {
            purge_list.push(essence);
          }
        }
      }
      for (let essence_name of purge_list) {
        dps_ordered_keys.splice(dps_ordered_keys.indexOf(essence_name), 1);
      }
    }

    // final purge based on list length
    dps_ordered_keys = dps_ordered_keys.slice(0, data_entries);

    // set title and subtitle
    chart.setTitle(
      {
        text: data["title"]
      },
      {
        text: data["subtitle"]
      },
      false
    );

    // clear initial data
    while (chart.series[0]) {
      chart.series[0].remove(false);
    }

    // update categories
    let category_list = [];

    for (let i = 0; i < dps_ordered_keys.length; i++) {
      let dps_key = dps_ordered_keys[i];
      category_list.push(get_category_name(state, dps_key, data));
    }

    if (debug) {
      console.log(category_list);
    }

    // rewrite category names
    if (chart_engine == "highcharts") {
      chart.update({
        xAxis: {
          categories: category_list
        }
      }, false);
    } else if (chart_engine == "highcharts_old") {
      chart.xAxis[0].setCategories(category_list, false);
    }

    if (simulated_steps && !(data_type === "corruptions" && state.corruption_representation === "dps/rating")) {
      for (let simulation_step_position = 0; simulation_step_position < simulated_steps.length; simulation_step_position++) {

        let simulation_step = simulated_steps[simulation_step_position];
        var dps_array = [];

        for (let i = 0; i < dps_ordered_keys.length; i++) {
          simulation_step = simulated_steps[simulation_step_position];
          // create copy of simulated_steps to work with internally (some traits don't have the max simulated_step)
          let tmp_simulation_steps = simulated_steps.slice();
          let dps_key = dps_ordered_keys[i];

          let dps_key_values = data["data"][dps_key];

          baseline_dps = data["data"]["baseline"][data["simulated_steps"][data["simulated_steps"].length - 1]];

          // use max simulation_step for the trait stacking chart
          if (data_type === "azerite_traits_stacking") {
            baseline_dps = data["data"]["baseline"][data["simulated_steps"][0]];
          }

          // special handling of azerite_stacking chart to account for traits not simmed at max simulation_step or without max stacks
          if (data_type === "azerite_traits_stacking" && dps_key_values[simulation_step] === undefined) {

            // find max available simulated step instead
            let available_steps = data["simulated_steps"];
            let max_step = undefined;

            // comparing descending simulated_steps until we find the highest possible simulated_step
            for (let broken_id = 0; broken_id < available_steps.length; broken_id++) {

              const available_step = available_steps[broken_id];

              if (!max_step && data["data"][dps_key][available_step]) {
                max_step = available_step;
              }
            }
            max_step = max_step.replace("1_", "");

            // fix tmp_simulation_steps to match this trait
            tmp_simulation_steps = [];
            for (let step of simulated_steps) {
              tmp_simulation_steps.push(step.split("_")[0] + "_" + max_step);
            }

            // reset baseline dps to max available simulation step
            baseline_dps = data["data"]["baseline"]["1_" + max_step];

            // reset simulation_step to the actually available simulation_step
            simulation_step = simulation_step.split("_")[0] + "_" + max_step;
          }

          // check for zero dps values and don't change them
          if (Number(dps_key_values[simulation_step]) > 0) {

            // if lowest simulation_step is looked at, substract baseline
            if (simulation_step_position == simulated_steps.length - 1) {

              if (simulation_step in dps_key_values) {
                dps_array.push(dps_key_values[simulation_step] - baseline_dps);
              } else {
                dps_array.push(0);
              }

            } else { // else substract lower simulation_step value of same item

              // if lower simulation_step is zero we have to assume that this item needs to be compared now to the baseline
              if (dps_key_values[tmp_simulation_steps[String(Number(simulation_step_position) + 1)]] === 0 || !(tmp_simulation_steps[String(Number(simulation_step_position) + 1)] in dps_key_values)) {
                dps_array.push(dps_key_values[simulation_step] - baseline_dps);

              } else { // standard case, next simulation_step is not zero and can be used to substract from the current value

                dps_array.push(dps_key_values[simulation_step] - dps_key_values[tmp_simulation_steps[String(Number(simulation_step_position) + 1)]]);
              }

            }

          } else {
            if (simulation_step in dps_key_values) {
              dps_array.push(dps_key_values[simulation_step]);
            } else {
              dps_array.push(0);
            }
          }
        }

        let simulation_step_clean = simulation_step;
        if (["azerite_items_chest", "azerite_items_head", "azerite_items_shoulders", "azerite_traits_itemlevel"].indexOf(data_type) > -1) {
          simulation_step_clean = simulation_step.split("_")[1];
        } else if (data_type === "azerite_traits_stacking") {
          simulation_step_clean = simulation_step.split("_")[0];
        }

        chart.addSeries({
          data: dps_array,
          name: simulation_step_clean,
          showInLegend: true
        }, false);

      }
    } else { // race + essence combination simulations + corruptions dps/rating
      var dps_array = [];

      for (let i = 0; i < dps_ordered_keys.length; i++) {
        let dps_key = dps_ordered_keys[i];

        // extracting correct dps value
        let dps_key_value = 0;
        if (data_type === "corruptions" && state.corruption_representation === "dps/rating") {

          let corruption_name = "";
          let corruption_rank = "";
          if (isNaN(parseInt(dps_key.slice(dps_key.length - 1, dps_key.length)))) {
            // new format
            corruption_name = dps_key;
            let ranks = Object.keys(data["corruption_rating"][corruption_name]);
            corruption_rank = ranks.sort()[ranks.length - 1];
          } else {
            // old format
            // Structure: "Strikethrough 2" "NAME RANK", with rank being one digit
            corruption_name = dps_key.slice(0, dps_key.length - 2);
            corruption_rank = dps_key.slice(dps_key.length - 1, dps_key.length);
          }

          let dps = data["data"][corruption_name][corruption_rank];

          dps_key_value = (dps - baseline_dps) / data["corruption_rating"][corruption_name][corruption_rank];
        } else {
          dps_key_value = data["data"][dps_key];
        }

        dps_array.push(dps_key_value);
      }

      let name = "";
      if (data_type === "races") {
        name = "Race";
      }

      chart.addSeries({
        data: dps_array,
        name: name,
        showInLegend: true
      }, false);

    }

    // add new legend title
    if ("trinkets" == data_type || "azerite_items_chest" == data_type || "azerite_items_head" == data_type || "azerite_items_shoulders" == data_type || "azerite_traits_itemlevel" == data_type) {
      chart.legend.title.attr({ text: "Itemlevel" });
    } else if (data_type === "races") {
      chart.legend.title.attr({ text: "" });
    } else if (data_type === "azerite_traits_stacking") {
      chart.legend.title.attr({ text: "Trait count" });
    } else if (data_type === "essences" || (data_type === "corruptions" && state.corruption_representation === "dps")) {
      chart.legend.title.attr({ text: "Rank" });
    } else {
      chart.legend.title.attr({ text: "" });
    }

    // update axis name
    if (data_type === "corruptions" && state.corruption_representation === "dps/rating") {
      chart.yAxis[1].setTitle({
        text: '\u0394 Damage per second / corruption rating'
      });
      // not sure what the first yAxis actually does
      chart.yAxis[0].setTitle({
        text: '\u0394 Damage per second / corruption rating'
      });
    }

    html_element.style.height = 200 + dps_ordered_keys.length * 30 + "px";
    if (chart_engine == "highcharts") {
      chart.setSize(html_element.style.width, html_element.style.height);
    }
    chart.redraw();
    if (chart_engine == "highcharts_old") {
      chart.reflow();
    }

    // add wowdb tooltips, they don't check dynamically
    if (state.tooltip_engine == "wowdb") {
      setTimeout(function () { readd_wowdb_tooltips(html_element.id); }, 1);
    }
  }

  /**
   * Function to help catch defered loaded jQuery.
   */
  function readd_wowdb_tooltips(chart_id) {
    if (debug) {
      console.log("readd_wowdb_tooltips");
    }
    try {
      CurseTips['wowdb-tooltip'].watchElements(document.getElementById(chart_id).getElementsByTagName('a'));
    } catch (error) {
      console.log("Setting wowdb (CurseTips) tooltips failed. Error: ", error);
    }
  }

  /**
   *
   * @param {string} key name of the div/chart
   * @param {json} data loaded data from bloodmallet.com for this chart
   */
  function get_category_name(state, key, data) {
    if (debug) {
      console.log("get_category_name");
      console.log(key);
      console.log(data);
    }

    const language_table = {
      "cn": "cn_CN",
      "en": "en_US",
      "de": "de_DE",
      "es": "es_ES",
      "fr": "fr_FR",
      "it": "it_IT",
      "ko": "ko_KR",
      "pt": "pt_BR",
      "ru": "ru_RU"
    }

    // start constructing links
    // wowhead, wowdb, or plain text if no matching origin is provided

    // fallback
    if (state.tooltip_engine !== "wowhead" && state.tooltip_engine !== "wowdb") {
      try {
        return data["languages"][key][language_table[state.language]];
      } catch (error) {
        return key;
      }
    }

    // races don't have links/tooltips
    if (state.data_type === "races") {
      try {
        return data["languages"][key][language_table[state.language]];
      } catch (error) {
        return key;
      }
    }

    // wowhead
    if (state.tooltip_engine === "wowhead") {
      let a = document.createElement("a");
      a.href = "https://" + (state.language === "en" ? "www" : state.language) + ".wowhead.com/";
      if (data.hasOwnProperty("power_ids") && (data["power_ids"].hasOwnProperty(key) || data["power_ids"].hasOwnProperty(key.split(" +")[0]))) {
        if (data["power_ids"].hasOwnProperty(key)) {
          a.href += "azerite-essence-power/" + data["power_ids"][key];
        } else if (data["power_ids"].hasOwnProperty(key.split(" +")[0])) {
          a.href += "azerite-essence-power/" + data["power_ids"][key.split(" +")[0]];
        }

      } else if (data.hasOwnProperty("item_ids") && data["item_ids"].hasOwnProperty(key)) {
        a.href += "item=" + data["item_ids"][key] + "/" + slugify(key);

        if (data.hasOwnProperty("class_id") && data.hasOwnProperty("used_azerite_traits_per_item")) {
          a.href += "?azerite-powers=" + data["class_id"];
          for (let i = 0; i < data["used_azerite_traits_per_item"][key].length; i++) {
            const trait = data["used_azerite_traits_per_item"][key][i];
            a.href += ":" + trait["id"];
          }
        }
        let ilvl = data["simulated_steps"][data["simulated_steps"].length - 1];
        // fix special case of azerite items "1_340"
        if (typeof ilvl === 'string') {
          if (ilvl.indexOf("_") > -1) {
            ilvl = ilvl.split("_")[1];
          }
        }
        a.href += "&ilvl=" + ilvl;
      } else if (data.hasOwnProperty("spell_ids") && (data["spell_ids"].hasOwnProperty(key) || data["spell_ids"].hasOwnProperty(key.slice(0, key.length - 2)))) {

        // special handling
        if (state.data_type === "corruptions" && state.corruption_representation === "dps/rating") {
          let corruption_name = key.slice(0, key.length - 2);
          let corruption_rank = key.slice(key.length - 1, key.length);
          a.href += "spell=" + data["spell_ids"][corruption_name][corruption_rank] + '/' + slugify(key);
        } else if (state.data_type === "corruptions" && state.corruption_representation === "dps") {
          a.href += "spell=" + data["spell_ids"][key]["1"] + '/' + slugify(key);
        } else {
          a.href += "spell=" + data["spell_ids"][key] + '/' + slugify(key);
        }
      }

      try {
        a.appendChild(document.createTextNode(data.languages[key][language_table[state.language]]));
      } catch (error) {
        a.appendChild(document.createTextNode(key));
        console.log("Bloodmallet charts: Translation for " + key + " wasn't found. Please help improving the reasource at bloodmallet.com.");
      }

      return a.outerHTML;

    } else if (state.tooltip_engine == "wowdb") {
      let a = document.createElement('a');
      a.href = "http://www.wowdb.com/";
      try {
        a.href += "items/" + data["item_ids"][key]; // item id
      } catch (error) {
        if (debug) {
          console.log(error);
          console.log("We're probably looking at a spell.");
        }
      }

      // if it's an item try to add azerite ids and itemlevel
      if (a.href.indexOf("items") > -1) {
        let ilvl = data["simulated_steps"][data["simulated_steps"].length - 1];
        // fix special case of azerite items "1_340"
        if (typeof ilvl === 'string') {
          if (ilvl.indexOf("_") > -1) {
            ilvl = ilvl.split("_")[1];
          }
        }
        a.href += "?itemLevel=" + ilvl;
        if (data.hasOwnProperty("class_id") && data.hasOwnProperty("used_azerite_traits_per_item")) {
          a.href += "&azerite=";
          a.href += data["class_id"] + ":0";
          for (let i = 0; i < data["used_azerite_traits_per_item"][key].length; i++) {
            const trait = data["used_azerite_traits_per_item"][key][i];
            a.href += ":" + trait["id"];
          }
        }
      } else {
        try {
          if (state.data_type === "essence_combinations") {
            a.href += "spells/" + data["spell_ids"][key.split(" +")[0]];
          } else if (state.data_type === "corruptions" && state.corruption_representation === "dps/rating") {
            let corruption_name = key;
            let corruption_rank = Object.keys(data["data"][key])[Object.keys(data["data"][key]).length - 1];
            a.href += "spells/" + data["spell_ids"][corruption_name][corruption_rank];
          } else if (state.data_type === "corruptions" && state.corruption_representation === "dps") {
            a.href += "spells/" + data["spell_ids"][key]["1"];
          } else {
            a.href += "spells/" + data["spell_ids"][key]; // spell id
          }
        } catch (error) {
          if (debug) {
            console.log(error);
            console.log("We're probably looking at an item.");
          }
        }
      }


      a.dataset.tooltipHref = a.href;

      try {
        a.appendChild(document.createTextNode(data["languages"][key][language_table[state.language]]));
      } catch (error) {
        a.appendChild(document.createTextNode(key));
        console.log("Bloodmallet charts: Translation for " + key + " wasn't found. Please help improving the reasource at bloodmallet.com.");
      }

      return a.outerHTML;
    }

  }

  /**
   * Function to update title and subtitle on init error.
   * @param {int} id
   */
  function requirements_error(chart) {
    chart.setTitle({ text: "Wrong chart setup" }, { text: "Missing 'data-wow-class' or 'data-wow-spec'. See <a href=\"https://github.com/Bloodmallet/bloodmallet.github.io/wiki/How-to-import-charts-or-data\">wiki</a>" });
  }

  /**
   * All hail https://gist.github.com/mathewbyrne/1280286
   * @param {*} text
   */
  function slugify(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }

  /**
   * Updates the style of the chart
   */
  function update_chart_style(state) {
    if (debug) {
      console.log("update_chart_style");
    }
    if (state.chart_engine == "highcharts" || state.chart_engine == "highcharts_old") {

      let background_color = state.background_color;
      let axis_color = state.axis_color;
      let font_color = state.font_color;

      let styled_chart = {
        chart: {
          type: "bar",
          backgroundColor: default_background_color,
          style: {
            fontFamily: "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\""
          }
        },
        colors: bar_colors,
        credits: {
          href: "https://bloodmallet.com/",
          text: "bloodmallet.com",
          style: {
            fontSize: font_size
          }
        },
        legend: {
          align: "right",
          backgroundColor: default_background_color,
          borderColor: default_axis_color,
          borderWidth: 1,
          floating: false,
          itemMarginBottom: 3,
          itemMarginTop: 0,
          layout: 'vertical',
          reversed: true,
          shadow: false,
          verticalAlign: "middle",
          x: 0,
          y: 0,
          itemStyle: {
            color: default_font_color,
          },
          itemHoverStyle: {
            color: default_font_color,
          },
          title: {
            text: " ",
            style: {
              color: default_font_color
            }
          },
          symbolRadius: 0
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: false,
            },
          },
          series: {
            stacking: "normal",
            borderColor: default_background_color,
            events: {
              legendItemClick: function () { return false; }
            },
            style: {
              textOutline: false,
              fontSize: font_size,
            }
          }
        },
        series: [
        ],
        title: {
          text: "Loading data...", //"Title placeholder",
          useHTML: true,
          style: {
            color: default_font_color,
            fontSize: font_size
          }
        },
        subtitle: {
          text: "...from <a href=\"https://bloodmallet.com\">bloodmallet</a>",
          useHTML: true,
          style: {
            color: default_font_color,
            fontSize: font_size
          }
        },
        tooltip: {
          headerFormat: "<b>{point.x}</b>",
          shared: true,
          backgroundColor: default_background_color,
          borderColor: default_axis_color,
          style: {
            color: default_font_color,
            fontSize: font_size,
          },
          useHTML: true,
          // adding this as a potential tooltip positioning fix. changes tooltip position to be inside the bar rather than at the end
          positioner: function (boxWidth, boxHeight, point) {
            return {
              x: point.plotX,
              y: point.plotY
            };
          }
        },
        xAxis: {
          categories: [
            "",
            "",
            "",
            "",
            "",
          ],
          labels: {
            useHTML: true,
            style: {
              color: default_font_color,
              fontSize: font_size,
            }
          },
          gridLineWidth: 0,
          gridLineColor: default_axis_color,
          lineColor: default_axis_color,
          tickColor: default_axis_color
        },
        yAxis: [{
          labels: {
            //enabled: true,
            style: {
              color: default_axis_color
            },
          },
          min: 0,
          stackLabels: {
            enabled: true,
            formatter: function () {
              return Intl.NumberFormat().format(this.total);
            },
            style: {
              color: default_font_color,
              textOutline: false,
              fontSize: font_size,
              fontWeight: "normal"
            }
          },
          title: {
            text: "\u0394 Damage per second",
            style: {
              color: default_axis_color
            }
          },
          gridLineWidth: 1,
          gridLineColor: default_axis_color
        }, {
          linkedTo: 0,
          opposite: true,
          labels: {
            //enabled: true,
            style: {
              color: default_axis_color
            },
          },
          min: 0,
          stackLabels: {
            enabled: true,
            formatter: function () {
              return Intl.NumberFormat().format(this.total);
            },
            style: {
              color: default_font_color,
              textOutline: false,
              fontSize: font_size,
              fontWeight: "normal"
            }
          },
          title: {
            text: "\u0394 Damage per second",
            style: {
              color: default_axis_color
            }
          },
          gridLineWidth: 1,
          gridLineColor: default_axis_color

        }]
      };

      // TODO: https://scotch.io/bar-talk/copying-objects-in-javascript
      // step 1: JSON.parse(JSON.stringify(obj))
      // step 2: get functions with Object.assign({}, obj)

      styled_chart.chart.backgroundColor = background_color;

      styled_chart.legend.backgroundColor = background_color;
      styled_chart.legend.borderColor = axis_color;
      styled_chart.legend.itemStyle.color = font_color;
      styled_chart.legend.itemHoverStyle.color = font_color;

      styled_chart.title.style.color = font_color;
      styled_chart.subtitle.style.color = font_color;

      styled_chart.tooltip.formatter = function () {
        let container = document.createElement('div');
        container.style.margin = '-4px -7px -7px -7px';
        container.style.padding = '3px 3px 6px 3px';
        container.style.backgroundColor = background_color;
        if (state.chart_engine === "highcharts_old") {
          container.style.margin = '-7px';
        }

        let name_div = document.createElement('div');
        container.appendChild(name_div);
        name_div.style.marginLeft = '9px';
        name_div.style.marginRight = '9px';
        name_div.style.marginBottom = '6px';
        name_div.style.fontWeight = '700';
        name_div.innerHTML = this.x;

        let cumulative_amount = 0;
        for (var i = this.points.length - 1; i >= 0; i--) {
          cumulative_amount += this.points[i].y;
          if (this.points[i].y !== 0) {
            let point_div = document.createElement('div');
            container.appendChild(point_div);

            let block_span = document.createElement('span');
            point_div.appendChild(block_span);
            block_span.style.marginLeft = '9px';
            block_span.style.borderLeft = '9px solid ' + this.points[i].series.color;
            block_span.style.paddingLeft = '4px';
            block_span.innerHtml = this.points[i].series.name;

            point_div.appendChild(document.createTextNode('\u00A0\u00A0' + Intl.NumberFormat().format(cumulative_amount)));
          }
        }

        return container.outerHTML;
      };
      styled_chart.tooltip.backgroundColor = background_color;
      styled_chart.tooltip.borderColor = axis_color;
      styled_chart.tooltip.style.color = font_color;

      styled_chart.xAxis.labels.style.color = font_color;
      styled_chart.xAxis.gridLineColor = axis_color;
      styled_chart.xAxis.lineColor = axis_color;
      styled_chart.xAxis.tickColor = axis_color;

      styled_chart.yAxis[0].labels.style.color = axis_color;
      styled_chart.yAxis[0].stackLabels.style.color = font_color;
      styled_chart.yAxis[0].gridLineColor = axis_color;
      styled_chart.yAxis[0].lineColor = axis_color;
      styled_chart.yAxis[0].tickColor = axis_color;
      styled_chart.yAxis[0].title.style.color = axis_color;

      styled_chart.yAxis[1].labels.style.color = axis_color;
      styled_chart.yAxis[1].stackLabels.style.color = font_color;
      styled_chart.yAxis[1].gridLineColor = axis_color;
      styled_chart.yAxis[1].lineColor = axis_color;
      styled_chart.yAxis[1].tickColor = axis_color;
      styled_chart.yAxis[1].title.style.color = axis_color;

      styled_chart.credits.style.color = font_color;

      return styled_chart;
    }
  }

}
// Load data on document load
document.addEventListener("DOMContentLoaded", function () {
  bloodmallet_chart_import();
});
