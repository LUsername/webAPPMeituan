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

    function init() {
        $('.shop-bar').append($strTop);
        $('.shop-bar').append($strBottom);
    }
    init();
})();