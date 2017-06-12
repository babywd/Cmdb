function accept_key(){
	$(".fa-check").bind("click", function() {
		var key =$(this).parent().parent().find('td').eq(0).attr("id");
		$('#accept_key').replaceWith('<h3 id="myModalLabel"> 确认认证授权KEY"'+key+'"操作是否执行 </h3>')
        var jsonData ={
            'key':key
        };
		$('#responsives form').submit(function(){
			$.ajax({
				type: "POST",
				data: jsonData,
                url: "../salt_key_accept/",
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
                          alert('认证授权KEY成功');
                          $('#responsives').modal('hide');
                          $('#responsives form')[0].reset();
                      }else{
                          alert('认证授权KEY失败');
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
					accept_key();
					})


function unaccept_key(){
	$(".fa-repeat").bind("click", function() {
		var key =$(this).parent().parent().find('td').eq(0).attr("id");
		$('#unaccept_key').replaceWith('<h3 id="myModalLabel"> 确认拒绝授权KEY"'+key+'"操作是否执行 </h3>')
        var jsonData ={
            'key':key
        };
		$('#responsives2 form').submit(function(){
			$.ajax({
				type: "POST",
				data: jsonData,
                url: "../salt_key_unaccept/",
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
                          alert('拒绝授权KEY成功');
                          $('#responsives2').modal('hide');
                          $('#responsives2 form')[0].reset();
                      }else{
                          alert('拒绝授权KEY失败');
                      }

                  }
					});
					return false;
					});
					});
			   $('#responsives2').on('hide.bs.modal', function () {
				  location.reload();
						});
				}
				$(document).ready(function(){
					unaccept_key();
					})


function del_key(){
	$(".fa-trash-o").bind("click", function() {
		var key =$(this).parent().parent().find('td').eq(0).attr("id");
		$('#del_key').replaceWith('<h3 id="myModalLabel"> 确认删除授权KEY"'+key+'"操作是否执行 </h3>')
        var jsonData ={
            'key':key
        };
		$('#responsives3 form').submit(function(){
			$.ajax({
				type: "POST",
				data: jsonData,
                url: "../salt_key_del/",
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
                          alert('删除授权KEY成功');
                          $('#responsives3').modal('hide');
                          $('#responsives3 form')[0].reset();
                      }else{
                          alert('删除授权KEY失败');
                      }

                  }
					});
					return false;
					});
					});
			   $('#responsives3').on('hide.bs.modal', function () {
				  location.reload();
						});
				}
				$(document).ready(function(){
					del_key();
					})
