$(function(){
	$("#year_ajax_select").focus(function(){		
    $.ajax({
    	async: false,
    	type: "POST",
        url : "../cmdb_year_ajax/",
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
		    $("#year_ajax_select").append("<option value="+id+">"+obj[id]+"</option>");
				}
			$("#year_ajax_select").unbind("focus");	
				}
			});
			return false;
			});
		});	 
		
$(function(){
	$("#type_ajax_select").focus(function(){		
    $.ajax({
    	async: false,
    	type: "POST",
        url : "../cmdb_type_ajax/",
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
		    $("#type_ajax_select").append("<option value="+id+">"+obj[id]+"</option>");
				}
			$("#type_ajax_select").unbind("focus");	
				}
			});
			return false;
			});
		});	 		
		
$(function(){
	$("#status_ajax_select").focus(function(){		
    $.ajax({
    	async: false,
    	type: "POST",
        url : "../cmdb_status_ajax/",
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
		    $("#status_ajax_select").append("<option value="+id+">"+obj[id]+"</option>");
				}
			$("#status_ajax_select").unbind("focus");	
				}
			});
			return false;
			});
		});	 

$(function(){
	$("#place_ajax_select").focus(function(){		
    $.ajax({
    	async: false,
    	type: "POST",
        url : "../cmdb_place_ajax/",
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
		    $("#place_ajax_select").append("<option value="+id+">"+obj[id]+"</option>");
				}
			$("#place_ajax_select").unbind("focus");	
				}
			});
			return false;
			});
		});	 	

$(function(){
	$("#model_ajax_select").focus(function(){		
    $.ajax({
    	async: false,
    	type: "POST",
        url : "../cmdb_model_ajax/",
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

			for (var id in obj['model']){
                console.log('<option value='+(obj['model'][id])+">"+obj['model'][id]+"</option>")
		    $("#model_ajax_select").append('<option value="'+(obj['model'][id])+'"'+">"+obj['model'][id]+"</option>");
				}
			$("#model_ajax_select").unbind("focus");	
				}
			});
			return false;
			});
		});


function cmdb_del(){
	$(".fa-trash-o").bind("click", function() {
		var unit_id =$(this).parent().parent().find('td').eq(1).attr("unit_id");
        var jsonData ={
            'unit_id':unit_id
        };
		$('#responsives form').submit(function(){
			$.ajax({
				type: "POST",
				data: jsonData,
                url: "../cmdb_assets_del_ajax/",
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
                          alert('设备删除成功，zabbix删除成功，堡垒机删除成功，日志删除成功');
                          $('#responsives').modal('hide');
                          $('#responsives form')[0].reset();
                      }else if (obj['status'] == "2") {
                          alert('设备删除失败，zabbix删除异常，堡垒机删除异常，日志删除异常，错误为:'+obj['err']);
                          $('#responsives').modal('hide');
                          $('#responsives form')[0].reset();
                      }else{
                          alert('设备删除失败');
                          $('#responsives').modal('hide');
                          $('#responsives form')[0].reset();
                      }

                  }
					});
					return false;
					});
					});
			   $('#responsives').on('hide.bs.modal', function () {
				  location.reload();
						});
				}
				$(document).ready(function(){
					cmdb_del();
					})


function addResource_all(){
	$('#responsives2 form').submit(function(){
		$.ajax({
			type: "POST",
			data: $('#responsives2 form').serialize(),
			url: "../addresourceall/",
			cache: false,
			dataType: "json",
            beforeSend:function(){
                Metronic.blockUI({animate: true});
            },
            complete: function() {
                Metronic.unblockUI();
            },
			success: function(obj)  {
                  if (obj['status'] == "1"){
                      alert('同步成功，同步总数为：'+obj['count']);
                      $('#responsives2').modal('hide');
                      $('#responsives2 form')[0].reset();
                  }else {
                      alert('同步失败，错误为：'+obj['err']);
                   }
				}
				});
				return false;
				});
               $('#responsives2').on('hide.bs.modal', function () {
                  location.reload();
                });
			}
			$(document).ready(function(){
				addResource_all();
			})


$(".fa-edit").bind("click", cmdb_edit);

function cmdb_edit(){
        var unit_id =$(this).parent().parent().find('td').eq(1).attr("unit_id");
        $.ajax({
          type: "GET",
          url: "../cmdb_assets_edit_ajax/?unit_id="+unit_id,
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
            var js_unit_subtitle = obj['unit_subtitle'];
            var js_unit_title = obj['unit_title'];
            var js_unit_ip = obj['unit_ip'];
            var js_unit_vip = obj['unit_vip'];
            var js_unit_ipmi = obj['unit_ipmi'];
            var js_unit_outside_ip = obj['unit_outside_ip'];
            var js_unit_user = obj['unit_user'];
            var js_unit_user_departments = obj['unit_user_departments'];
            var js_unit_status = obj['unit_status'];
            var js_unit_buy_year = obj['unit_buy_year'];
            var js_unit_url = obj['unit_url'];
            var js_unit_type = obj['unit_type'];
            var js_unit_use_type = obj['unit_use_type'];
            var js_unit_model = obj['unit_model'];
            var js_unit_frame_place = obj['unit_frame_place'];
            var js_unit_place = obj['unit_place'];
            var js_unit_system = obj['unit_system'];
            var js_unit_body = obj['unit_body'];
            var js_unit_assets_tag = obj['unit_assets_tag'];
            var js_unit_intro = obj['unit_intro'];
            var js_unit_cpu_model = obj['unit_cpu_model'];
            var js_unit_domain = obj['unit_domain'];
            var js_unit_ip_interfaces = obj['unit_ip_interfaces'];
            var js_unit_kernel = obj['unit_kernel'];
            var js_unit_kernelrelease = obj['unit_kernelrelease'];
            var js_unit_os = obj['unit_os'];
            var js_unit_osrelease = obj['unit_osrelease'];
            var js_unit_num_cpus = obj['unit_num_cpus'];
            var js_unit_osarch = obj['unit_osarch'];
            var js_unit_change_at = obj['unit_change_at'];
            var js_unit_sync_zabbix = obj['unit_sync_zabbix'];
            var js_unit_sync_soc = obj['unit_sync_soc'];
            var js_unit_sync_las = obj['unit_sync_las'];
            $('#unit_id').val(unit_id)
            $('#unit_subtitle').val(js_unit_subtitle)
            $('#unit_title').val(js_unit_title)
            $('#unit_ip').val(js_unit_ip)
            $('#unit_vip').val(js_unit_vip)
            $('#unit_ipmi').val(js_unit_ipmi)
            $('#unit_outside_ip').val(js_unit_outside_ip)
            $('#unit_user').val(js_unit_user)
            $('#unit_user_departments').val(js_unit_user_departments)
            $('#unit_status').val(js_unit_status)
            $('#unit_buy_year').val(js_unit_buy_year)
            $('#unit_url').val(js_unit_url)
            $('#unit_type').val(js_unit_type)
            $('#unit_use_type').val(js_unit_use_type)
            $('#unit_model').val(js_unit_model)
            $('#unit_frame_place').val(js_unit_frame_place)
            $('#unit_place').val(js_unit_place)
            $('#unit_system').val(js_unit_system)
            $('#unit_body').val(js_unit_body)
            $('#unit_assets_tag').val(js_unit_assets_tag)
            $('#unit_cpu_model').val(js_unit_cpu_model)
            $('#unit_domain').val(js_unit_domain)
            $('#unit_ip_interfaces').val(js_unit_ip_interfaces)
            $('#unit_kernel').val(js_unit_kernel)
            $('#unit_kernelrelease').val(js_unit_kernelrelease)
            $('#unit_os').val(js_unit_os)
            $('#unit_osrelease').val(js_unit_osrelease)
            $('#unit_num_cpus').val(js_unit_num_cpus)
            $('#unit_osarch').val(js_unit_osarch)
            $('#unit_intro').val(js_unit_intro)
            $('#unit_change_at').val(js_unit_change_at)
            //zabbix同步
            if (js_unit_sync_zabbix =='1'){
                $('#sync_zabbix').bootstrapSwitch('toggleState');
                $('#sync_zabbix').bootstrapSwitch('state', true);
                $("#sync_zabbixs").val('1')
            } else {
                $('#sync_zabbix').bootstrapSwitch('toggleState');
                $('#sync_zabbix').bootstrapSwitch('state', false);
                $("#sync_zabbixs").val('0')
            }

             $('#sync_zabbix').on('switchChange.bootstrapSwitch', function(e, status) {
                if (status == false){
                $("#sync_zabbixs").val('0');
                }else{
                $("#sync_zabbixs").val('1');
                }
            });
            //堡垒机同步
            if (js_unit_sync_soc =='1'){
                $('#sync_soc').bootstrapSwitch('toggleState');
                $('#sync_soc').bootstrapSwitch('state', true);
                $("#sync_socs").val('1')
            } else {
                $('#sync_soc').bootstrapSwitch('toggleState');
                $('#sync_soc').bootstrapSwitch('state', false);
                $("#sync_socs").val('0')
            }

             $('#sync_soc').on('switchChange.bootstrapSwitch', function(e, status) {
                if (status == false){
                $("#sync_socs").val('0');
                }else{
                $("#sync_socs").val('1');
                }
            });
            //日志同步
            if (js_unit_sync_las =='1'){
                $('#sync_las').bootstrapSwitch('toggleState');
                $('#sync_las').bootstrapSwitch('state', true);
                $("#sync_lass").val('1')
            } else {
                $('#sync_las').bootstrapSwitch('toggleState');
                $('#sync_las').bootstrapSwitch('state', false);
                $("#sync_lass").val('0')
            }

             $('#sync_las').on('switchChange.bootstrapSwitch', function(e, status) {
                if (status == false){
                $("#sync_lass").val('0');
                }else{
                $("#sync_lass").val('1');
                }
                 });
            }
        });
    }

$('#responsives3 form').submit(function(){
    $.ajax({
        type: "POST",
        data: $('#responsives3 form').serialize(),
        url: "../cmdb_assets_edit_ajax/",
        async: true,
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
              alert("错误，错误为"+obj['err'])
              $('#responsives3').modal('hide');
              $('#responsives3 form')[0].reset();
          } else {
              alert("资产修改完成，"+obj['zabbix_status']+"，"+obj['soc_status']+"，"+obj['las_status'])
              $('#responsives3').modal('hide');
              $('#responsives3 form')[0].reset();
          }}
        });
        return false;
    });

