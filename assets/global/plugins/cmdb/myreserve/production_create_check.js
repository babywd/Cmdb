		$("#jianji_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#jianji_use").attr("checked")==undefined){
			$("#production_jianji_use").val('否');
			}else{
			$("#production_jianji_use").val('是');
			}
		});
		$("#texiao_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#texiao_use").attr("checked")==undefined){
			$("#production_texiao_use").val('否');
			}else{
			$("#production_texiao_use").val('是');
			}
		});
		$("#donghua_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#donghua_use").attr("checked")==undefined){
			$("#production_donghua_use").val('否');
			}else{
			$("#production_donghua_use").val('是');
			}
		});
		$("#meizi_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#meizi_use").attr("checked")==undefined){
			$("#production_meizi_use").val('否');
			}else{
			$("#production_meizi_use").val('是');
			}
		});
		$("#work1_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#work1_use").attr("checked")==undefined){
			$("#production_work1_use").val('否');
			}else{
			$("#production_work1_use").val('是');
			}
		});
		$("#work2_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#work2_use").attr("checked")==undefined){
			$("#production_work2_use").val('否');
			}else{
			$("#production_work2_use").val('是');
			}
		});
		$("#work3_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#work3_use").attr("checked")==undefined){
			$("#production_work3_use").val('否');
			}else{
			$("#production_work3_use").val('是');
			}
		});
		$("#earphone1_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#earphone1_use").attr("checked")==undefined){
			$("#production_earphone1_use").val('否');
			}else{
			$("#production_earphone1_use").val('是');
			}
		});
		$("#earphone2_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#earphone2_use").attr("checked")==undefined){
			$("#production_earphone2_use").val('否');
			}else{
			$("#production_earphone2_use").val('是');
			}
		});
		$("#earphone3_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#earphone3_use").attr("checked")==undefined){
			$("#production_earphone3_use").val('否');
			}else{
			$("#production_earphone3_use").val('是');
			}
		});
		$("#media_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#media_use").attr("checked")==undefined){
			$("#production_media_use").val('否');
			}else{
			$("#production_media_use").val('是');
			}
		});



$(function(){
	$("#production_user_num").bind("click",function(){
    $.ajax({
    	async: false,
    	type: "POST",
        url : "../production_time_check_ajax/",
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
			$("#production_user_num").removeAttr("readonly");
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
	$("#production_user_num").blur(function(){
        if ($(this).val() !='') {
            $("#productionstartday,#productionstartday_icon,#productionstarttime,#productionstarttime_icon,#productionendday,#productionendday_icon,#productionendtime,#productionendtime_icon").bind("click",function () {
                $("#production_user_num").val('');
                $('#production_user_num').attr("readonly","readonly");
            })
        }
    });
		});