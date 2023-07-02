
function display(num)
{

 var result= document.getElementById("output");
 result.value += num;

}

function result()
{

 let result = document.getElementById("output").value
 let result1 = eval(result);
 document.getElementById("output").value = result1; 
}

function clr()
{

  var clear = document.getElementById('output').value = "";
}

function del()
{
      
 var r = document.getElementById("output");
 
 var r1 = r.value;

 r1 = r1.slice(0,-1);

 r.value = r1;
}

