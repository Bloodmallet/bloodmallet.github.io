Highcharts.chart('hunter_survival', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Hunter - Survival - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-20 02:25:46.069130'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Convergence of Fates","Specter of Betrayal","Cradle of Anguish","Bloodthirsty Instinct","Eye of Command","Chaos Talisman","Vial of Ceaseless Toxins","Stat Stick (Haste)","Unstable Arcano Crystal","PVP Badge of Conquest","Stat Stick (Versatility)","Entwined Elemental Foci","Memento of Angerboda","Engine of Eradication","Stat Stick (Crit)","Six-Feather Fan","Stat Stick (Mastery)","Chrono Shard","Thrice-Accursed Compass","Nightmare Egg Shell","Nightblooming Frond","Tempered Egg of Serpentrix","Horn of Valor","Tirathon's Betrayal","Arcanogolem Digit","Bloodstained Handkerchief","Gift of Radiance","PVP Insignia of Conquest","Infernal Cinders","Splinters of Agronax","Darkmoon Deck: Dominion","Umbral Moonglaives","Infernal Alchemist Stone","The Devilsaur's Bite","Draught of Souls","Spontaneous Appendages","Faulty Countermeasure","Spiked Counterweight","Nature's Call","Toe Knee's Promise","Terrorbound Nexus","Mark of Dargrul","Ravaged Seed Pod","Giant Ornamental Pearl","Tiny Oozeling in a Jar","Windscar Whetstone","Ley Spark"]
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
        data : [142123,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,5354,10660,9120,6935,9100,6578,10791,8105,2403,8679,6798,7988,8387,7042,7639,8505,8586,6605,7405,7242,8720,9498,6411,6692,7632,8630,6062,6165,6723,7071,0,5440,0,3716,9841,3451,2366,1029,2051,3271,3573,3298,1161,2927,2166,1086,0]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,6008,10513,7132,7457,6708,7985,7474,6945,4295,7462,7677,7592,7084,6781,5883,8142,6668,7650,3976,7239,8254,6456,7063,8190,8324,5720,5465,5450,6622,6324,0,3037,0,4517,4927,3820,3572,2775,1842,1887,3076,2547,2419,460,2433,3621,2378]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,5919,7859,7707,6946,6531,6868,8288,5335,4200,6463,6688,5171,5644,6401,6128,7209,5118,6462,8013,5427,5299,8247,5084,6964,4915,8814,6771,5502,5643,5039,0,5087,0,4383,5984,2198,3395,4293,1711,3060,2812,1484,1581,3421,2580,0,0]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,3871,8134,7827,6241,7227,5528,7140,7204,4819,4798,6049,5142,6577,5580,6911,6602,5164,6940,5216,5750,6673,5460,4018,6076,7231,4328,4345,4989,3034,6211,0,4208,0,2853,4988,3900,2838,1160,3370,2540,2083,3048,2666,904,2696,1186,1197]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,4060,80207,5553,4824,4576,6886,5485,4480,2823,5910,5602,6267,4901,5580,4378,6546,5988,3677,7116,4787,5417,5774,5068,5868,5915,6089,4512,3442,5033,3706,6050,3686,5700,3272,6008,2467,2498,3106,439,1846,2262,1961,1475,1483,1075,2850,2747]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,4354,0,76972,5140,5930,4875,66756,5667,3209,4154,4669,4277,4008,69302,5348,5699,4250,4824,3256,5942,5595,3637,4743,5534,4935,5706,5423,4345,59167,4802,3687,54484,5030,3184,4162,3081,3177,3126,1609,2688,1565,1765,1430,1556,1420,831,617]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,88769,0,0,75362,72467,69886,0,67542,82244,66309,66056,65181,64608,0,64397,57503,63628,63229,63356,60379,52907,52639,58463,51405,51559,50025,56486,57900,0,49163,67154,0,62625,44829,26264,39538,40157,39428,43489,37334,36297,33577,33853,32671,30983,27800,25878]
    }]
});
