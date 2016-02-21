function customRegister(e) {	
	if($(".firstname").val().trim() == 0) {
		$(".firstname").focus();
		$(".firstname").blur();
		return false;
	}
	if($(".lastname").val().trim() == 0) {
		$(".lastname").focus();
		$(".lastname").blur();
		return false;
	}
	if($("#email").val().trim() == 0) {
		$("#email").focus();
		$("#email").blur();
		return false;
	}
	if($(".confirm-email").val().trim() == 0) {
		$(".confirm-email").focus();
		$(".confirm-email").blur();
		return false;
	}
	if($("#password").val().trim() == 0) {
		$("#password").focus();
		$("#password").blur();
		return false;
	}
	var error = $(".error");
	if(error.length > 0){
		return false;
	}
	$("#js-signup").submit();
	return true;
}