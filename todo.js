// alert("Connected")

$("li").click(function(){
	$(this).toggleClass("completed");
})

$("span").click(function(event){
	// alert("clicked!");
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
})