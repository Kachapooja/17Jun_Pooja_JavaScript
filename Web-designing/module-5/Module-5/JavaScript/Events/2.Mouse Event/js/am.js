function am()
{
    var m = document.getElementById("mm").value;
    var s = document.getElementById("sm").value;
    var e = document.getElementById("em").value;
    var total = parseInt(m) + parseInt(s) + parseInt(e);
    var result = total/3;
    document.getElementById("sam").value=result.toFixed(2);
}