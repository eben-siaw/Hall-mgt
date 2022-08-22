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


// function for table search 
function search() { 
	var filter, tr, table, td, i, txtValue; 
	// get table id  
	table = document.getElementById('mytable')

	// get input id
	input = document.getElementById('myInput')

	tr = table.getElementsByTagName('tr')
  
	// filter based on the value of the search input
	filter = input.value.toUpperCase();


   // loop through the rows
	for(i = 0; i < tr.length; i++) { 
		td = tr[i].getElementsByTagName('td')[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
			  tr[i].style.display = "";
			} else {
			  tr[i].style.display = "none";
			}
		  }
	}
}

