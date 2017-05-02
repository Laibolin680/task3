 // JavaScript Document
function std(){
	var radios = document.getElementsByName('student');
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[0].checked) {
			document.getElementById("dont0").style.display="";
			break;
			
		}
		else if(radios[1].checked) {
			document.getElementById("dont1").style.display="";
			break;
			
		}
	}
}

var univercities={};
univercities['beijing']=['北京大学','清华大学'];
univercities['shanghai']=['复旦大学','同济大学'];
univercities['guangzhou']=['中山大学','暨南大学'];
function changeuni(){
	var citylist=document.getElementById("city");
	var unilist=document.getElementById("uni");
	var seluni=citylist.options[citylist.selectedIndex].value;
	while (unilist.options.length){
		unilist.remove(0);
	}
	var ui=univercities[seluni];
	if (ui){
		for (var i=0;i < ui.length;i++){
			var u=new Option(ui[i],i);
			unilist.options.add(u);
		}
	}
}