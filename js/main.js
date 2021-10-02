$(document).ready(function(){


    $(".btn1").css("background-color","#331c73");
    $(".btn2").css("background-color","white");
    $(".btn2 button").css("color","gray");

    $(".btn2").click(function(){

        $(".row_information .pointer").css("left","69%");
        $(".btn1").css("background-color","white");
        $(".btn2").css("background-color","#331c73");
        $(".btn1 button").css("color","gray");
        $(".btn2 button").css("color","white");
        $(".row_information button").text("Sing Up");
        
    });

    $(".btn1").click(function(){

        $(".row_information .pointer").css("left","17%");
        $(".btn1").css("background-color","#331c73");
        $(".btn2").css("background-color","white");
        $(".btn2 button").css("color","gray");
        $(".btn1 button").css("color","white");     
        $(".row_information button").text("Login");
    });

    $(".rem div").click(function(){
        if($(".checkRem").prop("checked")==true)
        {
            $(".checkRem").prop("checked",false);
        }
        else
        {
            $(".checkRem").prop("checked",true);
        }
    })

});