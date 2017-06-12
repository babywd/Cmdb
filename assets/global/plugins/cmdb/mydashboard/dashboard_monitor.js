

int_refresh = setInterval(function() {
	$.get('http://172.18.18.24/cmdb/dashboard_triggers', function(data) {
		        $('#triggers_list').html(data);
	}); 
}, 60000);

int_refresh = setInterval(function() {
        $.get('http://172.18.18.24/cmdb/dashboard_soc', function(data) {
                $('#soc_list').html(data);
        }); 
}, 60000);

int_refresh = setInterval(function() {
        $.get('http://172.18.18.24/cmdb/dashboard_network_top_out', function(data) {
                $('#network_out').html(data);
        }); 
}, 300000);

int_refresh = setInterval(function() {
        $.get('http://172.18.18.24/cmdb/dashboard_network_top_in', function(data) {
                $('#network_in').html(data);
        });
}, 300000);


int_refresh = setInterval(function() {
        $.get('http://172.18.18.24/cmdb/dashboard_system_load', function(data) {
                $('#system_io').html(data);
        }); 
}, 600000);
int_refresh = setInterval(function() {
        $.get('http://172.18.18.24/cmdb/dashboard_system_io', function(data) {
                $('#system_iowait').html(data);
        }); 
}, 600000);

//int_refresh = setInterval(function() {
//        $.get('http://172.18.18.24/cmdb/dashboard_established', function(data) {
//                $('#established').html(data);
//        });
//}, 600000);

//int_refresh = setInterval(function() {
//        $.get('http://172.18.18.24/cmdb/dashboard_timewait', function(data) {
//                $('#timewait').html(data);
//        });
//}, 600000);

int_refresh = setInterval(function() {
        $.get('http://172.18.18.24/cmdb/dashboard_getlog_youth', function(data) {
                $('#youth_log').html(data);
        });
}, 600000);

int_refresh = setInterval(function() {
        $.get('http://172.18.18.24/cmdb/dashboard_getlog_k618', function(data) {
                $('#k618_log').html(data);
        });
}, 600000);

int_refresh = setInterval(function() {
        $.get('http://172.18.18.24/cmdb/dashboard_web_triggers_youth', function(data) {
                $('#youth_url').html(data);
        });
}, 60000);

int_refresh = setInterval(function() {
        $.get('http://172.18.18.24/cmdb/dashboard_web_triggers_k618', function(data) {
                $('#k618_url').html(data);
        });
}, 60000);


 $(function () {
   Highcharts.setOptions({
    global: {
        useUTC: false
    }
 });
     var chart;
      $(document).ready(function() {

          var options = {
              chart: {
                  renderTo: 'fw_youth',
                  type: 'areaspline',
                  marginRight: 10,
                  events: {
                      load: function() {
                          var series = this.series;
                            setInterval(function() {
                            var url = "../fw_json_youth/";
						   $.ajax({
								url: url,
								cache: false,
								dataType: "json",
								success: function(data){
									  var x = (new Date()).getTime(),
										  y = data.qing_fw_out;
										  y1 = data.qing_fw_in;
							   series[0].addPoint([x,parseInt(y)], true, true);
							   series[1].addPoint([x,parseInt(y1)], true, true);

							   }
							});
                          }, 300000);
                      }
                  }
              },
              title: {
                  text: '',
				  style: { fontSize: '10px' }
              },
              xAxis: {
				   labels:{
						staggerLines:1
					} ,
                  type: 'datetime',
                  tickPixelInterval: 150
              },
              yAxis: {
                  title: {
                      text: '流量(Mb)',
					  style: { fontSize: '10px' }
                  },
                  tickPositions: [0, 250, 500],
				  allowDecimals:false,
                  startOnTick: true,
                  min: 0,
                  plotLines: [{
                      value: 400,
					  color: '#CC0000',
					  dashStyle:'Dash',
                      width: 1.5,
					  zIndex:5,
                      label: {
                            text: '预设阀值（400Mb）',
                            style:{
                            color: '#CC0000',
                            fontWeight:'bold'
                            }
                        }
                  }]
              },
              legend: {
				  enabled: true,
				  align: 'center'
              },
              tooltip: {
                    crosshairs: true,
                    formatter: function() {
                         return '<b>'+ this.series.name +'</b><br/>流量：'+
                         Highcharts.numberFormat(this.y, 2)+' Mbps' +'<br/>时间：'+
                         Highcharts.dateFormat('%H:%M', this.x);
                  }
              },
              credits: {
                    enabled: false
				},

              series: [{
                    name: '青网防火墙出流量',
					color: '#1C86EE',
					data: (function() {
						var data = [],
							time = (new Date()).getTime(),
							i;

						for (i = -19; i <= 0; i++) {
							data.push({
								x: time + i * 1000,
								y: Math.random()
							});
						}
						return data;
					})()
					},{
                    name: '青网防火墙入流量',
					color: '#00EE00',
					data: (function() {
						var data = [],
							time = (new Date()).getTime(),
							i;

						for (i = -19; i <= 0; i++) {
							data.push({
								x: time + i * 1000,
								y: Math.random()
							});
						}
						return data;
					})()
              }]
          };
          chart = new Highcharts.Chart(options);

      });
  });

 $(function () {
   Highcharts.setOptions({
            global: {
                useUTC: false
            }
         });
      var chart;
      $(document).ready(function() {

          var options = {
              chart: {
                  renderTo: 'fw_k618',
                  type: 'areaspline',
                  marginRight: 10,
                  events: {
                      load: function() {
                          var series = this.series;
                            setInterval(function() {
                            var url = "../fw_json_k618/";
						   $.ajax({
								url: url,
								cache: false,
								dataType: "json",
								success: function(data){
									  var x = (new Date()).getTime(),
										  y = data.k618_fw_out;
										  y1 = data.k618_fw_in;
							   series[0].addPoint([x,parseInt(y)], true, true);
							   series[1].addPoint([x,parseInt(y1)], true, true);

							   }
							});
                          }, 300000);
                      }
                  }
              },
              title: {
                  text: '',
				  style: { fontSize: '10px' }
              },
              xAxis: {
				   labels:{
						staggerLines:1
					} ,
                  type: 'datetime',
                  tickPixelInterval: 150
              },
              yAxis: {
                  title: {
                      text: '流量(Mb)',
					  style: { fontSize: '10px' }

                  },
                  tickPositions: [0, 250, 500],
				  allowDecimals:false,
                  startOnTick: true,
                  min: 0,
                  plotLines: [{
                      value: 400,
					  color: '#CC0000',
					  dashStyle:'Dash',
                      width: 1.5,
					  zIndex:5,
                      label: {
                                text: '预设阀值（400Mb）',
								style:{
								color: '#CC0000',
								fontWeight:'bold'
								}
                            }
                  }]
              },
              legend: {
				  enabled: true,
				  align: 'center'
              },
              tooltip: {
                    crosshairs: true,
                    formatter: function() {
                         return '<b>'+ this.series.name +'</b><br/>流量：'+
                         Highcharts.numberFormat(this.y,2)+' Mbps' +'<br/>时间：'+
                         Highcharts.dateFormat('%H:%M', this.x);
                  }
              },
              credits: {
                    enabled: false
				},

              series: [{
                    name: '未网防火墙出流量',
					color: '#1C86EE',
					data: (function() {
						var data = [],
							time = (new Date()).getTime(),
							i;

						for (i = -19; i <= 0; i++) {
							data.push({
								x: time + i * 1000,
								y: Math.random()
							});
						}
						return data;
					})()
					},{
                    name: '未网防火墙入流量',
					color: '#00EE00',
					data: (function() {
						var data = [],
							time = (new Date()).getTime(),
							i;

						for (i = -19; i <= 0; i++) {
							data.push({
								x: time + i * 1000,
								y: Math.random()
							});
						}
						return data;
					})()
              }]
          };
          chart = new Highcharts.Chart(options);

      });
  });


  $(function () {
   Highcharts.setOptions({
            global: {
                useUTC: false
            }
         });
      var chart;
      $(document).ready(function() {
      
          var options = {
              chart: {	  
                  renderTo: 'cms_queue_youth',
                  type: 'areaspline',				 
                  marginRight: 10,
                  events: {
                      load: function() {
                          var series = this.series;
                            setInterval(function() {                         
                            var url = "../cms_json_youth/";
						   $.ajax({
								url: url,
								cache: false,
								dataType: "json",
								success: function(data){
									  var x = (new Date()).getTime(),
										  y = data.wait_count;
										  y1 = data.release_count;
							   series[0].addPoint([x,parseInt(y)], true, true);
							   series[1].addPoint([x,parseInt(y1)], true, true);

							   }
							});
                          }, 30000);
                      }
                  }
              },
              title: {
                  text: '',
				  style: { fontSize: '10px' }
              },
              xAxis: {
				   labels:{ 
						staggerLines:1
					} ,
                  type: 'datetime',
                  tickPixelInterval: 150
              },
              yAxis: {
                  title: {
                      text: '队列数(个)',
					  style: { fontSize: '10px' }

                  },
                  tickPositions: [0, 10, 20],
				  allowDecimals:false,				 
                  startOnTick: true, 
                  min: 0,  
                  plotLines: [{
                      value: 10,
					  color: '#CC0000', 
					  dashStyle:'Dash',
                      width: 1.5,
					  zIndex:5,
                      label: {  
                                text: '预设阀值队列数（10）',
								style:{
								color: '#CC0000',
								fontWeight:'bold'
								}
                            }  
                  }]
              },
              legend: {
				  enabled: true,
				  align: 'center'
              },
              tooltip: {
                    crosshairs: true,
                    formatter: function() {
                         return '<b>'+ this.series.name +'</b><br/>队列数：'+
                         this.y +'<br/>时间：'+
                         Highcharts.dateFormat('%H:%M', this.x);
                  }
              },
              credits: {
                    enabled: false
				},

              series: [{
                    name: '青网WCM等待队列',
					color: '#89A54E',
					data: (function() {                                                 
						var data = [],                                                  
							time = (new Date()).getTime(),                              
							i;                                                          
																						
						for (i = -19; i <= 0; i++) {                                    
							data.push({                                                 
								x: time + i * 1000,                                     
								y: Math.random()                                        
							});                                                         
						}                                                               
						return data;                                                    
					})()
					},{			
                    name: '青网WCM发布队列',
					color: '#e4d354',
					data: (function() {                                                 
						var data = [],                                                  
							time = (new Date()).getTime(),                              
							i;                                                          
																						
						for (i = -19; i <= 0; i++) {                                    
							data.push({                                                 
								x: time + i * 1000,                                     
								y: Math.random()                                        
							});                                                         
						}                                                               
						return data;                                                    
					})() 					
              }]
          };
          chart = new Highcharts.Chart(options);

      });
  });

  $(function () {
   Highcharts.setOptions({
            global: {
                useUTC: false
            }
         });
      var chart;
      $(document).ready(function() {
      
          var options = {
              chart: {	  
                  renderTo: 'cms_queue_k618',
                  type: 'areaspline',				 
                  marginRight: 10,
                  events: {
                      load: function() {
                          var series = this.series;
                            setInterval(function() {                         
                            var url = "../cms_json_k618/";
						   $.ajax({
								url: url,
								cache: false,
								dataType: "json",
								success: function(data){
									  var x = (new Date()).getTime(),
										  y = data.wait_count;
										  y1 = data.release_count;
							   series[0].addPoint([x,parseInt(y)], true, true);
							   series[1].addPoint([x,parseInt(y1)], true, true);

							   }
							});
                          }, 30000);
                      }
                  }
              },
              title: {
                  text: '',
				  style: { fontSize: '10px' }
              },
              xAxis: {
				   labels:{ 
						staggerLines:1
					} ,
                  type: 'datetime',
                  tickPixelInterval: 150
              },
              yAxis: {
                  title: {
                      text: '队列数(个)',
					  style: { fontSize: '10px' }

                  },
                  tickPositions: [0, 100, 200],
				  allowDecimals:false,				 
                  startOnTick: true, 
                  min: 0,  
                  plotLines: [{
                      value: 100,
					  color: '#CC0000', 
					  dashStyle:'Dash',
                      width: 1.5,
					  zIndex:5,
                      label: {  
                                text: '预设阀值队列数（100）',
								style:{
								color: '#CC0000',
								fontWeight:'bold'
								}
                            }  
                  }]
              },
              legend: {
				  enabled: true,
				  align: 'center'
              },
              tooltip: {
                  crosshairs: true,
                         formatter: function() {
                         return '<b>'+ this.series.name +'</b><br/>队列数：'+
                         this.y +'<br/>时间：'+
                         Highcharts.dateFormat('%H:%M', this.x);
                  }
              },
              credits: {
                  enabled: false
				},

              series: [{
                    name: '未网WCM等待队列',
                    color: '#89A54E',
					data: (function() {                                                 
						var data = [],                                                  
							time = (new Date()).getTime(),                              
							i;                                                          
																						
						for (i = -19; i <= 0; i++) {
							data.push({                                                 
								x: time + i * 1000,
								y: Math.random()                                        
							});                                                         
						}                                                               
						return data;                                                    
					})()
					},{			
                    name: '未网WCM发布队列',
                    color: '#e4d354',
					data: (function() {                                                 
						var data = [],                                                  
							time = (new Date()).getTime(),                              
							i;                                                          
																						
						for (i = -19; i <= 0; i++) {
							data.push({                                                 
								x: time + i * 1000,
								y: Math.random()                                        
							});                                                         
						}                                                               
						return data;                                                    
					})() 					
              }]
          };
          chart = new Highcharts.Chart(options);

      });
  });
