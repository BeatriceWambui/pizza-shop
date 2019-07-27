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

var form = document.forms["orderform"]

    var pizzaPrice = new Array()
        pizzaSize["none"]=0;
        pizzaSize["regular"]=500;
        pizzaSize["meduim"]=700;
        pizzaSize["mega"]=1000;

function getFlavor(){
    var form=document.forms["orderForm"];
    pizzaPrice=0;
    size=form.elements["flavor"];
    pizzaPrice=pizzaFlavor[flavor.value];
    return pizzaFlavor;
};

function originalThinCrust(){
    form =document.forms["orderForm"];
    originalThinCrust = 0 ;
    originalThinCrust=form.elements["thincrust"];
    if (thincrust.checked == true ){
        originalThinCrust=100;
    }
        return originalThinCrust;       
} 

function panCrust(){
    form = document.forms["orderForm"];
    panCrust=0;
    pancrust=forms.elements["pancrust"];
    if (pancrust.checked == true){
         pancrust=150;
     }
        return panCrust;
}

function glutenFree(){
    form = document.forms["orderForm"];
    glutenFree=0;
    glutenFree=forms.elements["glutencrust"];
    if (glutencrust.checked == true ){
        glutenFree=200;
    }
        return glutenFree;
}

function cheesCrust(){
    form = document.forms["orderForm"];
    cheesCrust=0;
    cheesCrust=forms.elements["cheescrust"];
    if (cheescrust.checked == true){
        cheesCrust=250;
    }
        return cheesCrust;
}

function extraChees(){
    form = document.forms["orderForm"];
    extraChees=0;
    extrachees=forms.element["chees"];
    if (chees.checked == true){
        extraChees=200;
    }
        return extraChees;
}

function pepperoni(){
    form = document.forms["orderForm"];
    pepperoni=0;
    pepperoni=forms.element["pepperoni"];
    if(pepperoni.checked == true){
        pepperoni=200;
    }
        return pepperoni;
}

function extraTomato(){
    form = document.forms["orderForm"];
    extraTomato=0;
    extraTomato=forms.element["tomato"];
    if (tomato.chacked == true){
        extraTomato=200;
    }
        return extraTomato;
}

function mushroom(){
    form = document.forms["orderForm"];
    mushroom=0;
    mushroom=forms.element["mushroom"];
    if (mushroom.checked == true){
        mushroom=200;
    }
        return mushroom;
}

function mexicanCheese(){
    form = document.forms["orderForm"];
    mexicanCheese=0;
    mexicanCheese=forms.element["mexican"];
    if(mushroom.checked == true){
        mexicanCheese=200;
    }
        return mexicanCheese;
}

function sausage(){
    form = document.forms["orderForm"];
    sausage=0;
    sausage=form.element["sausage"];
    if(sausage.checked == true){
        sausage=200;
    }
    return sausage;
}

function bellPeppers(){
    form = document.forms["orderForm"];
    bellPeppers=0;
    bellPeppers=form.element["bell"];
    if(bell.checked == true){
        bellPeppers=200;
    }
        return bellPeppers;
}

function avacadoSpecial(){
    form = document.forms["orderForm"];
    avacadoSpecial=0;
    avacadoSpecial=form.element["avacado"];
    if(avacado.checked == true){
        avacadoSpecial=200;
    }
    return avacadoSpecial;
}

function calculatePrice(){
    totalPrice=(getFlavor() + originalThinCrust() + panCrust() + glutenFree() + cheesCrust() +
    extraChees() + pepperoni() +extraTomato() + mushroom() + mexicanCheese() + sausage() + bellPeppers() +avacadoSpecial())*getQuantity();
    var myPizza = document.getElementById("totalprice");
    myPizza.style.display="block";
    myPizza.innerHTML = "The price is Ksh " + totalPrice
}

function getQuantity(){
    form=document.form["orderForm"];
    pizzas=0;
    quantity=form.element["quantity"];
    if(quantity.value !=""){
        howMany=parseInt(quantity.value);
    }
   return howMany;
}




