$(document).ready(function(){
    $("form#orderform").submit(function(event){
        var name =$("input#name").val();
        var email =$("input#email").val();
        if ($("input#name").val() && $("input#email").val() && $("input#house").val() &&("input#area").val()&& $("input#flavor").val() !="" ){
        alert ("Dear " + name+ " " + email + ". "+ "We are graced by your presence " + "We have received your order we are going to deliver your pizza in a few minutes." );
        }else{
            alert("Please enter convinient data.");
        }
        event.preventDefault();

    });
});

var form = document.forms["orderform"]

    var pizzaPrice = new Array();
        pizzaPrice["none"]=0;
        pizzaPrice["regular"]=500;
        pizzaPrice["meduim"]=700;
        pizzaPrice["mega"]=1000;

function getFlavor(){
    form=document.forms["orderform"];
    MyPizzaPrice = 0;
    myFlavor=document.getElementById("flavor").selectedIndex.value(); 
    alert(myFlavor);
    MyPizzaPrice=pizzaPrice[myFlavor.value];
    return MyPizzaPrice;
};

function originalThinCrust(){
    form=document.forms["orderform"];
    originalThinCrust = 0 ;
    originalThinCrust=forms.elements["thincrust"];
    if (thincrust.checked == true ){
        originalThinCrust=100;
    }
        return originalThinCrust;       
} 

function panCrust(){
    form= document.forms["orderform"];
    panCrust=0;
    pancrust=forms.elements["pancrust"];
    if (pancrust.checked == true){
         pancrust=150;
     }
        return panCrust;
}

function glutenFree(){
    form= document.forms["orderform"];
    glutenFree=0;
    glutenFree=forms.elements["glutencrust"];
    if (glutencrust.checked == true ){
        glutenFree=200;
    }
        return glutenFree;
}

function cheesCrust(){
    form= document.forms["orderform"];
    cheesCrust=0;
    cheesCrust=forms.elements["cheescrust"];
    if (cheescrust.checked == true){
        cheesCrust=250;
    }
        return cheesCrust;
}

function extraChees(){
    form= document.forms["orderform"];
    extraChees=0;
    extrachees=forms.elements["chees"];
    if (chees.checked == true){
        extraChees=200;
    }
        return extraChees;
}

function pepperoni(){
    form= document.forms["orderform"];
    pepperoni=0;
    pepperoni=forms.elements["pepperoni"];
    if(pepperoni.checked == true){
        pepperoni=200;
    }
        return pepperoni;
}

function extraTomato(){
    form= document.forms["orderform"];
    extraTomato=0;
    extraTomato=forms.elements["tomato"];
    if (tomato.chacked == true){
        extraTomato=200;
    }
        return extraTomato;
}

function mushroom(){
    form= document.forms["orderform"];
    mushroom=0;
    mushroom=forms.elements["mushroom"];
    if (mushroom.checked == true){
        mushroom=200;
    }
        return mushroom;
}

function mexicanCheese(){
    form= document.forms["orderform"];
    mexicanCheese=0;
    mexicanCheese=forms.elements["mexican"];
    if(mushroom.checked == true){
        mexicanCheese=200;
    }
        return mexicanCheese;
}

function sausage(){
    var form = document.forms["orderform"];
    sausage=0;
    sausage=form.elements["sausage"];
    if(sausage.checked == true){
        sausage=200;
    }
    return sausage;
}

function bellPeppers(){
    var form= document.forms["orderform"];
    bellPeppers=0;
    bellPeppers=form.elements["bell"];
    if(bell.checked == true){
        bellPeppers=200;
    }
        return bellPeppers;
}

function avacadoSpecial(){
     var form= document.forms["orderform"];
    avacadoSpecial=0;
    avacadoSpecial=form.elements["avacado"];
    if(avacado.checked == true){
        avacadoSpecial=200;
    }
    return avacadoSpecial;
}

function calculatePrice(){
    var totalPrice=(getFlavor() + originalThinCrust() + panCrust() + glutenFree() + cheesCrust() + extraChees() + pepperoni() +extraTomato() + mushroom() + mexicanCheese() + sausage() + bellPeppers() +avacadoSpecial())*getQuantity();
    var myPizza = document.forms("totalprice");
    myPizza.style.display="block";
    myPizza.innerHTML = "The price is Ksh " + totalPrice;
}

function getQuantity(){
    var form=document.form["orderform"];
    pizzas=0;
    var quantity=form.elements["quantity"];
    if(quantity.value !=""){
        quantity=parseInt(quantity.value);
    }
   return quantity;
}




