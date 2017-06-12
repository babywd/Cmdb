
	 function chinacache_purge_type_hidden(obj){
         if (obj.value=="dirs"){
			  document.getElementById("chinacachepurgedir").style.display ="block";
              document.getElementById("chinacachepurgeurl").style.display ="none";
		        }
         if (obj.value=="urls"){
              document.getElementById("chinacachepurgeurl").style.display ="block";
              document.getElementById("chinacachepurgedir").style.display ="none";
		        }
	    }
					
	function purgeType(){
		$(".fa-wrench").bind("click", function(event) {
		var host =$(this).parent().parent().find('td').eq(1).attr("id");
		var domain =$(this).parent().parent().find('td').eq(2).attr("id");
		$('#chinacache_purge_name').replaceWith('<h3 id="myModalLabel"> 确认'+host+'.'+domain+'推送操作是否执行 </h3>	')
		$('#responsivess form').submit(function(){
			var purge_type = $("#chinacache_purge_types").val();
            var purge_dir = $("#chinacache_purge_dir").val();
            var purge_url = $("#chinacache_purge_url").val();
            var jsonData = {
                "host":host,
                "domain":domain,
                "types":purge_type,
                "urls":purge_url,
                "dirs":purge_dir
            }
			$.ajax({
				type: "POST",
				data: jsonData,
				url: "../chinacacherefresh/",
				async:true,
				cache: false,
				dataType: "json",
				success: function(obj) {
//                    alert("查询rid:"+obj['r_id']);
		            $('#responsivess').modal('hide');
		            $('#responsivess form')[0].reset();
                    window.location.href="../chinacacherefreshreslut/?rid="+obj['r_id'];
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
					
