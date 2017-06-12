function addUsergroup(){
  $('#responsive form').submit(function(){
	$.ajax({
	  type: "POST",
	  data: $('#responsive form').serialize(),
	  url: "../svn_user_group_add/",
	  async:true,
	  cache: false,
	  dataType: "json",
        beforeSend:function(){
            Metronic.blockUI({animate: true});
        },
        complete: function() {c
            Metronic.unblockUI();
        },
	  success: function(obj) {
	  for (var id in obj){
		if (obj[id] == "1"){
		$('#responsive').modal('hide');
		$('#responsive form')[0].reset();
		alert ("SVN用户组添加完成");
		location.reload();
		} else {
		alert ("SVN用户组添加失败");
		}}
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
		  $('#comment_form form').replaceWith('err.');
		}
		});
		return false;	
		});          
		  }
  $(document).ready(function(){
	addUsergroup();
	})


	
function delUsergroup(){
	$(".fa-trash-o").bind("click", function() {
		var svn_user_group_name =$(this).parent().parent().find('td').eq(0).attr("id");
		$('#del_name').replaceWith('<h3 id="myModalLabel"> 确认删除用户组'+svn_user_group_name+'操作是否执行</h3>')
		$('#responsive2 form').submit(function(){
			$.ajax({
				type: "GET",
				data: $('#responsive2 form').serialize(),
				url: "../svn_user_group_del/?svn_user_group_name="+svn_user_group_name,
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
				for (var id in obj){
					if (obj[id] == "1"){
					$('#responsive2').modal('hide');
					$('#responsive2 form')[0].reset();
					alert ("SVN用户组删除完成");
					location.reload();
					} else {
					alert ("SVN用户组删除失败");
					}}
					},
					error: function (XMLHttpRequest, textStatus, errorThrown) {
						$('#comment_form form').replaceWith('err.');
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
					delUsergroup();
					})	


function updateUsergroup(){
  $('#responsive3 form').submit(function(){
	$.ajax({
	  type: "POST",
	  data: $('#responsive3 form').serialize(),
	  url: "../svn_user_group_update/",
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
            $('#responsive3').modal('hide');
            $('#responsive3 form')[0].reset();
            alert ("SVN用户组用户ID信息更新完成");
		    location.reload();
		} else if (obj['status'] == "3") {
		    alert ("SVN用户组用户名称为空，将更新名称");
		} else {
            alert ("SVN用户组用户ID信息更新失败");
        }
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
		  $('#comment_form form').replaceWith('err.');
		}
		});
		return false;
		});
		  }
  $(document).ready(function(){
	    updateUsergroup();
	})