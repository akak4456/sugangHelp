function Obj(){
	this.objNum = "";
	this.objClass = "";
	this.objClassGroup = "";
	this.objName = "";
	this.objGrade = "";
	this.objScroe = "";
	this.objKind = "";
	this.objPeriodPlace = "";
	this.isWeb = "";
	this.objProf = "";
	this.objWayToCheckScore = "";
	this.objForWhom = "";
	this.objMajor = "";
	this.objPeriodArray = new Array();
}
Obj.prototype.setObjPeriodArray = function(){
	var key = this.objPeriodPlace;
	var indexOfKey = 0;
	for(var i=0;i<key.length;i++){
		switch(key.charAt(i)){
		case '_':
			this.objPeriodArray[indexOfKey] = key.charAt(i-1)*1;
			indexOfKey++;
			if(key.charAt(i+2) == ','){
				this.objPeriodArray[indexOfKey] = key.substr(i+1,1)*1;
			}else if(key.charAt(i+3)==','){
				this.objPeriodArray[indexOfKey] = key.substr(i+1,2)*1;
			}
			indexOfKey++;
		break;
		case '(':
		if(key.charAt(i-2) == ','){
			this.objPeriodArray[indexOfKey] = key.substr(i-1,1)*1;
		}else if(key.charAt(i-3) == ','){
			this.objPeriodArray[indexOfKey] = key.substr(i-2,2)*1;
		}
		indexOfKey++;
		break;
		}
	}
}
Obj.prototype.setObj = function(p_msg){
	var pCount = 0;
	var firstP = 0;
	for(var i=0;i<=p_msg.length;i++){
		if(p_msg.charAt(i)=='%'){
			this.objPlace1 = p_msg.substr(firstP,i-firstP);
			firstP = i+1;
		}
		if(p_msg.charAt(i)=='#'){
			switch(pCount){
			case 0:
			this.objNum = p_msg.substr(firstP,7);
			this.objClass = p_msg.substr(firstP+8,i-firstP-8);
			break;
			case 1:
			this.objClassGroup = p_msg.substr(firstP,i-firstP);
			break;
			case 2:
			this.objName = p_msg.substr(firstP,i-firstP);
			break;
			case 3:
			this.objGrade = p_msg.substr(firstP,i-firstP);
			break;
			case 4:
			this.objScore = p_msg.substr(firstP,i-firstP);
			break;
			case 5:
			this.objKind = p_msg.substr(firstP,i-firstP);
			break;
			case 6:
			this.objPeriodPlace = p_msg.substr(firstP,i-firstP);
			break;
			case 7:
			this.objProf = p_msg.substr(firstP,i-firstP);
			break;	
			case 8:
			this.objWayToCheckScore = p_msg.substr(firstP,i-firstP);
			break;	
			case 9:
			this.objForWhom = p_msg.substr(firstP,i-firstP);
			break;		
			break;
			}
			firstP = i+1;
			pCount++;
		}
		if(p_msg.charAt(i) == '$'){
			if(this.day1==0){
				this.isWeb = "true";
			}else{
				this.isWeb = "false";
			}
			this.objMajor = p_msg.substr(firstP,i-firstP);
			pCount = 0;
			firstP = i+1;
			isPercent = false; 
		}
	}
	this.setObjPeriodArray();
}