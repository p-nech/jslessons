    set nocompatible             " be iMproved, required
    filetype off                 " required
    call plug#begin('~/.vim/plugged')

    Plug 'sheerun/vim-polyglot'
    Plug 'neoclide/coc.nvim', {'branch': 'release'}
    Plug 'scrooloose/nerdtree'

    call plug#end()
     
    autocmd FileType json syntax match Comment +\/\/.\+$+
    colorscheme slate
    autocmd vimenter * NERDTree

    set langmap=!\\"№\\;%?*ёйцукенгшщзхъфывапролджэячсмитьбюЁЙЦУКЕHГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ;!@#$%&*`qwertyuiop[]asdfghjkl\\;'zxcvbnm\\,.~QWERTYUIOP{}ASDFGHJKL:\\"ZXCVBNM<>

