(function() {
    // 得分模板字符串
    var itemTmpl = '<div class="star-score">$starstr</div>';

    function _getStars() {
        var _score = this.score.toString();
        var scoreArray = _score.split('.');
        // 满星个数
        var fullStar = parseInt(scoreArray[0]);
        // 半星个数
        var halfStar = parseInt(scoreArray[1]) >= 5 ? 1 : 0;
        // 0星
        var nullStar = 5 - fullStar - halfStar;
        var starStr = "";
        for (var i = 0; i < fullStar; i++) {
            starStr += '<div class="star fullstar"></div>'
        }
        for (var j = 0; j < halfStar; j++) {
            starStr += '<div class="star halfStar"></div>'
        }
        for (var k = 0; k < nullStar; k++) {
            starStr += '<div class="star nullStar"></div>'
        }
        return itemTmpl.replace('$starstr', starStr);
    }
    window.StarScore = function(score) {
        this.score = score || '';
        this.getStars = _getStars;
    }
})()