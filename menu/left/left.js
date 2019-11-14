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
            var list = data.data.food_spu_tags || [];
            initContentList(list);
        })
    }
    /**
     * 渲染item内容
     * @param obj
     */
    function getItemContent(data) {
        if (data.icon) {
            return '<img class="item-icon" src=' + data.icon + ' />' + data.name;
        } else {
            return data.name;
        }
    }
    /**
     * 渲染列表
     * @param array
     */
    function initContentList(list) {
        list.forEach(function(item, index) {
            var str = itemTmpl.replace('$getItemContent', getItemContent(item));
            var $target = $(str);
            $target.data('itemData', item);
            $('.left-bar-inner').append($target);
        });
    }

    function init() {
        getList();
    }
    init();
})();