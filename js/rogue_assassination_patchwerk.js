Highcharts.chart('rogue_assassination', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Rogue - Assassination - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-20 03:41:15.047310'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Specter of Betrayal","Nightblooming Frond","Convergence of Fates","Eye of Command","Engine of Eradication","Stat Stick (Mastery)","Vial of Ceaseless Toxins","Stat Stick (Crit)","Stat Stick (Versatility)","Memento of Angerboda","Gift of Radiance","Entwined Elemental Foci","Thrice-Accursed Compass","Six-Feather Fan","Cradle of Anguish","Chaos Talisman","PVP Badge of Conquest","Bloodthirsty Instinct","Tirathon's Betrayal","Arcanogolem Digit","Stat Stick (Haste)","Unstable Arcano Crystal","Bloodstained Handkerchief","Nightmare Egg Shell","Chrono Shard","Tempered Egg of Serpentrix","Splinters of Agronax","PVP Insignia of Conquest","Draught of Souls","Infernal Cinders","Horn of Valor","Umbral Moonglaives","Darkmoon Deck: Dominion","The Devilsaur's Bite","Infernal Alchemist Stone","Spontaneous Appendages","Terrorbound Nexus","Faulty Countermeasure","Nature's Call","Tiny Oozeling in a Jar","Windscar Whetstone","Mark of Dargrul","Spiked Counterweight","Giant Ornamental Pearl","Toe Knee's Promise","Ravaged Seed Pod","Ley Spark"]
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
                    s += '<br/>'+ this.points[i].series.name +': ' + cumulative_amount; 
                }
            }
            return s;
        },
        shared: true
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
        data : [144313,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,9453,9571,7496,8058,8750,6914,10602,8620,8307,7633,7699,7599,8753,9093,8766,8315,7025,8628,8349,8495,7619,4530,8025,7095,7161,8126,7478,5455,5885,5633,5585,6209,0,5560,0,3545,2582,3711,1406,2059,2911,2160,1753,2946,3179,949,1136]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,10142,10053,5004,7463,7396,7490,8520,5798,6144,6765,6825,6988,5952,6747,8506,7388,8145,6753,7112,6108,6349,3244,7347,6460,5663,6411,6278,7251,6389,5683,5960,4789,0,3094,0,1885,3715,3320,2038,2556,1796,2881,2822,473,1706,3456,1435]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,9567,9157,6162,8259,7353,7413,8203,6097,7062,7787,5916,5883,6993,7649,6032,6485,4348,6041,7836,7604,7012,3034,6102,6578,6492,5817,5061,5036,6133,3988,4832,5017,0,4036,0,4408,3451,3564,3107,1304,3282,2727,2915,2250,2222,1823,0]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,8386,7327,4511,6185,6241,6443,6997,6829,6302,5577,7474,5406,5379,7033,5023,5951,7234,5570,6203,5387,5260,2963,6398,5184,5762,7095,6396,4096,6774,5717,4252,3603,0,4216,0,3223,2186,3482,846,3482,1048,59,903,1361,3204,778,36]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,86745,6420,5087,6352,4945,5506,5322,6249,5810,4433,3744,6558,5075,6565,5392,5334,3947,4657,5329,6357,3397,2519,5694,4943,4085,4619,4445,3428,5691,3676,3954,4716,5327,1953,4838,2055,2097,1572,1423,780,1117,3539,2054,1990,1204,1366,0]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,0,7446,3222,5400,78642,5363,69206,4404,4656,6371,4615,3396,4823,4659,66338,5816,5557,4928,5681,4092,6536,4451,4008,4549,3990,4627,4573,4625,4167,55764,2549,55191,4110,3764,4026,3173,2393,2571,2289,1760,2637,1435,2284,1104,1426,2930,1257]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,65309,83375,72772,0,70191,0,63367,62957,62562,64698,65109,63867,58335,0,60600,61342,58979,54591,53382,55006,69679,51780,52411,53674,49667,50800,54507,46605,0,53247,0,66246,47636,60212,43270,41285,38972,40148,37006,35164,30215,27390,28757,24807,21345,20637]
    }]
});
