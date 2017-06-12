function userAdd(){
  $('#responsive form').submit(function(){
	$.ajax({
	  type: "POST",
	  data: $('#responsive form').serialize(),
	  url: "../contacts_add/",
	  async:true,
	  cache: false,
	  dataType: "json",
	  success: function(obj) {
            if (obj['status'] == "1"){
                $('#responsive').modal('hide');
                $('#responsive form')[0].reset();
                alert ("用户添加完成");
                location.reload();
            } else {
                alert ("用户添加失败");
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
	userAdd();
	})

function userDel(){
	$(".fa-trash-o").bind("click", function() {
		var id =$(this).parent().parent().find('td').eq(0).attr("id");
		$('#del_name').replaceWith('<h3 id="myModalLabel"> 确认删除联系人操作是否执行 </h3>')
        var jsonData ={
            'id':id
        };
		$('#responsivess form').submit(function(){
			$.ajax({
				type: "POST",
				data: jsonData,
                url: "../contacts_del/",
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
                          alert('联系人删除成功');
                          $('#responsivess').modal('hide');
                          $('#responsivess form')[0].reset();
                      }else{
                          alert('联系人删除失败，错误为：'+obj['status']);
                      }

                  },
					error: function (XMLHttpRequest, textStatus, errorThrown) {
						$('#comment_form form').replaceWith('err.');
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
					userDel();
					})


$(function(){
	$("#contactscompany_ajax_select").focus(function(){
    $.ajax({
    	async: false,
    	type: "POST",
        url : "../contacts_company_ajax/",
        data : $("#submit_form").serialize(),
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
		    $("#contactscompany_ajax_select").append("<option value="+id+">"+obj[id]+"</option>");
				}
			$("#contactscompany_ajax_select").unbind("focus");
				}
			});
			return false;
			});
		});