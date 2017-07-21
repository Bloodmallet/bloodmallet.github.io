Highcharts.chart('hunter_marksmanship_beastlord', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Hunter - Marksmanship - Beastlord'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 15:20:52.320437'
    },
    xAxis: {
        categories: ["Convergence of Fates","Spectral Thurible","Kil'jaeden's Burning Wish","Unstable Arcano Crystal","Bloodthirsty Instinct","Fury of the Burning Sky","Aran's Relaxing Ruby","Cradle of Anguish","Icon of Rot","Chrono Shard","Stat Stick (Haste)","Engine of Eradication","Deteriorated Construct Core","Tarnished Sentinel Medallion","Stat Stick (Mastery)","Thrice-Accursed Compass","Stormsinger Fulmination Charge","Stat Stick (Crit)","Moonlit Prism","PVP Badge of Conquest","Twisting Wind","Six-Feather Fan","PVP Insignia of Conquest","Caged Horror","Terror From Below","Corrupted Starlight","Obelisk of the Void","Eye of Skovald","Horn of Valor","Nightblooming Frond","Tirathon's Betrayal","Tempered Egg of Serpentrix","Splinters of Agronax","Infernal Alchemist Stone","Unstable Horrorslime","Elementium Bomb Squirrel Generator","Oakheart's Gnarled Root","Arcanogolem Digit","Mrrgria's Favor","Ley Spark","Naraxas' Spiked Tongue","Figurehead of the Naglfar"]
    },
    yAxis: {
        min: 0,
        title: {
            text: '\u0394 Damage per second'
        },
        labels: {
            enabled: true
        },
        stackLabels: {
            enabled: false,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'white'
            }
        }
    },
    legend: {
        align: 'right',
        x: 0,
        verticalAlign: 'bottom',
        y: 0,
        floating: false,
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false,
        reversed: true
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b>',
        formatter: function() {
            var s = '<b>'+ this.x +'</b>',
            cumulative_amount = 0;
            for (var i = this.points.length - 1 ; i >= 0 ; i--) {
                cumulative_amount += this.points[i].y;
                if (this.points[i].y !== 0){
                    s += '<br/><span style="color: ' + this.points[i].series.color + '; font-weight: bold;">' + this.points[i].series.name +'</span>: ' + cumulative_amount; 
                }
            }
            return s;
        },
        shared: true,
        backgroundColor: '#eee',
        borderColor: '#bbb',
        style: {
            color: 'black'
        }
    },
    plotOptions: {
        series: {
            borderColor: '#151515',
            events: {
                legendItemClick: function () {
                    return false; 
                }
            }
        },
        bar: {
            stacking: 'normal',
            dataLabels: {
                enabled: false,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
        },
    },
    series: [{
        name: '970',
        color: '#ffeb3b',
        data : [0,0,245457,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [11203,17832,0,8588,10604,21148,12447,8494,15010,13921,12290,15174,14808,15497,15705,7196,16634,10611,7199,6907,968,11815,10487,6750,4972,7680,4159,8581,7754,10086,4111,11394,8672,0,0,5182,6783,5724,6956,12322,1737,0]
    }, {
        name: '930',
        color: '#db843d',
        data: [8959,21994,0,10330,18074,11191,15425,15362,15287,10958,9828,11474,10586,8925,12752,16186,9138,9595,11590,10948,14598,8722,12317,5249,7930,10001,4738,9015,11996,11206,10774,5619,6242,0,8447,8271,8012,8744,0,2903,2569,8050]
    }, {
        name: '920',
        color: '#4198af',
        data: [2717,14249,0,5044,6706,14074,8435,11609,8217,10598,13345,7388,16378,16335,7476,4094,5454,2171,8898,3977,9865,11311,7297,6164,10796,5010,11694,2207,5757,9161,14078,11234,5981,0,1703,5747,1857,8569,12470,5825,1824,0]
    }, {
        name: '910',
        color: '#71588f',
        data: [12724,16981,0,470,15453,5511,9535,11103,9268,9559,6915,13239,10394,4087,7964,11756,3842,16493,4356,10686,8796,8924,0,4573,4374,5394,1674,6224,5379,9199,6459,7555,10039,0,3484,3718,5555,9187,1708,5245,5542,3288]
    }, {
        name: '900',
        color: '#89a54e',
        data: [7445,14585,0,6925,5094,6649,8235,8768,12739,9438,2901,3593,8864,9455,12190,6317,11448,1870,3957,5890,11103,5859,8952,7168,3959,7493,10118,11185,8041,6400,11414,2503,1208,12182,0,2379,4592,2112,4443,5219,0,0]
    }, {
        name: '890',
        color: '#aa4643',
        data: [3901,167701,0,7872,7406,9921,10429,128080,6983,4230,11630,119310,15506,113839,4662,7093,7104,6565,10277,6959,10649,8168,5238,5015,90669,5476,5387,6427,923,9370,3533,7964,12854,5300,5634,7363,4695,6230,5580,4295,4045,7349]
    }, {
        name: '880',
        color: '#4572a7',
        data: [220329,0,0,176800,141774,128929,125826,0,114030,114585,116021,0,92292,0,105383,104877,101248,98569,93594,85454,74741,72367,81360,89262,0,81145,83595,76562,79539,63625,66033,62508,60513,87234,85805,68179,62254,51354,58863,43108,54811,38048]
    }]
});
