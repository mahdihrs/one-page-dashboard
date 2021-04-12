function getPointCategoryName(point) {
  return `${point.name}: <b>$${point.y}</b>`
}

export function conversionPie({ data, width }) {
  return {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      width: 250
    },
    title: {
      text: ''
    },
    tooltip: {
      // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      formatter: function() {
        return getPointCategoryName(this.point)
      }
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [{
      name: 'Conversion',
      colorByPoint: true,
      data
    }]
  }
}