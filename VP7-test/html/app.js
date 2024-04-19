window.addEventListener('message', function(event) {
    var body = document.getElementById("body")

    if (event.data.CheckUi === "OpenUi") {
        body.style.display = "flex"
        password = event.data.PassLua
    } else if (event.data.CheckUi === 'CloseUi') {
        body.style.display = "none"
        password = event.data.PassLua
    };
});

function Done() {
    var ahmed = document.getElementById("ahmed").value
    var error = document.getElementById("error")
    var body = document.getElementById("body")

    if (ahmed === password) {
        error.style.opacity = "0"
        body.style.display = "none" 
    } else {
        error.style.opacity = "100"
    }
}

$('#x').click(function(){
    $.post(`https://${GetParentResourceName()}/testclose`, JSON.stringify({}))
  })
  
  $('#mohammed').click(function(){
    var ahmed = document.getElementById("ahmed").value

    $.post(`https://${GetParentResourceName()}/CheckDone`, JSON.stringify({TheEndPass: ahmed}))
  })