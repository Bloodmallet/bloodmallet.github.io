Highcharts.chart('hunter_beast_mastery', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Hunter Beast Mastery'
        },
        subtitle: {
            text: 'Last generated: 2017-07-19 11:04:34.303930'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Bloodthirsty Instinct","Cradle of Anguish","Engine of Eradication","Tarnished Sentinel Medallion","Stat Stick (Mastery)","Unstable Arcano Crystal","Stat Stick (Haste)","Thrice-Accursed Compass","Stormsinger Fulmination Charge","Chrono Shard","Stat Stick (Crit)","Six-Feather Fan","PVP Badge of Conquest","Stat Stick (Versatility)","Terror From Below","Tirathon's Betrayal","Nightblooming Frond","Tempered Egg of Serpentrix","Obelisk of the Void","Horn of Valor","PVP Insignia of Conquest","Deteriorated Construct Core","Twisting Wind","Splinters of Agronax","Moonlit Prism","Naraxas' Spiked Tongue","Spectral Thurible","Fury of the Burning Sky","Arcanogolem Digit","Infernal Alchemist Stone","Oakheart's Gnarled Root","Icon of Rot","Aran's Relaxing Ruby","Mrrgria's Favor","Caged Horror","Eye of Skovald","Unstable Horrorslime","Elementium Bomb Squirrel Generator","Corrupted Starlight","Figurehead of the Naglfar","PVP Badge of Dominance","Ley Spark","PVP Insignia of Dominance","Portable Manacracker"]
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
            data: [146165,7249,8706,8264,7998,7686,3745,7673,8406,7694,7229,6422,8695,7582,7288,6879,8433,8809,7461,5660,6848,6231,7315,7355,7368,4974,5016,4823,4259,6666,0,2733,3131,4798,4236,2496,2800,1739,1147,81,1864,2150,0,0,0]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,7855,7212,8487,7128,7543,3751,8138,6462,5572,7295,6929,9189,6333,6283,5475,7078,8248,7299,6332,6321,5870,6764,6198,5678,5415,5353,4225,3560,5031,0,5265,4635,3713,3155,2527,2875,576,2412,1631,609,1057,1700,2425,384]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,6152,10456,5605,6388,6550,3102,8176,7278,7775,5765,6410,6213,7645,5958,6246,7459,6800,6578,8194,5136,4979,5626,6785,5541,6673,4757,4861,4629,5315,0,3744,2738,2817,2616,3234,2201,1501,870,1419,1482,1832,184,333,0]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,7689,7049,6369,6549,5603,5230,7340,3619,5185,5601,6698,7301,5140,5703,4539,6166,5106,7444,7104,4606,4700,5873,4734,4667,5321,2491,3271,3269,4310,0,3643,4918,2859,3631,2311,2337,2176,1444,1609,0,0,749,1510,0]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,6100,5901,5688,5353,5061,3662,5673,6544,5772,6251,5067,6607,4736,5938,4991,5997,6315,3387,3511,5442,3448,4666,5346,4633,3713,4034,4911,3717,5036,3209,3454,3018,2761,2888,1444,1555,481,2418,831,1362,1085,295,1297,208]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,5207,72074,75135,75139,6544,1981,3680,3784,4880,4347,3938,6055,4600,5285,65345,4422,4441,5841,3923,5159,4826,5750,5282,4353,2162,2769,49242,3085,2468,6052,2503,2074,2530,3118,4001,2473,2047,560,1066,1059,1242,31,1060,135]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,75923,0,0,0,67626,84378,62378,65897,64856,64501,65189,56239,64262,62267,0,52145,51481,51593,54587,54969,53523,47344,46407,49031,47741,51475,0,48521,39711,58120,44382,43896,42120,39455,36920,35246,32440,30174,27333,24230,22489,25235,22171,-641]
        }]
});
