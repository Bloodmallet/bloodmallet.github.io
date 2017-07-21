Highcharts.chart('paladin_retribution_beastlord', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Paladin - Retribution - Beastlord'
    },
    subtitle: {
        text: 'Last generated: 2017-07-21 16:09:42.192407'
    },
    xAxis: {
        categories: ["Umbral Moonglaives","Kil'jaeden's Burning Wish","Claw of the Crystalline Scorpid","Eye of Command","Convergence of Fates","Cradle of Anguish","Chaos Talisman","Horn of Valor","Fel-Oiled Infernal Machine","Specter of Betrayal","Chrono Shard","Stat Stick (Crit)","Nightmare Egg Shell","Memento of Angerboda","Entwined Elemental Foci","Unstable Arcano Crystal","Terrorbound Nexus","Stat Stick (Haste)","Vial of Ceaseless Toxins","Ettin Fingernail","PVP Badge of Victory","Engine of Eradication","Mark of Dargrul","Infernal Cinders","PVP Insignia of Victory","Stat Stick (Mastery)","Bloodstained Handkerchief","Ursoc's Rending Paw","Darkmoon Deck: Dominion","Gift of Radiance","Might of Krosus","Faulty Countermeasure","Infernal Alchemist Stone","Nature's Call","Tiny Oozeling in a Jar","Toe Knee's Promise","The Devilsaur's Bite","Spiked Counterweight","Spontaneous Appendages","Windscar Whetstone","Ravaged Seed Pod","Giant Ornamental Pearl","Draught of Souls"]
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
        data : [0,188603,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [32178,0,18313,13189,12929,11117,6024,7063,9916,9551,11674,3808,10953,13817,15307,41,14483,2125,15389,8289,4800,14533,11534,11368,4511,6942,9885,7807,0,7455,8873,6310,0,1178,6795,588,8069,0,451,6258,4142,2308,9270]
    }, {
        name: '930',
        color: '#db843d',
        data: [26162,0,8059,6547,6018,14880,11982,14775,5635,15026,10344,15648,9791,10639,5904,9565,3823,9645,8614,10906,14462,4921,6289,2466,6174,4068,11603,12180,0,8961,9465,5665,0,2910,10536,8051,1128,2917,4594,1524,1969,1035,9001]
    }, {
        name: '920',
        color: '#4198af',
        data: [23925,0,17303,12794,8110,2564,16719,4404,11847,10566,11309,11101,6699,8982,9543,7419,9798,10971,9593,8451,4961,2629,3308,10225,8584,14627,1990,7060,0,8091,6716,5148,0,2250,2258,2027,1923,5570,1616,2016,150,0,8260]
    }, {
        name: '910',
        color: '#71588f',
        data: [24526,0,14689,10370,6785,15817,8964,10361,10022,4158,7271,900,9955,5676,1528,4911,11201,7655,10327,7164,6250,17043,13842,10165,10917,5996,8530,7861,0,5164,4817,587,0,1972,198,5722,8106,8094,7042,7210,4220,3955,1011]
    }, {
        name: '900',
        color: '#89a54e',
        data: [19884,0,10486,6464,5298,4682,7655,10674,4317,105088,6818,18469,5203,588,10756,2420,10079,5279,8007,5519,6302,2590,0,979,285,3085,11908,5167,0,9149,6656,12066,7782,6919,8539,1448,4364,0,0,0,3653,4526,6926]
    }, {
        name: '890',
        color: '#aa4643',
        data: [229029,0,6926,6373,1155,101078,2944,6937,1628,0,2656,0,7988,15835,1941,3192,6715,8844,80337,14279,5373,82689,7681,86340,5861,3781,5121,4151,12442,3849,6189,6022,3500,5613,1302,4544,0,3014,6345,6307,2777,0,8445]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,0,100925,109164,118429,0,93330,92654,103404,0,94142,94542,89171,81986,91989,109155,78399,87814,0,75932,84200,0,82451,0,80447,76830,63934,62330,93760,62383,61963,66419,89283,66154,53207,50223,49329,49813,42955,38411,41906,50365,1288]
    }]
});
