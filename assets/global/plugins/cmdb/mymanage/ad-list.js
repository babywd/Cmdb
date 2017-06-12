function passwdVerify(){
  $('#responsive form').submit(function(){
	$.ajax({
	  type: "POST",
	  data: $('#responsive form').serialize(),
	  url: "../ad_passwdverify_ajax/",
	  async:true,
	  cache: false,
	  dataType: "json",
        beforeSend:function(){
            Metronic.blockUI({animate: true});
        },
        complete: function() {
            Metronic.unblockUI();
        },
	     success: function(obj){
          if (obj['status'] == "1"){
              $('#responsive').modal('hide');
              $('#responsive form')[0].reset();
              alert ("验证密码完成");
              location.reload();
          } else {
              alert ("error");
          }}
		});
		return false;	
		});          
		  }
  $(document).ready(function(){
	passwdVerify();
	})

function change_passwd(){
	$(".fa-credit-card").bind("click", function() {
		var ad_displayname =$(this).parent().parent().find('td').eq(1).attr("ad_displayname");
		var ad_samaccountName =$(this).parent().parent().find('td').eq(3).attr("ad_samaccountName");
		$('#change_passwd_name').replaceWith('<h3 id="myModalLabel"> 确认用户'+ad_displayname+'生成密码操作是否执行 </h3>')	
		$('#change_username').replaceWith('<label class="control-label col-md-3"> 用户名 <span class="required"> * </span> </label><div class="col-md-5"><input class="form-control" type="text" id="tte" name="change_username" value="'+ad_samaccountName+'" readonly></div>')
		  $('#responsive2 form').submit(function(){
			$.ajax({
			  type: "POST",
			  data: $('#responsive2 form').serialize(),
			  url: "../ad_passwdchange_ajax/",
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
                  if (obj['status'] == "0"){
                      alert ("错误");
                      $('#responsive2').modal('hide');
                      $('#responsive2 form')[0].reset();
                  } else if (obj['status'] == "3"){
                      alert ("密码强度太弱，重新输入");
                      $('#responsive2 form')[0].reset();
                  }
                  else {
                      alert ("密码修改完成，您的新密码为"+obj['status']);
                      $('#responsive2').modal('hide');
                      $('#responsive2 form')[0].reset();
                  }}
				});
				return false;	
				});
			});
   $('#responsive2').on('hide.bs.modal', function () {
	  location.reload(); 
			});            
		  }
  $(document).ready(function(){
	change_passwd();
	})	

  function video_place_hidden(obj){

    if(obj.value=="2"){
      document.getElementById("group1").style.display="block";
   
		}
    if(obj.value=="1"){	
      document.getElementById("group1").style.display="none";      		           
	}

}

  function mail_status_hidden(obj){

    if(obj.value=="1"){
      document.getElementById("group3").style.display="block";

		}
    if(obj.value=="2"){
      document.getElementById("group3").style.display="none";
	}

}


function change_attribute(){
	$(".fa-edit").bind("click", function() {
		var ad_displayname =$(this).parent().parent().find('td').eq(1).attr("ad_displayname");
		var ad_samaccountName =$(this).parent().parent().find('td').eq(3).attr("ad_samaccountName");
		var ad_status =$(this).parent().parent().find('td').eq(4).attr("ad_status");
		if (ad_status == 512){
			$("#select1").attr("selected",true);
		}else if (ad_status == 514){
			$("#select2").attr("selected",true);
		}else{
			$("#select3").attr("selected",true);
		}		
		$('#ad_name').replaceWith('<h3 id="myModalLabel"> 确认用户'+ad_displayname+'状态修改操作是否执行 </h3>')
		$('#change_usernamesss').replaceWith('<label class="control-label col-md-3"> 用户名 <span class="required"> * </span> </label><div class="col-md-5"><input class="form-control" type="text" id="tte" name="change_username" value="'+ad_samaccountName+'" readonly></div>')
		$('#responsive3 form').submit(function(){
			$.ajax({
				type: "POST",
				data: $('#responsive3 form').serialize(),
				url: "../ad_change_attribute_ajax/",
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
                            alert('修改完成');
                        }else {
                            alert('修改失败');
                        }}
					});
					return false;
					});
					});
	   $('#responsive3').on('hide.bs.modal', function () {
		  location.reload();      
				});   						
		}
	$(document).ready(function(){
		change_attribute();
		})


function selectAll(){  
    if ($("#SelectAll").attr("checked")) {  
        $(":checkbox").attr("checked", true);  
    } else {  
        $(":checkbox").attr("checked", false);  
    }  
}  
//子复选框的事件  
function setSelectAll(){  
    //当没有选中某个子复选框时，SelectAll取消选中  
    if (!$("#subcheck").checked) {  
        $("#SelectAll").attr("checked", false);  
    }  
    var chsub = $("input[type='checkbox'][id='subcheck']").length; //获取subcheck的个数  
    var checkedsub = $("input[type='checkbox'][id='subcheck']:checked").length; //获取选中的subcheck的个数  
    if (checkedsub == chsub) {  
        $("#SelectAll").attr("checked", true);  
    }  
}  

$(function(){
	$("#ad_user_departments_select").focus(function(){		
    $.ajax({
    	async: false,
    	type: "POST",
        url : "../ad_user_departments_ajax/",
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
			for (var id in obj['departments']){
		    $("#ad_user_departments_select").append("<option value="+obj['departments'][id]+">"+obj['departments'][id]+"</option>");
				}
			$("#ad_user_departments_select").unbind("focus");	
				}
			});
			return false;
			});
		});
		
function userAdd(){
  $('#responsive4 form').submit(function(){
	$.ajax({
	  type: "POST",
	  data: $('#responsive4 form').serialize(),
	  url: "../ad_adduser_ajax/",
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
                $('#responsive4').modal('hide');
                $('#responsive4 form')[0].reset();
                alert ("用户添加完成");
                location.reload();
            } else if (obj['status'] == "3") {
                $('#responsive4 form')[0].reset();
                alert ("用户名重复");
            } else if (obj['status'] == "4") {
                $('#responsive4 form')[0].reset();
                alert ("短信发送失败");
            } else if (obj['status'] == "5") {
                $('#responsive4 form')[0].reset();
                alert ("邮件开通失败",obj['err']);
            } else {
                alert ("用户添加失败",obj['status'],obj['mailstatus']);
            }}
		});
		return false;	
		});          
		  }
  $(document).ready(function(){
	userAdd();
	})		