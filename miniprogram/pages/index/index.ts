// index.ts
// 获取应用实例
let echarts: any;

const option = {
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['75%', '95%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '10',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
};

function initChart(canvas: any, width: any, height: any, dpr: any) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);
  chart.setOption(option);
  return chart;
}

Page({
  data: {
    show: false,
    ec: {
      onInit: initChart
    },
  },
  onLoad(e: any) {
    if (e.detail) {
      const context = e.detail.context;
      echarts = context.echarts;

      this.setData({
        echarts: context.echarts,
        show: true
      })
    }
  }
})
