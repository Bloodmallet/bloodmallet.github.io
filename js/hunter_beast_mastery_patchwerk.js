Highcharts.chart('hunter_beast_mastery', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Hunter - Beast Mastery - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-20 10:33:08.929741'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Bloodthirsty Instinct","Convergence of Fates","Cradle of Anguish","Engine of Eradication","Tarnished Sentinel Medallion","Unstable Arcano Crystal","Stat Stick (Mastery)","Thrice-Accursed Compass","Stormsinger Fulmination Charge","Stat Stick (Haste)","PVP Badge of Conquest","Stat Stick (Crit)","Chrono Shard","Stat Stick (Versatility)","Six-Feather Fan","Terror From Below","Nightblooming Frond","Obelisk of the Void","Tirathon's Betrayal","Tempered Egg of Serpentrix","Horn of Valor","Deteriorated Construct Core","PVP Insignia of Conquest","Twisting Wind","Splinters of Agronax","Naraxas' Spiked Tongue","Moonlit Prism","Fury of the Burning Sky","Spectral Thurible","Arcanogolem Digit","Infernal Alchemist Stone","Oakheart's Gnarled Root","Icon of Rot","Aran's Relaxing Ruby","Mrrgria's Favor","Caged Horror","Eye of Skovald","Unstable Horrorslime","Elementium Bomb Squirrel Generator","Corrupted Starlight","Figurehead of the Naglfar","Ley Spark"]
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
        borderColor: '#bbb'
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
        data : [148645,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,7805,7647,7213,8334,7001,4557,7725,8152,9521,8254,8293,6724,7940,8200,8340,6629,8663,6020,7990,8578,6450,8293,6644,7562,6441,4906,6066,4749,5566,7320,0,3597,4529,4605,3478,2637,4201,1509,1427,402,605,855]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,7557,5535,8264,6041,7885,4677,7926,7424,6004,5985,5254,7327,6523,5273,7287,6885,7101,6387,7392,7387,6301,6367,5865,7247,5708,4056,3511,5671,5048,4919,0,4771,3486,3270,4169,3648,1501,1690,1888,2033,1654,482]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,7407,5172,8537,7423,6958,3639,6470,5811,6173,8307,7047,5349,5819,8165,7815,6088,7286,7358,7668,6289,6023,7322,4535,6688,5909,4346,7976,3345,3853,5206,0,3258,4360,3862,2080,2655,2722,596,1393,423,2094,31]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,7439,4934,7738,5609,6025,2200,6104,6569,7381,6496,6155,5802,6053,5656,6255,4045,5263,7150,7337,5899,4424,4361,5146,5747,5112,3438,4767,4347,4056,5113,0,4034,3433,2545,4175,1959,2969,2039,2511,1835,916,2399]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,5985,4735,5762,6107,5479,3336,5235,6618,3886,5867,5184,4858,4694,4618,6235,5673,7289,3614,4810,5821,4462,6094,5811,3937,4006,4273,2861,1860,4481,3910,5139,3282,1406,2594,2263,1905,1474,1820,1212,1282,593,0]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,5625,3825,73382,76340,75471,3438,4957,5542,6579,4435,4993,5971,5323,4756,6639,65558,4931,4455,3199,6926,4551,4544,1912,4870,4748,3431,3441,4281,50079,4694,3845,2929,2249,2892,4021,2720,1652,1427,803,1170,573,0]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,76482,84192,0,0,0,86396,69619,64683,65230,63703,65431,66108,65608,64578,57610,0,51979,57463,53550,50636,58400,48966,55073,48205,49790,51863,47500,49330,0,39065,60398,44755,46042,42840,40296,38538,36310,32682,30601,27952,24971,27566]
    }]
});
