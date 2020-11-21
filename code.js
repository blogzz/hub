    function addLink(event) {
        event.preventDefault();

        var pagelink = '\n\n Read more at: ' + document.location.href,
            copytext =  window.getSelection() + pagelink;

        if (window.clipboardData) {
            window.clipboardData.setData('Text', copytext);
        }
    }

    document.addEventListener('copy', addLink);
