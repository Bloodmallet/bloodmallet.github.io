Highcharts.chart('druid_feral_patchwerk', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Druid - Feral - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 08:06:08.158069'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Specter of Betrayal","Eye of Command","Engine of Eradication","Nightblooming Frond","Vial of Ceaseless Toxins","Stat Stick (Mastery)","Six-Feather Fan","Stat Stick (Crit)","Convergence of Fates","Cradle of Anguish","Memento of Angerboda","Chaos Talisman","Entwined Elemental Foci","Bloodthirsty Instinct","Thrice-Accursed Compass","PVP Badge of Conquest","Gift of Radiance","Tirathon's Betrayal","Arcanogolem Digit","Stat Stick (Haste)","Chrono Shard","Nightmare Egg Shell","Unstable Arcano Crystal","Bloodstained Handkerchief","Umbral Moonglaives","Infernal Cinders","Tempered Egg of Serpentrix","Splinters of Agronax","PVP Insignia of Conquest","Draught of Souls","Darkmoon Deck: Dominion","Horn of Valor","Infernal Alchemist Stone","The Devilsaur's Bite","Faulty Countermeasure","Spontaneous Appendages","Terrorbound Nexus","Nature's Call","Tiny Oozeling in a Jar","Mark of Dargrul","Windscar Whetstone","Spiked Counterweight","Toe Knee's Promise","Giant Ornamental Pearl","Ravaged Seed Pod","Ley Spark"]
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
        data : [151675,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,11847,8737,10538,11222,10738,9662,10654,8413,6602,9456,8358,7871,7379,8652,7738,9247,8085,9796,9472,7271,8032,7023,3270,8767,6130,6272,8335,8318,6244,7054,0,5360,0,3647,4301,4214,4373,595,1291,3126,2066,3810,2987,970,1025,416]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,10970,7276,8361,9137,7896,6560,9106,6767,6163,7864,7514,6546,7629,7346,8220,6807,6916,9154,7939,7117,7928,6770,5580,7478,7093,5998,7311,6724,7348,4861,0,5384,0,5702,4166,3140,3850,3202,2749,2402,2746,2308,2756,2841,3032,2409]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,10576,8280,7092,9339,8324,7922,8919,7861,6490,5888,6280,9477,7136,7897,6173,7455,6961,6336,7850,6225,6400,7664,2549,6950,5618,5982,7356,6078,3735,7195,0,5685,0,4041,3306,3758,404,2347,3507,2273,1398,2803,1173,2740,2589,0]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,9824,6968,6219,7546,8487,7123,6846,6441,5761,7218,7428,4913,5910,5608,6133,6147,6206,7478,5899,5814,5190,5115,2441,7083,5003,3959,6603,5701,6192,5604,0,5299,0,2445,2147,2132,4546,2394,978,2024,2893,2405,4257,1725,566,1296]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,94147,4023,6662,8109,8302,4544,6379,6801,4602,6555,5498,6093,5305,4914,5404,4883,5435,6222,6888,5200,6780,5540,4694,5299,3768,5722,3731,5148,4065,2985,5978,2798,5245,2652,4478,3726,1710,2618,2666,2267,927,1383,2152,1669,1545,0]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,0,6428,78661,6135,72952,4580,5725,4486,4187,70335,4593,5280,6418,5356,5946,5664,4005,4897,4973,6053,2838,4989,1232,6213,63832,62861,6090,4627,4788,5329,6499,2994,5123,3744,1241,1819,3399,600,1439,1395,924,2380,2931,879,840,434]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,80175,0,65666,0,71998,62121,68603,74400,0,67572,66960,67022,66336,66353,65605,64854,57570,55597,59988,60100,58524,75812,53517,0,0,51127,53928,57370,54364,69491,53620,62635,47733,43445,43364,39901,42336,35557,34556,34446,29823,28183,29968,26867,22730]
    }]
});
