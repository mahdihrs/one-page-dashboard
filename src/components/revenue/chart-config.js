function getTooltip(point) {
  const findData = point.series.userOptions.restData.find(data => data.chartValue[0] === point.category && data.chartValue[1] === +point.y);
  return `Operator: <b>${findData.full_name}</b><br />
  Item: <b>${findData.conversion_item}</b><br />
  Location: <b>${findData.location}</b><br />
  Revenue: $<b>${findData.conversion_revenue}</b>
  `
}

export function revenueAreaSpline({ data = [], width }) {
  return {
    chart: {
      type: 'area',
      width: 500
    },
    accessibility: {
      description: ''
    },
    title: {
      text: 'Revenue'
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      labels: {
        formatter: function () {
          switch (this.value) {
            case 1:
              return 'Monday'
            case 2:
              return 'Tuesday'
            case 3:
              return 'Wednesday'
            case 4:
              return 'Thursday'
            case 5:
              return 'Friday'
            case 6:
              return 'Saturday'
            case 7:
              return 'Sunday'
            default:
              return;
          }
        }
      },
      accessibility: {
        rangeDescription: 'Monday to Sunday'
      }
    },
    yAxis: {
      title: {
        text: 'Revenue'
      },
      labels: {
        formatter: function () {
          return '$' + this.value / 1000 + 'k';
        }
      }
    },
    tooltip: {
      formatter: function() {
        return getTooltip(this.point)
      }
    },
    plotOptions: {
      area: {
        pointStart: 1,
        pointInterval: 0.1,
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: [{
      name: 'Revenue',
      data: [...data.map(val => [...val.chartValue, val.full_name])],
      restData: data
    }],
  }
}