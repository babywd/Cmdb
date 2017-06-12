function type_hidden(obj){

    if (obj.value=="1"){
        document.getElementById("group1").style.display="block";
        document.getElementById("group2").style.display="block";
        document.getElementById("group3").style.display="block";
	}else if (obj.value=="2"){
        document.getElementById("group1").style.display="block";
        document.getElementById("group2").style.display="block";
        document.getElementById("group3").style.display="block";
	}else if (obj.value=="11"){
        document.getElementById("group1").style.display="block";
        document.getElementById("group2").style.display="block";
        document.getElementById("group3").style.display="block";
    }else{
        document.getElementById("group1").style.display="none";
        document.getElementById("group2").style.display="none";
        document.getElementById("group3").style.display="none";
    }

}


//0为否，1为是
$("#monitorid").on("switchChange.bootstrapSwitch", function(event) {
    if ($("#monitorid").attr("checked")==undefined){
    $("#monitor_id").val('0');
    }else{
    $("#monitor_id").val('1');
    }
});


//0为否，1为是
$("#secid").on("switchChange.bootstrapSwitch", function(event) {
    if ($("#secid").attr("checked")==undefined){
    $("#sec_id").val('0');
    }else{
    $("#sec_id").val('1');
    }
});

//0为否，1为是
$("#lasid").on("switchChange.bootstrapSwitch", function(event) {
    if ($("#lasid").attr("checked")==undefined){
    $("#las_id").val('0');
    }else{
    $("#las_id").val('1');
    }
});
