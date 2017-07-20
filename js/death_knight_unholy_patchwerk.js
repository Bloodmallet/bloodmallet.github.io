Highcharts.chart('death_knight_unholy', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Death Knight - Unholy - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-20 01:11:32.476073'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Specter of Betrayal","Cradle of Anguish","Chaos Talisman","Fel-Oiled Infernal Machine","Eye of Command","Vial of Ceaseless Toxins","Engine of Eradication","Stat Stick (Haste)","Unstable Arcano Crystal","Convergence of Fates","Stat Stick (Mastery)","Draught of Souls","Entwined Elemental Foci","Memento of Angerboda","Chrono Shard","Ettin Fingernail","Nightmare Egg Shell","Stat Stick (Crit)","Stat Stick (Versatility)","Horn of Valor","PVP Badge of Victory","Gift of Radiance","Claw of the Crystalline Scorpid","Might of Krosus","Bloodstained Handkerchief","Ursoc's Rending Paw","PVP Insignia of Victory","Darkmoon Deck: Dominion","Infernal Cinders","Infernal Alchemist Stone","Umbral Moonglaives","The Devilsaur's Bite","Terrorbound Nexus","Ravaged Seed Pod","Nature's Call","Spiked Counterweight","Spontaneous Appendages","Toe Knee's Promise","Faulty Countermeasure","Tiny Oozeling in a Jar","Windscar Whetstone","Mark of Dargrul","Giant Ornamental Pearl"]
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
        data : [152297,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,11863,8246,7745,8983,8269,11360,8808,7182,3780,7205,10103,7776,6709,8459,8605,8228,7302,9149,7381,8390,7111,7248,9532,8484,7249,7695,6309,0,6433,0,4033,4017,4258,2671,2778,3020,4244,2364,2197,1830,3344,2077,2304]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,11900,8819,7074,6871,7202,8532,7531,7001,3228,5626,5938,10446,8470,6006,7059,3970,8044,8000,7965,5238,8261,7003,6432,6306,8130,7493,5386,0,4662,0,5262,3367,2876,2222,0,2413,2487,1025,3590,3209,1326,2729,616]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,9912,6550,8312,8152,6904,9674,7117,7491,4453,6418,7411,6847,6539,7052,7387,6754,6417,5203,6739,6946,5615,5884,6236,5813,6395,6815,5648,0,4243,0,3916,4169,4458,3627,2078,2452,2949,2617,3249,1193,1499,2667,2151]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,8046,8190,6952,6943,7527,5919,6383,6362,4091,4521,6290,6630,7612,7413,6245,5343,6449,6496,5530,6144,6650,5946,5046,5774,5791,5603,5549,0,4685,0,4555,2163,2794,3261,1727,2795,3643,3564,1365,2458,615,1323,1999]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,90847,5822,5561,6206,5907,6670,5871,5048,2570,4552,5841,7125,5620,5787,4508,5362,4699,6564,5988,5695,4408,5432,5119,5334,4708,5844,3592,5886,1912,3161,1534,3254,2411,2577,1639,3172,1939,1296,3492,1125,3908,2174,682]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,0,84894,5803,7190,5723,71524,77881,4688,5366,4649,4552,6484,4391,4973,5475,6084,5322,2657,5072,5198,5105,4910,6489,5536,6149,4223,4335,5311,53748,5234,48745,2551,2650,2348,3170,1911,3184,1828,2353,2432,436,1365,2297]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,0,77905,73340,74867,0,0,75292,89562,78615,70776,64874,70502,69613,69665,69294,66756,66496,63970,62693,62740,61941,49694,49690,48455,48872,55254,67680,0,60421,0,44080,43116,45518,49756,44606,39536,40943,35992,34739,32703,30668,26769]
    }]
});
