function del_application() {
    $(".icon-trash").bind("click", function () {
        var name = $(this).parent().parent().find('td').eq(0).attr("id");
        var id = $(this).parent().parent().find('td').eq(1).attr("id");
        $('#del_name').replaceWith('<h3 id="myModalLabel"> 确认删除的请示件称为： ' + name + '</li></h4></div>')
        var jsonData ={
            'id':id
        };
        $('#responsivess form').submit(function () {
            $.ajax({
                type: "POST",
                data: jsonData,
                url: "../application_del/",
                async: true,
                cache: false,
                dataType: "json",
                beforeSend:function(){
                    Metronic.blockUI({animate: true});
                },
                complete: function() {
                    Metronic.unblockUI();
                },
                success: function (obj) {
                    if (obj['status'] =="1") {
                        $('#responsivess').modal('hide');
                        $('#responsivess form')[0].reset();
                        toastr.success('删除成功')
                    }else{
                        toastr.error('删除失败')
                }}
            });
            return false;
        });
    });
    $('#responsivess').on('hide.bs.modal', function () {
        location.reload();
    });
    }
    $(document).ready(function(){
        del_application();
        })

function applicationuploadPreview(){
    $(".fa-search").bind("click", function() {
        var id = $(this).parent().parent().find('td').eq(1).attr("id");
        $.ajax({
          type: "GET",
          url: "../application_upload_preview/?id="+id,
          async:true,
          cache: false,
          dataType: "html",
            beforeSend:function(){
                Metronic.blockUI({animate: true});
            },
            complete: function() {
                Metronic.unblockUI();
            },
          success: function(html){
                $("#preview_list").html(html)
            }
            })
            })
    }
  $(document).ready(function(){
	applicationuploadPreview();
	})