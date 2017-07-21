Highcharts.chart('death_knight_frost_patchwerk', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Death_Knight - Frost - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 07:09:25.374812'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Convergence of Fates","Eye of Command","Specter of Betrayal","Chaos Talisman","Cradle of Anguish","Horn of Valor","Engine of Eradication","PVP Badge of Victory","Stat Stick (Crit)","Unstable Arcano Crystal","Stat Stick (Haste)","Memento of Angerboda","Entwined Elemental Foci","Ettin Fingernail","Stat Stick (Mastery)","Chrono Shard","Fel-Oiled Infernal Machine","Nightmare Egg Shell","Vial of Ceaseless Toxins","Gift of Radiance","PVP Insignia of Victory","Ursoc's Rending Paw","Claw of the Crystalline Scorpid","Bloodstained Handkerchief","Might of Krosus","Darkmoon Deck: Dominion","Faulty Countermeasure","Infernal Cinders","Infernal Alchemist Stone","Umbral Moonglaives","The Devilsaur's Bite","Nature's Call","Spontaneous Appendages","Spiked Counterweight","Terrorbound Nexus","Giant Ornamental Pearl","Toe Knee's Promise","Draught of Souls","Mark of Dargrul","Tiny Oozeling in a Jar","Ravaged Seed Pod","Windscar Whetstone"]
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
        data : [140834,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,6246,7046,10196,9339,8003,9482,8612,7161,8047,4132,8189,7047,6311,6775,6475,7423,6992,8568,6569,4928,5446,6905,7274,7744,6200,0,4290,5014,0,3471,3406,2884,4164,3621,2254,3128,2598,4001,2511,2029,1736,1111]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,5563,6397,8582,7939,9231,5478,6573,7655,7075,4467,8282,6002,7545,7482,7086,6391,6568,5216,9551,7767,5108,8317,7863,5752,6715,0,5122,3861,0,5015,3211,1677,2522,3805,3412,1854,3550,7013,2002,1416,3342,1292]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,5730,7833,8033,6303,5190,5999,7066,6778,4847,3338,6492,6705,6371,5751,5229,6444,6712,5953,6395,4432,5344,4256,5885,5318,4540,0,3106,4505,0,3048,4403,2172,2017,1427,2065,3450,1749,4212,1578,2162,1938,3040]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,3357,5314,7027,6636,7030,6953,5950,5327,7347,3442,5129,5002,4822,6508,5757,4372,3745,6671,6275,4491,4401,7289,4875,7210,6505,0,5589,4424,0,2583,1369,2699,3073,4139,2796,2527,1404,2214,2315,1826,1893,0]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,4981,6151,73880,4438,5246,5773,6244,5634,5732,2117,3769,5724,5762,5865,5032,6654,6727,3918,5682,5436,3695,2206,4999,3984,5230,4048,4180,2893,3994,2944,3989,1713,1022,388,2024,1081,2353,3603,927,1612,1678,2056]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,2824,4918,0,5196,71683,4978,67355,4255,3669,2659,4789,4720,5773,4833,3312,4360,2638,6632,59068,4909,5549,6590,5429,4304,4460,5646,3010,52823,5354,47893,1805,1640,2956,2194,625,3051,1438,5216,3464,2631,1361,2012]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,89109,72273,0,67397,0,66976,0,64504,63365,79748,62123,63547,61924,60951,64293,59660,60354,56587,0,55039,53475,47264,46484,46783,46244,65654,48647,0,59016,0,38601,43242,35357,35255,33817,31597,30553,17301,30065,28470,27636,26428]
    }]
});
