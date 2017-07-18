    Highcharts.chart('warrior_arms', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Arms T20M Trinket Sims 7.2.5'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Unstable Arcano Crystal","Cradle of Anguish","Engine of Eradication","PVP Badge of Victory","Chaos Talisman","Stat Stick (Mastery)","Gift of Radiance","Eye of Command","The Devilsaur's Bite","Stat Stick (Haste)","Memento of Angerboda","Entwined Elemental Foci","Ettin Fingernail","Vial of Ceaseless Toxins","Chrono Shard","Stat Stick (Versatility)","Nightmare Egg Shell","Claw of the Crystalline Scorpid","Hunger of the Pack","Stat Stick (Crit)","Fel-Oiled Infernal Machine","Horn of Valor","Bloodstained Handkerchief","Spontaneous Appendages","Toe Knee's Promise","Ursoc's Rending Paw","PVP Insignia of Victory","Infernal Cinders","Tiny Oozeling in a Jar","Umbral Moonglaives","Might of Krosus","Terrorbound Nexus","Faulty Countermeasure","Spiked Counterweight","Nature's Call","Convergence of Fates","Windscar Whetstone","Ravaged Seed Pod","Mark of Dargrul","Giant Ornamental Pearl","Draught of Souls"]
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
                var s = '<b>'+ this.x +'</b>';
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
            data: [153217,6222,8154,7890,6416,8047,8300,8045,7395,7405,7451,7635,7563,7088,8986,7471,5784,6372,8672,7105,5862,6245,4101,7149,3513,4567,8258,5869,4277,4837,4473,8570,5486,6427,4472,1556,4756,3465,3883,2649,1831,2188]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,3733,7801,6410,9139,5712,6350,8387,7440,6893,5768,7205,5025,6546,6236,7679,6590,5936,7551,5898,4179,5799,6482,7650,6899,6916,6913,6224,6324,4314,5289,4069,4854,5918,2396,4752,6019,4221,3148,3857,2738,622]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,4001,5749,6057,6558,7031,5690,5525,6406,5745,5744,3932,6358,6121,8181,5894,6376,6072,7069,5888,7222,6492,4572,6495,4849,4957,4412,4770,5857,6324,5220,7743,4265,3752,4704,3725,3622,3314,3092,2850,2676,3829]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,5560,7429,6700,4190,5245,6144,5086,5319,6254,4511,5072,5966,6702,6770,4772,5196,5720,4867,3411,4948,4664,5292,6091,3326,3658,6694,3596,2970,5127,3939,4738,2967,4600,3783,2870,4307,3083,4297,3078,2034,814]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,1532,4868,4598,5984,4254,3666,5047,5079,3512,6877,7320,2580,4799,5166,3373,4363,3561,6559,6682,3711,5194,5501,4879,5687,4335,4827,4344,4944,1865,3766,5193,4205,3939,3016,2547,3786,3059,2703,2699,1182,2564]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,4065,75936,75304,5271,4725,6311,5394,4087,6186,2471,4265,8124,3634,63140,4826,4803,4834,4316,2942,6372,3519,4283,5645,2952,2230,4440,2909,58305,4915,58458,5712,3705,2863,2218,1137,4096,1273,2017,1722,857,1414]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,101426,0,0,68620,70796,68495,66673,68077,66495,68186,64059,63490,63903,0,64401,65072,61247,53072,59252,58047,58370,58611,50168,60358,59579,49736,56409,0,54932,0,44846,55038,50696,54622,55578,40729,48287,46919,38940,37675,24574]
        }]
    });