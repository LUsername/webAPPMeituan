(function() {
    //订单卡片模板
    var itemTmpl = '<div class="order-item">' +
        '<div class="order-item-inner">' +
        '<img class="item-img" src="$poi_pic"/>' +
        '<div class="item-right">' +
        '<div class="item-top">' +
        '<p class="order-name one-line">$poi_name</p>' +
        '<div class="arrow"></div>' +
        '<div class="order-state">$status_description</div>' +
        '</div>' +
        '<div class="item-bottom">$getProduce</div>' +
        '</div>' +
        '</div>' +
        '$getComment' +
        '</div>';
    /**
     * 渲染列表
     * @param []
     */
    function initContentList(list) {
        list.forEach(function(item, index) {
            var str = itemTmpl.replace('$poi_pic', item.poi_pic)
                .replace('$poi_name', item.poi_name)
                .replace('$status_description', item.status_description);
            $('.order-list').append($(str));
        });

    }
    /**
     * 请求数据
     * @param
     */
    function getList() {
        $.get('../json/orders.json', function(data) {
            console.log(data);
            var list = data.data.digestlist || [];
            initContentList(list);
        })
    }

    function init() {
        getList();
    }
    init();
})();