Highcharts.chart('warrior_fury', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Warrior - Fury - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-20 07:16:59.039070'
    },
    xAxis: {
        categories: ["Convergence of Fates","Kil'jaeden's Burning Wish","Specter of Betrayal","Unstable Arcano Crystal","Umbral Moonglaives","Eye of Command","Chaos Talisman","Fel-Oiled Infernal Machine","Cradle of Anguish","Chrono Shard","Ursoc's Rending Paw","The Devilsaur's Bite","Entwined Elemental Foci","Vial of Ceaseless Toxins","Nightmare Egg Shell","Memento of Angerboda","Engine of Eradication","Gift of Radiance","Stat Stick (Haste)","Ettin Fingernail","Stat Stick (Mastery)","Stat Stick (Versatility)","Draught of Souls","Infernal Cinders","Stat Stick (Crit)","Claw of the Crystalline Scorpid","PVP Badge of Victory","Tiny Oozeling in a Jar","Might of Krosus","Faulty Countermeasure","Toe Knee's Promise","Bloodstained Handkerchief","Spontaneous Appendages","PVP Insignia of Victory","Horn of Valor","Terrorbound Nexus","Nature's Call","Darkmoon Deck: Dominion","Windscar Whetstone","Infernal Alchemist Stone","Spiked Counterweight","Ravaged Seed Pod","Mark of Dargrul","Giant Ornamental Pearl"]
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
        data : [0,133298,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [6222,0,12714,3358,7617,6345,7538,6934,6331,8202,10727,9664,7341,10366,6479,5890,6520,7214,4973,6894,6711,6819,16024,7573,7028,8913,6757,4848,8153,6925,4455,6123,6854,4032,4946,6031,2174,0,4213,0,2591,3443,5045,3302]
    }, {
        name: '930',
        color: '#db843d',
        data: [3567,0,9047,3812,9538,8366,6439,4635,7696,7069,6980,4306,6110,7135,7782,6274,6723,5569,6773,5207,5895,6194,16429,4608,6342,6539,7080,6504,8932,5747,6002,8861,5097,5178,4600,5291,3862,0,3975,0,4438,4356,2931,2207]
    }, {
        name: '920',
        color: '#4198af',
        data: [6045,0,9343,8257,6074,4871,6173,6786,5314,6057,7580,6394,5578,6566,5234,5451,4723,7243,6721,6836,6366,4167,13445,6092,4287,5938,4828,6115,5368,4424,5967,4952,4347,4186,3880,1378,2818,0,3267,0,2522,2894,3083,3799]
    }, {
        name: '910',
        color: '#71588f',
        data: [3604,0,8352,3719,6847,6267,5967,3411,5998,4184,5186,6205,4663,5285,5763,7275,5988,4942,5287,3727,3485,6727,13421,4570,5367,6963,4082,3769,6612,4898,4175,5593,4787,3137,5758,5251,2684,0,2465,0,3499,2498,3555,277]
    }, {
        name: '900',
        color: '#89a54e',
        data: [4040,0,83099,3646,5844,4144,5026,4586,5082,5070,6962,3288,5118,7006,4420,3390,5438,5880,4886,4069,4558,4132,12001,4479,4197,4089,3808,3630,3831,4184,4907,6720,4468,3775,3791,4358,3739,2972,2738,3813,2621,2281,2516,772]
    }, {
        name: '890',
        color: '#aa4643',
        data: [2749,0,0,3511,75079,4657,4111,10234,69234,4751,6265,7000,5011,58706,2202,3291,64263,2933,3218,4029,5271,4412,9569,62745,3855,5729,5581,4713,4805,5098,2827,5136,3664,6134,2023,2686,1970,5187,2414,4098,1801,2901,2645,3043]
    }, {
        name: '880',
        color: '#4572a7',
        data: [140554,0,0,89433,0,70526,65794,63376,0,63333,54004,60530,61954,0,62080,62225,0,59544,61062,60538,58668,58236,9668,0,58498,49913,55197,57674,48358,54092,57026,47280,53666,49428,50665,50287,52814,60295,45053,54907,44355,43146,40757,33174]
    }]
});
