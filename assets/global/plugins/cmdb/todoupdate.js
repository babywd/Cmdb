   function releasebuild(){
    $(".fa-play").bind("click", function() {
      var job = $(this).parent().parent().attr("id");
      $('#svn_name').replaceWith('<h3 id="myModalLabel"> 确认构建项目'+job+'操作是否执行 </h3>')
      $('#responsive form').submit(function(){
      var jsonData={
          'job':job
      }
        $.ajax({
          type: "POST",
          data: jsonData,
          url: "../release_build_ajax/",
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
            window.location.href="../release_status/?id="+job;
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
              $('#comment_form form').replaceWith('err.');
            }
            });
            return false;
            $(".icon-play").unbind("click",ids);
            });
            });

   $('#responsive').on('hide.bs.modal', function () {
      location.reload();
   			});
          }
	  $(document).ready(function(){
		releasebuild();
		});
            //
            //$("#svncreate").bind("click", function(event){
            //  $(this).button('loading');
            //  });
            //$(".svn_create").bind("submit", function(event){
            //$("#svncreate").attr("disabled","disabled");
            //  });
            //
            //$("#svnsubmit").bind("click", function(event){
            //$(this).button('loading');
            //   });
            //$(".svnsubmit").bind("submit", function(event){
            //$("#svnsubmit").attr("disabled","disabled");
            //   });