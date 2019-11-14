(function() {
    // 左侧类目item模板字符串
    var itemTmpl = '<div class="left-item">' +
        '<div class="item-text">$getItemContent</div>' +
        '</div>';
    /**
     * 请求数据
     * @param
     */
    function getList() {
        $.get('../json/food.json', function(data) {
            console.log(data);
        })
    }

    function init() {
        getList();
    }
    init();
})();