function applyBackground()
{
 var id = document.getElementById("wall_id").value;
var color = document.getElementById("wall_color").value;   
    if(id!="")
    {
    for(var i=1;i<10;i++)
    document.getElementById(i).style.background="transparent";
    document.getElementById(id).style.background=color;
    }
}

function resetBackground()
{
    for(var i=1;i<10;i++)
    {
    document.getElementById(i).style.background="transparent";
    }
}
