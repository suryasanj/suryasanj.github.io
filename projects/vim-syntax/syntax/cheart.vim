" Regex
syn match cheartComment /%.*/
syn match cheartFlag /-[a-zA-Z_]\+/
syn match cheartFunction /![a-zA-Z]\+/
syn match cheartNumber /[^a-zA-Z]\zs\d\+[eE]\?/	" Doesn't work for multiple digits after an alphanumeric string

" Linking
hi link cheartComment Comment
hi link cheartFlag Identifier
hi link cheartFunction Function
hi link cheartNumber Float
hi link cheartNumber Number
