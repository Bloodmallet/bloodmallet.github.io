Highcharts.chart('demon_hunter_havoc_beastlord', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Demon_Hunter - Havoc - Beastlord'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 14:44:07.236169'
    },
    xAxis: {
        categories: ["Umbral Moonglaives","Kil'jaeden's Burning Wish","Eye of Command","Arcanogolem Digit","PVP Badge of Conquest","Engine of Eradication","Stat Stick (Crit)","Chaos Talisman","Specter of Betrayal","Bloodthirsty Instinct","Memento of Angerboda","Stat Stick (Mastery)","Cradle of Anguish","Entwined Elemental Foci","Horn of Valor","Unstable Arcano Crystal","Thrice-Accursed Compass","Stat Stick (Haste)","Chrono Shard","Nightmare Egg Shell","PVP Insignia of Conquest","Gift of Radiance","Nightblooming Frond","Six-Feather Fan","Vial of Ceaseless Toxins","Terrorbound Nexus","Tirathon's Betrayal","Bloodstained Handkerchief","Tempered Egg of Serpentrix","Darkmoon Deck: Dominion","Splinters of Agronax","Convergence of Fates","Infernal Alchemist Stone","Mark of Dargrul","Infernal Cinders","Tiny Oozeling in a Jar","Nature's Call","Giant Ornamental Pearl","The Devilsaur's Bite","Faulty Countermeasure","Spontaneous Appendages","Toe Knee's Promise","Windscar Whetstone","Draught of Souls","Spiked Counterweight","Ravaged Seed Pod","Ley Spark"]
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
        data : [0,238277,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [29829,0,13647,19961,13085,11416,15530,7482,16477,14396,17416,12431,10561,13589,7889,2200,15200,12408,10326,12529,11119,7095,12139,14073,20492,8471,8656,12884,11973,0,10212,11619,0,6788,15025,7502,2653,7028,3246,13068,3059,7272,932,6645,310,4657,2750]
    }, {
        name: '930',
        color: '#db843d',
        data: [32918,0,10071,15433,13769,12306,17598,15288,19957,10486,6154,10711,10356,7586,11483,7779,7890,11698,17818,10056,7388,15913,15143,10779,9611,14440,12929,12577,10136,0,15138,10278,0,10832,0,1997,4041,697,9867,0,9047,8712,2962,7992,8084,7767,3172]
    }, {
        name: '920',
        color: '#4198af',
        data: [15455,0,11566,15001,13369,16120,816,17100,8507,15412,14833,10734,15203,9650,12889,9068,16099,11386,1441,7951,9314,2505,11138,7075,11237,3664,6139,5210,7616,0,5582,3262,0,8124,10712,8479,4957,6103,3501,7794,555,777,8811,2844,1788,3016,0]
    }, {
        name: '910',
        color: '#71588f',
        data: [24083,0,10129,8125,12058,5287,11263,9170,11835,5243,7349,9571,11031,14931,8994,3456,4057,10374,12898,19320,11377,15354,14242,15297,4784,5448,14060,8744,15346,0,5186,8208,0,2801,4377,5738,6749,5566,1736,3757,0,4673,4174,6640,3871,0,1751]
    }, {
        name: '900',
        color: '#89a54e',
        data: [21619,0,15889,14913,6372,17050,14663,12368,119593,10024,11870,10886,11058,5391,9193,6994,4167,424,9276,594,7187,4638,4840,12806,18336,6163,10811,9275,7584,10655,12659,11825,11888,11514,9098,7219,2499,6290,3964,6414,10120,3522,9301,6527,1272,10424,5702]
    }, {
        name: '890',
        color: '#aa4643',
        data: [233195,0,8632,13814,12828,120267,8164,5089,0,14503,7699,9141,115094,9501,11939,0,11449,17470,3420,7950,6310,7708,10386,7183,86507,12219,2679,8807,6644,7913,3903,3272,5529,0,80822,2423,2329,0,3361,430,698,6576,1046,4553,2463,0,0]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,132056,108971,117093,0,112511,111351,0,106117,110671,112479,0,111303,105116,134978,105103,97902,101920,98258,101115,100109,84550,84365,0,91539,84803,82014,77895,116986,81510,77232,107994,85865,0,72402,75161,67947,65394,61580,62019,52446,49660,35713,43079,40929,34145]
    }]
});
