Highcharts.chart('warrior_arms_beastlord', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Warrior - Arms - Beastlord'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 18:31:41.041150'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Toe Knee's Promise","Unstable Arcano Crystal","Chaos Talisman","Claw of the Crystalline Scorpid","Cradle of Anguish","Tiny Oozeling in a Jar","PVP Badge of Victory","Umbral Moonglaives","Stat Stick (Haste)","Eye of Command","Chrono Shard","Fel-Oiled Infernal Machine","Entwined Elemental Foci","Engine of Eradication","Nightmare Egg Shell","Memento of Angerboda","Ettin Fingernail","Terrorbound Nexus","Stat Stick (Crit)","Horn of Valor","Stat Stick (Mastery)","Gift of Radiance","PVP Insignia of Victory","Ravaged Seed Pod","Ursoc's Rending Paw","Specter of Betrayal","Bloodstained Handkerchief","Vial of Ceaseless Toxins","Might of Krosus","Mark of Dargrul","Windscar Whetstone","Darkmoon Deck: Dominion","Infernal Alchemist Stone","Nature's Call","The Devilsaur's Bite","Spiked Counterweight","Infernal Cinders","Giant Ornamental Pearl","Faulty Countermeasure","Spontaneous Appendages","Convergence of Fates","Draught of Souls"]
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
        data : [272808,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,6995,7674,15100,11613,5485,18762,3250,13069,5589,12367,5347,9698,14456,21858,11763,6579,9598,10915,9709,13509,12150,6345,7473,6188,20961,12303,11426,8205,9043,6643,15437,0,0,3848,4045,7609,0,13436,7943,4335,8328,0]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,10022,4488,5775,13555,16912,10211,13053,11534,16820,7092,14199,16308,15892,7616,5404,11269,14625,10913,13670,6287,2501,9992,6087,6876,6622,10884,10095,5456,15672,3827,4317,0,0,5698,13290,1920,9383,1734,3832,4100,3752,4821]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,24042,3514,14897,11916,2276,14315,11582,6251,4660,10756,5007,5275,2478,6057,10975,12120,2522,8676,12804,7270,16772,6837,13171,10182,9023,6583,8913,9352,911,11366,4843,0,0,4056,2258,2004,8790,4437,7224,2560,9125,0]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,15,10394,8888,10972,13356,14,7598,10538,8592,9245,13127,11144,6421,3123,11710,6303,7218,4730,2709,7152,8760,9802,2634,5157,15560,10798,13965,15322,7534,5977,7,0,0,5567,376,4097,4548,2878,7981,1506,3481,4944]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,9111,11551,6596,19625,4892,12765,10547,4671,3535,8625,3728,6685,10922,11376,370,8488,11386,12911,8021,6774,930,7517,8635,3660,0,90283,2793,1669,9042,0,11401,5075,1843,1981,9585,3073,5685,2165,0,14211,10171,3335]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,11127,0,9206,17,132199,4434,10524,119501,9343,9161,9938,3064,6838,106395,12211,5425,7714,2536,8306,10355,9877,8231,6981,4830,11967,0,6816,82283,12113,13185,1649,10755,5172,3269,4577,2363,66667,1520,782,0,5793,0]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,129426,147885,117531,109740,0,111696,109183,0,116851,106272,109282,107025,101835,0,103859,100714,97049,98827,92733,95612,94089,90514,93726,97890,70798,0,74808,0,67163,75213,74726,95380,103403,85949,67365,76364,0,67177,65208,68243,50453,52939]
    }]
});
