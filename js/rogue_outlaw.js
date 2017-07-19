Highcharts.chart('rogue_outlaw', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Rogue - Outlaw - Patchwerk'
        },
        subtitle: {
            text: 'Last generated: 2017-07-19 16:26:44.209235'
        },
        xAxis: {
      categories: ["Convergence of Fates","Kil'jaeden's Burning Wish","Nightblooming Frond","Chaos Talisman","Cradle of Anguish","Bloodthirsty Instinct","Vial of Ceaseless Toxins","Six-Feather Fan","Eye of Command","Stat Stick (Haste)","Engine of Eradication","Chrono Shard","Stat Stick (Versatility)","Memento of Angerboda","Entwined Elemental Foci","Nightmare Egg Shell","Thrice-Accursed Compass","PVP Badge of Conquest","Tirathon's Betrayal","Stat Stick (Mastery)","Arcanogolem Digit","Hunger of the Pack","Stat Stick (Crit)","Bloodstained Handkerchief","Tempered Egg of Serpentrix","Gift of Radiance","Infernal Cinders","Unstable Arcano Crystal","Splinters of Agronax","Horn of Valor","PVP Insignia of Conquest","Umbral Moonglaives","Darkmoon Deck: Dominion","The Devilsaur's Bite","Infernal Alchemist Stone","Draught of Souls","Spontaneous Appendages","Faulty Countermeasure","Toe Knee's Promise","Spiked Counterweight","Terrorbound Nexus","Nature's Call","Ravaged Seed Pod","Tiny Oozeling in a Jar","Mark of Dargrul","Giant Ornamental Pearl","Windscar Whetstone","Ley Spark"]
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
            data: [8038,143999,11232,9287,9367,7879,11728,9640,7250,7951,8156,7243,9339,8089,7342,7612,7961,8326,7060,7782,6442,7603,6633,7272,7603,6655,5429,2934,7766,6096,5881,5299,0,5009,0,8194,4133,3395,2332,2742,3264,3615,3039,2085,1107,2935,1488,1050]
        }, {
            name: '930',
            color: '#db843d',
            data: [6465,0,10917,7718,7547,5979,8459,8395,7102,6445,6805,6700,5835,6854,6686,7356,5395,6093,9573,6228,9093,7184,6058,7612,7160,6618,7455,3718,6636,5272,5534,4335,0,5028,0,7377,4752,3614,2657,4522,3511,1020,1976,3580,3575,2428,2328,447]
        }, {
            name: '920',
            color: '#4198af',
            data: [4569,0,9657,7328,7088,7728,8776,8422,7203,6082,7510,7181,7337,7545,6756,7326,6574,6597,7659,4980,7206,5866,6948,7893,6520,7502,5727,2712,4246,6034,5506,6113,0,2972,0,5511,2282,3529,2414,2944,2847,1643,4208,1163,1818,968,1529,747]
        }, {
            name: '910',
            color: '#71588f',
            data: [4639,0,7415,7044,5566,6633,7890,6366,5480,6816,5546,5351,5809,4754,5367,4232,5930,6714,6698,6980,7634,6646,4619,5593,6232,3351,5302,2650,5088,4594,4247,4349,0,3053,0,7054,2932,3334,3944,1910,2138,2911,1117,2074,1516,2486,1411,1009]
        }, {
            name: '900',
            color: '#89a54e',
            data: [6076,0,8672,5485,7396,6283,6334,6238,5937,6729,6553,5803,3612,5379,5478,5353,6045,4501,5406,6332,5301,3252,7040,5816,7113,6200,5013,3049,5613,4465,4827,3989,4972,5216,5245,5347,4057,3189,3327,1739,1780,1420,969,2149,2095,983,1766,768]
        }, {
            name: '890',
            color: '#aa4643',
            data: [4372,0,6706,6293,78462,4871,71725,7094,5406,5371,68286,5478,5485,4097,4412,5397,3183,4651,5396,4283,4382,5756,4382,4864,3068,4729,60674,1003,4098,3160,3934,55128,4938,1762,3647,5926,2409,2930,1254,2405,1987,1931,1821,1350,1396,1928,2009,535]
        }, {
            name: '880',
            color: '#4572a7',
            data: [123101,0,71652,73060,0,75656,0,61982,67913,66331,0,64188,63812,64121,64344,62980,64636,62233,56916,61662,55991,59637,59479,54221,54414,55524,0,72161,53300,56296,53832,0,60978,45541,59463,27880,38641,38174,40423,39236,37050,39606,34135,30777,29471,27277,26474,28190]
        }]
});
