$(document).ready(function($) {
    initialData();
    document.querySelector('#ToolTables_allTable_0').addEventListener('click', function(e) {
        e.preventDefault();
        console.log('filter');
    })
});

function initialData() {
    $('#allTable').DataTable({
        dom: "<'row'<'col-sm-5'l><'col-sm-7'Tf>r>t<'row'<'col-xs-6'i><'col-xs-6'p>>",
        ajax: "../json/tableData.json",
        columns: [{
                title: "姓名"
            }, {
                title: "代理商"
            }, {
                title: "上级"
            }, {
                title: "拜访时间"
            }, {
                title: "产品"
            }
            // , {     title: "医生" }, {     title: "医生级别" }, {     title: "所属医院" }, {     title: "科室" }, {     title: "文献名" }, {     title: "时长" }, {     title: "点评时间" }
        ]
    });
    $('#dailyTable').DataTable({
        dom: "",
        data: [
            ["12312", "412", "433", "1233", "44"]
        ],
        columns: [{
            title: "拜访数"
        }, {
            title: "拜访医生数"
        }, {
            title: "新增医生数"
        }, {
            title: "医生阅读文献"
        }, {
            title: "医生点评文献"
        }]
    });
}
