Highcharts.chart('shaman_enhancement', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Shaman - Enhancement - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-20 05:38:45.516288'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Chaos Talisman","Cradle of Anguish","Bloodthirsty Instinct","Eye of Command","Unstable Arcano Crystal","Six-Feather Fan","Specter of Betrayal","Stat Stick (Haste)","Engine of Eradication","Entwined Elemental Foci","Memento of Angerboda","Chrono Shard","Stat Stick (Mastery)","Thrice-Accursed Compass","PVP Badge of Conquest","Nightblooming Frond","Stat Stick (Versatility)","Nightmare Egg Shell","Stat Stick (Crit)","Vial of Ceaseless Toxins","Tempered Egg of Serpentrix","Gift of Radiance","Convergence of Fates","Horn of Valor","Tirathon's Betrayal","Arcanogolem Digit","PVP Insignia of Conquest","Splinters of Agronax","Infernal Cinders","Bloodstained Handkerchief","Darkmoon Deck: Dominion","Spontaneous Appendages","Faulty Countermeasure","Infernal Alchemist Stone","Umbral Moonglaives","Toe Knee's Promise","Nature's Call","The Devilsaur's Bite","Spiked Counterweight","Terrorbound Nexus","Draught of Souls","Tiny Oozeling in a Jar","Ravaged Seed Pod","Mark of Dargrul","Giant Ornamental Pearl","Windscar Whetstone","Ley Spark"]
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
        borderColor: '#bbb'
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
        data : [145780,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,9445,10735,7918,9047,3410,10885,10416,7120,6504,7074,6865,8603,6887,8108,7368,8395,7651,8139,6841,9360,8660,6438,5116,5098,8501,7424,5168,7517,6205,8086,0,4674,4824,0,6285,4247,3152,5109,2424,4047,6905,3117,2643,3002,3058,2458,1198]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,7731,7696,7200,6973,9389,9144,8841,7154,8082,7258,7073,8009,7429,6222,7213,8634,4715,6393,7445,7319,7907,6692,7086,5885,7731,8192,8326,4943,4647,6945,0,2240,4349,0,2295,3176,3481,4178,3938,3421,5574,2093,3466,1133,1166,669,0]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,7925,5810,6675,7568,5002,7612,8334,6025,7072,5596,6301,5022,6593,6574,6001,7718,8320,5579,6257,7289,6999,5305,3637,7142,6434,4913,3253,6077,5646,5507,0,3258,4348,0,4722,4231,1885,2196,1594,1391,5686,3178,2529,3917,1123,2702,2267]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,6518,7876,6435,5214,2364,6815,8324,7082,5485,6064,7603,4867,5599,5163,6532,6542,5064,6063,6500,7283,4930,5422,6346,4420,5917,6255,6490,6501,5677,6132,0,2927,3710,0,2755,1915,3101,3599,3038,2436,4099,1568,1238,1617,2587,1132,155]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,5197,6127,5438,6289,4167,6148,73752,5319,5264,5917,4244,6770,5211,6257,5677,7045,5912,6738,5189,5986,6333,6074,4469,5453,5514,6077,3028,4089,3611,6234,5279,1925,4295,5269,4007,3431,2223,3402,3994,2829,6083,2283,2150,1468,2094,1253,0]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,6354,80462,5934,5192,3453,6167,0,5163,74197,4919,4874,4914,6199,5578,3200,6383,5196,3681,4984,61680,5419,2848,3827,3652,3930,4688,4455,4642,59610,3630,4862,2923,2542,3618,47886,2548,2373,2029,1294,1890,4107,2427,608,2540,2087,1648,741]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,76522,0,78185,74562,84685,64477,0,70346,0,67096,66872,65056,65266,64607,66441,57190,63859,63938,62970,0,53263,59802,60035,58755,49940,48681,55276,51837,0,47969,65615,55384,46854,61610,0,46148,48553,44202,42612,37520,20048,35123,37064,30529,31367,30321,27902]
    }]
});
