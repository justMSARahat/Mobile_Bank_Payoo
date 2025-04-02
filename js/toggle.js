
document.getElementById("cashout_box").style.display="none";
document.getElementById("add_money_details").style.display="none";

function ToogleTab(id, value, button){
    document.getElementById(id).style.display=value;

    if(value === "block"){
        document.getElementById(button).style.border="1px solid blue";
        document.getElementById(button).style.fontWeight="Bold";

    }
    else{
        document.getElementById(button).style.border="";
        document.getElementById(button).style.fontWeight="";
    }

}


document.getElementById("add_money").addEventListener('click', function(){

    ToogleTab("add_money_details","block","add_money");
    ToogleTab("cashout_box","none","cashout_btn");
    ToogleTab("Transections","none","Transections_btn");
});

document.getElementById("cashout_btn").addEventListener('click', function(){

    ToogleTab("add_money_details","none","add_money");
    ToogleTab("cashout_box","block","cashout_btn");
    ToogleTab("Transections","none","Transections_btn");

});


document.getElementById("Transections_btn").addEventListener('click', function(){

    ToogleTab("add_money_details","none","add_money");
    ToogleTab("cashout_box","none","cashout_btn");
    ToogleTab("Transections","block","Transections_btn");

});