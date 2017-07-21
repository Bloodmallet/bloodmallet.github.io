Highcharts.chart('paladin_retribution_patchwerk', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Paladin - Retribution - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 09:19:32.452615'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Specter of Betrayal","Vial of Ceaseless Toxins","Infernal Cinders","Eye of Command","Unstable Arcano Crystal","Cradle of Anguish","Horn of Valor","Stat Stick (Crit)","Convergence of Fates","Faulty Countermeasure","Chaos Talisman","Fel-Oiled Infernal Machine","Entwined Elemental Foci","Stat Stick (Haste)","Memento of Angerboda","Engine of Eradication","Ettin Fingernail","Claw of the Crystalline Scorpid","Chrono Shard","Umbral Moonglaives","Stat Stick (Mastery)","Nightmare Egg Shell","Bloodstained Handkerchief","PVP Badge of Victory","Might of Krosus","Gift of Radiance","PVP Insignia of Victory","Ursoc's Rending Paw","The Devilsaur's Bite","Darkmoon Deck: Dominion","Draught of Souls","Spontaneous Appendages","Infernal Alchemist Stone","Terrorbound Nexus","Mark of Dargrul","Nature's Call","Spiked Counterweight","Toe Knee's Promise","Tiny Oozeling in a Jar","Windscar Whetstone","Giant Ornamental Pearl","Ravaged Seed Pod"]
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
        data : [118744,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,9110,9510,7115,5746,4460,6720,6298,6340,4203,7066,6312,6856,6291,6167,5965,7139,3960,7418,5931,5496,5567,5433,6329,5806,8023,6597,4887,7216,4370,0,8575,2925,0,3565,4393,1476,2138,2790,1898,1879,2101,3175]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,9712,7998,6262,6094,3472,5075,5621,5320,3665,5792,4820,6064,5159,5029,4315,5562,7013,6164,5497,5715,4606,6176,6375,3761,5482,3033,5294,4848,5171,0,7783,4915,0,4132,2006,2776,3260,2670,2927,989,1325,1852]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,7560,8995,6541,5483,2995,5920,5719,6297,5502,3399,5916,5135,5172,6050,5713,3232,5601,7047,4405,5633,5298,2822,6850,5197,4440,4889,4024,5853,3778,0,6460,3621,0,2224,3468,990,2898,3077,2316,3602,1452,983]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,7197,6249,6479,3750,2867,6153,3397,4565,3806,5841,5187,3784,3975,4086,3375,5505,3328,4044,4846,2230,4749,5940,4260,4948,4843,5695,2996,5351,4359,0,5897,3509,0,3206,1327,2501,2386,1803,1450,468,2269,1946]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,73742,7056,5572,6205,4060,4397,4964,4448,2021,4524,3065,3607,4633,4853,4733,4410,4752,5506,4148,4744,4622,3187,5542,2727,4791,3531,3770,3202,3841,5153,6927,2581,2903,1790,2301,1487,2295,737,2200,1645,1012,1807]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,0,65598,69236,3737,2209,59267,4351,3876,3428,3943,5019,4462,3808,3660,3854,54993,3465,5042,4316,55275,2635,3611,3741,4560,3984,3029,3806,4798,3068,4767,3664,3800,4429,1520,2750,1688,2259,2577,649,2222,1943,461]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,0,0,63727,70879,0,55450,54422,62593,54615,53533,52984,53257,51372,52915,0,52521,44915,50713,0,51185,51098,43895,48013,40842,45105,46756,39846,45645,56223,21749,38723,50146,37803,35421,40254,33593,30757,29267,26211,26410,25880]
    }]
});
