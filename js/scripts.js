$(document).ready(function(){
    $("form#form").submit(function(event){
        var name =$("input#name").val();
        var email =$("input#email").val();
        if ($("input#name").val() && $("input#email").val() && $("input#house").val() &&("input#area").val()&& $("input#flavor").val() !="" ){
        alert ("**Dear " + name+ "** " + email + ". "+ "We are graced by your presence " + "**We have received your order we are going to deliver your pizza in a few minutes." );
        }else{
            alert("Please enter convinient data.");
        }
        event.preventDefault();

    });
});





