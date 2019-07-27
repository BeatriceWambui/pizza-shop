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
    pizzaPrice=0;
    var form=document.forms["orderForm"];
    size=form.elements["flavor"];
    pizzaPrice=pizzaFlavor[flavor.value];
    return pizzaFlavor;
};

function originalThinCrust(){
    originalThinCrust = 0 ;
    form =document.forms["orderForm"];
    originalThinCrust=form.elements["thincrust"];
    if (thincrust.checked == true ){
        originalThinCrust=100;
    }
        return originalThinCrust;       
} 

function panCrust(){
    panCrust=0;
    form = document.forms["orderForm"];
    pancrust=forms.elements["pancrust"];
    if (pancrust.checked == true){
         pancrust=150;
     }
        return panCrust;
}

function glutenFree(){
    glutenFree=0;
    form = document.forms["orderForm"];
    glutenFree=forms.elements["glutencrust"];
    if (glutencrust.checked == true ){
        glutenFree=200;
    }
        return glutenFree;
}

function cheesCrust(){
    cheesCrust=0;
    form = document.forms["orderForm"];
    cheesCrust=forms.elements["cheescrust"];
    if (cheescrust.checked == true){
        cheesCrust=250;
    }
        return cheesCrust;
}

function extraChees(){
    extraChees=0;
    form = document.forms["orderForm"];
    extrachees=forms.element["chees"];
    if (chees.checked == true){
        extraChees=200;
    }
        return extraChees;
}

function pepperoni(){
    pepperoni=0;
    form = document.forms["orderForm"];
    pepperoni=forms.element["pepperoni"];
    if(pepperoni.checked == true){
        pepperoni=200;
    }
        return pepperoni;
}

function extraTomato(){
    extraTomato=0;
    form = document.forms["orderForm"];
    extraTomato=forms.element["tomato"];
    if (tomato.chacked == true){
        extraTomato=200;
    }
        return extraTomato;
}

function mushroom(){
    mushroom=0;
    form = document.forms["orderForm"];
    mushroom=forms.element["mushroom"];
    if (mushroom.checked == true){
        mushroom=200;
    }
        return mushroom;
}

function mexicanCheese(){
    mexicanCheese=0;
    form = document.forms["orderForm"];
    mexicanCheese=forms.element["mexican"];
    if(mushroom.checked == true){
        mexicanCheese=200;
    }
        return mexicanCheese;
}

function sausage(){
    sausage=0;
    form = document.forms["orderForm"];
    sausage=form.element["sausage"];
    if(sausage.checked == true){
        sausage=200;
    }
    return sausage;
}

function bellPeppers(){
    bellPeppers=0;
    form = document.forms["orderForm"];
    bellPeppers=form.element["bell"];
    if(bell.checked == true){
        bellPeppers=200;
    }
        return bellPeppers;
}

function avacadoSpecial(){
    avacadoSpecial=0;
    form = document.forms["orderForm"];
    avacadoSpecial=form.element["avacado"];
    if(avacado.checked == true){
        avacadoSpecial=200;
    }
    return avacadoSpecial;
}

