function monitor(items,clock,name) {
    $('#monitor').highcharts({
            chart: {
                type: 'areaspline',
                marginRight: 10
              },
            title: {
                text: name
            },
            xAxis: {
                categories: clock,
                tickmarkPlacement:'on',
                tickInterval: 7
            },
            yAxis: {
                title: {
                    text: ''
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            legend: {
              enabled: false
            },
            tooltip: {
              crosshairs: true,
                     formatter: function() {
                     return '值：'+ this.y +'<br/>时间：'+this.x
                     Highcharts.dateFormat('%H:%M', this.x);
              }
            },
            series: [{
               name: "值",
               color: '#00EE00',
               data: (function (){
                  var data2 = []
                    $.each(items,function(n,value) {
                        data2.push(parseFloat(value));
                      });
                   console.log(data2)
                   return data2;
               })()
            }]
    });
};



function product_update(){
	$('#responsives2 form').submit(function(){
		$.ajax({
			type: "POST",
			data: $('#responsives2 form').serialize(),
			url: "../cmdb_producet_info_ajax/",
			cache: false,
			dataType: "json",
            beforeSend:function(){
                Metronic.blockUI({animate: true});
            },
            complete: function() {
                Metronic.unblockUI();
            },
			success: function(obj)  {
                  if (obj['status'] == "1"){
                      alert('同步成功');
                      $('#responsives2').modal('hide');
                      $('#responsives2 form')[0].reset();
                  }else {
                      alert('同步失败，错误为：'+obj['err']);
                   }
				}
				});
				return false;
				});
		   $('#responsives2').on('hide.bs.modal', function () {
			  location.reload();
			});
			}
			$(document).ready(function(){
				product_update();
				})

