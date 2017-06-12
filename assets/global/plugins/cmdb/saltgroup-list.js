function addSaltgroup(){
  $('#responsive form').submit(function(){
	$.ajax({
	  type: "POST",
	  data: $('#responsive form').serialize(),
	  url: "../salt_hostsgroupadd/",
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
		alert ("Salt主机组添加完成");
		location.reload();
		} else {
		alert ("Salt主机组添加失败");
		}}
		}
		});
		return false;	
		});          
		  }
  $(document).ready(function(){
	addSaltgroup();
	})


	
function delHostgroup(){
	$(".fa-trash-o").bind("click", function() {
		var hosts_group_name =$(this).parent().parent().find('td').eq(0).attr("id");
		$('#del_name').replaceWith('<h3 id="myModalLabel"> 确认删除Salt主机组'+hosts_group_name+'操作是否执行</h3>')
		$('#responsive2 form').submit(function(){
			$.ajax({
				type: "GET",
				data: $('#responsive2 form').serialize(),
				url: "../salt_hostsgroupdel/?del_group_name="+hosts_group_name,
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
					alert ("Salt主机组删除完成");
					location.reload();
					} else {
					alert ("Salt主机组删除失败");
					}}
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
					delHostgroup();
					})	
										