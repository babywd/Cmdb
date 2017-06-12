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

		$("#videoshexiangji_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#videoshexiangji_use").attr("checked")==undefined){
              document.getElementById("video_group1").style.display="none";
              document.getElementById("video_group2").style.display="none";
			}else{
              document.getElementById("video_group1").style.display="block";
              document.getElementById("video_group2").style.display="block";
              alert('请联系技术中心演播室部门同事进行设备领取')
			}
		});

		$("#videoshouchi_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#videoshouchi_use").attr("checked")==undefined){
              document.getElementById("video_group3").style.display="none";
              document.getElementById("video_group4").style.display="none";
			}else{
              document.getElementById("video_group3").style.display="block";
              document.getElementById("video_group4").style.display="block";
              alert('请联系技术中心演播室部门同事进行设备领取')
			}
		});

		$("#videoxiongmai_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#videoxiongmai_use").attr("checked")==undefined){
              document.getElementById("video_group5").style.display="none";
              document.getElementById("video_group6").style.display="none";
			}else{
              document.getElementById("video_group5").style.display="block";
              document.getElementById("video_group6").style.display="block";
              alert('请联系技术中心演播室部门同事进行设备领取')
			}
		});

		$("#videozhuomai_use").on("switchChange.bootstrapSwitch", function(event) {
			if ($("#videozhuomai_use").attr("checked")==undefined){
              document.getElementById("video_group7").style.display="none";
              document.getElementById("video_group8").style.display="none";
			}else{
              document.getElementById("video_group7").style.display="block";
              document.getElementById("video_group8").style.display="block";
              alert('请联系技术中心演播室部门同事进行设备领取')
			}
		});

$(function(){
	$("#meeting_name").bind("click",function(){
        $.ajax({
            async: false,
            type: "POST",
            url: "../meeting_time_check_ajax/",
            data: $("#submit_form").serialize(),
            cache: false,
            dataType: "json",
            beforeSend: function () {
                Metronic.blockUI({animate: true});
            },
            complete: function () {
                Metronic.unblockUI();
            },
            success: function (obj) {
                if (obj['status'] == "0") {
                    alert("此时间段可以预定");
                    $("#meeting_name").removeAttr("readonly");
                    //    $("#meeting_name").unbind("click");
                } else if (obj['status'] == "1") {
                    alert("您输入的起始时间必须大于8点半或者小于22点半");
                } else if (obj['status'] == "2") {
                    alert("您输入的结束时间必须大于起始时间");
                } else if (obj['status'] == "3") {
                    alert("所预定会议室的时间或者房间已经有人预定,请重新输入时间");
                } else if (obj['status'] == "4") {
                    alert("所预定会议室的时间或者房间已经有人预定,请重新输入时间");
                } else if (obj['status'] == "6") {
                    alert("所预定会议室的时间或者房间A+B、A+B+C已经有人预定,请重新输入时间");
                } else if (obj['status'] == "7") {
                    alert("所预定会议室的时间或者房间A+B、A+B+C、B+C已经有人预定,请重新输入时间");
                } else if (obj['status'] == "8") {
                    alert("所预定会议室的时间或者房间A+B+C、B+C已经有人预定,请重新输入时间");
                } else if (obj['status'] == "9") {
                    alert("所预定会议室的时间或者房间A、B、BC、ABC已经有人预定,请重新输入时间");
                } else if (obj['status'] == "10") {
                    alert("所预定会议室的时间或者房间B、C、AB、ABC已经有人预定,请重新输入时间");
                } else if (obj['status'] == "11") {
                    alert("所预定会议室的时间或者房间A、B、C已经有人预定,请重新输入时间");
                } else if (obj['status'] == "5") {
                    alert("请重新输入时间");
                } else if (obj['status'] == "12") {
                    alert("您只能预定自今日起的前后七天");
                }
            }
        });
        return false;
    })
    //会议名称失去焦点后，判断名称是否为空，如果不为空并且对地点，事件绑定点击事件，触发清空名称项目，并锁定
	$("#meeting_name").blur(function(){
        if ($(this).val() !='') {
            $("#meetingstartday,#meeting_place,#meetingstartday_icon,#meetingstarttime,#meetingstarttime_icon,#meetingendday,#meetingendday_icon,#meetingendtime,#meetingendtime_icon").bind("click",function () {
                $("#meeting_name").val('');
                $('#meeting_name').attr("readonly","readonly");
            })
        }
    });
});

