Highcharts.chart('mage_arcane', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Mage Arcane'
        },
        subtitle: {
            text: 'Last generated: 2017-07-19 11:42:13.044551'
        },
        xAxis: {
      categories: ["Tarnished Sentinel Medallion","Kil'jaeden's Burning Wish","Terror From Below","Charm of the Rising Tide","Tome of Unraveling Sanity","Unstable Arcano Crystal","PVP Badge of Dominance","Whispers in the Dark","Stat Stick (Mastery)","Dreadstone of Endless Shadows","Stat Stick (Versatility)","Stat Stick (Crit)","Moonlit Prism","Padawsen's Unlucky Charm","Erratic Metronome","Star Gate","Stat Stick (Haste)","Infernal Writ","Stormsinger Fulmination Charge","Chrono Shard","Spectral Thurible","Naraxas' Spiked Tongue","Deteriorated Construct Core","Horn of Valor","Twisting Wind","Bough of Corruption","PVP Insignia of Dominance","Obelisk of the Void","Oakheart's Gnarled Root","Fury of the Burning Sky","Portable Manacracker","Devilsaur Shock-Baton","Wriggling Sinew","Icon of Rot","Darkmoon Deck: Hellfire","Aran's Relaxing Ruby","Swarming Plaguehive","Infernal Alchemist Stone","Mrrgria's Favor","Corrupted Starlight","Caged Horror","Pharameres Forbidden Grimoire","Eye of Skovald","Elementium Bomb Squirrel Generator","Unstable Horrorslime","Figurehead of the Naglfar"]
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
            data: [10038,127585,8271,7046,8416,2849,5429,5972,7361,5304,6344,6945,5506,5725,6982,7972,5522,6643,5372,7879,6423,6561,5937,5885,6499,7089,5611,6043,4895,3824,6334,5460,5286,5524,0,4570,3365,0,4562,4098,2108,2194,2637,2499,796,1795]
        }, {
            name: '930',
            color: '#db843d',
            data: [14679,0,6160,5632,7023,4359,7563,7040,4318,5925,6211,6088,6476,6276,4431,6672,5213,6133,6047,3310,4681,5207,7311,4574,7057,6263,4175,4308,5149,6040,7269,3564,4310,4954,0,3510,2700,0,3849,2972,2525,3649,2573,2395,1303,344]
        }, {
            name: '920',
            color: '#4198af',
            data: [8585,0,7662,6164,7131,4609,4708,4608,5804,6117,4468,4803,6387,4655,6121,5569,6282,4977,5296,4830,4916,4267,5457,5366,5206,4759,4382,5339,4473,3920,3680,4842,3675,2635,0,3495,4245,0,1923,943,2896,2103,3023,1613,1765,1900]
        }, {
            name: '910',
            color: '#71588f',
            data: [8648,0,6135,5969,5946,1963,5059,5276,4609,4364,4449,5453,5049,4263,3779,6191,4143,4024,4192,5004,3507,3236,4928,3560,5053,6236,4985,3912,3690,3464,5640,3827,2335,3985,0,3066,3760,0,3696,2797,2513,3132,1114,1660,1499,719]
        }, {
            name: '900',
            color: '#89a54e',
            data: [8466,0,5490,5668,69549,3964,4889,2669,6086,5750,5305,3547,4364,5026,5320,4562,3572,6066,5160,6049,2828,4164,3586,3932,5203,4973,2438,4009,3372,4082,5036,2981,4250,2974,5079,3720,2074,4968,4317,2987,2862,2550,3744,1524,1649,2140]
        }, {
            name: '890',
            color: '#aa4643',
            data: [102499,0,70649,71542,0,1363,3714,5896,4106,3002,2782,5425,3194,4758,3553,5713,4615,2389,3786,2210,55661,3452,5614,3145,3480,4127,3386,2932,3540,3398,3240,3024,3262,2301,4366,2915,4413,3576,1336,1908,1559,977,1315,2771,126,211]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,0,0,0,0,75534,61844,59924,56523,56929,57673,54297,55498,54844,53625,46577,52884,51747,50590,51135,0,50661,44363,49726,42465,41291,48954,47153,47303,47307,40628,47086,43563,44215,56770,40211,40819,52814,38000,35494,35882,34497,34681,29475,32035,21109]
        }]
});
