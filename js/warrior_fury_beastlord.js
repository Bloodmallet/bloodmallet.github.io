Highcharts.chart('warrior_fury_beastlord', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Warrior - Fury - Beastlord'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 18:39:38.195868'
    },
    xAxis: {
        categories: ["Tiny Oozeling in a Jar","Umbral Moonglaives","Toe Knee's Promise","Kil'jaeden's Burning Wish","Terrorbound Nexus","Convergence of Fates","Claw of the Crystalline Scorpid","Unstable Arcano Crystal","Mark of Dargrul","Specter of Betrayal","Windscar Whetstone","Chaos Talisman","Ravaged Seed Pod","Eye of Command","Fel-Oiled Infernal Machine","Chrono Shard","Cradle of Anguish","Stat Stick (Haste)","Nightmare Egg Shell","Entwined Elemental Foci","Engine of Eradication","Ettin Fingernail","Memento of Angerboda","Stat Stick (Crit)","Ursoc's Rending Paw","Gift of Radiance","Stat Stick (Mastery)","Nature's Call","The Devilsaur's Bite","PVP Badge of Victory","Infernal Cinders","Bloodstained Handkerchief","PVP Insignia of Victory","Might of Krosus","Vial of Ceaseless Toxins","Faulty Countermeasure","Spontaneous Appendages","Horn of Valor","Darkmoon Deck: Dominion","Draught of Souls","Infernal Alchemist Stone","Giant Ornamental Pearl","Spiked Counterweight"]
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
        data : [0,0,0,201925,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [17357,21099,12861,0,12485,12771,15812,5028,4582,13824,14153,8516,4887,6120,5334,10703,2868,11323,13402,5127,8343,11348,5598,8314,9753,6379,8336,3451,8320,8508,5542,9409,9141,10626,6943,2849,3500,2949,0,14807,0,4954,772]
    }, {
        name: '930',
        color: '#db843d',
        data: [20377,19136,20264,0,14233,0,15684,3376,16701,9661,7275,6818,6737,5835,10618,9470,13423,2544,1993,9233,7099,1123,10557,8193,5030,8338,0,6959,5425,6888,9806,6493,7020,3668,6286,10196,5584,6004,0,10451,0,2321,2993]
    }, {
        name: '920',
        color: '#4198af',
        data: [14081,8504,8097,0,11280,6807,9395,10004,11636,13760,8886,6970,10091,11164,10193,5443,6083,6199,8017,6690,5015,8254,5051,6448,14478,2293,7709,5806,8921,5111,5106,9705,1537,9769,11609,3586,8471,7716,0,7737,0,3982,6463]
    }, {
        name: '910',
        color: '#71588f',
        data: [18330,15311,14326,0,12542,7466,13134,7649,2680,8037,7953,7300,7565,1384,1962,3669,4228,6299,5154,3207,6426,6864,6185,4942,7251,8768,5176,43,0,5071,3799,5069,10062,6625,2097,4039,0,3599,0,12800,0,3444,4485]
    }, {
        name: '900',
        color: '#89a54e',
        data: [10207,11203,11538,0,10554,3778,12223,6913,9955,91809,4638,7946,5654,10864,5503,7676,6273,7479,4809,7934,8316,2464,5714,6643,5583,7628,9439,5371,10899,3101,5361,7106,7599,7882,8320,13893,4774,2135,3627,8659,6160,5841,324]
    }, {
        name: '890',
        color: '#aa4643',
        data: [12981,141605,8914,0,10598,835,9058,2367,2675,0,4591,5511,3979,4017,11021,5012,87237,5233,5020,5939,77813,7528,6698,4835,3,673,7157,2021,4785,6979,69966,5234,0,3753,59462,0,8721,6454,6679,10952,1701,2830,6020]
    }, {
        name: '880',
        color: '#4572a7',
        data: [141213,0,131380,0,113147,154563,98901,111124,95402,0,81405,82560,85796,85186,78508,78144,0,77766,76380,76116,0,74812,72471,70650,67104,73904,69884,82871,69435,67653,0,54975,63016,53081,0,63294,59581,60906,76260,14281,68703,51754,52263]
    }]
});
