/* Variable intended for dev mode specific output/markings */
var dev_mode = true;

var scatter_data = {};

var light_color = "#eee";
var medium_color = "#999"
var dark_color = "#343a40";

var scatter_chart = new Highcharts.Chart({
  chart: {
    renderTo: 'scatter_plot_chart',
    type: "scatter3d",
    backgroundColor: null,
    animation: false,
    height: 700,
    width: 800,
    options3d: {
      enabled: true,
      axisLabelPosition: "auto",
      alpha: 10,
      beta: 30,
      depth: 600,
      //viewDistance: 100,
      fitToPlot: true,
    }
  },
  legend: {
    enabled: true,
    align: "right",
    verticalAlign: "middle",
    layout: "vertical",
    itemStyle: { "color": light_color },
    itemHoverStyle: { "color": light_color }
  },
  series: [
  ],
  subtitle: {
    text: "Subtitle placeholder",
    useHTML: true,
    style: {
      color: light_color
    }
  },
  title: {
    text: "Title placeholder",
    useHTML: true,
    style: {
      color: light_color
    }
  },
  tooltip: {
    headerFormat: '',
    pointFormatter: function () {
      return '<table class="table table-sm">\
        <thead>\
          <tr>\
            <th scope="col"></th>\
            <th scope="col">Absolute</th>\
            <th scope="col">Relative</th>\
          </tr>\
        </thead>\
        <tbody>\
          <tr>\
            <th scope="row">DPS</th>\
            <td>' + this.dps + '</td>\
            <td>' + Math.round(this.dps / this.dps_max * 10000) / 100 + '%</td>\
          </tr>\
          <tr>\
            <th scope="row">Crit</th>\
            <td>' + this.stat_crit + '</td>\
            <td>' + this.name.split("_")[0] + '%</td>\
          </tr>\
          <tr>\
            <th scope="row">Haste</th>\
            <td>' + this.stat_haste + '</td>\
            <td>' + this.name.split("_")[1] + '%</td>\
          </tr>\
          <tr>\
            <th scope="row">Mastery</th>\
            <td>' + this.stat_mastery + '</td>\
            <td>' + this.name.split("_")[2] + '%</td>\
          </tr>\
          <tr>\
            <th scope="row">Versatility</th>\
            <td>' + this.stat_vers + '</td>\
            <td>' + this.name.split("_")[3] + '%</td>\
          </tr>\
        </tbody>\
      </table>';
    },
    useHTML: true,
    borderColor: dark_color,
  },
  xAxis: {
    min: 0,
    max: 80,
    tickAmount: 4,
    title: "",
    labels: {
      enabled: false,
    },
    gridLineWidth: 1,
    gridLineColor: medium_color,
  },
  yAxis: {
    min: 0,
    max: 80,
    tickAmount: 4,
    title: "",
    labels: {
      enabled: false,
    },
    gridLineWidth: 1,
    gridLineColor: medium_color,
  },
  zAxis: {
    min: 0,
    max: 80,
    tickAmount: 4,
    title: "",
    labels: {
      enabled: false,
    },
    reversed: true,
    gridLineWidth: 1,
    gridLineColor: medium_color,
  },
});

// Add mouse and touch events for rotation
(function (H) {
  function dragStart(eStart) {
    eStart = scatter_chart.pointer.normalize(eStart);

    var posX = eStart.chartX,
      posY = eStart.chartY,
      alpha = scatter_chart.options.chart.options3d.alpha,
      beta = scatter_chart.options.chart.options3d.beta,
      sensitivity = 5; // lower is more sensitive

    function drag(e) {
      // Get e.chartX and e.chartY
      e = scatter_chart.pointer.normalize(e);

      scatter_chart.update({
        chart: {
          options3d: {
            alpha: alpha + (e.chartY - posY) / sensitivity,
            beta: beta + (posX - e.chartX) / sensitivity
          }
        }
      }, undefined, undefined, false);
    }

    scatter_chart.unbindDragMouse = H.addEvent(document, 'mousemove', drag);
    scatter_chart.unbindDragTouch = H.addEvent(document, 'touchmove', drag);

    H.addEvent(document, 'mouseup', scatter_chart.unbindDragMouse);
    H.addEvent(document, 'touchend', scatter_chart.unbindDragTouch);
  }
  H.addEvent(scatter_chart.container, 'mousedown', dragStart);
  H.addEvent(scatter_chart.container, 'touchstart', dragStart);
}(Highcharts));



/**
 *  Creates the rgb color array for the dps of a marker.
 *
 * @param {Int} dps
 * @param {Int} min_dps
 * @param {Int} max_dps
 */
function create_color(dps, min_dps, max_dps) {
  if (dev_mode)
    console.log("create_color");

  // colour of lowest DPS
  let color_min = [0, 255, 255];
  // additional colour step between min and max
  let color_mid = [255, 255, 0];
  // colour of  max dps
  let color_max = [255, 0, 0];

  // calculate the position of the mid colour in this relation to ensure a smooth colour transition (colour distance...if something like this exists) between the three
  let diff_mid_max = 0;
  let diff_min_mid = 0;
  for (let i = 0; i < 3; i++) {
    diff_mid_max += Math.abs(color_max[i] - color_mid[i]);
    diff_min_mid += Math.abs(color_mid[i] - color_min[i]);
  }
  // ratio from min to max to describe the position of the id colour
  let mid_ratio = diff_min_mid / (diff_min_mid + diff_mid_max);
  // mid dps resulting from the ratio
  let mid_dps = min_dps + (max_dps - min_dps) * mid_ratio;

  // calculate colour based on relative dps
  if (dps >= mid_dps) {
    let percent_of_max = (dps - mid_dps) / (max_dps - mid_dps);
    return [
      color_max[0] * percent_of_max + color_mid[0] * (1 - percent_of_max),
      color_max[1] * percent_of_max + color_mid[1] * (1 - percent_of_max),
      color_max[2] * percent_of_max + color_mid[2] * (1 - percent_of_max)
    ];
  } else {
    let percent_of_mid = (dps - min_dps) / (mid_dps - min_dps);
    return [
      color_mid[0] * percent_of_mid + color_min[0] * (1 - percent_of_mid),
      color_mid[1] * percent_of_mid + color_min[1] * (1 - percent_of_mid),
      color_mid[2] * percent_of_mid + color_min[2] * (1 - percent_of_mid)
    ];
  }
}

/**
 * Add event listener to show_secondary_distributions_data button
 */
document.addEventListener("DOMContentLoaded", function () {
  if (dev_mode)
    console.log("addEventListener show_secondary_distributions_data");

  document.getElementById("show_secondary_distributions_data").addEventListener("click", function (e) {
    if (dev_mode)
      console.log("show_secondary_distributions_data was clicked.");
    // unhide the scatter plot
    // TODO: make this state dependant once this is merged into bloodmallet_standard and make this scatter plot a state (data_view)
    document.getElementById("scatter_plot_chart").hidden = false;

    // https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
    if (Object.keys(scatter_data).length === 0 && scatter_data.constructor === Object) {
      fetch('json/secondary_distributions/shaman_elemental_patchwerk.json').then(function (response) {
        return response.json();
      }).then(function (json) {
        if (dev_mode)
          console.log(json);
        scatter_data = json;
        enter_scatter_data();
      });
    } else {
      enter_scatter_data();
    }
  });
});

/**
 * Creates a series based on the loaded data and pushes it into the scatter chart
 */
function enter_scatter_data() {
  if (dev_mode)
    console.log("enter_scatter_data");
  dps=scatter_data["data"][1111111];
  sorted_dps=scatter_data["sorted_data_keys"][1111111];
  // get max dps of the whole data set
  let max_dps = dps[sorted_dps[0]];
  // get min dps of the whole data set
  let min_dps = dps[sorted_dps[sorted_dps.length - 1]];

  // prepare series with standard data
  let series = {
    name: max_dps + " DPS",
    color: "#FF0000", // make sure this matches the value of color_max in create_color(...)
    data: []
  };

  // add a marker for each distribution in the data set
  for (let distribution of Object.keys(dps)) {
    const split_data=distribution.split['_'];
    const stats = {
      "crit":split_data[0],
      "haste": split_data[1],
      "mastery":split_data[2],
      "vers":split_data[3],
    };

    // get the markers color
    let color_set = create_color(
      dps[distribution],
      dps[sorted_dps[sorted_dps.length - 1]],
      dps[sorted_dps[0]]
    );

    // width of the border of the marker, 0 for all markers but the max, which gets 3
    let line_width = 0;
    // adjust marker radius depending on distance to max
    // worst dps: 2
    // max dps: 5 (increased to 8 to fit the additional border)
    let radius = 2 + 3 * (dps[distribution] - min_dps) / (max_dps - min_dps);
    if (max_dps === dps[distribution]) {
      line_width = 3;
      radius = 8;
    }

    // undefined data label for all markers unless they are the "max" values
    let data_label = undefined;

    // 70 is the max possible value in data. would need adjustement if data changes to other max values. But I doubt this'll happen.
    if (distribution.indexOf("70") > -1) {
      data_label = {
        enabled: true,
        style: {
          color: light_color,
          fontSize: "1.1rem",
          fontWeight: "400",
          textOutline: ""
        }
      };

      if((index = stats.findIndex("70"))!==-1){
        data_label.format = index;
        data_label.verticalAlign="top";
      }
    }
    let position = getPosition(stats);
    // push marker data into the series
    series.data.push({
      // formulas slowly snailed together from combining different relations within the https://en.wikipedia.org/wiki/Equilateral_triangle and https://en.wikipedia.org/wiki/Pythagorean_theorem
      x: position.x,
      y: position.y,
      z: position.z,
      name: distribution,
      color: "hsl(100,50%, 50%)",//"rgb(" + color_set[0] + "," + color_set[1] + "," + color_set[2] + ")",
      // add additional information required for tooltips
      dps: dps[distribution],
      dps_max: max_dps,
      dps_min: min_dps,
      stat_crit: parseInt(stats.crit) * scatter_data["secondary_sum"] / 100,
      stat_haste: parseInt(stats.haste) * scatter_data["secondary_sum"] / 100,
      stat_mastery: parseInt(stats.mastery) * scatter_data["secondary_sum"] / 100,
      stat_vers: parseInt(stats.ver) * scatter_data["secondary_sum"] / 100,
      stat_sum: scatter_data["secondary_sum"],
      marker: {
        radius: radius,
        lineColor: light_color,
        lineWidth: line_width
      },
      dataLabels: data_label,
    });
  }

  console.log(series);

  scatter_chart.addSeries(series);
  // make sure this color matches the value of color_min in create_color(...)
  scatter_chart.addSeries({ name: min_dps + " DPS", color: "#00FFFF" });
  scatter_chart.setTitle({
    text: scatter_data["title"]
  }, {
      text: scatter_data["subtitle"]
    }
  );

  console.log(chart);
}

function getPosition(stats){
  let x=Math.sqrt(3) / 2 * (parseInt(stats.crit) + Math.sqrt(3) / 6 * parseInt(stats.haste));
  let y=Math.sqrt(2 / 3) * parseInt(stats.haste);
  let z=parseInt(stats.mastery) + 0.5 * parseInt(stats.crit) + 0.5 * parseInt(stats.haste);
  return {"x":x, "y":y, "z":z};
}