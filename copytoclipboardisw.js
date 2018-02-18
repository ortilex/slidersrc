 api.decorateCooked(
        $elem => $('pre', $elem).each(function () {
            // add copy button to code block
            $(this).wrap('<div class="code-highlight"></div>').before('<div class="bd-clipboard"><span class="btn-clipboard">اضغط لنسخ الكود</span></div>')
            
            // initialise clipboard
            var clipboard = new Clipboard('.btn-clipboard', {
                target: function (trigger) {
                    return trigger.parentNode.nextElementSibling
                }
            })
        
            // update text of the copy button
            clipboard.on('error', function (e) {
                var modifierKey = /Mac/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl-'
                var fallbackMsg = 'Press ' + modifierKey + 'C to copy'
                
                $(e.trigger).text(fallbackMsg)
            })
          
            clipboard.on('success', function (e) {
                $(e.trigger).text('Copied!')
                e.clearSelection()
            })
        })
    )

    // revert back text of the copy button
    $(document).on('mouseleave', '.btn-clipboard', function () {
        $(this).text('Copy')
    })
