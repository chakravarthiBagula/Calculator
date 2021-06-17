 var y;
    function display(val) 
    { 
    	var x=document.getElementById("result").value;
    	if (x==y)
    	{
    		x=val;
    	}
    	else{x+=val;}
    	document.getElementById("result").value=x;
    } 
    function calculate() 
    { 
    	var x = document.getElementById("result").value 
		y = eval(x) 
    	document.getElementById("result").value = y 
    } 
    function clr() 
    { 
    	document.getElementById("result").value = "" 
    } 