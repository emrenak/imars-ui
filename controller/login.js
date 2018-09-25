$(document).ready(function() {
	$("button").click(function(){
    	$.ajax({
    		type: "POST",
        	url: "http://localhost:8090/member/login?email=serefcemgenel@gmail.com&password=123456",
        	async: false,
        	dataType: "jsonp",
        	success: function(data) {
        		alert('success');
        		window.location.href='index.html';
        	},
        	error: function(data){
        		alert('fail');
        		window.location.href='index.html';
        	}
    	});
    });
});