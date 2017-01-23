var
_doc     = document,
_win     = window,
_btnNext = _doc.getElementById('btnNext');


var
init = function(){
    if (_btnNext){
        _btnNext.addEventListener('click', modal.open);
    }
},
resize = function(){

};




_doc.addEventListener('DOMContentLoaded', init);
_win.addEventListener('resize', resize);