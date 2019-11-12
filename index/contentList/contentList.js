(function() {
    var itemTmpl = '<div class="r-item-content">' +
        '<img class="item-img" src=$pic_url />' +
        '$brand' +
        '<div class="item-info-content">' +
        '<p class="item-title">$name</p>' +
        '<div class="item-desc clearfix">' +
        '<div class="item-score">$wm_poi_score</div>' +
        '<div class="item-count">月售$monthNum</div>' +
        '<div class="item-distance">&nbsp;$distance</div>' +
        '<div class="item-time">$mt_delivery_time&nbsp;|</div>' +
        '</div>' +
        '<div class="item-price">' +
        '<div class="item-pre-price">$min_price_tip</div>' +
        '</div>' +
        '<div class="item-others">' +
        '$others' +
        '</div>' +
        '</div>' +
        '</div>';
    /**
     * 获取商家列表数据
     * param
     */
    function getList() {
        $.get('../json/homelist.json', function(data) {
            console.log(data);
            var list = data.data.poilist || [];
            initContentList(list);
        })
    }
    /**
     * 渲染是否新到热门品牌标签
     * param {} data
     */
    function getBrand(data) {
        if (data.brand_type) {
            return '<div class="brand brand-pin">品牌</div>';
        } else {
            return '<div class="brand brand-xin">新到</div>';
        }
    }
    /**
     * 渲染月售
     * param {} data
     */
    function getMonthNum(data) {
        var num = data.month_sale_num;
        //大于999，采取999+
        if (num > 999) {
            return "999+";
        }
        return num;
    }
    /**
     * 渲染商家活动
     * param {} data
     */
    function getOthers(data) {
        var array = data.discounts2;
        var str = "";
        array.forEach(function(item, index) {
            //内部的商家活动模板字符串
            var _str = '<div class="other-info">' +
                '<img src=$icon_url class="other-tag" />' +
                '<p class="other-content">$info</p>' +
                '</div>';
            //模板字符串替换数据
            _str = _str.replace('$icon_url', item.icon_url)
                .replace('$info', item.info);
            //字符串拼接
            str += _str;
        });
        return str;
    }
    /**
     * 渲染商家列表数据
     * param []
     */
    function initContentList(list) {
        list.forEach(function(item, index) {
            var str = itemTmpl
                .replace("$pic_url", item.pic_url)
                .replace("$name", item.name)
                .replace("$distance", item.distance)
                .replace("$min_price_tip", item.min_price_tip)
                .replace("$mt_delivery_time", item.mt_delivery_time)
                .replace("$monthNum", getMonthNum(item))
                .replace("$brand", getBrand(item))
                .replace("$others", getOthers(item));
            $('.list-wrap').append($(str));
        });
    }

    function init() {
        getList();
    }
    init();
})();