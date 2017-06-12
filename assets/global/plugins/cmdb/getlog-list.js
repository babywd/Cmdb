

function getLog(){
  $('#submit').bind("click",function(){
      var log_type = $('#log_type').val()
      var log_search_key = $('#log_search_key').val()
      var getlog_select =$('#getlog_select').val()
      var log_line = $('#log_line').val()
      var log_host = $('#log_host').val()
      console.log(log_type,log_search_key,getlog_select,log_line,log_host)
      var jsonData={
          'log_host':log_host,
          'log_type':log_type,
          'log_search_key':log_search_key,
          'getlog_select':getlog_select,
          'log_line':log_line
      }
        $.ajax({
            type: "POST",
            data: jsonData,
            url: "../getlog/",
            async:true,
            cache: false,
            dataType: "json",
            beforeSend:function(){
                Metronic.blockUI({animate: true});
            },
            complete: function() {
                Metronic.unblockUI();
            },
            success: function(data) {
                $("#logs").html(data['getlog_name']);
            }
        });
        return false;
        });
		  }
  $(document).ready(function(){
	getLog();
	})

function downloadLog(){
  $("#download").bind("click", function() {
          var getlog_select = $('#getlog_select').val()
          var log_host = $('#log_host').val()
          $('#getlogselect').replaceWith('<label class="control-label col-md-3"> 日志名 <span class="required"> * </span> </label><div class="col-md-5"><input class="form-control" type="text" name="getlog_select" value="' + getlog_select + '" readonly></div>')
          $('#loghost').replaceWith('<label class="control-label col-md-3"> 机器名 <span class="required"> * </span> </label><div class="col-md-5"><input class="form-control" type="text" name="log_host" value="' + log_host + '" readonly></div>')
      $('#responsives form').submit(function () {
          $.ajax({
              type: "POST",
              data: $('#responsives form').serialize(),
              url: "../downloadlog/",
              async: true,
              cache: false,
              dataType: "json",
              beforeSend: function () {
                  Metronic.blockUI({animate: true});
              },
              complete: function () {
                  Metronic.unblockUI();
              },
              success: function (obj) {
                  if (obj['status'] == "1") {
                      $('#responsives').modal('hide');
                      $('#responsives form')[0].reset();
                      window.location.href = "../assets/salt/minions/" + log_host + "/files/home/wwwlogs/" + getlog_select;
                  } else if (obj['status'] == "2"){
                      alert("从服务器下载日志失败");
                  } else {
                      alert("下载失败");
                  }
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
	downloadLog();
	})
