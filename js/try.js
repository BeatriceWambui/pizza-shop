var pizzasizeprice, crustprice, total;

$(document).ready(function(){
    $("#myprice").click(function(event){
        var size = $("#flavor option:selected").val();
        var crust = $("#crust option:selected").val();
        var topping =[];
        $.each($('input[name="topping"]:checked'),function(){
            topping.push($(this).val());
        });
    if (crust == "none"){
        crustprice=0;

    }
    else if (crust == "Pan-crust"){
    crustprice = 100 ;
    }else if (crust == "Original Thin Crust"){
        crustprice =150;
    }else if (crust == "Gluten Free"){
        crustprice =200;
    }else {
        crustprice=250;
    }

    if(size =="regular"){
        pizzasizeprice = 500;
    } else if (size == "medium") {
        pizzasizeprice=700;
    }  else if(size == "mega"){
        pizzasizeprice = 1000;
    }else{
        pizzasizeprice=0;
    }

    var total= crustprice+ pizzasizeprice + (topping.length*200);

    $("#outputcrust").html(crust);
    $("#outputtopping").html(topping);
    $("#outputsize").html(size);
        console.log(crustprice);
        console.log(pizzasizeprice);
        console.log(topping);
        console.log(total)

        event.preventDefault();
    })
})