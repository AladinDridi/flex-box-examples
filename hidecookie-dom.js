function setCookie(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
} 
function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}
    var docclose= document.getElementById('fermerboutton');
     docclose.addEventListener("click",function(event){
         setCookie("fermerbtn","frbtn",300);
         document.getElementById('applimsg').style.display="none";
     });
     if(getCookie("fermerbtn")=="frbtn"){
         document.getElementById('applimsg').style.display="none";
     }
