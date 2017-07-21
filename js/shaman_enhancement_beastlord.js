Highcharts.chart('shaman_enhancement_beastlord', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Shaman - Enhancement - Beastlord'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 17:36:29.339678'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Chaos Talisman","Unstable Arcano Crystal","Eye of Command","Bloodthirsty Instinct","Cradle of Anguish","Engine of Eradication","Stat Stick (Mastery)","Stat Stick (Haste)","Arcanogolem Digit","Entwined Elemental Foci","Spontaneous Appendages","Memento of Angerboda","Thrice-Accursed Compass","Stat Stick (Crit)","Chrono Shard","Nightmare Egg Shell","PVP Badge of Conquest","Six-Feather Fan","Gift of Radiance","Specter of Betrayal","Horn of Valor","Nightblooming Frond","PVP Insignia of Conquest","Convergence of Fates","Terrorbound Nexus","Tempered Egg of Serpentrix","Vial of Ceaseless Toxins","Splinters of Agronax","Tirathon's Betrayal","Tiny Oozeling in a Jar","Darkmoon Deck: Dominion","Bloodstained Handkerchief","Nature's Call","Toe Knee's Promise","Infernal Alchemist Stone","Infernal Cinders","Giant Ornamental Pearl","Mark of Dargrul","Umbral Moonglaives","The Devilsaur's Bite","Faulty Countermeasure","Spiked Counterweight","Windscar Whetstone","Ravaged Seed Pod","Draught of Souls","Ley Spark"]
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
        data : [242167,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,15736,4402,15298,16517,14168,10106,17316,16341,16575,11713,12882,14309,14029,9095,12417,14464,13417,18957,13001,6224,5341,9710,14858,2601,2328,8102,10425,12349,15356,6543,0,9684,10480,13417,0,10048,0,7516,6067,7359,4082,12248,4963,7770,1432,2157]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,16299,14670,12058,11317,15332,16698,12801,13083,14101,8248,7514,11153,13974,10048,12882,9269,11418,9575,6770,17519,11037,11334,7860,12204,13233,12313,13260,10100,9461,7161,0,7987,1045,2824,0,0,9379,832,2257,5851,5323,3089,427,0,4935,2781]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,10281,9926,10457,13382,5048,7830,9844,12883,10829,12557,8709,10678,10530,11186,6233,13147,9084,10745,9055,12603,10163,11561,5650,14484,7858,9353,8010,4492,8678,14059,0,14460,5519,7275,0,11571,7361,6007,10166,3310,9834,4077,9626,0,9256,0]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,7247,5651,13244,8855,6567,10323,10379,0,16546,8130,6264,6442,1563,14020,11188,4645,10508,13322,7412,10719,5607,7400,9053,5156,10893,10810,11415,17530,8783,6209,0,1484,4742,0,0,3726,3372,11223,5062,0,3356,0,389,2820,5598,6011]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,8244,7433,4205,11128,19496,8700,9818,14464,5982,11501,7006,6131,9124,6330,11694,10723,10091,10515,10987,97352,7641,10717,7366,612,3141,8427,9058,3403,9291,0,3938,8875,4363,5722,6404,6915,4852,630,0,7331,6501,7121,2733,5338,8149,2715]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,11217,8422,13104,6649,121352,122055,4822,10553,7264,9996,9003,10260,10061,7765,6176,6812,3210,5255,7678,0,9300,7142,5347,10033,6103,6814,74076,5780,3562,7984,15419,3894,7653,4329,4544,72165,6849,7160,73751,6212,520,313,2967,2915,5444,0]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,118555,136122,115529,115614,0,0,110275,103559,96575,102238,111494,103831,102145,100687,98469,98187,98611,84994,94406,0,89278,79436,86167,89247,88591,72933,0,72234,70135,81497,100641,71544,82727,77575,95761,0,68125,64447,0,60477,59798,56421,55580,53065,12325,37736]
    }]
});
