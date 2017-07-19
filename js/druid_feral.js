Highcharts.chart('druid_feral', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Druid Feral'
        },
        subtitle: {
            text: 'Last generated: 2017-07-19 10:40:47.046260'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Eye of Command","Vial of Ceaseless Toxins","Nightblooming Frond","Engine of Eradication","Stat Stick (Mastery)","Six-Feather Fan","Stat Stick (Crit)","Chaos Talisman","Hunger of the Pack","Convergence of Fates","Memento of Angerboda","Cradle of Anguish","Stat Stick (Versatility)","Entwined Elemental Foci","PVP Badge of Conquest","Thrice-Accursed Compass","Bloodthirsty Instinct","Tirathon's Betrayal","Gift of Radiance","Arcanogolem Digit","Chrono Shard","Stat Stick (Haste)","Bloodstained Handkerchief","Nightmare Egg Shell","Unstable Arcano Crystal","Umbral Moonglaives","Splinters of Agronax","Infernal Cinders","Tempered Egg of Serpentrix","PVP Insignia of Conquest","Draught of Souls","Horn of Valor","Darkmoon Deck: Dominion","Infernal Alchemist Stone","The Devilsaur's Bite","Spontaneous Appendages","Faulty Countermeasure","Terrorbound Nexus","Nature's Call","Tiny Oozeling in a Jar","Mark of Dargrul","Spiked Counterweight","Windscar Whetstone","Toe Knee's Promise","Giant Ornamental Pearl","Ravaged Seed Pod","Ley Spark"]
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
            data: [146778,8152,11029,10777,8272,8925,9684,10288,8088,8083,6337,8995,8897,8129,8287,7837,7587,9359,8761,6369,9389,7815,7126,7859,7050,3175,5674,7709,5385,5787,7441,6637,6324,0,0,4774,5197,4088,3242,1657,1813,3655,3101,1021,2368,1238,1929,1281]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,7572,8824,8705,9700,6949,9810,5415,8652,7109,6001,6357,6309,5507,6987,7864,8294,6336,6812,7003,7809,7266,7881,7689,5913,2280,6521,6563,7252,7314,4895,5564,6070,0,0,4083,3588,3486,3565,2173,2254,2470,3197,3082,2895,1741,3321,0]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,6924,9054,7779,5442,7451,7400,7509,5741,6278,6887,6955,7872,7334,6081,7084,5964,6934,9217,6825,6278,6193,4828,6628,6358,3518,5322,5582,4811,7542,5191,6229,3645,0,0,4112,2359,4523,2574,2744,3125,1289,1588,2026,2285,1965,996,1267]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,7146,6845,7923,6812,6758,7767,6835,7378,6825,3873,5476,6001,6130,5760,4871,7609,5555,5967,6373,6839,5985,6293,6131,6039,3000,5390,5622,4986,7584,5823,5714,5044,0,0,3001,3319,1746,2826,354,1662,2212,1706,1951,3220,2751,2508,0]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,7588,7854,7594,6352,4755,7133,6033,5483,5681,5191,6660,6409,5163,6879,5146,3594,5753,6724,5303,6578,5397,5313,6538,4765,2877,4418,4543,3465,3463,3423,3768,4406,5289,4136,2650,3344,4620,2374,2602,2440,2732,2523,2238,1806,892,1014,1121]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,4604,71475,5007,76038,5341,3920,4691,5215,5215,4664,5499,68753,5443,5086,6113,5971,4130,4169,5804,4926,4494,4720,4438,5408,2637,61391,5235,61967,6588,3300,4727,2103,5734,5128,3507,2054,1426,2568,2166,2748,1563,2859,1704,1816,2648,1302,0]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,76400,0,66044,0,67837,62094,66370,65212,65834,71587,64540,0,66307,64930,64059,63829,64313,56953,60432,54644,57860,58679,53778,56372,71232,0,52814,0,49089,57027,52544,52243,68661,60749,45315,40925,40785,37924,39911,32253,32196,28632,30703,27816,28202,25231,21990]
        }]
});
