window.addEventListener('load', function() {
    console.log('loaded')

    var backthisprojectbutton = document.getElementById('backthisprojectbutton');

    var successmodal = document.getElementById('success');
    var backthisprojectmodal = document.getElementById('backthisproject');

    successmodal.classList.add("hide");
    backthisprojectmodal.classList.add("hide");

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
    
    document.querySelectorAll('.continue').forEach(el => {
        console.log("hi")
        el.addEventListener('click', function (e) {
            
            backthisprojectmodal.classList.add("hide");
            successmodal.classList.remove("hide");
            successmodal.classList.add("show");
        })
    })    

})