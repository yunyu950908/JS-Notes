define(["jquery"], function ($) {

    return Carousel = (function () {

        function Carousel(curCarousel) {
            this.ct = curCarousel;
            this.init();
        }

        Carousel.prototype = {
            init: function () {
                this.carousel = $(this.ct).find(".carousel")[0];
                this.allImg = this.getChildren(this.carousel, "li");
                this.bullets = $(this.ct).find(".bullet > li");
                this.imgLen = this.allImg.length;
                this.imgIndex = 0;
                this.isAnimate = false;
                //绑定执行
                this.bind();
            },

            getChildren: function (parent, ele) {
                let children = parent.childNodes,
                    lis = [];
                children.forEach(function (child) {
                    if (child.nodeType == 1 && child.nodeName.toLowerCase() == ele) {
                        lis.push(child)
                    }
                })
                return lis;
            },

            clone: function () {
                let firstImg = this.allImg[0],
                    lastImg = this.allImg[this.allImg.length - 1];
                let cFirstImg = firstImg.cloneNode(true),
                    cLastImg = lastImg.cloneNode(true);
                this.carousel.appendChild(cFirstImg);
                this.carousel.insertBefore(cLastImg, firstImg);
            },

            playPre: function (num) {
                let _this = this;
                if (this.isAnimate == true) return;
                this.isAnimate = true;
                $(this.carousel).animate({
                    left: "+=" + _this.carousel.clientWidth * num

                }, function () {
                    _this.imgIndex -= num;
                    if (_this.imgIndex == -1) {
                        _this.carousel.style.left = -_this.imgLen * _this.carousel.clientWidth + "px";
                        _this.imgIndex = _this.imgLen - 1;
                    }
                    console.log(_this.imgIndex)
                    _this.setBullet();
                    _this.isAnimate = false;
                })
            },


            playNext: function (num) {
                let _this = this;
                if (this.isAnimate == true) return;
                this.isAnimate = true;
                $(this.carousel).animate({
                    left: "-=" + _this.carousel.clientWidth * num
                }, function () {
                    _this.imgIndex += num;
                    if (_this.imgIndex == 4) {
                        _this.carousel.style.left = -_this.carousel.clientWidth + "px";
                        _this.imgIndex = 0;
                    }
                    console.log(_this.imgIndex)
                    _this.setBullet();
                    _this.isAnimate = false;
                })
            },


            setBullet: function () {
                this.bullets.each(function (i, bullet) {
                    bullet.classList.remove("active");
                })
                this.bullets[this.imgIndex].classList.add("active");
            },

            playBullet: function () {
                let _this = this;
                this.bullets.each(function (i, j) {
                    j.addEventListener("click", function () {
                        if (i > _this.imgIndex) {
                            _this.playNext(i - _this.imgIndex);
                        } else {
                            _this.playPre(_this.imgIndex - i);
                        }
                        _this.setBullet();
                    })
                })
            },


            bind: function () {
                this.clone();
                let _this = this;
                let preBtn = $(this.ct).find(".pre")[0],
                    nextBtn = $(this.ct).find(".next")[0];
                preBtn.addEventListener("click", function () {
                    _this.playPre(1)
                })
                nextBtn.addEventListener("click", function () {
                    _this.playNext(1)
                })
                this.playBullet()
            }

        }
        return {
            init: function (node) {
                let allCarousel = document.querySelectorAll(node);
                allCarousel.forEach(function (e) {
                    new Carousel(e)
                })
            }
        }
    })()
})