Highcharts.chart('death_knight_unholy', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Death Knight - Unholy - Patchwerk'
        },
        subtitle: {
            text: 'Last generated: 2017-07-19 09:50:09.986676'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Cradle of Anguish","Chaos Talisman","Fel-Oiled Infernal Machine","Eye of Command","Unstable Arcano Crystal","Vial of Ceaseless Toxins","Stat Stick (Haste)","Engine of Eradication","Draught of Souls","Convergence of Fates","Stat Stick (Mastery)","Entwined Elemental Foci","Chrono Shard","Memento of Angerboda","Ettin Fingernail","Nightmare Egg Shell","Stat Stick (Crit)","Hunger of the Pack","Stat Stick (Versatility)","Horn of Valor","PVP Badge of Victory","Gift of Radiance","Claw of the Crystalline Scorpid","Might of Krosus","Bloodstained Handkerchief","PVP Insignia of Victory","Ursoc's Rending Paw","Darkmoon Deck: Dominion","Infernal Cinders","Infernal Alchemist Stone","Umbral Moonglaives","The Devilsaur's Bite","Terrorbound Nexus","Ravaged Seed Pod","Spiked Counterweight","Nature's Call","Spontaneous Appendages","Toe Knee's Promise","Faulty Countermeasure","Tiny Oozeling in a Jar","Windscar Whetstone","Mark of Dargrul","Giant Ornamental Pearl"]
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
                borderColor: '#151515'

            },
            bar: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
                series: [{
            name: '940',
            color: '#00E676',
            data: [151706,9818,7463,8370,8578,5338,10093,7239,7275,9809,6978,7652,7094,7778,8312,8668,8167,8438,7523,8400,6470,7021,7847,9494,9124,7548,5220,6543,0,5417,0,3925,4692,3795,2929,3325,3124,3728,2626,3682,3330,2149,2425,1547]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,8160,7646,7032,6429,2506,9192,7030,6928,7289,4887,6449,6690,6492,4693,4764,7428,6322,7187,7145,8368,8846,5987,6667,7412,7322,6718,6979,0,5116,0,4259,3554,3563,4345,3912,0,2755,3102,2807,1293,2539,3085,2737]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,7452,7861,6888,8724,3963,8359,7239,7069,9072,6464,7440,8404,8033,7242,6807,6117,8675,7512,7698,6372,5243,5998,6676,4422,4530,4934,6495,0,5927,0,4676,2738,4693,1701,2257,2621,3609,2021,1637,1819,1479,1315,595]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,6849,7212,6156,5593,4176,8898,6490,7542,6450,3983,6532,4609,5646,6231,5654,6467,5102,6296,4572,6219,5371,6262,5524,7033,6405,5675,4639,0,2194,0,3828,2428,1475,3187,3096,3348,1809,2804,3452,2600,2111,1821,1005]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,6756,6482,8027,6110,3033,6025,5612,5242,7534,4900,5906,6255,5691,7327,4734,6905,5916,4739,5933,5383,6274,4837,5166,6826,6611,3505,6013,6679,4055,5685,3101,3287,2910,2097,3524,1875,3064,2100,2229,1516,2532,701,2361]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,85714,4515,8223,5666,4405,72257,4791,79075,4228,3713,5084,5889,4915,3976,5812,4350,5103,4571,5886,5112,4438,5015,4907,3382,3524,3852,4944,4000,53845,4393,48514,1770,3667,2661,1397,1906,3094,2003,2277,2453,0,2067,969]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,0,78908,72889,76007,91566,0,75960,0,67805,80900,71198,70979,70499,71128,70446,67079,65917,66769,64899,63614,63966,63322,51269,50925,50933,56626,49952,69365,0,61297,0,46266,43605,46443,45255,51052,40549,41404,37723,35280,34078,32139,28264]
        }]
});
