$(function(){
	$("#record_name").bind("click",function(){
    $.ajax({
    	async: false,
    	type: "POST",
        url : "../record_time_check_ajax/",
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
			$("#record_name").removeAttr("readonly");
			} else if (obj['status'] == "1") {
			alert("您输入的起始时间必须大于8点半或者小于17点半");
			} else if (obj['status'] == "2"){
			alert("您输入的结束时间必须大于起始时间");
			} else if (obj['status'] == "3"){
			alert("所预定演播室的时间已经有人预定,请重新输入时间");
			} else if (obj['status'] == "4"){
			alert("所预定演播室的时间已经有人预定,请重新输入时间");
			} else if (obj['status'] == "5"){
			alert("请重新输入时间");
			}}
			});
			return false;
			})
	$("#record_name").blur(function(){
        if ($(this).val() !='') {
            $("#recordstartday,#recordstartday_icon,#recordstarttime,#recordstarttime_icon,#recordendday,#recordendday_icon,#recordendtime,#recordendtime_icon").bind("click",function () {
                $("#record_name").val('');
                $('#record_name').attr("readonly","readonly");
            })
        }
    });
		});