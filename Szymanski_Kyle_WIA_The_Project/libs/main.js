$(document).ready(function () {

    //create show and toggle functions
    $( "#show" ).click(function() {
  $( "#theDiv" ).show( "fold", 1000 );
    });
    
    $("#toggle").click(function(){
		
			$("#welcome").slideToggle(1500);
    });

    //create accordion
    $(function() {
    $( "#accordion" ).accordion({
        collapsible: true,
        heightStyle: "fill"
        
    });
    });

    //set up accordion re-sizer
    
    $(function() {
    $( "#accordion-resizer" ).resizable({
      minHeight: 140,
      minWidth: 200,
      resize: function() {
        $( "#accordion" ).accordion( "refresh" );
      }
    });
    });
    
    $(function() {
    $( "#tabs" ).tabs();
  });
  
   $(function() { 

	$("#canvasImg").hide();
	var canvas= document.getElementById("canvas");
	var ctx =canvas.getContext("2d");
	
	
	//Setup all the data the chart
	
	var lineChartData= {
		labels:["Apr", "May", "Jun"],
		datasets:[
		{
			fillColor:"rgba(30,144,255,.4)",
			strokeColor:"rgba(216,7,7,.4)",
			pointColor:"rgba(30,144,255,1)",
			pointStrokeColor:"#fff",
			data:[1,20,40,70]
			
			
			}
		
		
		
		]
		

		
		};
	
	var options ={

		onAnimationComplete:done
		
		};
	
	
	//create line chart
	var myLine = new Chart(ctx).Line(lineChartData, options);
	
	
	function done(){

		var dataURL= canvas.toDataURL();

        //create image
		document.getElementById("canvasImg").src =dataURL;
		
		$("#canvas").hide();
		$("#canvasImg").show();
		
		}
	
	
		
}); 
    
});


