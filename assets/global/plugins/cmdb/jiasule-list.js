	function jiasule_upsert(){
		$(".fa-edit").bind("click", function(event) {
		var host =$(this).parent().parent().find('td').eq(0).attr("host_id");
		var domain =$(this).parent().parent().find('td').eq(1).attr("domain_id");
		$('#jiasule_name').replaceWith('<h3 id="myModalLabel">确认'+host+'.'+domain+'更新操作是否执行</h3>')						
		var ip =$(this).parent().parent().find('td').eq(2).attr("ip_id");
        var id =$(this).parent().parent().find('td').eq(4).attr("id_id");
		var usecdn =$(this).parent().parent().find('td').eq(5).attr("jiasule_id");
		var cdnsatic =$(this).parent().parent().find('td').eq(6).attr("jiasule_id");
		var cdnhtml =$(this).parent().parent().find('td').eq(7).attr("jiasule_id");
		var cdnwaf =$(this).parent().parent().find('td').eq(8).attr("jiasule_id");
		var cdnindex =$(this).parent().parent().find('td').eq(9).attr("jiasule_id");
		var cdndirectory =$(this).parent().parent().find('td').eq(10).attr("jiasule_id");
					
		if (usecdn =='True'){
			$('#jiasule_use_cdn').bootstrapSwitch('toggleState');
			$('#jiasule_use_cdn').bootstrapSwitch('state', true);
			$("#jiasule_use_cdns").val('true')
		} else {			
			$('#jiasule_use_cdn').bootstrapSwitch('toggleState');
			$('#jiasule_use_cdn').bootstrapSwitch('state', false);
			$("#jiasule_use_cdns").val('false')		
		}
		if (cdnsatic =='True'){
			$("#jiasule_cdn_statics").val('true')
			$('#jiasule_cdn_static').bootstrapSwitch('toggleState');
			$('#jiasule_cdn_static').bootstrapSwitch('state', true);
		} else {
			$("#jiasule_cdn_statics").val('false')
			$('#jiasule_cdn_static').bootstrapSwitch('toggleState');
			$('#jiasule_cdn_static').bootstrapSwitch('state', false);	
		}
		if (cdnhtml =='True'){
			$('#jiasule_cdn_html').bootstrapSwitch('toggleState');
			$('#jiasule_cdn_html').bootstrapSwitch('state', true);
			$("#jiasule_cdn_htmls").val('true')
		} else {
			$('#jiasule_cdn_html').bootstrapSwitch('toggleState');
			$('#jiasule_cdn_html').bootstrapSwitch('state', false);
			$("#jiasule_cdn_htmls").val('false')
		}		
		if (cdnwaf =='True'){
			$('#jiasule_cdn_waf').bootstrapSwitch('toggleState');
			$('#jiasule_cdn_waf').bootstrapSwitch('state', true);
			$("#jiasule_cdn_wafs").val('true')
		} else {
			$('#jiasule_cdn_waf').bootstrapSwitch('toggleState');
			$('#jiasule_cdn_waf').bootstrapSwitch('state', false);
			$("#jiasule_cdn_wafs").val('false')
		}		
		if (cdnindex =='True'){
			$('#jiasule_cdn_index').bootstrapSwitch('toggleState');
			$('#jiasule_cdn_index').bootstrapSwitch('state', true);
			$("#jiasule_cdn_indexs").val('true')
		} else {
			$('#jiasule_cdn_index').bootstrapSwitch('toggleState');
			$('#jiasule_cdn_index').bootstrapSwitch('state', false);
			$("#jiasule_cdn_indexs").val('false')
		}	
		if (cdndirectory =='True'){
			$('#jiasule_cdn_directory').bootstrapSwitch('toggleState');
			$('#jiasule_cdn_directory').bootstrapSwitch('state', true);
			$("#jiasule_cdn_directorys").val('true')
		} else {
			$('#jiasule_cdn_directory').bootstrapSwitch('toggleState');
			$('#jiasule_cdn_directory').bootstrapSwitch('state', false);
			$("#jiasule_cdn_directorys").val('false')
		}	

		
		 $('#jiasule_use_cdn').on('switchChange.bootstrapSwitch', function(e, status) {
			if (status == false){
			$("#jiasule_use_cdns").val('false');
			}else{
			$("#jiasule_use_cdns").val('true');		
			}
		});	
		$("#jiasule_cdn_static").on('switchChange.bootstrapSwitch', function(e, status) {		
			if (status == false){
			$("#jiasule_cdn_statics").val('false');
			}else{
			$("#jiasule_cdn_statics").val('true');		
			}
		});			
		$("#jiasule_cdn_html").on('switchChange.bootstrapSwitch', function(e, status) {		
			if (status == false){
			$("#jiasule_cdn_htmls").val('false');
			}else{
			$("#jiasule_cdn_htmls").val('true');		
			}
		});	
		$("#jiasule_cdn_waf").on('switchChange.bootstrapSwitch', function(e, status) {		
			if (status == false){
			$("#jiasule_cdn_wafs").val('false');
			}else{
			$("#jiasule_cdn_wafs").val('true');		
			}
		});	
		$("#jiasule_cdn_index").on('switchChange.bootstrapSwitch', function(e, status) {		
			if (status == false){
			$("#jiasule_cdn_indexs").val('false');
			}else{
			$("#jiasule_cdn_indexs").val('true');		
			}
		});	
		$("#jiasule_cdn_directory").on('switchChange.bootstrapSwitch', function(e, status) {		
			if (status == false){
			$("#jiasule_cdn_directorys").val('false');
			}else{
			$("#jiasule_cdn_directorys").val('true');		
			}
		});		
		
		$('#responsive form').submit(function(){
			var use_cdn =$("#jiasule_use_cdns").val();
			var cdn_static =$("#jiasule_cdn_statics").val();
			var cdn_html =$("#jiasule_cdn_htmls").val();
			var cdn_waf =$("#jiasule_cdn_wafs").val();				
			var cdn_index =$("#jiasule_cdn_indexs").val();
			var cdn_directory =$("#jiasule_cdn_directorys").val();
            var jsonData = {
                "host":host,
                "domain":domain,
                "ip":ip,
                "id":id,
                "use_cdn":use_cdn,
                "cdn_static":cdn_static,
                "cdn_html":cdn_html,
                "cdn_waf":cdn_waf,
                "cdn_index":cdn_index,
                "cdn_directory":cdn_directory
            }
			$.ajax({
				type: "POST",
				data: jsonData,
				url: "../jiasuleupsert/",
				async:true,
				cache: false,
				dataType: "html",
                beforeSend:function(){
                    Metronic.blockUI({animate: true});
                },
                complete: function() {
                    Metronic.unblockUI();
                },
				success: function(html, textStatus) {
					alert(html);
		            $('#responsive').modal('hide');
		            $('#responsive form')[0].reset();
		            window.location.href="../jiasulelist/?domain="+domain+"&host="+host;
					},
					error: function (XMLHttpRequest, textStatus, errorThrown) {
						$('#comment_form form').replaceWith('err.');
					}
					});
					return false;
					});    
					});
				   $('#responsive').on('hide.bs.modal', function () {
					  location.reload();      
							}); 				
				}
				$(document).ready(function(){
					jiasule_upsert();
					})

	 function jiasule_purge_type_hidden(obj){
			if($("#jiasule_purge_types").val()=="url"){
			  document.getElementById("jiasulepurgeurl").style.display ="block";		  
		} else {
			  document.getElementById("jiasulepurgeurl").style.display ="none";
		}
	}						
					
	function purgeType(){
		$(".fa-wrench").bind("click", function(event) {
		var host =$(this).parent().parent().find('td').eq(0).attr("host_id");
		var domain =$(this).parent().parent().find('td').eq(1).attr("domain_id");
		$('#jiasule_purge_name').replaceWith('<h3 id="myModalLabel"> 确认'+host+'.'+domain+'清除缓存操作是否执行 </h3>	')		
		$("#jiasule_purge_type").on('switchChange.bootstrapSwitch', function(e, status) {		
			if (status == false){
			$("#jiasule_purge_types").val('url');
			}else{
			$("#jiasule_purge_types").val('host');		
			}
		});			
		$('#responsivess form').submit(function(){
			var purge_type = $("#jiasule_purge_types").val();
			if (purge_type == "host"){
				var purge_url = "";
			}else{	
				var purge_url = $('#jiasule_purge_url').val();			
			}
            var jsonData = {
                "host":host,
                "domain":domain,
                "purge_type":purge_type,
                "purge_url":purge_url
            }
			$.ajax({
				type: "POST",
				data: jsonData,
				url: "../jiasulepurge/",
				async:true,
				cache: false,
				dataType: "html",
                beforeSend:function(){
                    Metronic.blockUI({animate: true});
                },
                complete: function() {
                    Metronic.unblockUI();
                },
				success: function(html, textStatus) {
					alert(html);
		            $('#responsivess').modal('hide');
		            $('#responsivess form')[0].reset();
					window.location.href="../jiasulelist/?domain="+domain+"&host="+host;
					},
					error: function (XMLHttpRequest, textStatus, errorThrown) {
						$('#comment_form form').replaceWith('err.');
					}
					});
					return false;
					});
					});
					$('#responsivess').on('hide.bs.modal', function () {
					  location.reload();      
					});   					
				}
				$(document).ready(function(){
					purgeType();
					})					
					
				
	function delType(){
		$(".fa-trash-o").bind("click", function(event) {
		var host =$(this).parent().parent().find('td').eq(0).attr("host_id");
		var domain =$(this).parent().parent().find('td').eq(1).attr("domain_id");
		$('#jiasule_del_name').replaceWith('<h3 id="myModalLabel"> 确认'+host+'.'+domain+'删除操作是否执行 </h3>	')
		$('#responsives form').submit(function(){
            var jsonData = {
                "host":host,
                "domain":domain
            }
			$.ajax({
				type: "POST",
				data: jsonData,
				url: "../jiasuledel/",
				async:true,
				cache: false,
				dataType: "html",
                beforeSend:function(){
                    Metronic.blockUI({animate: true});
                },
                complete: function() {
                    Metronic.unblockUI();
                },
				success: function(html, textStatus) {
					alert(html);
		            $('#responsives').modal('hide');
		            $('#responsives form')[0].reset();
					},
					error: function (XMLHttpRequest, textStatus, errorThrown) {
						$('#comment_form form').replaceWith('err.');
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
					delType();
					})

	function add(){
		$('#responsive4 form').submit(function(){
			$.ajax({
				type: "POST",
				data: $('#responsive4 form').serialize(),
				url: "../jiasuleadd/",
				async:true,
				cache: false,
				dataType: "html",
                beforeSend:function(){
                    Metronic.blockUI({animate: true});
                },
                complete: function() {
                    Metronic.unblockUI();
                },
				success: function(html, textStatus) {
					alert(html);
		            $('#responsive4').modal('hide');
		            $('#responsive4 form')[0].reset();
					}
					});
					return false;
					});
					$('#responsive4').on('hide.bs.modal', function () {
					  location.reload();
					});
				}
				$(document).ready(function(){
					add();
					})