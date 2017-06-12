
  function video_place_hidden(obj){

    if(obj.value=="1"){
      document.getElementById("group1").style.display="none";
      document.getElementById("group2").style.display="none";
      document.getElementById("group3").style.display="none";
      document.getElementById("group4").style.display="none";	 
      document.getElementById("group5").style.display="none";
      document.getElementById("group6").style.display="block";
      document.getElementById("group7").style.display="block";
      document.getElementById("group8").style.display="block";            	    
		}
    if(obj.value=="2"){	
      document.getElementById("group1").style.display="block";
      document.getElementById("group2").style.display="block";
      document.getElementById("group3").style.display="block";
      document.getElementById("group4").style.display="block";	 
      document.getElementById("group5").style.display="block";
      document.getElementById("group6").style.display="none";
      document.getElementById("group7").style.display="none";
      document.getElementById("group8").style.display="block";            		      		           
	}

}

  function video_type_hidden(obj){

    if(obj.value=="1"){
      document.getElementById("video_type_group1").style.display="block";
      document.getElementById("video_type_group2").style.display="none";
      document.getElementById("video_type_group3").style.display="none";        	    
		}
    if(obj.value=="2"){	
      document.getElementById("video_type_group1").style.display="none";
      document.getElementById("video_type_group2").style.display="block";
      document.getElementById("video_type_group3").style.display="none";          		      		           
		}
    if(obj.value=="3"){
      document.getElementById("video_type_group1").style.display="none";
      document.getElementById("video_type_group2").style.display="none";	 
      document.getElementById("video_type_group3").style.display="block"; 
      }    	
}

		$("#wutai_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#wutai_use").attr("checked")==undefined){
			$("#video_wutai_use").val('否');
			}else{
			$("#video_wutai_use").val('是');
			}
		});
		$("#daobotai_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#daobotai_use").attr("checked")==undefined){
			$("#video_daobotai_use").val('否');
			}else{
			$("#video_daobotai_use").val('是');		
			}
		});
		$("#dengguang_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#dengguang_use").attr("checked")==undefined){
			$("#video_dengguang_use").val('否');
			}else{
			$("#video_dengguang_use").val('是');
			}
		});	
		$("#dapingmu_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#dapingmu_use").attr("checked")==undefined){
			$("#video_dapingmu_use").val('否');
			}else{
			$("#video_dapingmu_use").val('是');		
			}
		});									
		$("#dashijingqu_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#dashijingqu_use").attr("checked")==undefined){
			$("#video_dashijingqu_use").val('否');
			}else{
			$("#video_dashijingqu_use").val('是');	
			}
		});	
		$("#dengxiangshijingfangxingqu_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#dengxiangshijingfangxingqu_use").attr("checked")==undefined){
			$("#video_dengxiangshijingfangxingqu_use").val('否');
			}else{
			$("#video_dengxiangshijingfangxingqu_use").val('是');		
			}
		});			
		$("#dengxiangshijingyixingqu_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#dengxiangshijingyixingqu_use").attr("checked")==undefined){
			$("#video_dengxiangshijingyixingqu_use").val('否');
			}else{
			$("#video_dengxiangshijingyixingqu_use").val('是');		
			}
		});	
		$("#lanxiangxuniqu_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#lanxiangxuniqu_use").attr("checked")==undefined){
			$("#video_lanxiangxuniqu_use").val('否');
			}else{
			$("#video_lanxiangxuniqu_use").val('是');		
			}
		});	
		$("#yaobi_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#yaobi_use").attr("checked")==undefined){
			$("#video_yaobi_use").val('否');
			}else{
			$("#video_yaobi_use").val('是');		
			}
		});	
		$("#xingkongmu_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#xingkongmu_use").attr("checked")==undefined){
			$("#video_xingkongmu_use").val('否');
			}else{
			$("#video_xingkongmu_use").val('是');		
			}
		});	
		$("#jiantingyinxiang_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#jiantingyinxiang_use").attr("checked")==undefined){
			$("#video_jiantingyinxiang_use").val('否');
			}else{
			$("#video_jiantingyinxiang_use").val('是');		
			}
		});	
		$("#feixian_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#feixian_use").attr("checked")==undefined){
			$("#video_feixian_use").val('否');
			}else{
			$("#video_feixian_use").val('是');		
			}
		});		
		$("#sucaidaoru_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#sucaidaoru_use").attr("checked")==undefined){
			$("#video_sucaidaoru_use").val('否');
			}else{
			$("#video_sucaidaoru_use").val('是');		
			}
		});						

		$("#videoshexiangji_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#videoshexiangji_use").attr("checked")==undefined){
              document.getElementById("video_group1").style.display="none";
              document.getElementById("video_group2").style.display="none";
			}else{
              document.getElementById("video_group1").style.display="block";
              document.getElementById("video_group2").style.display="block";

			}
		});

		$("#videoshouchi_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#videoshouchi_use").attr("checked")==undefined){
              document.getElementById("video_group3").style.display="none";
              document.getElementById("video_group4").style.display="none";
			}else{
              document.getElementById("video_group3").style.display="block";
              document.getElementById("video_group4").style.display="block";
			}
		});

		$("#videoxiongmai_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#videoxiongmai_use").attr("checked")==undefined){
              document.getElementById("video_group5").style.display="none";
              document.getElementById("video_group6").style.display="none";
			}else{
              document.getElementById("video_group5").style.display="block";
              document.getElementById("video_group6").style.display="block";
			}
		});

		$("#videozhuomai_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#videozhuomai_use").attr("checked")==undefined){
              document.getElementById("video_group7").style.display="none";
              document.getElementById("video_group8").style.display="none";
			}else{
              document.getElementById("video_group7").style.display="block";
              document.getElementById("video_group8").style.display="block";
			}
		});















$(function(){
	$("#video_outside_user_num").bind("click",function(){
    $.ajax({
    	async: false,
    	type: "POST",
        url : "../video_time_check_ajax/",
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
			if (obj['status'] == "0") {
			alert("此时间段可以预定");	
			$("#video_outside_user_num").removeAttr("readonly");
			} else if (obj['status'] == "1") {
			alert("您输入的起始时间如果不在8点半至17点半工作时间内，请联系影音部进行确认");
			} else if (obj['status'] == "2"){
			alert("您输入的结束时间必须大于起始时间");
			} else if (obj['status'] == "3"){
			alert("所预定演播室的时间已经有人预定,请重新输入时间");
			} else if (obj['status'] == "4"){
			alert("所预定演播室的时间已经有人预定,请重新输入时间");
			} else if (obj['status'] == "5"){
			alert("请重新输入时间");
			}else if (obj['status'] == "12"){
			alert("两会期间，您只能提前一天预订");
			}}
			});
			return false;
			})
	$("#video_outside_user_num").blur(function(){
        if ($(this).val() !='') {
            $("#videostartday,#videostartday_icon,#videostarttime,#videostarttime_icon,#videoendday,#videoendday_icon,#videoendtime,#videoendtime_icon").bind("click",function () {
                $("#video_outside_user_num").val('');
                $('#video_outside_user_num').attr("readonly","readonly");
            })
        }
    });
		});