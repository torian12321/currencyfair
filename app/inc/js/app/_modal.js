var
modal = (function(_doc){
    var
    modal    = _doc.querySelector('.modal'),
    btnClose = _doc.querySelector('#btnClose');

    var
    _open = function(){
        modal.classList.add('active');
    },
    _close = function(){
        modal.classList.remove('active');
        // TODO: clean the form values?
    };

    if (btnClose){
        btnClose.addEventListener('click', _close);
    }

    return {
        open : _open,
        close: _close
    };
})(document);