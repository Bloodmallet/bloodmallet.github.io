Highcharts.chart('hunter_survival_beastlord', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Hunter - Survival - Beastlord'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 15:29:40.994625'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Arcanogolem Digit","Cradle of Anguish","Bloodthirsty Instinct","Eye of Command","Chaos Talisman","Stat Stick (Haste)","Unstable Arcano Crystal","Specter of Betrayal","Stat Stick (Crit)","PVP Badge of Conquest","Chrono Shard","Nightmare Egg Shell","Entwined Elemental Foci","Memento of Angerboda","Convergence of Fates","Stat Stick (Mastery)","Thrice-Accursed Compass","Engine of Eradication","Horn of Valor","PVP Insignia of Conquest","Six-Feather Fan","Vial of Ceaseless Toxins","Nightblooming Frond","Tirathon's Betrayal","Terrorbound Nexus","Tempered Egg of Serpentrix","Bloodstained Handkerchief","Gift of Radiance","Splinters of Agronax","Darkmoon Deck: Dominion","Mark of Dargrul","Umbral Moonglaives","Infernal Alchemist Stone","Infernal Cinders","Giant Ornamental Pearl","Tiny Oozeling in a Jar","Toe Knee's Promise","Nature's Call","Spiked Counterweight","Faulty Countermeasure","The Devilsaur's Bite","Ravaged Seed Pod","Spontaneous Appendages","Draught of Souls","Windscar Whetstone","Ley Spark"]
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
        data : [237033,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,17326,12942,7877,15125,8385,7579,9885,10290,9617,12260,9261,7619,9814,10919,11274,10573,5794,9253,5821,10755,8957,10906,8897,9078,17414,14219,11007,7512,9841,0,9053,6727,0,6164,9635,4797,4125,1452,4103,3429,3795,6174,4181,12470,0,0]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,11703,10804,10845,11045,6380,16951,4717,16378,9714,11030,9191,10688,7686,7026,7435,12130,9236,8395,9320,7928,12278,7918,12583,13299,3467,7333,12284,12387,12052,0,7039,11013,0,7477,4714,8554,5793,0,1893,7064,6317,733,1527,102,3487,0]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,11434,15950,12957,8978,21006,6398,11041,9046,13912,5370,12341,12202,5426,8735,8402,8926,4594,12248,11828,4106,8162,6984,9918,7162,5806,7715,6260,3860,6689,0,6838,4403,0,6737,5290,6691,1160,4904,7080,166,175,9210,6186,4700,3638,4630]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,12814,5282,9404,4538,1769,9450,1534,9820,5468,4666,7917,3045,11600,13873,6167,5219,9398,1991,4174,9317,8626,13297,7034,10570,7869,7755,8373,8182,2975,0,1983,5523,0,66,7792,7726,8302,9460,742,95,4567,0,4884,11523,4226,889]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,11837,12004,8314,10752,11237,8160,6065,102669,7096,16873,7633,8944,6980,2527,7904,5989,7791,12248,8453,2669,11252,11125,10229,9096,8524,9216,6260,9835,10674,9105,7977,7696,6962,6865,3495,932,4276,0,1239,2411,2751,1604,2303,2346,1830,7393]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,6268,114058,9621,7208,9129,2613,5170,0,12346,4126,3985,6481,10155,9768,7467,10532,8750,90705,2920,10108,3855,75195,2808,5948,3438,7659,4057,3681,7621,8637,3236,75438,5320,73954,2751,5336,2719,0,4751,6622,5513,4948,2521,5891,1046,864]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,101490,0,108628,109448,101959,103621,111488,0,89733,92559,96081,94382,91596,90186,94106,81616,89360,0,88241,83833,75079,0,72349,67664,76089,67952,72426,73533,63288,95068,75026,0,92133,0,63331,62050,60587,72294,54146,52445,48620,49049,43869,27005,39134,32975]
    }]
});
