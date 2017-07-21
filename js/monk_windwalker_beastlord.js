Highcharts.chart('monk_windwalker_beastlord', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Monk - Windwalker - Beastlord'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 16:02:28.622192'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Eye of Command","Arcanogolem Digit","Engine of Eradication","Stat Stick (Crit)","Stat Stick (Mastery)","Specter of Betrayal","Thrice-Accursed Compass","PVP Badge of Conquest","Entwined Elemental Foci","Memento of Angerboda","Gift of Radiance","Cradle of Anguish","Chaos Talisman","Six-Feather Fan","Convergence of Fates","Unstable Arcano Crystal","Horn of Valor","Bloodthirsty Instinct","Stat Stick (Haste)","Vial of Ceaseless Toxins","Nightmare Egg Shell","Tirathon's Betrayal","PVP Insignia of Conquest","Bloodstained Handkerchief","Nightblooming Frond","Tempered Egg of Serpentrix","Darkmoon Deck: Dominion","Chrono Shard","Splinters of Agronax","Terrorbound Nexus","Umbral Moonglaives","Infernal Alchemist Stone","Infernal Cinders","Mark of Dargrul","Tiny Oozeling in a Jar","Nature's Call","Giant Ornamental Pearl","The Devilsaur's Bite","Windscar Whetstone","Faulty Countermeasure","Spontaneous Appendages","Toe Knee's Promise","Ravaged Seed Pod","Ley Spark","Spiked Counterweight","Draught of Souls"]
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
        data : [288651,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,11416,15545,15708,12512,15547,13879,10231,12974,14922,8626,18098,10242,2586,14343,8110,7524,12516,11656,7393,10068,15770,13980,5176,14379,10928,15518,0,6241,8325,7871,11360,0,11122,7489,6942,3285,6038,5285,8960,0,2248,0,1992,4480,400,2143]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,14099,11084,14882,12668,11261,13729,6476,10107,9440,16470,11433,4192,13863,7416,8235,7168,6289,12966,10608,17202,11049,10146,11911,11424,14873,9384,0,7481,11988,5637,2373,0,6900,6501,4328,3059,12680,8371,0,3290,7559,961,0,1622,0,7252]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,14277,16952,9737,10416,10054,18135,15567,10410,10454,6152,3489,9282,7567,14270,12241,3362,12009,10385,9354,7763,8863,12588,7410,12343,6822,10693,0,7770,4596,9624,10653,0,1596,5316,7088,0,0,5257,12119,9918,636,3076,2516,2190,0,7789]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,9127,12354,9964,14957,8852,10775,9663,10051,13755,13130,11808,13273,4221,10918,4096,6468,6143,9790,2370,7401,11428,8010,13054,3306,9805,7544,0,12287,12129,9560,4641,0,5920,6379,3748,7561,876,1108,0,3657,6627,412,0,0,8611,3287]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,13663,16051,7199,6095,12116,121737,10146,9601,7058,11065,7366,12972,14434,13952,11381,4118,9118,11346,13181,7947,5336,11479,4329,12514,12059,10223,11921,7074,10257,6065,4859,10352,6790,3808,3749,4891,5997,3856,518,3025,0,5260,9068,546,991,12863]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,6392,7283,126021,8612,8310,0,6976,9537,11456,7518,6172,109675,11034,5731,3503,3179,9887,4439,6734,96085,12067,5589,4435,1910,4099,6936,7892,10980,9224,6931,87191,6576,78568,6575,6729,4721,5083,1656,5807,0,4421,4728,0,589,139,0]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,137860,110801,0,115923,113123,0,116530,109284,99305,102077,101737,0,102781,87050,103354,118163,92318,87195,97795,0,81562,83023,95746,85898,82062,79989,120043,87904,76996,85988,0,99372,0,73754,65025,73186,60757,62486,60990,60971,56238,41754,36740,37642,38131,10169]
    }]
});
