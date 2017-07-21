Highcharts.chart('shaman_elemental_beastlord', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Shaman - Elemental - Beastlord'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 17:24:13.970176'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Spectral Thurible","Unstable Arcano Crystal","Tome of Unraveling Sanity","Whispers in the Dark","Stat Stick (Crit)","Icon of Rot","Dreadstone of Endless Shadows","Infernal Writ","Star Gate","Padawsen's Unlucky Charm","Charm of the Rising Tide","Erratic Metronome","Stat Stick (Haste)","Deteriorated Construct Core","Chrono Shard","Stat Stick (Mastery)","Aran's Relaxing Ruby","Fury of the Burning Sky","Darkmoon Deck: Hellfire","PVP Badge of Dominance","Stormsinger Fulmination Charge","Horn of Valor","Terror From Below","PVP Insignia of Dominance","Eye of Skovald","Bough of Corruption","Twisting Wind","Unstable Horrorslime","Moonlit Prism","Elementium Bomb Squirrel Generator","Devilsaur Shock-Baton","Tarnished Sentinel Medallion","Portable Manacracker","Infernal Alchemist Stone","Mrrgria's Favor","Obelisk of the Void","Wriggling Sinew","Corrupted Starlight","Caged Horror","Swarming Plaguehive","Oakheart's Gnarled Root","Figurehead of the Naglfar","Pharameres Forbidden Grimoire","Naraxas' Spiked Tongue"]
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
        data : [306235,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,15981,6508,16789,9603,18520,6846,20177,18014,19339,20666,3789,15210,15593,13122,13117,9153,8385,12622,0,12954,12144,16687,7194,12895,9269,17974,4352,6641,1974,9606,8938,8053,12014,0,12286,0,1588,13037,5104,7535,6788,0,19,1297]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,20071,12247,12101,13991,2338,12775,9124,1482,18778,11262,16007,13989,9562,11878,10407,13910,12961,6943,0,5705,11320,3954,11004,5631,9573,4881,15784,9317,7627,0,4748,11492,5008,0,6986,7084,12396,2016,9478,5551,6698,3516,5329,4520]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,19485,9888,18503,7728,13073,9173,20671,14188,8025,5363,14212,10107,8775,18599,11280,9106,14592,14698,0,15819,10394,11030,8817,12859,1524,12379,10613,1189,11363,7782,1569,3249,9286,0,0,4151,4246,11031,0,0,0,1713,5642,6323]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,9729,12432,12399,5732,6412,20568,5951,15513,8430,8179,4498,7930,13786,7705,9558,11393,14437,11125,0,10571,5228,11417,10186,9994,3191,12582,12917,6774,12333,9990,13453,7240,15711,0,5280,13153,352,3453,6649,4462,12389,3354,4175,0]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,10261,4658,164954,10085,18800,3726,12104,11003,16912,16416,12623,14063,5859,11589,8907,7647,5165,7983,8765,1183,11589,7114,361,6870,16431,4493,79,1298,6442,7964,109,7224,2340,5786,3208,3009,9541,3546,9021,7216,1607,3577,3374,2267]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,163119,2738,0,12582,8185,5900,4874,4508,18001,8774,135671,1803,16760,12016,9479,279,6546,6,8200,17728,6372,10871,114884,3919,3426,14682,11172,5571,1869,0,8749,86944,7163,9480,6949,4982,1500,4822,3026,344,199,1404,1994,486]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,187438,0,143319,134905,135713,121293,128002,100268,117406,0,119908,112040,102743,112706,116167,104881,110764,144397,96778,102187,93225,0,98666,104487,75944,83527,104666,90846,95085,87388,0,68207,104271,82310,76478,78556,70124,71042,70003,67437,70450,47489,46391]
    }]
});
