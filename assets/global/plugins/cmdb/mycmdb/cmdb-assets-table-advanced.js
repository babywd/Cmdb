var TableAdvanced = function () {

    var initTable4 = function () {
        var table = $('#cmdb_list');

        /*
         * Insert a 'details' column to the table
         */
        var nCloneTh = document.createElement('th');
        nCloneTh.className = "table-checkbox";

        var nCloneTd = document.createElement('td');
        nCloneTd.innerHTML = '<span class="row-details row-details-close"></span>';

        table.find('thead tr').each(function () {
            this.insertBefore(nCloneTh, this.childNodes[0]);
        });

        table.find('tbody tr').each(function () {
            this.insertBefore(nCloneTd.cloneNode(true), this.childNodes[0]);
        });

        var oTable = table.dataTable({

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

            "columnDefs": [{
                "orderable": false,
                "targets": [0]
            }],
            "order": [
                [4, 'asc']
            ],
            "lengthMenu": [
                [5, 15, 20, -1],
                [5, 15, 20, "All"] // change per page values here
            ],
            // set the initial value
            "pageLength": 10
        });

        var tableWrapper = $('#sample_4_wrapper'); // datatable creates the table wrapper by adding with id {your_table_jd}_wrapper
        var tableColumnToggler = $('#sample_4_column_toggler');

        /* modify datatable control inputs */
        tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
        table.on('click', ' tbody td .row-details', function () {
            var nTr = $(this).parents('tr')[0];
            if (oTable.fnIsOpen(nTr)) {
                $(this).addClass("row-details-close").removeClass("row-details-open");
                oTable.fnClose(nTr);
            } else {
//                var id = $(this).parent().parent().find('td').eq(1).attr("unit_id");
                $(this).addClass("row-details-open").removeClass("row-details-close");;
                fnFormatDetails(nTr, $(this).attr("data_id"));
            }
        });
          function fnFormatDetails(nTr, pdataId) {
                var aData = oTable.fnGetData(nTr);
               //根据配置Id 异步查询数据
               // $.ajax({
               //        type:'get',
               //        url:"../cmdblistajax/?id="+id,
               //        data:{"pdataId":pdataId},
               //        dataType:"json",
               //        async:true,
               //        beforeSend:function(xhr){//信息加载中
               //            oTable.fnOpen( nTr, '<span id="configure_chart_loading"><img src="../assets/global/img/input-spinner.gif"/> 详细信息加载中...</span>', 'details' );
               //        },
               //        success:function (obj){
               //                var sOut = '<table>';
               //                     sOut += '<tr><td>设备型号:</td><td>' + aData[13] + '</td></tr>';
               //                     sOut += '<tr><td>设备类型:</td><td>' + aData[14] + '</td></tr>';
               //                     sOut += '<tr><td>设备OS:</td><td>' + aData[15] + '</td></tr>';
               //                     sOut += '<tr><td>设备OS版本:</td><td>' + aData[16] + '</td></tr>';
               //                     sOut += '<tr><td>设备CPU:</td><td>' + aData[17] + '</td></tr>';
               //                     sOut += '<tr><td>设备CPU个数:</td><td>' + aData[18] + '</td></tr>';
               //                for(var id in obj){
               //                     sOut += '<tr><td>'+id+'</td><td>' + obj[id] + '</td></tr>';
               //                }
               //                sOut+='</table>';
               //                oTable.fnOpen( nTr,sOut, 'details' );
               //
               //        },
               //        error: function(){//请求出错处理
               //            oTable.fnOpen( nTr,'加载数据超时', 'details' );
               //        }
               //    });
               var  sOut = '<table class="table table-striped table-bordered table-hover">';
                    sOut += '<tr><td>设备型号:</td><td>' + aData[13] + '</td><td>设备类型:</td><td>' + aData[14] + '</td><td>设备OS:</td><td>' + aData[15] + '</td></tr>';
                    sOut += '<tr><td>设备OS版本:</td><td>' + aData[16] + '</td><td>设备CPU个数:' + aData[17] + '</td></tr>';
                    sOut+='</table>';
              oTable.fnOpen( nTr,sOut, 'details' );

           }

        /* handle show/hide columns*/
        $('input[type="checkbox"]', tableColumnToggler).change(function () {
            /* Get the DataTables object again - this is not a recreation, just a get of the object */
            var iCol = parseInt($(this).attr("data-column"));
            var bVis = oTable.fnSettings().aoColumns[iCol].bVisible;
            oTable.fnSetColumnVis(iCol, (bVis ? false : true));
        });
    }

    return {

        //main function to initiate the module
        init: function () {

            if (!jQuery().dataTable) {
                return;
            }
            initTable4();
        }

    };

}

();