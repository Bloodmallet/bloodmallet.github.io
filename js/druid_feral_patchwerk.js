Highcharts.chart('druid_feral', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Druid - Feral - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-20 01:50:23.485304'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Specter of Betrayal","Eye of Command","Vial of Ceaseless Toxins","Nightblooming Frond","Engine of Eradication","Stat Stick (Mastery)","Six-Feather Fan","Chaos Talisman","Convergence of Fates","Stat Stick (Crit)","Stat Stick (Versatility)","Cradle of Anguish","Entwined Elemental Foci","PVP Badge of Conquest","Thrice-Accursed Compass","Memento of Angerboda","Bloodthirsty Instinct","Gift of Radiance","Tirathon's Betrayal","Arcanogolem Digit","Chrono Shard","Stat Stick (Haste)","Nightmare Egg Shell","Bloodstained Handkerchief","Umbral Moonglaives","Infernal Cinders","Unstable Arcano Crystal","Tempered Egg of Serpentrix","Splinters of Agronax","PVP Insignia of Conquest","Draught of Souls","Horn of Valor","Darkmoon Deck: Dominion","Infernal Alchemist Stone","The Devilsaur's Bite","Faulty Countermeasure","Spontaneous Appendages","Terrorbound Nexus","Nature's Call","Mark of Dargrul","Tiny Oozeling in a Jar","Spiked Counterweight","Windscar Whetstone","Toe Knee's Promise","Giant Ornamental Pearl","Ravaged Seed Pod","Ley Spark"]
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
        data : [146705,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,12587,8133,11393,9717,8271,9440,9310,9615,7578,8221,8507,8891,7373,9129,8461,6697,6420,8654,7816,8444,8251,6562,8803,7795,6108,6777,2083,7231,6533,6607,6313,6189,0,0,4593,3678,4369,2698,2844,3090,1279,3920,2871,2976,2072,2211,711]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,12262,7809,7393,10004,7350,7952,8479,7435,5268,6790,6981,7732,7346,6594,6512,7756,8574,7066,8800,8022,7165,7428,5416,8572,6186,6522,3705,7293,7117,5996,6382,5765,0,0,4892,4025,2628,3109,1401,2643,3078,2622,831,2412,1208,2109,1303]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,8669,8477,8842,8636,7901,6992,8362,6386,6660,7619,6443,6938,6744,7270,7194,6089,5141,5947,6944,6555,6285,6151,6433,4789,5415,4669,3905,7171,5502,5233,6155,4345,0,0,3450,3294,4695,3111,2186,865,2341,3032,2207,1443,2015,1499,0]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,7394,6339,8062,6523,6667,4732,8770,6808,5395,5668,5891,5505,5420,5996,6649,6025,7010,5836,6418,7409,5101,5519,5808,7219,5055,5442,1324,4612,7360,4449,4802,5235,0,0,3117,3639,2761,1802,2710,3273,1702,1152,2037,3428,2922,2690,1312]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,94105,6484,6166,7317,5886,6929,6189,6431,5928,5652,6129,7055,7194,4928,5323,5943,5212,5459,5854,5979,5954,5652,5322,5737,4387,4997,2863,6087,2870,4884,4609,2752,6777,6255,4149,3303,2523,2560,891,82,2319,2217,1814,2185,0,1683,0]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,0,4762,73385,7401,76234,5574,5872,4564,2461,4174,5265,68645,5223,4463,4167,4937,5749,4786,5727,5087,4574,5599,5513,4889,61948,60569,3165,5208,5470,4984,4232,4375,4622,4639,2713,1916,1969,3184,2811,3096,1190,2213,1944,2188,2548,648,615]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,76703,0,64255,0,67800,60836,65229,72644,67339,66183,0,64848,65503,64858,65204,63369,62494,56758,55046,58101,57932,56581,54159,0,0,71911,50709,53152,55799,52965,51446,68269,61048,45580,41053,41383,37951,39345,33052,33968,28799,31608,27722,28964,25736,21739]
    }]
});
