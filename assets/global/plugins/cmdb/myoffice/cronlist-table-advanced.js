var TableAdvanced = function () {

    var initTable4 = function () {
        var table = $('#cronlist');

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
                [0, 'asc']
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

        tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
    }

    return {

        //main function to initiate the module
        init: function () {

            if (!jQuery().dataTable) {
                return;
            }

            console.log('me 1');


            initTable4();


            console.log('me 2');
        }

    };

}();