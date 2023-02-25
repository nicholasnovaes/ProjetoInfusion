function Carousel(config){
    this.container = (typeof config.container === 'string') ? document.querySelector(config.container) : config.container

    this.itens = (typeof config.itens === 'string') ? this.container.querySelectorAll(this.config) : config.itens

    this.btnPrev = (typeof config.btnPrev === 'string') ? this.container.querySelector(config.btnPrev) : config.btnPrev

    this.btnNext = (typeof config.btnNext === 'string') ? this.container.querySelector(config.btnNext) : config.btnNext

    var _this = this;
    var currentSlide = 0;
    

    function init(){
        var _show = _this.container.querySelectorAll('show');

        Array.prototype.forEach.call(_show, function(sh){
            sh.classList.remove('show')
        })
        _this.itens[0].classList.add('show')
        _this.btnNext.removeAttribute('style')
        _this.btnPrev.removeAttribute('style')
        
        addListeners();
    }

    function addListeners(){
        _this.btnPrev.addEventListener('click',showPrevSlide)
        _this.btnNext.addEventListener('click',showNextSlide)
    }

    function showPrevSlide(){
        currentSlide++;
        showNextSlide();
    }

    function showNextSlide(){
        currentSlide--;
        showNextSlide();
    }

    function showSlide(){
        var qtd = _this.itens.length;
        var slide = currentSlide % qtd;
    }
}