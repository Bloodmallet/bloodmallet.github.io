Highcharts.chart('hunter_beast_mastery_beastlord', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Hunter - Beast_Mastery - Beastlord'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 15:12:09.232106'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Convergence of Fates","Spectral Thurible","Bloodthirsty Instinct","Unstable Arcano Crystal","Cradle of Anguish","Chrono Shard","Stat Stick (Haste)","Stat Stick (Mastery)","Stat Stick (Crit)","Engine of Eradication","Fury of the Burning Sky","Thrice-Accursed Compass","Deteriorated Construct Core","Icon of Rot","Aran's Relaxing Ruby","Stormsinger Fulmination Charge","PVP Badge of Conquest","Horn of Valor","Twisting Wind","Six-Feather Fan","Moonlit Prism","Obelisk of the Void","Tarnished Sentinel Medallion","PVP Insignia of Conquest","Tirathon's Betrayal","Nightblooming Frond","Tempered Egg of Serpentrix","Eye of Skovald","Terror From Below","Splinters of Agronax","Caged Horror","Arcanogolem Digit","Infernal Alchemist Stone","Corrupted Starlight","Unstable Horrorslime","Mrrgria's Favor","Elementium Bomb Squirrel Generator","Oakheart's Gnarled Root","Figurehead of the Naglfar","Naraxas' Spiked Tongue","Ley Spark"]
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
        data : [295087,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,12901,16783,14303,8204,14475,9399,9933,16637,14006,8603,14724,12541,9382,11246,13674,13021,17583,15180,12132,16230,7473,13393,11704,7949,13356,9059,7454,15040,5988,4646,8327,9176,0,4398,5281,1416,412,7497,3115,3839,5695]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,13240,18234,15734,5099,19933,19568,18041,8301,12622,13500,15826,12495,19605,13413,7845,12514,4576,3270,7522,12127,9777,5588,7034,6691,9576,15256,16268,3207,8406,10762,9797,8269,0,3310,4267,6422,4245,9198,2042,2281,0]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,8244,19477,15247,3271,14339,8201,9337,12558,10891,9598,5141,13852,11548,10780,18401,12850,12879,11288,15826,9992,13084,12745,8660,6837,9851,9803,7231,8741,7959,6547,6019,13012,0,4404,2666,2376,4723,1480,2014,0,4796]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,8275,10266,11074,10945,12034,9370,10059,17905,13149,12491,16425,8713,11982,2430,5378,2522,13013,15228,10017,8072,12961,6727,1012,10551,7315,4827,7908,4722,11878,9509,6737,4671,0,10413,1294,2789,3000,3410,6790,5918,2123]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,7128,13809,8534,9334,8939,16100,14203,3414,10650,16300,9147,12092,14439,15869,7490,16652,8585,6314,7639,10582,1492,6386,14093,10253,14329,12549,10784,9922,1898,4641,3904,8006,0,7499,4543,10985,4419,3639,0,0,4594]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,10905,160995,17984,3697,142727,6469,6142,13237,2623,129468,7506,4390,8196,6381,8452,7595,7043,4441,11360,12433,7080,5792,98961,8791,5137,4465,5383,7047,95002,11064,6909,8083,14051,0,2553,0,7501,4094,0,6381,2935]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,207301,0,151205,175093,0,129324,126214,118186,126088,0,118901,122514,109158,120860,118178,113979,104929,106206,94117,82606,97767,91801,0,89366,79255,82108,82953,84883,0,77466,81654,65630,101211,82060,90836,73539,66286,59947,55992,52675,47740]
    }]
});
