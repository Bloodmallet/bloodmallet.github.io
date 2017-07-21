Highcharts.chart('warrior_arms_patchwerk', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Warrior - Arms - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-20 07:04:12.057562'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Unstable Arcano Crystal","Cradle of Anguish","Engine of Eradication","Chaos Talisman","PVP Badge of Victory","Stat Stick (Mastery)","Eye of Command","Entwined Elemental Foci","The Devilsaur's Bite","Gift of Radiance","Vial of Ceaseless Toxins","Stat Stick (Haste)","Chrono Shard","Stat Stick (Versatility)","Memento of Angerboda","Ettin Fingernail","Nightmare Egg Shell","Fel-Oiled Infernal Machine","Claw of the Crystalline Scorpid","Specter of Betrayal","Stat Stick (Crit)","Horn of Valor","Spontaneous Appendages","Bloodstained Handkerchief","Toe Knee's Promise","Ursoc's Rending Paw","PVP Insignia of Victory","Infernal Cinders","Tiny Oozeling in a Jar","Terrorbound Nexus","Umbral Moonglaives","Might of Krosus","Faulty Countermeasure","Spiked Counterweight","Darkmoon Deck: Dominion","Nature's Call","Infernal Alchemist Stone","Windscar Whetstone","Convergence of Fates","Ravaged Seed Pod","Mark of Dargrul","Giant Ornamental Pearl","Draught of Souls"]
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
        borderColor: '#bbb'
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
        data : [153873,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,4693,7005,6288,5663,6287,7225,7737,8470,7247,5763,9961,6665,7718,6501,6653,6682,8813,6032,8456,7613,6875,5648,4609,7682,5995,7621,5681,4929,5081,4557,4565,6845,4763,4491,0,1802,0,4546,7091,2508,4292,3926,1762]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,5796,8120,8343,8692,5930,7646,5968,7069,5854,6181,7177,5949,6809,8113,6399,7066,5098,7673,7870,6793,5687,5225,6609,6477,5014,6197,3762,7725,6261,4994,4224,5959,5565,2756,0,2921,0,3441,3820,4194,3623,1367,1663]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,3458,5495,4827,6172,8302,4689,7344,5347,6354,7961,8375,5662,4985,5224,5345,5718,6350,3857,6090,7978,4870,5274,3752,7423,3966,7757,5658,4248,3045,4896,6263,5069,4613,3064,0,3354,0,4454,5502,2102,2117,2776,2772]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,3884,5905,5711,4259,5100,5479,3560,4911,5733,4979,6297,4714,7726,7493,7852,4805,5395,4910,6067,5395,4157,5165,5937,5166,4727,6279,5837,4221,3124,3956,3667,6405,3926,4909,0,1331,0,2558,1940,2837,2026,2414,890]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,4704,4868,6243,5822,4087,6621,6200,5903,5214,5120,6251,6007,2552,3268,3079,5716,5427,5435,6170,64353,5690,5117,3015,4537,3199,5151,3053,3684,5411,3828,4101,4272,1939,1840,6831,3041,4751,2666,5175,3799,3878,3790,3293]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,3689,78254,74602,4351,6327,3883,5489,5243,5243,5184,62725,3704,4851,3917,4981,4346,2547,4813,3840,0,3673,3714,4319,5549,5629,3822,3504,58191,3494,1481,57199,5567,5751,3961,4060,3611,3979,2691,3076,981,1651,0,1006]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,100555,0,0,70736,69014,68763,67063,65102,66194,66568,0,68034,65166,65193,65048,63241,63301,60381,54230,0,59707,59109,59657,51011,58870,49137,56577,0,55865,56719,0,45787,49954,54656,60565,55031,60547,47164,40643,49641,39040,37037,25835]
    }]
});
