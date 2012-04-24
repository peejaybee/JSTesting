function trimString(thisString){
	var retval = "";
	retval = thisString.replace(/^\s*/,"").replace(/\s*$/,"");
	return retval;
}