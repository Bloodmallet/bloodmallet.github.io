Highcharts.chart('rogue_assassination_patchwerk', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Rogue - Assassination - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 09:57:52.103299'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Specter of Betrayal","Eye of Command","Convergence of Fates","Nightblooming Frond","Engine of Eradication","Stat Stick (Mastery)","Vial of Ceaseless Toxins","Memento of Angerboda","Entwined Elemental Foci","Gift of Radiance","Thrice-Accursed Compass","Stat Stick (Crit)","Chaos Talisman","Cradle of Anguish","Six-Feather Fan","PVP Badge of Conquest","Tirathon's Betrayal","Bloodthirsty Instinct","Arcanogolem Digit","Unstable Arcano Crystal","Stat Stick (Haste)","Bloodstained Handkerchief","Nightmare Egg Shell","Chrono Shard","Tempered Egg of Serpentrix","PVP Insignia of Conquest","Splinters of Agronax","Draught of Souls","Infernal Cinders","Horn of Valor","Umbral Moonglaives","Darkmoon Deck: Dominion","The Devilsaur's Bite","Infernal Alchemist Stone","Spontaneous Appendages","Terrorbound Nexus","Faulty Countermeasure","Nature's Call","Tiny Oozeling in a Jar","Windscar Whetstone","Mark of Dargrul","Spiked Counterweight","Giant Ornamental Pearl","Toe Knee's Promise","Ravaged Seed Pod","Ley Spark"]
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
        data : [146425,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,12054,9070,6515,10128,8280,8935,9387,9103,7200,6686,8708,6160,8714,8071,7940,8106,9120,6053,10293,4765,7746,7649,8404,7491,7532,5902,7432,5958,7418,6502,6885,0,4334,0,3432,3687,3541,1690,3304,1487,2251,3812,2518,2675,2810,1008]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,9320,7748,5175,9839,7958,6906,9446,6982,7726,7787,7151,8238,7448,7967,7375,7976,7810,7390,7336,2201,7329,7296,6761,4942,7722,5298,5241,6982,3760,3925,4325,0,3955,0,4634,2185,3080,2560,2195,3304,3695,1098,3782,1909,1450,1035]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,10186,6889,6476,6914,6962,7505,7916,6697,7181,6586,6184,5512,7410,6305,9567,5111,7163,5465,7502,2615,5822,6042,4756,7183,6179,5205,6280,5984,5042,5978,5790,0,3870,0,2651,2393,2363,3496,1133,1244,1092,3002,935,3096,1712,0]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,8020,6757,4972,10228,7708,5253,7385,5986,5197,6406,6162,7037,5651,6487,5581,6034,6537,6613,5094,4831,4422,7015,5772,4282,6204,4844,5316,6303,4946,3978,4346,0,4687,0,2926,4120,5111,683,3382,1479,2078,2726,1668,1654,1384,736]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,86926,5895,5113,6531,5782,5998,6483,5661,5458,4879,4610,4366,5281,4187,6854,5829,6364,4116,6441,2022,5966,5587,5628,6279,4182,4646,5342,4858,3389,3771,4519,3566,2434,4519,2049,2683,1799,3345,2135,2415,1889,1049,828,2780,939,0]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,0,5216,3475,7518,79116,6218,67959,5808,5089,3859,4799,5933,6909,67484,5940,5247,5642,4771,5064,3840,4880,4291,4551,5766,5365,4949,4117,4951,56966,4817,54721,6865,3326,5382,2837,2654,3216,0,322,2497,1824,4354,993,2296,2929,425]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,75320,84967,64909,0,71684,0,63417,65143,66097,64683,64613,60412,0,57054,61486,53375,59786,52412,73351,56213,51521,53097,52297,49275,53676,50372,46497,0,52282,0,67348,48798,60041,44456,41621,38236,42581,38654,35876,30748,25466,28564,23212,21818,20624]
    }]
});
