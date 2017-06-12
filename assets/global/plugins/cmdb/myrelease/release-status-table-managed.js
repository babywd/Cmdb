var TableManaged = function () {

    var initTable2 = function () {

        var table = $('#svn_status');




        table.dataTable({

            // Internationalisation. For more info refer to http://datatables.net/manual/i18n
            "language": {
                "aria": {
                    "sortAscending": ": activate to sort column ascending",
                    "sortDescending": ": activate to sort column descending"
                },
                "emptyTable": "未有相关数据",
                "info": "当前显示 _START_ 到 _END_ 条，共 _TOTAL_ 条记录。",
                "infoEmpty": "当前显示0到0条，共0条记录",
                "infoFiltered": "(数据库中共为 _MAX_ 条记录)",
                "lengthMenu": "显示 _MENU_ 记录",
                "search": "模糊查询:",
                "zeroRecords": "对不起，查询不到任何相关数据",
               "oPaginate": {
                   "sFirst": "首页",
                   "sPrevious": " 上一页 ",
                   "sNext": " 下一页 ",
                   "sLast": " 尾页 "
               }
            },

            // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
            // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js). 
            // So when dropdowns used the scrollable div should be removed. 
            //"dom": "<'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",

            "bStateSave": true, // save datatable state(pagination, sort, etc) in cookie.

            "lengthMenu": [
                [5, 15, 20, -1],
                [5, 15, 20, "All"] // change per page values here
            ],
            // set the initial value
            "pageLength": 15,
            "language": {
                "emptyTable": "未有相关数据",
                "info": "当前显示 _START_ 到 _END_ 条，共 _TOTAL_ 条记录。",
                "infoEmpty": "当前显示0到0条，共0条记录",
                "infoFiltered": "(数据库中共为 _MAX_ 条记录)",
                "lengthMenu": "显示 _MENU_ 记录",
                "search": "模糊查询:",
                "zeroRecords": "对不起，查询不到任何相关数据",
                "lengthMenu": " 显示 _MENU_ 记录",
                "paging": {
                    "previous": "上一页",
                    "next": "下一页"
                }
            },
            "columnDefs": [{  // set default column settings
                'orderable': false,
                'targets': [0]
            }, {
                "searchable": false,
                "targets": [0]
            }],
            "order": [
                [1, "asc"]
            ] // set first column as a default sort by asc
        });

        var tableWrapper = jQuery('#svn_status_wrapper');

        var host_list = [];
        var release_build_job = '';

        //全选
        table.find('.group-checkable').change(function () {
            var set = jQuery(this).attr("data-set");
            var checked = jQuery(this).is(":checked");
            var svn_names = $(this).parent().parent().parent().parent().parent().parent().find('td').eq(1).attr("svn_name");
            host_list.length = 0;
            jQuery(set).each(function () {
                if (checked) {
                    $(this).attr("checked", true);
                    var svn_hosts = $(this).parent().parent().parent().parent().find('td').eq(2).attr("svn_host");
                    host_list.push(svn_hosts);
                    release_build_job = svn_names
                    document.getElementById("group1").style.display="block";
                } else {
                    $(this).attr("checked", false);
                    host_list.length = 0;
                    release_build_job = '';
                    document.getElementById("group1").style.display="none";
                }
            });
            jQuery.uniform.update(set);

        });


        //单选
        table.on('change', 'tbody tr .checkboxes', function () {
            var svn_hosts = $(this).parent().parent().parent().parent().find('td').eq(2).attr("svn_host");
            var svn_names = $(this).parent().parent().parent().parent().find('td').eq(1).attr("svn_name");
            var checked = jQuery(this).is(":checked");
            if (checked) {
                $(this).attr("checked", true);
                host_list.push(svn_hosts);
                release_build_job = svn_names
                document.getElementById("group1").style.display="block";
            } else {
                $(this).attr("checked", false);
                host_list.pop(svn_hosts);
                release_build_job = svn_names
                if (host_list.length > 0) {
                    document.getElementById("group1").style.display="block";
                }else {
                    document.getElementById("group1").style.display="none";
                }

            }
        });

        tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown

        //选择发布(仅YUM)
        function release_checkbox_build_yum(){
            $("#checkbox_build_yum").bind("click", function() {
                var sOut = '';
                //遍历后替换逗号为换行符
                $.each(host_list,function(n,v){
                    sOut += '<div class="form-group"><label class="control-label col-md-3">发布主机</label><div class="col-md-5"><input type="text" class="form-control" readonly value='+v+'></div></div>';
                })
                $('#svn_name').replaceWith('<h3 id="myModalLabel"> 确认项目'+release_build_job+'操作(仅YUM)是否执行 </h3>')
                $('#svn_hostlists').replaceWith(sOut)
                var jsonData={
                  'release_build_host':host_list.join(','),
                  'release_build_job':release_build_job
                }
                $('#responsive2 form').submit(function(){
                    $.ajax({
                      type: "POST",
                      data: jsonData,
                      url: "../release_checkbox_build_ajax/",
                      async:true,
                      cache: false,
                      dataType: "json",
                        beforeSend:function(){
                            Metronic.blockUI({animate: true});
                        },
                        complete: function() {
                            Metronic.unblockUI();
                        },
                        success: function(obj){
                          if (obj['status'] == "1"){
                              $('#responsive2').modal('hide');
                              $('#responsive2 form')[0].reset();
                              alert ("发布已经入队列");
                          } else if (obj['status'] == "2") {
                              $('#responsive2').modal('hide');
                              $('#responsive2 form')[0].reset();
                              alert ("YUM安装失败或者没有最新的YUM包");
                          } else {
                              alert ('失败,错误为:'+obj['err']);
                          }}
                        });
                        return false;
                        });
                    });

            $('#responsive2').on('hide.bs.modal', function () {
                location.reload();
                });
                  }
            $(document).ready(function(){
                release_checkbox_build_yum();
            })

    }



    return {

        //main function to initiate the module
        init: function () {
            if (!jQuery().dataTable) {
                return;
            }

            initTable2();
        }

    };

}();