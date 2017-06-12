function video_todo(){
	$(".fa-eye").bind("click", function() {
		var video_dashijingqu_use =$(this).parent().parent().find('input').eq(0).attr("id");
		if (video_dashijingqu_use == '是'){
		$('#video_dashijingqu_use').replaceWith('<td>大实景区</td><td><span class="label label-success">需要使用</span></td><td></td>')
		}
		
		var video_dengxiangshijingfangxingqu_use =$(this).parent().parent().find('input').eq(1).attr("id");	
		if (video_dengxiangshijingfangxingqu_use == '是'){
		$('#video_dengxiangshijingfangxingqu_use').replaceWith('<td>灯箱实景方形区</td><td><span class="label label-success">需要使用</span></td><td></td>')
		}	
		
		var video_dengxiangshijingyixingqu_use =$(this).parent().parent().find('input').eq(2).attr("id");	
		if (video_dengxiangshijingyixingqu_use == '是'){
		$('#video_dengxiangshijingyixingqu_use').replaceWith('<td>灯箱实景异形区</td><td><span class="label label-success">需要使用</span></td><td></td>')
		}
		
		var video_lanxiangxuniqu_use =$(this).parent().parent().find('input').eq(3).attr("id");	
		if (video_lanxiangxuniqu_use == '是'){
		$('#video_lanxiangxuniqu_use').replaceWith('<td>蓝箱虚拟区</td><td><span class="label label-success">需要使用</span></td><td></td>')
		}		
		
		var video_yaobi_use =$(this).parent().parent().find('input').eq(4).attr("id");	
		if (video_yaobi_use == '是'){
		$('#video_yaobi_use').replaceWith('<td>摇臂</td><td><span class="label label-success">需要使用</span></td><td></td>')
		}			
		
		var video_xingkongmu_use =$(this).parent().parent().find('input').eq(5).attr("id");	
		if (video_xingkongmu_use == '是'){
		$('#video_xingkongmu_use').replaceWith('<td>星空幕</td><td><span class="label label-success">需要使用</span></td><td></td>')
		}			
		
		var video_jiantingyinxiang_use =$(this).parent().parent().find('input').eq(6).attr("id");	
		if (video_jiantingyinxiang_use == '是'){
		$('#video_jiantingyinxiang_use').replaceWith('<td>监听音箱</td><td><span class="label label-success">需要使用</span></td><td></td>')
		}		
		
		var video_feixian_use =$(this).parent().parent().find('input').eq(7).attr("id");	
		if (video_feixian_use == '是'){
		$('#video_feixian_use').replaceWith('<td>非线</td><td><span class="label label-success">需要使用</span></td><td></td>')
		}			
		
		var video_sucaidaoru_use =$(this).parent().parent().find('input').eq(8).attr("id");	
		if (video_sucaidaoru_use == '是'){
		$('#video_sucaidaoru_use').replaceWith('<td>素材导入</td><td><span class="label label-success">需要使用</span></td><td></td>')
		}					

		var video_dapingmu_use =$(this).parent().parent().find('input').eq(9).attr("id");	
		if (video_dapingmu_use == '是'){
		$('#video_dapingmu_use').replaceWith('<td>大屏幕</td><td><span class="label label-success">需要使用</span></td><td></td>')
		}
		
		var video_wutai_use =$(this).parent().parent().find('input').eq(10).attr("id");	
		if (video_wutai_use == '是'){
		$('#video_wutai_use').replaceWith('<td>舞台</td><td><span class="label label-success">需要使用</span></td><td></td>')
		}		

		var video_daobotai_use =$(this).parent().parent().find('input').eq(11).attr("id");	
		if (video_daobotai_use == '是'){
		$('#video_daobotai_use').replaceWith('<td>导播台</td><td><span class="label label-success">需要使用</span></td><td></td>')
		}

		var video_dengguang_use =$(this).parent().parent().find('input').eq(12).attr("id");	
		if (video_dengguang_use == '是'){
		$('#video_dengguang_use').replaceWith('<td>灯光</td><td><span class="label label-success">需要使用</span></td><td></td>')
		}
		
		var video_shexiangji =$(this).parent().parent().find('input').eq(13).attr("id");	
		if (video_shexiangji != '0'){
		$('#video_shexiangji').replaceWith('<td>摄像机</td><td><span class="label label-success">需要使用</span></td><td>'+video_shexiangji+' 台'+'</td>')
		}			
		
		var video_shouchi =$(this).parent().parent().find('input').eq(14).attr("id");	
		if (video_shouchi != '0'){
		$('#video_shouchi').replaceWith('<td>手持</td><td><span class="label label-success">需要使用</span></td><td>'+video_shouchi+' 台'+'</td>')
		}				
		
		var video_xiongmai =$(this).parent().parent().find('input').eq(15).attr("id");	
		if (video_xiongmai != '0'){
		$('#video_xiongmai').replaceWith('<td>胸麦</td><td><span class="label label-success">需要使用</span></td><td>'+video_xiongmai+' 台'+'</td>')
		}			
		
		var video_zhuomai =$(this).parent().parent().find('input').eq(16).attr("id");	
		if (video_zhuomai != '0'){
		$('#video_zhuomai').replaceWith('<td>桌麦</td><td><span class="label label-success">需要使用</span></td><td>'+video_zhuomai+' 台'+'</td>')
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
		var video_user_tel =$(this).parent().parent().find('td').eq(1).attr("id");
        var video_reserve_used_name =$(this).parent().parent().find('td').eq(6).attr("id");
		$('#reserve_used_name').replaceWith('<h3 id="myModalLabel"> 确认'+video_reserve_used_name+'预定操作是否执行 </h3>')
        var jsonData ={
            'video_place_id':video_place_id,
            'video_user_tel':video_user_tel,
            'video_time':video_time,
            'video_end_time':video_end_time
        };
		$('#responsive2 form').submit(function(){
			$.ajax({
				type: "POST",
				data: jsonData,
                url: "../video_reserve_check_ajax/",
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