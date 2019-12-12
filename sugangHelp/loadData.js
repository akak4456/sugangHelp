function loadObjects(p_content){
	objArray[objArray.length] = new Obj();
	var firstP = 0;
	for(var i=0;i<p_content.length;i++){
		if(p_content.charAt(i) == "$"){
			objArray[objArray.length-1].setObj(p_content.substr(firstP,i-firstP+1));
			firstP = i+1;
			objArray[objArray.length] = new Obj();
		}
	}
}