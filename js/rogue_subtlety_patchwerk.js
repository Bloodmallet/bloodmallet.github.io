Highcharts.chart('rogue_subtlety_patchwerk', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Rogue - Subtlety - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 11:09:18.734820'
    },
    xAxis: {
        categories: ["Convergence of Fates","Specter of Betrayal","Kil'jaeden's Burning Wish","Nightblooming Frond","Eye of Command","Vial of Ceaseless Toxins","Engine of Eradication","Stat Stick (Mastery)","Stat Stick (Crit)","Six-Feather Fan","Entwined Elemental Foci","Memento of Angerboda","Chaos Talisman","Cradle of Anguish","Thrice-Accursed Compass","Gift of Radiance","Bloodthirsty Instinct","PVP Badge of Conquest","Arcanogolem Digit","Bloodstained Handkerchief","Umbral Moonglaives","Tirathon's Betrayal","Stat Stick (Haste)","Nightmare Egg Shell","Chrono Shard","Tempered Egg of Serpentrix","Splinters of Agronax","PVP Insignia of Conquest","Unstable Arcano Crystal","Horn of Valor","Infernal Cinders","Darkmoon Deck: Dominion","Infernal Alchemist Stone","The Devilsaur's Bite","Spontaneous Appendages","Terrorbound Nexus","Faulty Countermeasure","Draught of Souls","Nature's Call","Tiny Oozeling in a Jar","Windscar Whetstone","Mark of Dargrul","Giant Ornamental Pearl","Spiked Counterweight","Toe Knee's Promise","Ravaged Seed Pod","Ley Spark"]
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
        data : [0,0,146207,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [7948,14342,0,12052,8137,9166,10064,8184,7997,10839,8180,9431,10090,9668,6940,8443,7449,8250,7118,8090,6669,7641,7820,7479,6558,8821,7219,6606,4431,6155,5783,0,0,4387,4699,3949,3247,5740,1618,3315,2828,1651,1282,2623,1034,2470,38]
    }, {
        name: '930',
        color: '#db843d',
        data: [5363,12830,0,10616,6734,10231,7577,6877,8747,8345,6636,6995,6684,8235,7889,5974,8280,7843,9002,8427,6436,8538,7034,7109,7553,6755,7478,6410,3400,7156,6533,0,0,3541,2940,3296,3107,6433,2352,1888,2450,3514,2502,1921,2961,1429,1019]
    }, {
        name: '920',
        color: '#4198af',
        data: [7194,11738,0,10307,9715,8096,6884,7203,6638,7607,8661,7245,7784,6796,6821,6829,5946,5987,7222,7009,5196,6045,5650,5986,6504,7119,5668,5078,1909,4830,4342,0,0,4636,3673,3175,2348,4261,1636,3709,1830,2184,1752,2367,2154,1880,0]
    }, {
        name: '910',
        color: '#71588f',
        data: [5359,9579,0,8865,7489,7548,6069,7744,6678,7592,5200,4687,6391,6260,5913,5497,7469,6389,5719,6954,5379,6968,6638,5922,5230,5929,6062,4645,2639,4984,4532,0,0,3759,2875,2190,3330,5210,1321,1557,2290,1647,1484,3406,1085,1486,188]
    }, {
        name: '900',
        color: '#89a54e',
        data: [5530,108270,0,6817,4055,7531,7027,5385,4023,5691,6113,6897,6359,5976,5065,5093,4157,4693,6861,6475,6107,6002,5731,5535,4477,5874,4604,5117,2983,5391,3784,5891,3952,3354,1637,2332,3666,4223,2230,2098,1036,2848,1450,925,2436,1080,0]
    }, {
        name: '890',
        color: '#aa4643',
        data: [4119,0,0,8493,6770,75099,78550,5350,5989,5566,5614,4769,5915,69226,5707,5683,5182,5706,5251,4632,66746,5464,4482,4601,6136,4169,5596,4437,3059,2752,60190,5615,7058,2080,2976,3302,2046,4592,2837,2380,2832,141,2230,2851,1175,1888,842]
    }, {
        name: '880',
        color: '#4572a7',
        data: [121803,0,0,77151,79684,0,0,72027,69785,63989,67062,66783,63315,0,67171,64858,62568,62037,57300,55828,0,55287,57915,56894,56972,54406,55167,59374,73037,58814,0,71281,64353,47925,43244,39086,38558,21241,38873,35434,33687,34118,29086,25337,22473,19403,21484]
    }]
});
