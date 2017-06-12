function todo_type_hidden(obj) {

    if (obj.value == "27") {
        document.getElementById("group1").style.display = "block";
        document.getElementById("group2").style.display = "block";
        document.getElementById("group3").style.display = "none";
    }

    if (obj.value == "28") {
        document.getElementById("group1").style.display = "block";
        document.getElementById("group2").style.display = "block";
        document.getElementById("group3").style.display = "none";
    }

    if (obj.value == "29") {
        document.getElementById("group1").style.display = "block";
        document.getElementById("group2").style.display = "block";
        document.getElementById("group3").style.display = "none";
    }

    if (obj.value == "31") {
        document.getElementById("group1").style.display = "none";
        document.getElementById("group2").style.display = "block";
        document.getElementById("group3").style.display = "block";
    }
}

$(function(){
	$("#todo_user_select").focus(function(){
    todo_build_user_departments = $('#todo_build_user_departments option:selected').val()
    $.ajax({
    	async: false,
    	type: "GET",
        url : "../todousercheck/?todo_build_user_departments="+todo_build_user_departments,
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

