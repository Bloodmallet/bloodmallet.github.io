Highcharts.chart('death_knight_unholy_beastlord', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Death_Knight - Unholy - Beastlord'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 14:36:50.500967'
    },
    xAxis: {
        categories: ["Cradle of Anguish","Chaos Talisman","Kil'jaeden's Burning Wish","Unstable Arcano Crystal","Stat Stick (Haste)","Fel-Oiled Infernal Machine","Chrono Shard","Engine of Eradication","Ravaged Seed Pod","Eye of Command","Entwined Elemental Foci","Nightmare Egg Shell","Ettin Fingernail","Toe Knee's Promise","Memento of Angerboda","Spiked Counterweight","Stat Stick (Mastery)","Specter of Betrayal","Claw of the Crystalline Scorpid","Stat Stick (Crit)","Draught of Souls","Gift of Radiance","Horn of Valor","Terrorbound Nexus","PVP Badge of Victory","Vial of Ceaseless Toxins","PVP Insignia of Victory","Nature's Call","Convergence of Fates","Bloodstained Handkerchief","Might of Krosus","Ursoc's Rending Paw","Darkmoon Deck: Dominion","Infernal Alchemist Stone","Tiny Oozeling in a Jar","Umbral Moonglaives","Mark of Dargrul","Infernal Cinders","The Devilsaur's Bite","Spontaneous Appendages","Giant Ornamental Pearl","Windscar Whetstone","Faulty Countermeasure"]
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
        data : [0,0,302197,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [18162,10193,0,8234,17317,14132,17324,15477,0,13277,16312,12037,14406,0,15425,535,15625,14274,13871,11297,8475,14902,7753,10710,12233,17337,8501,2024,7349,11632,6390,9705,0,0,1582,933,9327,768,6305,3653,12624,2010,4405]
    }, {
        name: '930',
        color: '#db843d',
        data: [7728,16407,0,243,7022,0,9747,15887,11481,15387,9479,11447,13566,7596,5271,8923,8843,14154,15869,13241,7292,11706,14146,10849,12295,8023,7752,10030,12842,9332,14363,7474,0,0,12814,5378,5795,12193,7023,995,0,5796,568]
    }, {
        name: '920',
        color: '#4198af',
        data: [24353,10429,0,9460,21310,88448,14084,13125,4299,9333,9252,7456,9205,901,16444,8702,13040,10639,5641,14915,5885,4888,7253,7844,9350,13027,13050,479,4272,11431,13828,11316,0,0,4953,10371,6864,8495,3390,7607,5875,90,5332]
    }, {
        name: '910',
        color: '#71588f',
        data: [1424,16213,0,3670,9141,6896,9799,11071,7096,9733,9597,17644,10351,6484,6526,0,10991,13182,18010,5393,10120,12556,12222,8692,9774,12759,4330,3782,9449,6142,6865,13133,0,0,4291,6084,1939,3080,3250,600,5851,5884,4982]
    }, {
        name: '900',
        color: '#89a54e',
        data: [16546,7977,0,2859,14382,14445,9568,9819,3826,10024,12279,622,3316,8385,10886,1268,10251,121585,7681,9498,11072,10998,9952,5956,7612,3202,13570,10881,8436,11184,6341,3300,6778,7751,10363,2653,2951,4372,1799,2842,1874,3293,5370]
    }, {
        name: '890',
        color: '#aa4643',
        data: [241595,18174,0,6584,10381,9404,6775,130464,6437,11012,3149,11862,19011,10386,6145,8088,6496,0,10046,12824,10116,5795,4265,2843,7988,93639,3165,0,5983,5422,8250,6569,9382,12229,0,75969,7302,69413,4212,7764,3317,1467,0]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,226667,0,267164,218213,164715,139482,0,165837,123629,130703,129663,120362,159729,128938,163389,118954,0,99545,103150,115411,105060,106251,110981,98225,0,91055,111972,85842,75340,73395,77493,111637,95141,76845,0,65716,0,67840,60412,56191,61266,53635]
    }]
});
