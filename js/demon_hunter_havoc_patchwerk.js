Highcharts.chart('demon_hunter_havoc_patchwerk', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Demon_Hunter - Havoc - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 07:42:42.911115'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Eye of Command","Unstable Arcano Crystal","Specter of Betrayal","Horn of Valor","Infernal Cinders","Bloodthirsty Instinct","Stat Stick (Crit)","Cradle of Anguish","Chaos Talisman","Nightblooming Frond","Vial of Ceaseless Toxins","Entwined Elemental Foci","Thrice-Accursed Compass","Memento of Angerboda","Six-Feather Fan","PVP Badge of Conquest","Stat Stick (Haste)","Engine of Eradication","Chrono Shard","Stat Stick (Mastery)","Nightmare Egg Shell","Umbral Moonglaives","Faulty Countermeasure","Arcanogolem Digit","Gift of Radiance","Tirathon's Betrayal","Darkmoon Deck: Dominion","PVP Insignia of Conquest","Bloodstained Handkerchief","Tempered Egg of Serpentrix","Splinters of Agronax","Draught of Souls","The Devilsaur's Bite","Infernal Alchemist Stone","Nature's Call","Spontaneous Appendages","Mark of Dargrul","Spiked Counterweight","Terrorbound Nexus","Toe Knee's Promise","Convergence of Fates","Tiny Oozeling in a Jar","Ravaged Seed Pod","Windscar Whetstone","Giant Ornamental Pearl","Ley Spark"]
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
        data : [146814,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,7667,5002,11078,8861,6538,8096,8063,9361,8645,8218,11024,8739,5614,6218,9153,7974,7264,8131,6759,6009,7066,6315,7103,7680,6366,6933,0,5804,5859,7443,6509,4583,4412,0,3611,4811,3138,3404,3020,3595,6822,2504,2219,2228,1574,999]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,8494,5064,8824,7148,7630,7393,5456,6503,7612,9280,6828,5267,9346,4691,6164,6810,6787,6833,6839,6410,6700,6125,5490,7253,6468,6918,0,4782,6334,6586,4969,8645,4409,0,3445,2574,2523,3269,3501,2640,2914,3219,2873,2494,2266,722]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,6367,3382,7580,8589,6352,6403,7568,6898,6439,8047,8987,7184,4219,8218,8334,4769,4587,4037,5109,6328,5768,5641,4633,5515,5931,6884,0,5660,7331,5828,6728,6537,4431,0,1676,3277,3604,3940,1371,4620,5823,2529,2973,2267,1952,467]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,6889,4863,9493,5061,5638,5461,5154,4586,5157,6705,6234,3884,6554,5260,8432,5806,5810,6622,5767,5245,5445,5453,4011,4875,4679,6245,0,4123,6343,5345,4123,4184,4718,0,2921,3174,2126,1746,3834,2162,4213,1465,1984,1896,1572,331]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,6671,3735,81392,6305,5394,5248,4741,6761,6115,7047,6693,6925,5488,6375,5132,5735,7427,4264,5712,4035,3731,2730,3222,6343,5005,4367,6257,3834,5164,4853,4019,4866,2532,5744,2431,3572,3068,3442,3513,3223,3467,2038,888,1058,1452,0]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,5508,3237,0,5027,76915,5254,5935,72216,4919,4688,63528,4202,4411,4764,5312,3557,2065,67088,2938,4395,3768,62298,4513,5554,3472,4960,5886,4984,3619,4846,3252,5435,2812,4468,650,2346,2240,1582,2056,749,5341,373,3336,1387,2599,978]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,85719,93507,0,69670,0,70574,70973,0,67388,60416,0,65877,66414,65168,56937,63811,63290,0,60994,61150,59210,0,59187,49972,55026,50203,73750,55024,48318,45828,48988,41530,49068,59878,54484,43436,45445,41222,40180,39748,22861,36954,32326,32909,31500,29206]
    }]
});
