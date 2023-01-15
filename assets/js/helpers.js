function checkAndCloseDropDown(e){
	let targetEl = e.currentTarget;
	if(targetEl && targetEl.matches(':focus')){
		setTimeout(function(){
			targetEl.blur();
		}, 0);
	}
}