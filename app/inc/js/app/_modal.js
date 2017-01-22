var
modal = (function(_doc){
    var
    modal    = _doc.querySelector('.modal'),
    modal_bg = _doc.querySelector('.modal-bg');

    var
    _open = function(){
        modal.classList.add('active');
    },
    _close = function(){
        modal.classList.remove('active');
        // TODO: clean the form values?
    };

    if (modal_bg){
        modal_bg.addEventListener('click', _close);
    }

    return {
        open : _open,
        close: _close
    };
})(document);