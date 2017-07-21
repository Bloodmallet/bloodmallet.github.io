Highcharts.chart('shaman_enhancement_patchwerk', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Shaman - Enhancement - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 12:04:16.082419'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Chaos Talisman","Cradle of Anguish","Bloodthirsty Instinct","Unstable Arcano Crystal","Eye of Command","Six-Feather Fan","Stat Stick (Haste)","Engine of Eradication","Specter of Betrayal","Memento of Angerboda","Entwined Elemental Foci","Stat Stick (Mastery)","Chrono Shard","Thrice-Accursed Compass","PVP Badge of Conquest","Nightmare Egg Shell","Nightblooming Frond","Stat Stick (Crit)","Vial of Ceaseless Toxins","Tempered Egg of Serpentrix","Gift of Radiance","Horn of Valor","Convergence of Fates","Tirathon's Betrayal","Arcanogolem Digit","Infernal Cinders","PVP Insignia of Conquest","Splinters of Agronax","Bloodstained Handkerchief","Darkmoon Deck: Dominion","Spontaneous Appendages","Faulty Countermeasure","Infernal Alchemist Stone","Umbral Moonglaives","Toe Knee's Promise","The Devilsaur's Bite","Nature's Call","Spiked Counterweight","Terrorbound Nexus","Draught of Souls","Tiny Oozeling in a Jar","Ravaged Seed Pod","Mark of Dargrul","Giant Ornamental Pearl","Windscar Whetstone","Ley Spark"]
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
        data : [150997,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,7696,8564,7063,5085,7369,10995,8177,8748,10079,8287,8637,7957,8648,8208,7471,7687,8824,7491,8230,8568,6574,8055,6572,7870,7953,6467,6570,7207,7331,0,3776,5571,0,4100,4643,4286,2181,2332,3029,8558,4324,2531,3309,2671,1979,655]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,9699,8498,7697,9636,8529,8599,7637,6480,8406,8658,6562,6301,7562,8261,6339,7875,8245,6155,7609,7319,5873,6566,6323,7206,7434,4262,5596,7342,4898,0,4303,4043,0,5698,3511,3752,3208,4462,2252,4659,2896,2785,3363,2029,2071,1260]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,7151,7430,7342,4092,6175,9441,6844,8089,9287,4920,5646,6753,6309,4268,7775,5991,7906,9133,9261,7065,6734,4961,6541,6172,7255,5277,4662,5696,8230,0,3315,4077,0,3179,3682,4639,2430,2502,4106,6026,2280,1920,6,1570,2120,574]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,6153,5796,5806,3109,6930,6771,6053,6191,6996,6352,5863,6478,6587,6394,5696,5400,8032,4841,6257,7699,5535,5129,2920,6488,5282,5710,6066,4195,6012,0,2165,3331,0,4071,3565,1833,1146,3144,2056,5307,1424,1966,3220,2222,1527,1747]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,5611,6977,7545,4787,4994,7668,5250,5452,76930,5735,5999,6105,5639,5079,6099,6606,5086,4006,5555,4291,3700,5217,5408,6349,5738,5115,2896,5435,4045,5199,2746,4346,4615,3224,2686,4584,3443,1760,2033,4836,3044,1501,2856,1458,1653,0]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,7356,85241,3766,3495,5952,5420,6458,76958,0,5072,5571,5470,4003,5999,4872,5001,7488,4685,64783,7370,6020,4039,2202,3261,5477,62071,4302,4065,5288,4635,2430,3604,4822,50138,3841,3059,2502,1653,1688,4293,2758,1942,777,3025,2552,735]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,80121,0,82524,89922,77661,66326,73614,0,0,69801,70341,68591,68817,68666,67546,66354,59120,67811,0,53854,61367,61175,64179,52575,49963,0,58471,54537,49933,69351,58586,49764,63079,0,48427,46038,52605,46491,41026,21246,37741,39449,33663,32643,31534,29277]
    }]
});
