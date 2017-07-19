Highcharts.chart('paladin_retribution', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Paladin - Retribution - Patchwerk'
        },
        subtitle: {
            text: 'Last generated: 2017-07-19 14:37:49.985412'
        },
        xAxis: {
      categories: ["Kil'jaeden's Burning Wish","Vial of Ceaseless Toxins","Infernal Cinders","Eye of Command","Unstable Arcano Crystal","Cradle of Anguish","Horn of Valor","Convergence of Fates","Chaos Talisman","Faulty Countermeasure","Stat Stick (Crit)","Hunger of the Pack","Stat Stick (Versatility)","Entwined Elemental Foci","Memento of Angerboda","Fel-Oiled Infernal Machine","Ettin Fingernail","Stat Stick (Haste)","Umbral Moonglaives","Engine of Eradication","Claw of the Crystalline Scorpid","Nightmare Egg Shell","Chrono Shard","Stat Stick (Mastery)","Bloodstained Handkerchief","PVP Badge of Victory","Might of Krosus","PVP Insignia of Victory","Ursoc's Rending Paw","The Devilsaur's Bite","Gift of Radiance","Darkmoon Deck: Dominion","Spontaneous Appendages","Draught of Souls","Infernal Alchemist Stone","Terrorbound Nexus","Nature's Call","Mark of Dargrul","Spiked Counterweight","Toe Knee's Promise","Tiny Oozeling in a Jar","Giant Ornamental Pearl","Windscar Whetstone","Ravaged Seed Pod"]
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
            data: [115446,9567,8143,6524,3748,6947,6084,4574,6825,6336,5748,6114,5064,5738,5852,7476,5943,6629,6091,5482,6997,6620,4950,5208,7298,4891,6452,5496,6564,5476,5246,0,5982,8418,0,2935,2335,2766,3882,2139,2611,2455,2826,1800]
        }, {
            name: '930',
            color: '#db843d',
            data: [0,7253,6697,7303,2484,6497,5407,4331,4845,5664,5311,4889,5619,6703,5431,4390,5304,4890,5684,5935,6142,4795,4502,5523,6458,5633,5519,4287,5958,4607,5744,0,2225,5860,0,4290,729,2517,2480,3205,1834,1355,717,2042]
        }, {
            name: '920',
            color: '#4198af',
            data: [0,8232,5938,3757,2953,4293,4953,3774,6141,3254,4792,5480,4915,4282,4893,4061,4991,4486,4213,4971,5735,4557,5174,4320,5446,4843,4749,3008,4118,4472,2707,0,3793,7450,0,3537,2302,3088,2434,1546,1825,2173,945,793]
        }, {
            name: '910',
            color: '#71588f',
            data: [0,7232,6109,5820,3915,5657,5111,4046,4058,5781,5299,4259,3924,4059,4304,4793,3452,4885,3819,3997,5023,4515,4413,4377,4674,3794,3695,4707,4288,3057,3378,0,3851,5822,0,1992,2233,1795,2721,2514,1211,1289,1767,2096]
        }, {
            name: '900',
            color: '#89a54e',
            data: [0,5731,4598,3868,1251,5091,5070,4059,4317,3693,3770,4160,5130,4900,5798,4951,5490,3306,5264,4958,5475,5204,4090,3727,5272,4193,6603,3199,4401,3856,4788,3558,2719,5464,2953,2456,2188,2209,2736,2819,2976,0,2497,1616]
        }, {
            name: '890',
            color: '#aa4643',
            data: [0,64358,67651,5447,4672,56843,3378,2634,4355,4469,4326,4108,4038,3206,2053,3193,2238,5271,53064,52582,4014,3091,3094,3899,3443,4332,2794,2802,4257,3434,2278,2708,1835,4609,4758,2859,2288,1934,1989,457,2198,2691,588,1199]
        }, {
            name: '880',
            color: '#4572a7',
            data: [0,0,0,60561,67098,0,53482,59819,51588,52894,52522,52695,52320,51795,51327,50749,51799,49233,0,0,44258,48677,50190,49033,42751,46409,40088,46261,39458,43869,44377,56193,39060,21724,49077,34706,37749,34597,32060,29769,26106,26159,26185,24373]
        }]
});
