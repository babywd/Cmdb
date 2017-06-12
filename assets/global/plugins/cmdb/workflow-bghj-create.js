function todo_type_hidden(obj){

    if(obj.value=="1"){
        document.getElementById("group1").style.display="none";
        document.getElementById("group2").style.display="none";
        document.getElementById("group3").style.display="block";
        document.getElementById("group4").style.display="none";
        document.getElementById("group5").style.display="none";
        document.getElementById("group6").style.display="none";
        document.getElementById("group7").style.display="none";
		}

    if(obj.value=="2"){
        document.getElementById("group1").style.display="none";
        document.getElementById("group2").style.display="none";
        document.getElementById("group3").style.display="block";
        document.getElementById("group4").style.display="block";
        document.getElementById("group5").style.display="none";
        document.getElementById("group6").style.display="none";
        document.getElementById("group7").style.display="block";

		}

	if(obj.value=="3"){
        document.getElementById("group1").style.display="none";
        document.getElementById("group2").style.display="none";
        document.getElementById("group3").style.display="block";
        document.getElementById("group4").style.display="none";
        document.getElementById("group5").style.display="none";
        document.getElementById("group6").style.display="none";
        document.getElementById("group7").style.display="none";

		}

    if(obj.value=="4") {
        document.getElementById("group1").style.display="none";
        document.getElementById("group2").style.display="none";
        document.getElementById("group3").style.display="block";
        document.getElementById("group4").style.display="block";
        document.getElementById("group5").style.display="none";
        document.getElementById("group6").style.display="none";
        document.getElementById("group7").style.display="none";

    }

	if(obj.value=="5"){
        document.getElementById("group1").style.display="none";
        document.getElementById("group2").style.display="none";
        document.getElementById("group3").style.display="none";
        document.getElementById("group4").style.display="none";
        document.getElementById("group5").style.display="block";
        document.getElementById("group6").style.display="block";
        document.getElementById("group7").style.display="none";

		}

    if(obj.value=="6") {
        document.getElementById("group1").style.display="none";
        document.getElementById("group2").style.display="none";
        document.getElementById("group3").style.display="none";
        document.getElementById("group4").style.display="none";
        document.getElementById("group5").style.display="block";
        document.getElementById("group6").style.display="none";
        document.getElementById("group7").style.display="none";


    }

    if(obj.value=="7"){
        document.getElementById("group1").style.display="block";
        document.getElementById("group2").style.display="block";
        document.getElementById("group3").style.display="none";
        document.getElementById("group4").style.display="none";
        document.getElementById("group5").style.display="none";
        document.getElementById("group6").style.display="none";
        document.getElementById("group7").style.display="none";

		}

    if(obj.value=="8"){
        document.getElementById("group1").style.display="block";
        document.getElementById("group2").style.display="none";
        document.getElementById("group3").style.display="none";
        document.getElementById("group4").style.display="none";
        document.getElementById("group5").style.display="none";
        document.getElementById("group6").style.display="none";
        document.getElementById("group7").style.display="none";
		}

    if(obj.value=="8"){
        document.getElementById("group1").style.display="block";
        document.getElementById("group2").style.display="none";
        document.getElementById("group3").style.display="none";
        document.getElementById("group4").style.display="none";
        document.getElementById("group5").style.display="none";
        document.getElementById("group6").style.display="none";
        document.getElementById("group7").style.display="none";
		}

    if(obj.value=="35"){
        document.getElementById("group1").style.display="none";
        document.getElementById("group2").style.display="none";
        document.getElementById("group3").style.display="block";
        document.getElementById("group4").style.display="none";
        document.getElementById("group5").style.display="none";
        document.getElementById("group6").style.display="none";
        document.getElementById("group7").style.display="block";
		}

}


//0为注销，1为申请
$("#aduseraddordel").on("switchChange.bootstrapSwitch", function(event) {
    if ($("#aduseraddordel").attr("checked")==undefined){
    $("#ad_user_addordel").val('0');
    }else{
    $("#ad_user_addordel").val('1');
    }
});


//0为注销，1为申请
$("#vpnuseraddordel").on("switchChange.bootstrapSwitch", function(event) {
    if ($("#vpnuseraddordel").attr("checked")==undefined){
    $("#vpn_user_addordel").val('0');
    }else{
    $("#vpn_user_addordel").val('1');
    }
});


$(function(){
	$("#todo_user_select").focus(function(){		
    $.ajax({
    	async: false,
    	type: "GET",
        url : "../todouserchecknetwork/",
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
		    $("#todo_user_select").append("<option value="+id+">"+obj[id]+"</option>");
				}
			$("#todo_user_select").unbind("focus");
				}
			});
			return false;
			});
		});

$(function(){
	$("#todo_url_sql_select").focus(function(){
    $.ajax({
    	async: false,
    	type: "GET",
        url : "../todourlcheck/",
		cache: false,
		dataType: "json",
        beforeSend:function(){
            Metronic.blockUI({animate: true});
        },
        complete: function() {
            Metronic.unblockUI();
        },
		success: function(obj) {
			for (var id in obj['url']){
		    $("#todo_url_sql_select").append("<option value="+obj['url'][id]+">"+obj['url'][id]+"</option>");
				}
            $("#todo_url_sql_select").unbind("focus");
				}
			});
			return false;
			});
		});

$(function(){
	$("#todo_url_sa_select").focus(function(){
    $.ajax({
    	async: false,
    	type: "GET",
        url : "../todourlcheck/",
		cache: false,
		dataType: "json",
        beforeSend:function(){
            Metronic.blockUI({animate: true});
        },
        complete: function() {
            Metronic.unblockUI();
        },
		success: function(obj) {
			for (var id in obj['url']){
		    $("#todo_url_sa_select").append("<option value="+obj['url'][id]+">"+obj['url'][id]+"</option>");
				}
            $("#todo_url_sa_select").unbind("focus");
				}
			});
			return false;
			});
		});


$(function(){
	$("#todo_url_release_select").focus(function(){
    $.ajax({
    	async: false,
    	type: "GET",
        url : "../todourlcheck/",
		cache: false,
		dataType: "json",
        beforeSend:function(){
            Metronic.blockUI({animate: true});
        },
        complete: function() {
            Metronic.unblockUI();
        },
		success: function(obj) {
			for (var id in obj['url']){
		    $("#todo_url_release_select").append("<option value="+obj['url'][id]+">"+obj['url'][id]+"</option>");
				}
            $("#todo_url_select").unbind("focus");
				}
			});
			return false;
			});
		})
