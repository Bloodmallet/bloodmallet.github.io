Highcharts.chart('rogue_outlaw_beastlord', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Rogue - Outlaw - Beastlord'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 17:06:57.712802'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Convergence of Fates","Arcanogolem Digit","Chaos Talisman","Bloodthirsty Instinct","Cradle of Anguish","Stat Stick (Haste)","Chrono Shard","Engine of Eradication","Nightblooming Frond","Eye of Command","Thrice-Accursed Compass","Entwined Elemental Foci","Specter of Betrayal","Stat Stick (Mastery)","Nightmare Egg Shell","Memento of Angerboda","Unstable Arcano Crystal","PVP Badge of Conquest","Six-Feather Fan","Terrorbound Nexus","Stat Stick (Crit)","Gift of Radiance","Tirathon's Betrayal","Vial of Ceaseless Toxins","Bloodstained Handkerchief","Horn of Valor","Tempered Egg of Serpentrix","Splinters of Agronax","PVP Insignia of Conquest","Umbral Moonglaives","Tiny Oozeling in a Jar","Darkmoon Deck: Dominion","Mark of Dargrul","Infernal Cinders","Infernal Alchemist Stone","Toe Knee's Promise","Nature's Call","The Devilsaur's Bite","Ravaged Seed Pod","Spiked Counterweight","Spontaneous Appendages","Windscar Whetstone","Faulty Countermeasure","Giant Ornamental Pearl","Draught of Souls","Ley Spark"]
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
        data : [258814,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,7558,20687,13750,17044,16516,8623,16190,12551,11333,9696,11851,13083,12017,14074,8509,6263,7956,12052,12927,9364,7957,11606,10579,14117,15056,8433,9841,11371,5265,11221,10293,0,7397,7164,0,5487,2866,5093,1739,6929,184,4655,2665,0,3548,7745]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,8679,16011,12758,6498,5480,14858,10372,15239,14203,4587,12273,12979,11210,9007,11283,13378,7875,4013,13008,11563,11040,7171,14859,13965,7721,11687,11378,10237,10146,7344,0,0,8447,4977,0,6722,5511,3536,7794,0,7192,3293,3054,6691,10106,0]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,10657,8249,11060,13733,15847,6533,13516,10756,12170,18367,15599,7280,7514,7887,12005,11690,0,8835,10450,7573,8094,15002,5169,7454,11523,1992,5295,9983,5327,5591,10606,0,4431,5698,0,5248,0,10292,3289,5489,3063,5134,8340,4004,8307,0]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,3316,21563,9195,6358,7188,7635,4344,11354,7818,5702,7170,7715,15902,10944,5775,3961,7375,12494,8115,11345,11513,4757,13499,10707,9227,11485,10976,5372,11829,4535,8945,0,5195,6891,0,0,4009,3660,489,4778,626,1566,4437,5084,6810,3821]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,3390,6115,10424,10265,7218,11116,7386,5639,15737,8461,5840,10846,108737,5436,4560,8256,6343,6329,7382,0,9093,6309,5275,9151,7922,3035,10139,10321,2833,7897,6745,4674,8448,2069,9363,9253,8531,2160,3717,1103,8106,7382,3946,1573,6695,0]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,13175,9637,9891,5092,122913,7231,13696,103684,5121,8109,4540,6668,0,11524,16107,11492,4999,7419,10376,14871,5373,5928,10460,78832,7102,8697,7264,3376,11596,77980,1058,7596,2165,74120,2023,4728,0,1902,3951,633,2599,0,725,3025,5973,2115]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,184874,109644,113187,120144,0,105427,94185,0,92305,102542,98892,96983,0,94570,94606,95287,112639,92934,80674,87776,88483,84734,74519,0,69883,81108,70443,71708,75196,0,71402,92115,67137,0,88110,64450,74541,58650,54471,57261,50413,53376,47166,49683,27603,43470]
    }]
});
