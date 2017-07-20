Highcharts.chart('paladin_retribution', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Paladin - Retribution - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-20 03:05:02.340728'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Specter of Betrayal","Vial of Ceaseless Toxins","Infernal Cinders","Eye of Command","Cradle of Anguish","Unstable Arcano Crystal","Horn of Valor","Convergence of Fates","Faulty Countermeasure","Chaos Talisman","Stat Stick (Crit)","Stat Stick (Versatility)","Memento of Angerboda","Fel-Oiled Infernal Machine","Entwined Elemental Foci","Stat Stick (Haste)","Ettin Fingernail","Engine of Eradication","Claw of the Crystalline Scorpid","Chrono Shard","Umbral Moonglaives","Nightmare Egg Shell","Stat Stick (Mastery)","Bloodstained Handkerchief","PVP Badge of Victory","PVP Insignia of Victory","Might of Krosus","Ursoc's Rending Paw","The Devilsaur's Bite","Gift of Radiance","Darkmoon Deck: Dominion","Draught of Souls","Spontaneous Appendages","Infernal Alchemist Stone","Terrorbound Nexus","Nature's Call","Spiked Counterweight","Mark of Dargrul","Toe Knee's Promise","Tiny Oozeling in a Jar","Giant Ornamental Pearl","Windscar Whetstone","Ravaged Seed Pod"]
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
        data : [115564,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,9240,9092,7920,6840,7420,3169,6023,5696,6075,7337,6816,5441,4859,4885,3220,6669,6106,5674,7267,5996,5364,5495,5045,7302,4689,6018,4842,5928,5427,4817,0,7846,3793,0,3444,2252,3971,3353,3376,949,1226,2435,2074]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,9971,8145,8364,5939,6951,2560,5485,4230,5979,6521,3227,5678,5081,6642,6767,3516,3610,6852,6266,4833,5262,4730,5228,5342,6723,3868,6622,4957,4421,3925,0,7749,3684,0,3551,1470,3832,2814,2521,2344,2805,2222,1635]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,8377,7224,6036,5404,4393,3305,6492,3722,4832,3132,6568,4891,5282,5102,6038,6510,5015,3457,5326,3968,3439,3922,6124,5343,3237,4010,5057,5116,3711,5313,0,7648,3374,0,2276,3291,1489,1863,1392,3560,1999,744,791]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,6318,7064,4769,4540,5052,2650,3359,4111,4632,5720,4670,4025,4577,3138,2980,3643,4860,4890,6614,4839,5529,5296,2283,4617,4113,5161,5253,4406,4457,3737,0,4641,3233,0,2656,1284,2961,2744,2259,755,1386,2037,1950]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,71854,6433,5757,5142,5087,3077,6087,3548,3994,4074,3319,5221,4579,5058,4467,5143,4444,3440,3935,5207,2594,4329,4964,4154,4242,1901,4721,4419,3721,3917,3972,5686,2596,5038,2392,1689,2565,2056,2514,3232,703,754,987]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,0,64008,66762,3932,56826,3631,1584,3380,3555,3105,4113,3025,3310,4142,2942,2823,3350,53705,4389,2607,54735,3695,4359,5093,4048,3330,2961,5244,2362,2200,4191,5257,3055,2577,2524,1463,2362,1154,2560,0,1720,2926,577]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,0,0,60589,0,67242,55301,58791,53515,52476,52803,52631,51432,50148,52381,50346,50865,0,44219,50281,0,48975,47925,42773,46034,45578,40023,38918,44136,44085,55363,20539,38878,49302,35513,38360,32252,34836,28379,28364,26472,25051,25864]
    }]
});
