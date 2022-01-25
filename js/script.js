window.addEventListener('load', function() {
    console.log('loaded')

    var menu = document.getElementById('menu');
    var menuicon = document.getElementById('menu-icon');
    var overlay = document.getElementsByClassName('overlay');
    
    var backthisprojectbutton = document.getElementById('backthisprojectbutton');
    var bookmark = document.getElementById('bookmark');
    var bookmarkicon = document.getElementById('bookmark-icon');

    var successmodal = document.getElementById('success');
    var backthisprojectmodal = document.getElementById('backthisproject');

    successmodal.classList.add("hide");
    backthisprojectmodal.classList.add("hide");

    window.addEventListener('resize', function() {
        menuicon.src = 'images/icon-hamburger.svg'
        menu.classList.add('collapse')
        overlay[0].style.display = 'none'
        document.getElementsByClassName('mobile-navlink')[0].style.display = 'none'
    });

    menu.addEventListener('click', function() {
        if (this.classList.contains('collapse')) {
            menuicon.src = 'images/icon-close-menu.svg'
            this.classList.remove('collapse')
            overlay[0].style.display = 'block'
            document.getElementsByClassName('mobile-navlink')[0].style.display = 'flex'
        }else{
            menuicon.src = 'images/icon-hamburger.svg'
            this.classList.add('collapse')
            overlay[0].style.display = 'none'
            document.getElementsByClassName('mobile-navlink')[0].style.display = 'none'
        }
    })

    backthisprojectbutton.addEventListener('click', function() {
        backthisprojectmodal.classList.remove("hide");
        backthisprojectmodal.classList.add("show");
    })

    bookmark.addEventListener('click', function() {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
            // bookmarkicon.src = 'images/icon-bookmark.svg'
            this.style.color = '#7a7a7a'
            bookmark.lastChild.innerHTML = 'Bookmark'
        } else{
            this.classList.add('active');
            this.style.color = '#147b74'
            bookmark.lastChild.innerHTML = 'Bookmarked'
        }
    })

    document.getElementById('gotit').addEventListener('click', function() {
        successmodal.classList.add("hide")
    })

    document.getElementById('close').addEventListener('click', function() {
        backthisprojectmodal.classList.add("hide");
    })

    window.addEventListener('click', function(e) {
        var target = e.target;
        if(target == successmodal || target == backthisprojectmodal) {
            target.classList.add("hide")
        }
    })
    
    document.querySelectorAll('.continue').forEach(el => {
        console.log("hi")
        el.addEventListener('click', function (e) {
            
            backthisprojectmodal.classList.add("hide");
            successmodal.classList.remove("hide");
            successmodal.classList.add("show");
        })
    })    

})