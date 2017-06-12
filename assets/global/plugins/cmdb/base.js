$(function(){
        var url_name =$("#history_url").html();
        var url_url =$("#history_url").attr("href");
        var cookieSet = { expires: 7 ,path: "/"}
		//获取浏览历史cookie信息，判断如果浏览历史的cookie中已经存在当前访问URL的浏览记录，则不进行任何操作
        var canAdd = true;
        var urlhistory_len = 0;
        var urlhistory = $.cookie("urlhistory");
        if(urlhistory){
            urlhistory = eval("("+urlhistory+")");
            urlhistory_len = urlhistory.length;
        }

		//如果浏览历史的cookie中不存在当前访问URL的浏览记录，则将当前访问URL的cookie信息（URL标题和URL地址）写入浏览历史的cookie信息中。写入的cookie信息，采用JSON数据格式
        $(urlhistory).each(function(){
            if(this.name == url_name){
                canAdd = false; //已经存在，不能插入
                return false;
            }
        });

		//如果浏览历史cookie中不存在当前访问URL，则向浏览历史cookie中插入当前访问URL的cookie信息
        if(canAdd==true){
            var jsonStr = "[";
            var start = 0;
            if(urlhistory_len>4){start = 1;}
            for(var i=start;i<urlhistory_len;i++){
                jsonStr = jsonStr + "{\"name\":\""+urlhistory[i].name+"\",\"url\":\""+urlhistory[i].url+"\"},";
            }
            jsonStr = jsonStr + "{\"name\":\""+url_name+"\",\"url\":\""+url_url+"\"}]";
            $.cookie('urlhistory', jsonStr, cookieSet);
        }
});

//获取浏览历史cookie：urlhistory的值，然后分析，遍历，组合成字符串输出到页面，
$(function(){
	var json = eval("("+$.cookie("urlhistory")+")");
	var list = "<li class='classic-menu-dropdown active'><a href='http://172.18.18.24/cmdb/dashboard/'>返回主页 <span class='selected'></span></a></li>";
	for(var i=0; i<json.length;i++){
		list = list + "<li><a href='"+json[i].url+"'>"+json[i].name+"</a></li>";
	}
	$("#history_list").html(list);
});


function change_passwds(){
  $('#responsive_base form').submit(function(){
    $.ajax({
      type: "POST",
      data: $('#responsive_base form').serialize(),
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
                      $('#responsive_base').modal('hide');
                      $('#responsive_base form')[0].reset();
                  } else if (obj['status'] == "3"){
                      alert ("密码强度太弱，重新输入");
                      $('#responsive_base form')[0].reset();
                  }
                  else {
                      alert ("密码修改完成，您的新密码为"+obj['status']+"，请重新登陆");
                      window.location.href="http://172.18.18.24/logout";
                  }}
        });
        return false;
        });
   $('#responsive_base').on('hide.bs.modal', function () {
	  location.reload();
			});
		  }
  $(document).ready(function(){
	change_passwds();
	})

  function video_place_hidden(obj){

    if(obj.value=="2"){
      document.getElementById("group1").style.display="block";

		}
    if(obj.value=="1"){
      document.getElementById("group1").style.display="none";
	}

}


function logstealth(){
  $('#responsive_base2 form').submit(function(){
    $.ajax({
      type: "POST",
      data: $('#responsive_base form').serialize(),
      url: "../../logstealth/",
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
                  if (obj['status'] == "1") {
                      toastr.success('已经隐身')
                      $('#responsive_base2').modal('hide');
                      $('#responsive_base2 form')[0].reset();
                  }
                  else {
                      toastr.error('隐身失败');
                      $('#responsive_base2').modal('hide');
                      $('#responsive_base2 form')[0].reset();
                  }}
        });
        return false;
        });
   $('#responsive_base2').on('hide.bs.modal', function () {
	  location.reload();
			});
		  }
  $(document).ready(function(){
	logstealth();
	})


