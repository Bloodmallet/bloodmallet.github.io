/* Variable intended for dev mode specific output/markings */
var dev_mode = true;

var scatter_data = {};

var light_color = "#eee";
var medium_color = "#999"
var dark_color = "#343a40";

var axis_label_position = "chart";

var chart = new Highcharts.Chart({
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
    pointFormat: '<strong>DPS: {point.dps}</strong><br>Crit: {point.stat_crit} <br>Haste: {point.stat_haste} <br>Mastery: {point.stat_mastery} <br>Versatility: {point.stat_vers}',
  },
  xAxis: {
    min: 10,
    max: 75,
    tickAmount: 9,
    title: {
      text: "<span style=\"font-size: 1.1rem\">Crit</span>",
      skew3d: true,
      position3d: axis_label_position,
      style: {
        color: light_color
      }
    },
    labels: {
      enabled: false,
      style: {
        color: light_color
      }
    },
    gridLineWidth: 1,
    gridLineColor: medium_color,
    showLastLabel: false,
  },
  yAxis: {
    min: 10,
    max: 60,
    tickAmount: 9,
    title: {
      text: "<span style=\"font-size: 1.1rem\">Haste</span>",
      skew3d: true,
      position3d: axis_label_position,
      style: {
        color: light_color
      }
    },
    labels: {
      enabled: false,
      style: {
        color: light_color
      }
    },
    gridLineWidth: 1,
    gridLineColor: medium_color,
    showLastLabel: false,
  },
  zAxis: {
    min: 20,
    max: 85,
    tickAmount: 9,
    title: {
      text: "<span style=\"font-size: 1.1rem\">Mastery</span>",
      skew3d: true,
      position3d: axis_label_position,
      style: {
        color: light_color
      }
    },
    labels: {
      enabled: false,
      style: {
        color: light_color
      }
    },
    reversed: true,
    gridLineWidth: 1,
    gridLineColor: medium_color,
    showLastLabel: false,
  },
});

// Add mouse and touch events for rotation
(function (H) {
  function dragStart(eStart) {
    eStart = chart.pointer.normalize(eStart);

    var posX = eStart.chartX,
      posY = eStart.chartY,
      alpha = chart.options.chart.options3d.alpha,
      beta = chart.options.chart.options3d.beta,
      sensitivity = 5; // lower is more sensitive

    function drag(e) {
      // Get e.chartX and e.chartY
      e = chart.pointer.normalize(e);

      chart.update({
        chart: {
          options3d: {
            alpha: alpha + (e.chartY - posY) / sensitivity,
            beta: beta + (posX - e.chartX) / sensitivity
          }
        }
      }, undefined, undefined, false);
    }

    chart.unbindDragMouse = H.addEvent(document, 'mousemove', drag);
    chart.unbindDragTouch = H.addEvent(document, 'touchmove', drag);

    H.addEvent(document, 'mouseup', chart.unbindDragMouse);
    H.addEvent(document, 'touchend', chart.unbindDragTouch);
  }
  H.addEvent(chart.container, 'mousedown', dragStart);
  H.addEvent(chart.container, 'touchstart', dragStart);
}(Highcharts));


function create_color(dps, min_dps, max_dps) {
  console.log("create_color called.");
  let middle = min_dps + (max_dps - min_dps) / 4 * 3;
  if (dps <= middle) {
    // let red = 0;
    // let green = 255 * (dps / middle);
    // let blue = 255 * (1 - dps / middle);
    return [Math.round(255 * (dps - middle) / (max_dps - middle)), 255, Math.round(255 * (1 - (dps - min_dps) / (middle - min_dps)))];
  } else {
    // let red = 255 * (dps / max_dps);
    // let green = 255 * (1 - dps / max_dps);
    // let blue = 0;
    return [255, Math.round(255 * (1 - (dps - middle) / (max_dps - middle))), 0];
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (dev_mode)
    console.log("addEventListener show_secondary_distribution_data");
  document.getElementById("show_secondary_distribution_data").addEventListener("click", function (e) {
    console.log("show_secondary_distribution_data was clicked.");
    document.getElementById("scatter_plot_chart").hidden = false;

    // https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
    if (Object.keys(scatter_data).length === 0 && scatter_data.constructor === Object) {
      fetch('json/secondary_distributions/shaman_elemental_patchwerk.json').then(function (response) {
        return response.json();
      }).then(function (json) {
        console.log(json);
        scatter_data = json;
        enter_scatter_data();
      });
    }
  });
});

function enter_scatter_data() {
  let series = {
    name: "High damage",
    color: "#FF0000",
    data: []
  };
  for (distribution of Object.keys(scatter_data["data"][1111111])) {
    let color_set = create_color(
      scatter_data["data"]["1111111"][distribution],
      scatter_data["data"]["1111111"][scatter_data["sorted_data_keys"]["1111111"][scatter_data["sorted_data_keys"]["1111111"].length - 1]],
      scatter_data["data"]["1111111"][scatter_data["sorted_data_keys"]["1111111"][0]]
    );
    series.data.push({
      x: Math.sqrt(3) / 2 * (parseInt(distribution.split("_")[0]) + Math.sqrt(3) / 6 * parseInt(distribution.split("_")[1])),
      y: Math.sqrt(1 - (0.25 + 1 / 12)) * parseInt(distribution.split("_")[1]),
      z: parseInt(distribution.split("_")[2]) + 0.5 * parseInt(distribution.split("_")[0]) + 0.5 * parseInt(distribution.split("_")[1]),
      name: distribution,
      color: "rgb(" + color_set[0] + "," + color_set[1] + "," + color_set[2] + ")",
      dps: scatter_data["data"]["1111111"][distribution],
      stat_crit: parseInt(distribution.split("_")[0]) * scatter_data["secondary_sum"] / 100,
      stat_haste: parseInt(distribution.split("_")[1]) * scatter_data["secondary_sum"] / 100,
      stat_mastery: parseInt(distribution.split("_")[2]) * scatter_data["secondary_sum"] / 100,
      stat_vers: parseInt(distribution.split("_")[3]) * scatter_data["secondary_sum"] / 100,

    });
  }

  console.log(series);

  chart.addSeries(series);
  chart.addSeries({ name: "Low damage", color: "#00FFFF" });
  chart.setTitle({
    text: scatter_data["title"]
  }, {
      text: scatter_data["subtitle"]
    }
  );

  console.log(chart);
}
