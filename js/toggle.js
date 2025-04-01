
document.getElementById("cashout_box").style.display="none";

document.getElementById("add_money").addEventListener('click', function(){
    document.getElementById("add_money_details").style.display="block";
    document.getElementById("cashout_box").style.display="none";
    document.getElementById("add_money").style.border="1px Solid Blue";
    document.getElementById("add_money").style.fontWeight="Bold";
    document.getElementById("cashout_btn").style.border="";
    document.getElementById("cashout_btn").style.fontWeight="";
});
document.getElementById("cashout_btn").addEventListener('click', function(){
    document.getElementById("add_money_details").style.display="none";
    document.getElementById("cashout_box").style.display="block";
    document.getElementById("cashout_btn").style.border="1px Solid Blue";
    document.getElementById("cashout_btn").style.fontWeight="Bold";
    document.getElementById("add_money").style.border="";
    document.getElementById("add_money").style.fontWeight="";
});