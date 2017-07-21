Highcharts.chart('druid_feral_beastlord', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Druid - Feral - Beastlord'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 14:59:19.481105'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Arcanogolem Digit","Specter of Betrayal","Eye of Command","Chaos Talisman","Engine of Eradication","Umbral Moonglaives","Convergence of Fates","Cradle of Anguish","Bloodthirsty Instinct","Thrice-Accursed Compass","Stat Stick (Mastery)","Memento of Angerboda","Stat Stick (Haste)","Entwined Elemental Foci","Stat Stick (Crit)","Nightblooming Frond","Terrorbound Nexus","Unstable Arcano Crystal","PVP Badge of Conquest","Draught of Souls","Chrono Shard","Six-Feather Fan","Nightmare Egg Shell","Gift of Radiance","Vial of Ceaseless Toxins","Tirathon's Betrayal","Bloodstained Handkerchief","PVP Insignia of Conquest","Splinters of Agronax","Tempered Egg of Serpentrix","Darkmoon Deck: Dominion","Mark of Dargrul","Infernal Cinders","Horn of Valor","Tiny Oozeling in a Jar","Infernal Alchemist Stone","Nature's Call","Windscar Whetstone","Giant Ornamental Pearl","The Devilsaur's Bite","Toe Knee's Promise","Faulty Countermeasure","Spontaneous Appendages","Ravaged Seed Pod","Spiked Counterweight","Ley Spark"]
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
        data : [229868,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,13768,17816,6550,12200,10911,14763,9881,10488,5623,13672,9830,12204,15227,11001,5491,11476,8850,0,4058,10482,8389,9865,8780,4889,8960,6912,11893,9942,8129,10017,0,6305,3977,5915,4203,0,4010,6021,7686,3686,4934,5208,5939,5490,4576,3543]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,14223,8923,13278,13021,8477,7752,7323,7883,9427,7654,8146,9371,4850,9399,12262,11474,7861,9443,10289,6302,9614,13500,9015,7777,4732,13876,4891,7623,8977,4251,0,7420,9559,4857,8242,0,6430,5192,1303,8672,6692,7288,924,415,1717,341]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,7569,11930,5842,4894,7161,5796,5970,12847,5481,8051,8052,4343,8700,9211,6299,10288,7165,5272,7547,5259,6745,5720,6532,10873,13539,6371,9748,5040,6682,11554,0,2701,6383,7340,5635,0,2579,2766,5699,3589,1337,3100,7022,8271,4646,0]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,14957,9971,10005,8657,10962,12012,5014,2900,10400,4628,11430,10188,9233,4756,7271,5189,9571,3752,8172,1135,6914,10067,9980,3380,8740,7557,7584,3845,7598,3786,0,9272,4846,1791,3655,0,8060,3779,3776,1638,7182,1973,4169,0,0,502]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,5188,99479,8425,8979,6977,5964,8220,7091,3342,9352,4826,4839,5084,5967,10656,7384,7023,6504,5748,9158,7879,4733,2208,4806,3005,6827,4407,7206,7442,7937,8939,5457,3367,8073,4368,11831,311,3270,5046,1247,0,4809,2382,3828,4950,1042]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,15089,0,5864,4044,92316,90149,8433,93033,10545,9082,7340,7114,8658,8373,3167,10878,7037,1595,7408,799,4302,10439,9438,8395,71397,4923,5696,3642,4138,3835,5416,0,68279,4146,5392,2772,3400,6405,3238,2665,9987,0,490,534,3585,309]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,88791,0,94803,88957,0,0,90647,0,85790,77665,79335,80738,76689,79594,81898,68961,77424,96948,78955,89030,77486,64391,70452,71033,0,63717,61903,67388,59098,58574,85406,67057,0,62350,60344,73285,61692,56201,48993,52321,42227,49352,45613,48010,38357,30214]
    }]
});
