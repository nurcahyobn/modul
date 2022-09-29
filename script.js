
$(document).ready(function (e) {
	$("#form").on('submit',(function(e) {
		e.preventDefault();
		$.ajax({
        	url: "ajaxupload.php",
			type: "POST",
			data:  new FormData(this),
			contentType: false,
    	    cache: false,
			processData:false,
			beforeSend : function()
			{
				//$("#preview").fadeOut();
				//$("#err").fadeOut();
				$("#err").html("error ya").fadeIn();
			},
			success: function(data)
		    {
				console.log("sukses upload");
		    },
		  	error: function(e) 
	    	{
				$("#err").html("error ya").fadeIn();
	    	} 	        
	   });
	}));
});

