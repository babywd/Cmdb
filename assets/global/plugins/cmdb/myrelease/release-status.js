function releaststatusinfo(){
$(".fa-eye").bind("click", function() {
    var release_name =$(this).parent().parent().find('td').eq(1).attr("svn_name");
    var release_host =$(this).parent().parent().find('td').eq(2).attr("svn_host");
    $.ajax({
      type: "get",
      url: "../release_status_info_ajax/?release_name="+release_name+"&release_host="+release_host,
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
        var js_get_repo_info = obj['get_repo_info']
        var js_upgrade_available_info = obj['upgrade_available_info']
        var js_install_info = obj['install_info'];
        $('#svn_info_1').replaceWith(js_get_repo_info)
        $('#svn_info_2').replaceWith(js_upgrade_available_info)
        $('#svn_info_3').replaceWith(js_install_info)
        }
        });
    $('#responsives form').submit(function(){
        return false;
        });
        });
    $('#responsives').on('hide.bs.modal', function () {
      location.reload();
            });

      }
    $(document).ready(function(){
    releaststatusinfo();
    });

