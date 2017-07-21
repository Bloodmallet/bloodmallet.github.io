Highcharts.chart('mage_fire_beastlord', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Mage - Fire - Beastlord'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 15:50:39.362690'
    },
    xAxis: {
        categories: ["Spectral Thurible","Kil'jaeden's Burning Wish","Star Gate","Fury of the Burning Sky","Aran's Relaxing Ruby","Deteriorated Construct Core","Moonlit Prism","Obelisk of the Void","Icon of Rot","Erratic Metronome","Horn of Valor","Stat Stick (Haste)","Charm of the Rising Tide","Whispers in the Dark","PVP Badge of Dominance","Chrono Shard","Tarnished Sentinel Medallion","Twisting Wind","Dreadstone of Endless Shadows","Bough of Corruption","Unstable Arcano Crystal","Stat Stick (Mastery)","Stat Stick (Crit)","Stormsinger Fulmination Charge","PVP Insignia of Dominance","Infernal Writ","Padawsen's Unlucky Charm","Eye of Skovald","Tome of Unraveling Sanity","Portable Manacracker","Infernal Alchemist Stone","Caged Horror","Terror From Below","Darkmoon Deck: Hellfire","Corrupted Starlight","Unstable Horrorslime","Swarming Plaguehive","Oakheart's Gnarled Root","Elementium Bomb Squirrel Generator","Wriggling Sinew","Devilsaur Shock-Baton","Mrrgria's Favor","Pharameres Forbidden Grimoire","Naraxas' Spiked Tongue","Figurehead of the Naglfar"]
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
        data : [0,245254,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [23019,0,21232,16434,14973,14050,11585,5593,13185,13513,10733,17096,10547,8301,12191,11664,14446,16804,18142,0,1142,9983,8547,7086,6364,9033,835,12505,8341,9429,0,14310,5679,0,1342,9311,6016,7766,3414,3310,2957,9874,0,7089,0]
    }, {
        name: '930',
        color: '#db843d',
        data: [21352,0,17475,13772,12233,15168,10444,10744,12875,10189,12364,12457,11746,13935,9287,4184,14318,133,508,17807,10021,4419,9147,12051,4242,7392,2661,2353,7237,8031,0,4541,8405,0,10449,0,0,8793,9117,5996,5683,3967,5234,0,12262]
    }, {
        name: '920',
        color: '#4198af',
        data: [16406,0,12315,15523,6532,15961,13555,14190,11039,8281,10794,4829,9544,3573,6985,12903,1771,20727,7685,15350,0,14393,7852,7308,12041,7978,7771,10742,10141,14141,0,6093,11848,0,6482,6038,8876,441,4501,11850,5591,251,0,1628,0]
    }, {
        name: '910',
        color: '#71588f',
        data: [17859,0,14894,14486,17376,9067,13047,20992,14216,9876,9514,7913,9729,7042,11527,10330,7130,8893,9971,16233,4016,11145,9370,6902,8216,12966,8666,13401,7762,2624,0,12957,3311,0,7913,1028,10039,6371,2215,0,566,411,3047,703,0]
    }, {
        name: '900',
        color: '#89a54e',
        data: [12381,0,17210,14387,10051,15256,12963,2609,0,11960,10396,8210,11522,14847,5400,8191,13394,5419,5201,3508,3158,4037,9898,5424,7789,5853,11505,0,85923,11063,8678,0,6084,8074,3663,2697,0,3717,6078,10935,4109,11739,2099,4676,4097]
    }, {
        name: '890',
        color: '#aa4643',
        data: [185875,0,7270,6332,6497,12548,7384,9502,15895,6084,14099,12462,103065,0,6617,1304,95109,15647,2643,8214,16102,6068,6925,11036,6387,4325,9736,2701,0,5475,7571,2805,69290,9109,1193,3222,7130,1173,2690,2339,4897,0,1368,3217,0]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,118130,123920,119248,100441,109796,111191,105221,105903,97505,97034,0,105527,100141,100836,0,78026,100516,83137,115399,82480,78596,79969,81024,78322,82302,78944,0,66638,89875,65548,0,85100,68434,70502,63790,58749,56531,50470,49950,39409,45290,24960,28535]
    }]
});
