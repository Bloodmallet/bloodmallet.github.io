Highcharts.chart('death_knight_frost_beastlord', {
    "chart": {
        type: 'bar'
    },
    title: {
        text: 'Death_Knight - Frost - Beastlord'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 14:08:58.545162'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Convergence of Fates","Horn of Valor","Chaos Talisman","Cradle of Anguish","Eye of Command","Unstable Arcano Crystal","Engine of Eradication","Stat Stick (Haste)","Entwined Elemental Foci","Stat Stick (Mastery)","Fel-Oiled Infernal Machine","Memento of Angerboda","Chrono Shard","Stat Stick (Crit)","Ettin Fingernail","Nightmare Egg Shell","PVP Badge of Victory","Claw of the Crystalline Scorpid","Gift of Radiance","Specter of Betrayal","PVP Insignia of Victory","Vial of Ceaseless Toxins","Darkmoon Deck: Dominion","Might of Krosus","Bloodstained Handkerchief","Ursoc's Rending Paw","Infernal Alchemist Stone","Terrorbound Nexus","Nature's Call","Giant Ornamental Pearl","Umbral Moonglaives","Tiny Oozeling in a Jar","Faulty Countermeasure","Toe Knee's Promise","Mark of Dargrul","Infernal Cinders","Spiked Counterweight","Draught of Souls","Ravaged Seed Pod","The Devilsaur's Bite","Spontaneous Appendages","Windscar Whetstone"]
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
        "backgroundColor": (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false,
        reversed: true
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b>',
        "formatter": function() {
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
        "shared": true,
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
                color: "(Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'"
            }
        },
    },
    series: [{
        name: '970',
        color: '#ffeb3b',
        data : [323405,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,16011,24990,21307,20735,22217,11014,19010,8260,12981,17297,21195,12876,16739,19348,16932,13311,16552,18835,19085,13930,9944,15259,0,15134,14264,8598,0,4345,0,4129,8937,5665,3095,0,0,0,4850,7653,976,2389,2715,4152]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,8918,17769,22044,19770,14596,3201,20914,12968,16337,13678,15859,17491,13548,4954,7758,18676,13156,18474,14850,11612,10894,6383,0,8511,15493,9756,0,13271,4771,15801,7758,11831,3648,8027,9757,8065,9701,8829,11435,2416,6095,10371]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,14395,21269,7365,11439,13011,14358,10193,25963,12555,18427,21889,5258,18292,21544,12347,9820,13590,9453,14701,11550,10861,17506,0,22014,5997,13509,0,6147,12518,9526,9531,4383,6900,4550,12627,715,0,8655,2253,5191,9062,2223]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,7568,4675,22445,21870,11219,1997,16676,7677,12843,2911,3992,18598,12010,13608,14557,11239,12237,14085,1466,14374,10508,8693,0,3174,16203,10237,0,7726,8627,250,2458,4592,9368,9270,0,3641,9016,0,3851,11618,5289,0]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,14997,16682,5634,7973,15413,8056,3104,13213,8996,11900,10936,13262,7743,9656,12228,15324,24292,21607,12486,121992,12784,18834,16642,7698,3400,10133,13468,7645,0,12934,7332,0,0,0,6838,7155,0,5439,2795,0,0,10387]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,7327,12743,3955,158250,7391,6867,151437,10939,10996,13028,11010,5409,7264,6661,15174,9842,0,0,6721,0,1862,88482,0,11444,7734,5401,8859,365,4000,0,75099,11448,13850,6113,3614,73988,7175,9127,0,8342,3485,0]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,252619,148635,162506,0,145262,178439,0,138494,136213,133627,125598,137174,132866,130469,126700,126838,125717,109805,118330,0,112189,0,139557,84377,89168,90634,115770,87921,100045,79676,0,75760,68127,71999,71256,0,67769,54619,71313,65683,62987,58345]
    }]
});
