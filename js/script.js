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

    var totalpledge = document.getElementById('totalpledge');
    var totalbackers = document.getElementById('totalbackers');

    var frontbar = document.getElementsByClassName('frontbar')[0];
    frontbar.style.width = ((parseInt(totalpledge.innerHTML.replace(/[^0-9]/g, '')) / 100000) * 100)+'%';

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
            bookmarkicon.src = 'images/icon-bookmark.svg'
            this.style.color = '#7a7a7a'
            bookmark.lastChild.innerHTML = 'Bookmark'
        } else{
            this.classList.add('active');
            this.style.color = '#147b74'
            bookmark.lastChild.innerHTML = 'Bookmarked'
            bookmarkicon.src = 'images/icon-bookmarked.svg'
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

    document.querySelectorAll('.selectbtn').forEach(el => {
        el.addEventListener('click',function(e) {
            if(this.classList.contains('invalid')) {
                // open the modal without check on radio button
                document.getElementById(this.value).checked = false;
            }else{
                document.getElementById(this.value).checked = true;
                document.getElementById(this.value).parentNode.parentNode.style.borderColor = '#147b74'
            }
            console.log(this.value)
            backthisprojectmodal.classList.remove("hide");
            backthisprojectmodal.classList.add("show");
        })
    })

    document.querySelectorAll('input[name="project"]').forEach(el => {
        el.addEventListener('click', function (e) {
            document.querySelectorAll('.item').forEach(item => {
                item.style.borderColor = 'hsl(0, 0%, 73%)'
            })
            if(this.checked) {
                var parent = el.parentNode.parentNode
                parent.style.borderColor = '#147b74'
            }
        })
    })
    
    document.querySelectorAll('.continue').forEach(el => {
        console.log("hi")
        el.addEventListener('click', function (e) {
            var formgroup = el.parentNode.getElementsByClassName('form-group')[0];
            if(typeof formgroup == 'undefined'){
                backthisprojectmodal.classList.add("hide");
                successmodal.classList.remove("hide");
                successmodal.classList.add("show");

                var totalbackersnum = totalbackers.innerHTML;
                totalbackersnum = totalbackersnum.replace(/,/g, '');
                totalbackersnum = parseInt(totalbackersnum)+1;
                totalbackersnum =  numberWithCommas(totalbackersnum);
                totalbackers.innerHTML = totalbackersnum;
            }else{
                var thispledge = formgroup.getElementsByClassName('pledge')[0].id;
                var reward = formgroup.getElementsByClassName('pledge')[0].value;
                var currentchecked = document.querySelector('input[name="project"]:checked');
                var currentnumber = currentchecked.parentNode.getElementsByClassName('number')[0];
                var currentmobilenumber = currentchecked.parentNode.getElementsByClassName('mobile-number')[0];
                var currentnumberleft = currentnumber.innerHTML;

                var pass = false;
                if (thispledge == 'pledge2') {
                    //25
                    if(reward < 25){
                        pass = false
                    }else{
                        pass = true
                    }
                } else if (thispledge == 'pledge3') {
                    //75
                    if(reward < 75){
                        pass = false
                    }else{
                        pass = true
                    }
                } else {
                    //200
                    if(reward < 200){
                        pass = false
                    }else{
                        pass = true
                    }
                }
    
                console.log(thispledge)
                console.log(reward)

                if(pass) {
                    backthisprojectmodal.classList.add("hide");
                    successmodal.classList.remove("hide");
                    successmodal.classList.add("show");

                    var totalbackersnum = totalbackers.innerHTML;
                    totalbackersnum = totalbackersnum.replace(/,/g, '');
                    totalbackersnum = parseInt(totalbackersnum)+1;
                    totalbackersnum =  numberWithCommas(totalbackersnum);
                    totalbackers.innerHTML = totalbackersnum;

                    var totalpledgenum = totalpledge.innerHTML;
                    totalpledgenum = totalpledgenum.replace(/[^0-9]/g, '');
                    totalpledgenum = parseInt(totalpledgenum)+parseInt(reward);
                    totalpledgenum = '$'+numberWithCommas(totalpledgenum)
                    console.log(totalpledgenum)
                    totalpledge.innerHTML = totalpledgenum;
                    frontbar.style.width = ((parseInt(totalpledgenum.replace(/[^0-9]/g, '')) / 100000) * 100)+'%';

                    currentnumberleft = parseInt(currentnumberleft)-1;
                    currentnumber.innerHTML = currentnumberleft;
                    currentmobilenumber.innerHTML = currentnumberleft;
                    document.getElementById(currentchecked.value+'-number').innerHTML = currentnumberleft
                } else {
                    formgroup.getElementsByClassName('pledge')[0].style.borderColor = "red";
                }
                
            }
        })
    })

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

})