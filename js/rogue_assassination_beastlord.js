Highcharts.chart('rogue_assassination_beastlord', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Rogue - Assassination - Beastlord'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 16:41:15.408528'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Engine of Eradication","Eye of Command","Stat Stick (Mastery)","Arcanogolem Digit","Specter of Betrayal","Convergence of Fates","Thrice-Accursed Compass","Stat Stick (Crit)","Memento of Angerboda","Gift of Radiance","Entwined Elemental Foci","Nightblooming Frond","Chaos Talisman","PVP Badge of Conquest","Cradle of Anguish","Six-Feather Fan","Tirathon's Betrayal","Vial of Ceaseless Toxins","Bloodthirsty Instinct","Unstable Arcano Crystal","Horn of Valor","Stat Stick (Haste)","PVP Insignia of Conquest","Nightmare Egg Shell","Bloodstained Handkerchief","Terrorbound Nexus","Splinters of Agronax","Tempered Egg of Serpentrix","Chrono Shard","Darkmoon Deck: Dominion","Umbral Moonglaives","Infernal Alchemist Stone","Tiny Oozeling in a Jar","Infernal Cinders","Nature's Call","Mark of Dargrul","The Devilsaur's Bite","Windscar Whetstone","Spontaneous Appendages","Giant Ornamental Pearl","Faulty Countermeasure","Draught of Souls","Toe Knee's Promise","Spiked Counterweight","Ravaged Seed Pod","Ley Spark"]
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
        data : [283622,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,10613,15117,10740,14680,17910,8978,15815,13757,13833,15870,13237,13616,15993,18715,17988,18329,13896,12379,9386,3970,12270,11203,9698,10208,10874,5954,12075,8006,12514,0,7499,0,4155,7133,12582,88,1686,4742,0,2536,3108,14378,2688,0,848,0]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,17406,13678,8782,15165,12256,7801,16317,14087,20091,4828,8742,10411,10314,9361,9646,6205,12778,8100,12080,3305,11229,10942,10327,6018,15241,11296,12522,15377,7477,0,7967,0,5199,6788,0,9931,10281,2102,10040,2817,7914,1087,2902,3044,3434,3637]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,10967,12624,17872,13333,17555,13940,4624,7086,7516,14514,13269,16281,17318,8916,9716,15346,14025,13092,4148,7319,6599,11312,7891,9978,9715,1311,5232,10223,11506,0,13400,0,13095,3347,7740,2866,2084,4423,4790,7469,5426,11751,4053,5865,2622,0]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,12779,8767,16541,10621,9728,9099,14697,11698,8231,10110,10062,11240,2060,9195,14197,10749,6547,14417,12510,3367,6475,11139,9061,9593,8810,10614,9109,12449,11526,0,899,0,1602,8631,0,6780,8091,8749,2422,1507,0,4269,6590,0,3375,165]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,9994,10494,0,11734,123617,6936,9716,9555,8505,8785,9281,11345,12789,8028,9745,3891,10379,5614,9703,4730,11963,2707,2308,10614,7496,8988,11303,3198,2132,13009,9974,9905,4847,4709,10142,6187,2456,567,919,7230,5194,0,0,4895,64,5411]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,135448,11214,11213,14837,0,6554,6228,8745,2303,11519,10152,2341,12689,8947,98627,13106,5690,92815,8996,1817,4007,8852,9713,7048,11411,5665,6085,10375,3475,7234,80052,10634,7047,68472,0,0,4344,7849,3784,0,174,5425,5293,1715,0,0]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,123391,123791,102882,0,121400,105198,106018,110226,103546,103910,98781,91834,98675,0,84230,85514,0,89476,119868,90892,85754,91973,85235,74387,93466,80173,76491,86778,109830,0,96624,80085,0,75719,72346,66738,58288,67098,60775,54301,24284,33557,25817,30383,29411]
    }]
});
