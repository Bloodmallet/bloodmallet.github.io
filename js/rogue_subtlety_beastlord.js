Highcharts.chart('rogue_subtlety_beastlord', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Rogue - Subtlety - Beastlord'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 17:14:09.125407'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Umbral Moonglaives","Specter of Betrayal","Convergence of Fates","Arcanogolem Digit","Engine of Eradication","Eye of Command","Stat Stick (Mastery)","Nightblooming Frond","Stat Stick (Crit)","Thrice-Accursed Compass","Memento of Angerboda","Chaos Talisman","Entwined Elemental Foci","PVP Badge of Conquest","Gift of Radiance","Vial of Ceaseless Toxins","Cradle of Anguish","Six-Feather Fan","Bloodthirsty Instinct","PVP Insignia of Conquest","Tirathon's Betrayal","Bloodstained Handkerchief","Tempered Egg of Serpentrix","Splinters of Agronax","Stat Stick (Haste)","Terrorbound Nexus","Chrono Shard","Nightmare Egg Shell","Darkmoon Deck: Dominion","Unstable Arcano Crystal","Horn of Valor","Infernal Alchemist Stone","Tiny Oozeling in a Jar","Mark of Dargrul","Infernal Cinders","The Devilsaur's Bite","Nature's Call","Spontaneous Appendages","Giant Ornamental Pearl","Windscar Whetstone","Faulty Countermeasure","Toe Knee's Promise","Ravaged Seed Pod","Spiked Counterweight","Ley Spark","Draught of Souls"]
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
        data : [275201,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,16330,21090,13889,22120,14037,13904,13409,16294,16086,19404,16984,18908,11347,14101,16485,16741,13797,13337,12709,10795,12672,10731,16065,16543,9945,14579,4011,9012,0,3041,16386,0,14190,9395,11228,11127,5051,3157,6977,0,1505,609,3154,4222,0,7223]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,14189,14535,12197,21614,14413,14915,18101,13570,7947,12682,13427,10396,11924,10869,8911,19484,17287,14865,18273,12152,8809,15676,15949,15474,16328,9196,16871,10178,0,3326,4879,0,0,4094,3949,2722,6948,3230,7124,3856,7315,5784,3958,0,2760,6539]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,15765,18158,7628,7092,10089,10115,7454,19773,18746,9015,13036,16629,13935,11860,9897,6609,12646,14513,6819,7742,13469,15593,6276,4700,6640,3130,10046,14263,0,6488,3550,0,11178,3170,2971,2353,1212,3812,156,10113,0,1612,6664,4905,765,5599]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,5928,6092,6901,13348,10701,19664,17564,15114,6838,12068,5640,8693,11101,16233,8861,12209,10450,9279,8683,14088,7044,61,9704,8320,10061,10841,9992,6451,0,3663,11263,0,707,12785,8210,6899,1747,232,7421,0,1815,5237,0,7413,2220,1531]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,20792,144667,8467,16403,15190,6454,6561,9436,11647,2936,6284,8423,6653,7979,3153,9416,9529,12880,9637,3439,13636,14792,11434,9681,11357,5825,6830,9104,13115,949,8304,4541,7097,131,5726,6760,4093,8608,3667,3396,7315,5917,8662,1254,0,4280]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,136905,0,11529,10305,133642,7503,9345,9994,4591,12266,13827,9809,9794,1268,13158,100235,99324,9159,7981,3887,10050,7552,8391,8599,0,8202,4387,6902,7767,3900,0,9276,6609,11523,66573,6864,3961,1687,0,5898,885,2612,729,2259,461,2837]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,0,143829,109112,0,124621,119551,106084,110895,106690,102994,97284,105381,105110,106533,0,0,87440,87863,98086,83642,84431,78984,81084,89326,88831,87231,82430,111369,108251,83452,106786,69898,57797,0,58346,62001,58949,55861,53612,45873,31056,26435,17622,26099,-25522]
    }]
});
