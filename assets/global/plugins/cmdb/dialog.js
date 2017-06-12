 $(document).ready(function() {

/* Fullscreen width */
var fullW = $(window).width();
var fullH = $(window).height();

/* ------------- Line Graph ------------- */

$(function() {
    $("#full-line").click(function(){
	alert(1);
    // Prevent Body from scrolling when full screen
    $('body').addClass('stop-scrolling');

    
    var dialogChild = $("#container1").clone();
    var content = dialogChild;
    // Set to full screen
    content.addClass('fullsize');
// clone

var dialogParent = $("#container1").parent();

/* Dialog Box */
var dialog = $("#container1").dialog({
    height: fullH,
    width: fullW,
    resizable: false,
    modal: true,
    draggable: false,
    show: {
        effect: "size",
        duration: 200
    },
    hide: {
        effect: "fade",
        duration: 150
    },
   close: function(){                                
      // Clones original div and destorys/resets dialog box

     var originalDialogDiv = dialog.dialog("widget").find("#container1").clone();
     originalDialogDiv.hide();
     originalDialogDiv.appendTo(dialogParent);
     originalDialogDiv.remove(); // Remove to avoid duplication of div
     $(this).dialog("destroy").remove();
    },
    beforeClose: function() {
        $('body').removeClass('stop-scrolling');
        dialogChild.appendTo(dialogParent); // Re-attach div that was removed by opened dialog
        content.removeClass('fullsize');
    },
    create: function(){

        
/* HighChart Line Graph */
        $(function () {
            $('#highchart-line').highcharts({
                title: {
                    text: 'Monthly Average Temperature',
                    x: -20 //center
                },
                subtitle: {
                    text: 'Source: WorldClimate.com',
                    x: -20
                },
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },
                yAxis: {
                    title: {
                        text: 'Temperature (°C)'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '°C'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    name: 'Tokyo',
                    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
                }, {
                    name: 'New York',
                    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'Berlin',
                    data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'London',
                    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                }]
            });
        });
/* End HighChart Line Graph */

    } // End create

}); // End Dialog

  }); // End click()

 }); // End function()


/* ------------- Bar Graph ------------- */
$(function() {
    $("#full-bar").click(function(){
    // Prevent Body from scrolling when full screen
    $('body').addClass('stop-scrolling');

    var dialogChild = $("#highchart-barBox").clone();
    var content = dialogChild;
    // Set to full screen
    content.addClass('fullsize');
// clone

var dialogParent = $("#highchart-barBox").parent();

/* Dialog Box */
var dialog = $("#highchart-barBox").dialog({
    height: fullH,
    width: fullW,
    resizable: false,
    modal: true,
    draggable: false,
    show: {
        effect: "size",
        duration: 200
    },
    hide: {
        effect: "fade",
        duration: 150
    },
   close: function(){                                
      // Clones original div and destorys/resets dialog box

     var originalDialogDiv = dialog.dialog("widget").find("#highchart-barBox").clone();
     originalDialogDiv.hide();
     originalDialogDiv.appendTo(dialogParent);
     originalDialogDiv.remove(); // Remove to avoid duplication of div
     $(this).dialog("destroy").remove();
    },
    beforeClose: function() {
        $('body').removeClass('stop-scrolling');
        dialogChild.appendTo(dialogParent); // Re-attach div that was removed by opened dialog
        content.removeClass('fullsize');
    },
    create: function(){
        
/* HighChart Bar Graph */
$(function barChart() {
    $('#highchart-bar').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Historic World Population by Region'
        },
        subtitle: {
            text: 'Source: Wikipedia.org'
        },
        xAxis: {
            categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population (millions)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' millions'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Year 1800',
            data: [107, 31, 635, 203, 2]
        }, {
            name: 'Year 1900',
            data: [133, 156, 947, 408, 6]
        }, {
            name: 'Year 2008',
            data: [973, 914, 4054, 732, 34]
        }]
    });
});
/* End HighChart Bar Graph */

    } // End create

}); // End Dialog

  }); // End click()

 }); // End function()


/* ------------- Pie Chart ------------- */
$(function() {
    $("#full-pie").click(function(){
    // Prevent Body from scrolling when full screen
    $('body').addClass('stop-scrolling');

    var dialogChild = $("#highchart-pieBox").clone();
    var content = dialogChild;
    // Set to full screen
    content.addClass('fullsize');
// clone

var dialogParent = $("#highchart-pieBox").parent();

/* Dialog Box */
var dialog = $("#highchart-pieBox").dialog({
    height: fullH,
    width: fullW,
    resizable: false,
    modal: true,
    draggable: false,
    show: {
        effect: "size",
        duration: 200
    },
    hide: {
        effect: "fade",
        duration: 150
    },
   close: function(){                                
      // Clones original div and destorys/resets dialog box

     var originalDialogDiv = dialog.dialog("widget").find("#highchart-pieBox").clone();
     originalDialogDiv.hide();
     originalDialogDiv.appendTo(dialogParent);
     originalDialogDiv.remove(); // Remove to avoid duplication of div
     $(this).dialog("destroy").remove();
    },
    beforeClose: function() {
        $('body').removeClass('stop-scrolling');
        dialogChild.appendTo(dialogParent); // Re-attach div that was removed by opened dialog
        content.removeClass('fullsize');
    },
    create: function(){
/* HighChart Pie Chart */
$(function () {
    $('#highchart-pie').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 1,
            plotShadow: false,
        },
        title: {
            text: 'Browser market shares at a specific website, 2014'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                ['Firefox',   45.0],
                ['IE',       26.8],
                {
                    name: 'Chrome',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['Safari',    8.5],
                ['Opera',     6.2],
                ['Others',   0.7]
            ]
        }]
    });
});
/* End HighChart Pie Chart */
    } // End create

}); // End Dialog

  }); // End click()

 }); // End function()


}); // End onReady()

