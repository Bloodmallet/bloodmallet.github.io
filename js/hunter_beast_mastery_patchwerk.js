Highcharts.chart('hunter_beast_mastery_patchwerk', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Hunter - Beast_Mastery - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 08:16:24.286237'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Bloodthirsty Instinct","Convergence of Fates","Cradle of Anguish","Engine of Eradication","Unstable Arcano Crystal","Tarnished Sentinel Medallion","Stat Stick (Mastery)","Thrice-Accursed Compass","Stormsinger Fulmination Charge","Stat Stick (Crit)","Stat Stick (Haste)","Chrono Shard","PVP Badge of Conquest","Six-Feather Fan","Terror From Below","Obelisk of the Void","Nightblooming Frond","Horn of Valor","Tempered Egg of Serpentrix","Tirathon's Betrayal","Twisting Wind","PVP Insignia of Conquest","Deteriorated Construct Core","Splinters of Agronax","Moonlit Prism","Naraxas' Spiked Tongue","Fury of the Burning Sky","Spectral Thurible","Infernal Alchemist Stone","Arcanogolem Digit","Oakheart's Gnarled Root","Icon of Rot","Aran's Relaxing Ruby","Mrrgria's Favor","Caged Horror","Eye of Skovald","Unstable Horrorslime","Elementium Bomb Squirrel Generator","Corrupted Starlight","Figurehead of the Naglfar","Ley Spark"]
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
        data : [153931,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,9535,6083,8905,7819,3873,8085,7823,8003,7511,9383,6481,8012,9096,9139,6390,7304,9700,7105,8726,8510,9481,5447,6573,6447,5704,4078,4087,5358,0,6009,4435,4058,5997,4316,2167,3318,1586,2165,1454,1695,0]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,5467,7682,7664,7571,4438,7135,7612,8865,7096,6354,8888,7391,6220,7208,6414,5973,6976,7300,8349,7886,5485,6335,6124,5411,4314,4690,4489,4286,0,5862,4208,3698,2780,2684,4313,2556,1303,1946,1042,890,0]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,7449,5027,8681,7520,4181,7118,6501,7225,7403,7721,7060,6372,6384,8873,7087,7952,7750,5278,6353,6361,6921,5713,7428,5285,7384,4565,4263,5047,0,6646,4197,3849,2663,4198,1527,3050,1039,1213,1601,1490,319]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,9511,4981,8192,6527,4262,5853,7303,5743,5315,4420,8321,6112,6313,6502,5375,6288,6162,5522,5429,6789,5875,4047,6444,5396,5916,5266,4173,4099,0,3726,3353,3812,3210,2878,4029,1699,1462,2543,1000,52,2076]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,5186,4419,6642,6319,2721,6086,5173,5465,6535,6810,5175,4890,5643,4685,4607,5231,4698,4628,6228,5725,4920,4493,5732,6292,3275,2710,3511,3231,5342,4599,3037,4363,2777,2992,0,3285,456,1629,2155,2461,410]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,6760,3210,76453,80328,4044,79862,6147,5397,5547,3897,4484,4631,5204,6994,69616,4648,6729,4722,6025,5628,4185,4024,4666,3138,2552,3152,3739,53938,2699,3497,3339,2368,2821,3282,3429,2008,3438,2005,1110,229,815]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,79976,89514,0,0,91372,0,72733,69090,69091,69868,67021,69525,67702,61036,0,60320,54096,60928,54141,54330,51174,57856,50644,52603,51405,56056,52605,0,64201,41787,47961,47506,46315,44252,42270,38668,35568,32106,30696,27489,28843]
    }]
});
