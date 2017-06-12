function addProject(){
  $('#responsive form').submit(function(){
	$.ajax({
	  type: "POST",
	  data: $('#responsive form').serialize(),
	  url: "../svn_project_add/",
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
		$('#responsive').modal('hide');
		$('#responsive form')[0].reset();
		alert ("SVN项目添加完成");
		location.reload();
		} else {
		alert ("SVN项目组添加失败");
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
	addProject();
	})
	
function delProject(){
	$(".fa-trash-o").bind("click", function() {
		var svn_project_name =$(this).parent().parent().find('td').eq(1).attr("id");
		$('#del_name').replaceWith('<h3 id="myModalLabel"> 确认删除项目'+svn_project_name+'操作是否执行 </h3>')
		$('#responsive2 form').submit(function(){
			$.ajax({
				type: "GET",
				data: $('#responsive2 form').serialize(),
				url: "../svn_project_del/?svn_project_name="+svn_project_name,
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
					alert ("SVN项目删除完成");
					location.reload();
					} else {
					alert ("SVN项目删除失败");
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
					delProject();
					})	

