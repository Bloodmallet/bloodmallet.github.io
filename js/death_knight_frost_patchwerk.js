Highcharts.chart('death_knight_frost', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Death Knight - Frost - Patchwerk'
    },
    subtitle: {
        text: 'Last generated: 2017-07-20 00:54:58.099742'
    },
    xAxis: {
        categories: ["Kil'jaeden's Burning Wish","Convergence of Fates","Eye of Command","Specter of Betrayal","Chaos Talisman","Cradle of Anguish","Horn of Valor","PVP Badge of Victory","Engine of Eradication","Memento of Angerboda","Stat Stick (Versatility)","Stat Stick (Crit)","Stat Stick (Haste)","Entwined Elemental Foci","Stat Stick (Mastery)","Ettin Fingernail","Unstable Arcano Crystal","Vial of Ceaseless Toxins","Chrono Shard","Fel-Oiled Infernal Machine","Nightmare Egg Shell","Gift of Radiance","Ursoc's Rending Paw","PVP Insignia of Victory","Claw of the Crystalline Scorpid","Bloodstained Handkerchief","Might of Krosus","Darkmoon Deck: Dominion","Infernal Cinders","Faulty Countermeasure","Infernal Alchemist Stone","Umbral Moonglaives","The Devilsaur's Bite","Nature's Call","Spiked Counterweight","Spontaneous Appendages","Giant Ornamental Pearl","Terrorbound Nexus","Toe Knee's Promise","Draught of Souls","Mark of Dargrul","Tiny Oozeling in a Jar","Ravaged Seed Pod","Windscar Whetstone"]
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
        data : [136670,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }, {
        name: '940',
        color: '#00E676',
        data: [0,5289,7831,10586,7264,8201,7875,7805,6887,8159,7819,7274,5970,5490,6483,6361,2791,8585,6633,7160,6908,6802,8020,6886,6684,6778,7590,0,6186,3390,0,3522,4671,2839,4041,3785,3729,2061,2331,4028,640,1575,1427,1529]
    }, {
        name: '930',
        color: '#db843d',
        data: [0,6020,6745,7964,9247,9840,8904,6283,7624,7404,7259,6618,9247,8448,6293,5386,4766,8279,5844,7042,5698,6662,6805,5722,7380,6918,5492,0,6094,6264,0,4172,2799,1101,2044,1470,1757,2319,2593,4984,3996,2179,2770,1984]
    }, {
        name: '920',
        color: '#4198af',
        data: [0,4347,5948,8616,6526,4186,4282,5792,6070,4262,4370,5558,5168,4678,6725,7727,2836,5884,6517,5156,6360,4518,5732,4658,5547,5661,5749,0,1712,4761,0,1674,2327,4012,2987,4115,3055,1950,2245,4337,0,2792,2921,1638]
    }, {
        name: '910',
        color: '#71588f',
        data: [0,4265,6311,6487,6175,7881,6029,5551,5798,7251,5459,5895,5570,6050,5336,4115,3089,6881,3773,5064,5347,4261,4511,4232,5707,6102,5558,0,6690,3473,0,5528,1987,15,3030,298,1707,3184,2052,3542,2712,1389,0,2949]
    }, {
        name: '900',
        color: '#89a54e',
        data: [0,5358,5969,72043,6545,4445,6542,4814,5739,4598,5534,5675,5784,4454,6479,5004,3352,4934,6825,4835,3813,5721,7038,5220,5266,4218,4986,4918,1590,2210,6349,2655,3069,2385,2914,3172,1276,1850,2191,2275,1242,0,1884,0]
    }, {
        name: '890',
        color: '#aa4643',
        data: [0,3288,4458,0,3100,68951,3892,6086,66112,5146,5515,3787,4200,5918,2915,4544,3424,58409,3471,4337,4450,4031,4460,3739,4834,5075,5078,4333,50051,4076,5106,44584,2573,3044,522,1257,2140,1226,300,3199,655,4248,2276,1294]
    }, {
        name: '880',
        color: '#4572a7',
        data: [0,84244,69281,0,65045,0,65429,61991,0,60423,60278,60651,59204,60059,60467,60917,73407,0,58486,57906,56672,53365,45959,51830,45385,44567,44641,63489,0,47332,56895,0,37055,39474,33727,33775,31575,31707,30315,18933,30826,26593,26414,25450]
    }]
});
