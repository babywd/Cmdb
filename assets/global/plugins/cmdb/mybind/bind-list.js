function add_bind_intro_hidden(obj){
    if (obj.value=="6"){
        document.getElementById("add_bind_intro").style.display ="block";
    }else{
        document.getElementById("add_bind_intro").style.display ="none";
        }
}

function edit_bind_intro_hidden(obj) {
    if (obj.value == "6") {
        document.getElementById("edit_bind_intro").style.display = "block";
    } else {
        document.getElementById("edit_bind_intro").style.display = "none";
    }
}

function edit_bind_internal_external_hidden(obj) {
    if (obj.value == "2") {
        document.getElementById("add_bind_url_mitors").style.display = "block";
        document.getElementById("add_bind_syncs").style.display = "block";
    } else {
        document.getElementById("add_bind_url_mitors").style.display = "none";
        document.getElementById("add_bind_syncs").style.display = "none";
    }
}




function bind_add(){
		$("#add_url_mitor").on('switchChange.bootstrapSwitch', function(e, status) {
			if (status == false){
			$("#add_url_mitors").val('false');
			}else{
			$("#add_url_mitors").val('true');
			}
		});
		$("#add_sync").on('switchChange.bootstrapSwitch', function(e, status) {
			if (status == false){
			$("#add_syncs").val('false');
			}else{
			$("#add_syncs").val('true');
			}
		});
	$('#responsive form').submit(function(){
		$.ajax({
			type: "POST",
			data: $('#responsive form').serialize(),
			url: "../bind_add/",
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
                      alert('本地域名添加成功，添加监控成功，分发域名添加成功');
                      $('#responsive').modal('hide');
                      $('#responsive form')[0].reset();
                  }else if (obj['status'] == "2") {
                      alert('本地域名添加成功，添加监控失败，分发域名添加成功');
                      $('#responsive').modal('hide');
                      $('#responsive form')[0].reset();
                  }else if (obj['status'] == "3") {
                      alert('本地域名添加成功，添加监控成功，分发域名添加失败');
                      $('#responsive form')[0].reset();
                  }else if (obj['status'] == "4") {
                      alert('本地域名添加成功，添加监控失败，分发域名添加失败');
                      $('#responsive').modal('hide');
                      $('#responsive form')[0].reset();
                  }else if (obj['status'] == "5") {
                      alert('本地域名添加失败，添加监控失败，分发域名添加失败，错误为：'+obj['err']);
                  }else if (obj['status'] == "6") {
                      alert('域名重复');
                  }else if (obj['status'] == "100") {
                      alert('服务器端错误,请联系网宿，并尝试再次提交，错误为：'+obj['err']);
                  }else if (obj['status'] == "212") {
                      alert('格式错误，并检查后再次提交');
                  }else {
                      alert('域名添加失败，错误为：'+obj['err']);
                   }
				}
				});
				return false;
				});
		   $('#responsive').on('hide.bs.modal', function () {
			  location.reload();
			});    					
			}
			$(document).ready(function(){
				bind_add();
				})


function bind_del(){
	$(".fa-trash-o").bind("click", function() {
		var name =$(this).parent().parent().find('td').eq(2).attr("id");
		var zone =$(this).parent().parent().find('td').eq(3).attr("id");
        var internal_external =$(this).parent().parent().find('td').eq(5).attr("id");
		var ip =$(this).parent().parent().find('td').eq(6).attr("id");
        if (zone == "1"){
            var zones = 'k618.cn'
        }else if (zone == "2"){
            var zones = 'youth.cn'
        }else if (zone == "3"){
            var zones = 'ccyl.org.cn'
        }else if (zone == "3"){
            var zones = 'gqt.org.cn'
        }
        if (internal_external == "1"){
            var internal_externals = '内部解析'
        }else if (internal_external == "2"){
            var internal_externals = '外部解析'
        }
		$('#del_name').replaceWith('<h3 id="myModalLabel"> 确认删除'+internal_externals+'域名'+name+'.'+zones+'操作是否执行 </h3>')
        var jsonData ={
            'bind_name':name,
            'bind_zone_id':zone,
            'bind_ip':ip,
            'bind_internal_external':internal_external
        };
		$('#responsivess form').submit(function(){
			$.ajax({
				type: "POST",
				data: jsonData,
                url: "../bind_del/",
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
                          alert('域名删除成功');
                          $('#responsivess').modal('hide');
                          $('#responsivess form')[0].reset();
                      }else if (obj['status'] == "2") {
                          alert('网宿查询ID为空，只删除本地域名，分发域名删除失败');
                          $('#responsivess').modal('hide');
                          $('#responsivess form')[0].reset();
                      }else{
                          alert('域名删除失败，错误为：'+obj['err']);
                      }

                  }
					});
					return false;
					});
					});
			   $('#responsivess').on('hide.bs.modal', function () {
				  location.reload();
						});    						
				}
				$(document).ready(function(){
					bind_del();
					})


function bind_edit(){
    $(".fa-edit").bind('click', function() {
		var bind_id =$(this).parent().parent().find('td').eq(1).attr("id");
		var bind_name =$(this).parent().parent().find('td').eq(2).attr("id");
		var bind_zone =$(this).parent().parent().find('td').eq(3).attr("id");
		var bind_type =$(this).parent().parent().find('td').eq(4).attr("id");
		var bind_ip =$(this).parent().parent().find('td').eq(6).attr("id");
		var bind_ttl =$(this).parent().parent().find('td').eq(7).attr("id");
		var bind_intro =$(this).parent().parent().find('td').eq(8).attr("id");
		$('#edit_bind_id').replaceWith('<input type="hidden" class="form-control" name="bind_id" value='+bind_id+' readonly>')
		$('#edit_bind_name').replaceWith('<input type="text" class="form-control" placeholder="例如：cms" name="bind_name" value='+bind_name+' readonly>')
		$('#edit_bind_ttl').replaceWith('<input type="text" class="form-control" placeholder="例如：3600" name="bind_ttl" value='+bind_ttl+'>')
		$('#edit_bind_ip').replaceWith('<input type="text" class="form-control"	placeholder="例如：123.103.56.246" name="bind_ip" value='+bind_ip+'>')
        $('#edit_bind_intros').replaceWith('<input type="text" class="form-control" placeholder="例如：123.103.56.246" name="bind_intro" value='+bind_intro+'>')
        $("#edit_bind_zone").select2("val", bind_zone).trigger('change');
        $("#edit_bind_zone").attr("disabled", "disabled");
        $("#edit_bind_type").select2("val", bind_type).trigger('change');
	$('#responsives2 form').submit(function(){
		$.ajax({
			type: "POST",
			data: $('#responsives2 form').serialize(),
			url: "../bind_edit/",
			cache: false,
            async:true,
			dataType: "json",
            beforeSend:function(){
                Metronic.blockUI({animate: true});
            },
            complete: function() {
                Metronic.unblockUI();
            },
			success: function(obj)  {
                  if (obj['status'] == "1"){
                      alert('本地域名添加成功，分发域名添加成功');
                      $('#responsives2').modal('hide');
                      $('#responsives2 form')[0].reset();
                  }else if (obj['status'] == "2") {
                      alert('无修改');
                      $('#responsives2').modal('hide');
                  }else if (obj['status'] == "3") {
                      alert('网宿查询ID为空，只更改本地域名，分发域名更改失败');
                      $('#responsives2').modal('hide');
                      $('#responsives2 form')[0].reset();
                  }else if (obj['status'] == "100") {
                      alert('服务器端错误，请联系网宿，并尝试再次提交，错误为:'+obj['err']);
                  }else if (obj['status'] == "212") {
                      alert('格式错误，并检查后再次提交');
                  }else {
                      alert('域名添加失败,错误为:'+obj['err']);
                   }
				}
				});
				return false;
				});
                });
		   $('#responsives2').on('hide.bs.modal', function () {
			  location.reload();
			});
			}
			$(document).ready(function(){
				bind_edit();
				})