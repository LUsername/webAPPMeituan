(function() {
    // 顶部模板字符串
    var itemTopTmpl = '<div class="choose-content ">' +
        '<div class="content-top">' +
        '<div class="clear-car">清空购物车</div>' +
        '</div>' +
        '</div>';
    // 底部模板字符串
    var itemBottomTmpl = '<div class="bottom-content">' +
        '<div class="shop-icon">' +
        '<div class="dot-num hide"></div>' +
        '</div>' +
        '<div class="price-content">' +
        '<p class="total-price">￥<span class="total-price-span">0</span></p>' +
        '<p class="other-price">另需配送&nbsp;￥<span class="shipping-fee">0</span></p>' +
        '</div>' +
        '<div class="submit-btn">去结算</div>' +
        '</div>';
    var $strTop = $(itemTopTmpl);
    var $strBottom = $(itemBottomTmpl);

    function changeTotalPrice(str) {
        $strBottom.find('.total-price-span').text(str);
    }

    function changeShippingPrice(str) {
        $strBottom.find('.shipping-fee').text(str);
    }

    function renderItems() {
        // 
        $('.choose-content').removeClass("hide");
        // 
        $strTop.find('.choose-item').remove();
        var list = window.food_spu_tags || [];
        var tmpl = '<div class="choose-item">' +
            '<div class="item-name">$name</div>' +
            '<div class="item-price">￥<span class="total">$price</span></div>' +
            '<div class="select-content">' +
            '<div class="minus"></div>' +
            '<div class="count">$chooseCount</div>' +
            '<div class="plus"></div>' +
            '</div>' +
            '</div>';
        var totalPrice = 0;
        list.forEach(function(item) {
            item.spus.forEach(function(_item) {
                // 如果有菜品数量大于0就开始渲染这条数据
                if (_item.chooseCount > 0) {
                    // 计算每个菜品的总价 就是 单价*数量
                    var price = _item.min_price * _item.chooseCount;
                    var row = tmpl.replace('$name', _item.name)
                        .replace('$price', price)
                        .replace('$chooseCount', _item.chooseCount);
                    // 计算整个总价
                    totalPrice += price;
                    var $row = $(row);
                    $row.data('itemData', _item);
                    $strTop.append($row);
                }

            })
        });
    }

    function init() {
        $('.shop-bar').append($strTop);
        $('.shop-bar').append($strBottom);
    }
    init();
    window.ShopBar = {
        renderItems: renderItems,
        changeShippingPrice: changeShippingPrice,
        changeTotalPrice: changeTotalPrice
    }
})();