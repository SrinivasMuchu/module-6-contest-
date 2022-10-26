function validate() {
	let f = document.getElementById('fnn').value
	let g = document.getElementById('gn').value
	let h1 = document.getElementById('swimming').checked
	let h2 = document.getElementById('reading novels').checked
	let h3 = document.getElementById('dancing').checked
	let h4 = document.getElementById('singing').checked
	let error = false

	if(f.length>=5 && f.includes(' ')>=1){
		document.getElementById('full-name-valid').style.display = 'block'
		document.getElementById('full-name-invalid').style.display = 'none'
	}
	 else {
		document.getElementById('full-name-invalid').style.display = 'block'
		document.getElementById('full-name-valid').style.display = 'none'
		error = true
	 }
	
	if(g!='none'){
		document.getElementById('gender-valid').style.display = 'block'
		document.getElementById('gender-invalid').style.display = 'none'
	} else {
		document.getElementById('gender-invalid').style.display = 'block'
		document.getElementById('gender-valid').style.display = 'none'
		error = true
	}
	if (h1 || h2 || h3 || h4 ) {
		document.getElementById("hobbie invalid").style.display = 'none'
		document.getElementById("hobbie valid").style.display = 'block'
	} else {
		document.getElementById("hobbie invalid").style.display = 'block'
		document.getElementById("hobbie valid").style.display = 'none'
		error = true
	}
     

	if(!error) {
		var checkedValue=""; 
		var inputElements = document.getElementsByClassName('hobbie');
		for(var i=0; inputElements[i]; ++i){
			  if(inputElements[i].checked){
				   checkedValue += inputElements[i].value;
				   checkedValue += " ";
			  }
		}
		 alert("Hobbies of "+f+" (" +g+") are "+checkedValue)
		
		document.getElementById('register-form').reset()
		

		let validFeedbacks = document.getElementsByClassName('valid-feedback')
		for(let i = 0; i < validFeedbacks.length; i++) {
			validFeedbacks[i].style.display = 'none'
		}
		let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
		for(let i = 0; i < invalidFeedbacks.length; i++) {
			invalidFeedbacks[i].style.display = 'none'
		}
	}

		
	
}