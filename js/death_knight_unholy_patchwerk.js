Highcharts.chart('death_knight_unholy_patchwerk', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Death_Knight - Unholy - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 07:25:55.613133'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Specter of Betrayal","Cradle of Anguish","Chaos Talisman","Unstable Arcano Crystal","Fel-Oiled Infernal Machine","Eye of Command","Engine of Eradication","Stat Stick (Haste)","Vial of Ceaseless Toxins","Convergence of Fates","Draught of Souls","Entwined Elemental Foci","Stat Stick (Mastery)","Memento of Angerboda","Chrono Shard","Nightmare Egg Shell","Ettin Fingernail","Stat Stick (Crit)","PVP Badge of Victory","Horn of Valor","Gift of Radiance","Claw of the Crystalline Scorpid","Might of Krosus","PVP Insignia of Victory","Bloodstained Handkerchief","Ursoc's Rending Paw","Darkmoon Deck: Dominion","Infernal Cinders","Infernal Alchemist Stone","Umbral Moonglaives","The Devilsaur's Bite","Terrorbound Nexus","Ravaged Seed Pod","Nature's Call","Spiked Counterweight","Spontaneous Appendages","Toe Knee's Promise","Faulty Countermeasure","Tiny Oozeling in a Jar","Windscar Whetstone","Mark of Dargrul","Giant Ornamental Pearl"]
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
        data : [154707,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,12527,9450,8131,5774,7474,7595,9019,7669,11365,6102,11080,7877,8376,7813,7962,8599,8791,7802,8245,7667,7369,8066,8670,7179,7232,7772,0,6568,0,6272,3587,3433,2584,2223,1373,2838,1851,3763,3894,3640,3047,1731]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,9081,7481,8686,3967,7995,8422,8402,7813,8521,6583,6895,9468,7083,7147,7733,7307,3182,6961,8178,6078,6259,7677,6820,6116,6357,6871,0,4126,0,4126,4098,4372,3361,0,4057,2856,4919,2758,1537,1869,1913,2352]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,10986,7708,8970,3356,7991,7840,7092,7354,7466,5357,9107,6128,6160,7051,7543,7416,6875,6508,5906,7386,6054,6776,6774,4867,8864,6898,0,4776,0,3778,4242,2999,3443,3789,2594,3654,2337,2891,2774,1079,1927,0]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,8037,6635,6102,4618,6581,6019,6665,6244,8251,6138,6112,6148,8462,6963,6760,6509,7027,7870,5712,6474,5763,5850,6476,5665,4290,6737,0,4468,0,2653,3467,4304,3085,1238,3016,3281,1336,2918,1335,1156,2192,2177]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,93037,7540,4863,2980,6755,5356,5239,6200,8234,3301,8249,7561,5468,5622,4236,5706,4108,4645,5975,4599,5998,5803,4369,3687,5202,4502,6644,3613,6544,3703,3168,2600,3539,2200,2540,1438,728,2408,2596,2934,1892,663]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,0,88112,6215,4831,9275,6177,81410,5413,71651,5282,4946,3890,6171,6364,6393,4295,7150,5152,5241,5764,5130,5068,6181,3868,4862,4604,5217,54525,3348,49596,3245,1923,939,4000,1542,2237,3845,2794,1174,957,1868,2679]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,0,81184,95410,74458,78404,0,76999,0,82218,68165,72971,71934,71805,71713,69322,71475,67730,63731,64519,64530,50604,50507,57497,51415,49875,69597,0,61945,0,44977,45980,48465,51889,47452,42995,42701,38199,36571,34506,31550,27735]
    }]
});
