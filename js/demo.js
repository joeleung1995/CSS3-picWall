window.onload = function () {
	var timer = setTimeout(function () {
		$(".init").removeClass("init");
	}, 100)
}

$(".item").on("click", function () {
	$(this).addClass("active");
	$(".wrapper").addClass("wrapper_active");
})

$(".delete").on("click", function (e) {
	e.stopPropagation();
	$('.item').removeClass('active');
	$(".wrapper").removeClass("wrapper_active");
})