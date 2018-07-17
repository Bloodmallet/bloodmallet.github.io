/**
 *
 * Temporary fix to the broken stacked charts labels with highcharts version 6.1
 *
 * Source/Issue: https://github.com/highcharts/highcharts/issues/8187
 */
Highcharts.StackItem.prototype.getStackBox = function (chart, stackItem, x, y, xWidth, h, axis) {
  var reversed = stackItem.axis.reversed,
    inverted = chart.inverted,
    axisPos = axis.height + axis.pos - (inverted ? chart.plotLeft : chart.plotTop),
    neg = (stackItem.isNegative && !reversed) ||
      (!stackItem.isNegative && reversed);

  return {
    x: inverted ? (neg ? y : y - h) : x,
    y: inverted ?
      axisPos - x - xWidth :
      (neg ?
        (axisPos - y - h) :
        axisPos - y
      ),
    width: inverted ? h : xWidth,
    height: inverted ? xWidth : h
  };
}
