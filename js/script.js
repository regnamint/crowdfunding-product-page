window.addEventListener('load', function() {
    console.log('loaded')

    var backthisprojectbutton = document.getElementById('backthisprojectbutton');

    var successmodal = document.getElementById('success');
    var backthisprojectmodal = document.getElementById('backthisproject');

    successmodal.classList.add("hide");
    backthisprojectmodal.classList.add("show");

    backthisprojectbutton.addEventListener('click', function() {
        backthisprojectmodal.classList.remove("hide");
        backthisprojectmodal.classList.add("show");
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
    
})