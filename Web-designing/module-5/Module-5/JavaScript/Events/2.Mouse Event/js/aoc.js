function aoc()
{
    var pi = 3.14;
    var r = document.getElementById("eradious").value;
    var result = pi*r*r;
    // var result = pi*(Math.pow(r,2));
    document.getElementById("aofc").value=result.toFixed(2);
}