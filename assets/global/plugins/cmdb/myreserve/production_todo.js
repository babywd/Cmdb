function video_todo(){
	$(".fa-eye").bind("click", function() {
		var production_jianji_use =$(this).parent().parent().find('input').eq(0).attr("id");
		if (production_jianji_use == '是'){
		$('#production_jianji_use').replaceWith('<td>剪辑</td><td><span class="label label-success">需要使用</span></td><td></td>')
		}
		
		var production_texiao_use =$(this).parent().parent().find('input').eq(1).attr("id");
		if (production_texiao_use == '是'){
		$('#production_texiao_use').replaceWith('<td>特效</td><td><span class="label label-success">需要使用</span></td><td></td>')
		}	
		
		var production_donghua_use =$(this).parent().parent().find('input').eq(2).attr("id");
		if (production_donghua_use == '是'){
		$('#production_donghua_use').replaceWith('<td>动画</td><td><span class="label label-success">需要使用</span></td><td></td>')
		}
		
		var production_meizi_use =$(this).parent().parent().find('input').eq(3).attr("id");
		if (production_meizi_use == '是'){
		$('#production_meizi_use').replaceWith('<td>媒资</td><td><span class="label label-success">需要使用</span></td><td></td>')
		}		
		
		var production_work1_use =$(this).parent().parent().find('input').eq(4).attr("id");
		if (production_work1_use == '是'){
		$('#production_work1_use').replaceWith('<td>工作站1</td><td><span class="label label-success">需要使用</span></td><td></td>')
		}			
		
		var production_work2_use =$(this).parent().parent().find('input').eq(5).attr("id");
		if (production_work2_use == '是'){
		$('#production_work2_use').replaceWith('<td>工作站2</td><td><span class="label label-success">需要使用</span></td><td></td>')
		}			
		
		var production_work3_use =$(this).parent().parent().find('input').eq(6).attr("id");
		if (production_work3_use == '是'){
		$('#production_work3_use').replaceWith('<td>工作站3</td><td><span class="label label-success">需要使用</span></td><td></td>')
		}		
		
		var production_earphone1_use =$(this).parent().parent().find('input').eq(7).attr("id");
		if (production_earphone1_use == '是'){
		$('#production_earphone1_use').replaceWith('<td>头戴耳机1</td><td><span class="label label-success">需要使用</span></td><td></td>')
		}			
		
		var production_earphone2_use =$(this).parent().parent().find('input').eq(8).attr("id");
		if (production_earphone2_use == '是'){
		$('#production_earphone2_use').replaceWith('<td>头戴耳机2</td><td><span class="label label-success">需要使用</span></td><td></td>')
		}					

		var production_earphone3_use =$(this).parent().parent().find('input').eq(9).attr("id");
		if (production_earphone3_use == '是'){
		$('#production_earphone3_use').replaceWith('<td>头戴耳机3</td><td><span class="label label-success">需要使用</span></td><td></td>')
		}
		
		var production_media_use =$(this).parent().parent().find('input').eq(10).attr("id");
		if (production_media_use == '是'){
		$('#production_media_use').replaceWith('<td>媒体管理系统</td><td><span class="label label-success">需要使用</span></td><td></td>')
		}
		});
	   $('#responsive').on('hide.bs.modal', function () {
		  location.reload();      
				});   						
		}
	$(document).ready(function(){
		video_todo();
		})


function video_reserve_used(){
	$(".fa-send-o").bind("click", function() {
        var video_place_id =$(this).parent().parent().find('td').eq(2).attr("id");
        var video_time =$(this).parent().parent().find('td').eq(3).attr("id");
        var video_end_time =$(this).parent().parent().find('td').eq(4).attr("id");
		var video_reserve_used_name =$(this).parent().parent().find('td').eq(6).attr("id");
		$('#reserve_used_name').replaceWith('<h3 id="myModalLabel"> 确认'+video_reserve_used_name+'预定操作是否执行 </h3>')
        var jsonData ={
            'video_place_id':video_place_id,
            'video_reserve_used_name':video_reserve_used_name,
            'video_time':video_time,
            'video_end_time':video_end_time
        };
		$('#responsive2 form').submit(function(){
			$.ajax({
				type: "POST",
				data: jsonData,
                url: "../video_reserve_check/",
				async:true,
				cache: false,
				dataType: "json",
                    beforeSend:function(){
                        Metronic.blockUI({animate: true});
                    },
                    complete: function() {
                        Metronic.unblockUI();
                    },
				success: function(obj) {
                      if (obj['status'] == "1"){
                          alert('确认成功');
                          $('#responsive2').modal('hide');
                          $('#responsive2 form')[0].reset();
                      }else if (obj['status'] == "6"){
                          alert("无权限操作,请联系影音部进行确认");
                      }else{
                          alert('确认失败');
                      }

                  }
					});
					return false;
					});
					});
			   $('#responsive2').on('hide.bs.modal', function () {
				  location.reload();
						});
				}
				$(document).ready(function(){
					video_reserve_used();
					})

function video_time_edit(){
	$(".fa-edit").bind("click", function() {
        var video_place_id =$(this).parent().parent().find('td').eq(2).attr("id");
        var video_name =$(this).parent().parent().find('td').eq(6).attr("id");
        var video_yuanshi_starttime =$(this).parent().parent().find('td').eq(3).attr("id");
        var video_yuanshi_endtime = $(this).parent().parent().find('td').eq(4).attr("id");
        var video_start_time =$(this).parent().parent().find('input').eq(17).attr("id");
        var video_end_time =$(this).parent().parent().find('input').eq(18).attr("id");
        var video_start_day =$(this).parent().parent().find('input').eq(19).attr("id");
        $('#videoyuanshistarttime').val(video_yuanshi_starttime);
        $('#videoyuanshiendtime').val(video_yuanshi_endtime);
        $('#videostartday').val(video_start_day);
        $('#videostarttime').val(video_start_time);
        $('#videoendtime').val(video_end_time);
        $('#videoplace').val(video_place_id);
		$('#video_edit_name').replaceWith('<h3 id="myModalLabel"> 确认修改'+video_name+'预定操作是否执行 </h3>')
		$('#responsive3 form').submit(function(){
			$.ajax({
				type: "POST",
				data: $('#responsive3 form').serialize(),
                url: "../video_time_edit/",
				async:true,
				cache: false,
				dataType: "json",
                    beforeSend:function(){
                        Metronic.blockUI({animate: true});
                    },
                    complete: function() {
                        Metronic.unblockUI();
                    },
				success: function(obj) {
                    if (obj['status'] == "0") {
                    alert("修改预定时间成功");
                   $('#responsive3').modal('hide');
                   $('#responsive3 form')[0].reset();
                    } else if (obj['status'] == "5"){
                    alert("请重新输入时间");
                    }else if (obj['status'] == "6"){
                    alert("无权限操作,请联系影音部进行确认");
                    }}
					});
					return false;
					});
					});
				}
				$(document).ready(function(){
					video_time_edit();
					})