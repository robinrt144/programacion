$(document).ready(function(){
   $("#ocultar").click(function(){
      $("p").hide();
  });
     $("#mostrar").click(function(){
      $("p").show();
  });
     $("#color").click(function(){
      $("p").css('background-color','red');
  });
  //cambia color
     $("#red").click(function(){
      $("p").css('background-color','red');
  });
       $("#green").click(function(){
      $("p").css('background-color','green');
  });
         $("#black").click(function(){
      $("p").css('background-color','black');
  });
  //eventos over  
          $("#black").mouseenter(function(){
      $(this).css('background-color','red');
  }); 
            $("#black").mouseleave(function(){
      $(this).css('background-color','green');
  }); 
//desvanecer
            $("#desvanecer").click(function(){
      $("p").fadeToggle(5000);
  }); 
 
});

	$(document).ready(function(){
		$("#mostrar").click(function(){
			$('#target').show(3000);
			$('.target').show("slow");
		 });
		$("#ocultar").click(function(){
			$('#target').hide(3000);
			$('.target').hide("fast");
		 });
	});
