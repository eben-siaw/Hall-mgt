$(document).ready(function(){
	// Activate tooltip
	$('[data-toggle="tooltip"]').tooltip();
	
	// Select/Deselect checkboxes
	var checkbox = $('table tbody input[type="checkbox"]');
	$("#selectAll").click(function(){
		if(this.checked){
			checkbox.each(function(){
				this.checked = true;                        
			});
		} else{
			checkbox.each(function(){
				this.checked = false;                        
			});
		} 
	});
	checkbox.click(function(){
		if(!this.checked){
			$("#selectAll").prop("checked", false);
		}
	});
}); 

// attach a scroll event listener
let scroll1 = window.pageYOffset;
window.onscroll = function(){
    let scroll2 = window.pageYOffset;
    if(scroll1 > scroll2){
        document.getElementById('nav').style.top = '-3px';
    }
    else{
        document.getElementById('nav').style.top = '-70px';
    }
    scroll1 = scroll2;

}
// jquery 

