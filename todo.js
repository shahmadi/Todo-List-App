// alert("Connected")

$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
})

$("ul").on("click","span",function(event){
	// alert("clicked!");
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
	if(event.which===13){
		var newtask=$(this).val();
		$(this).val("");
		$("ul").append("<li><span>X </span>"+newtask+"</li>");
	}
})