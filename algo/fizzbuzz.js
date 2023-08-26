document.getElementById("start").addEventListener("click", fizzbuzz);

function fizzbuzz(){
	document.getElementById('result').innerHTML = "";
	
	let n = 100;
	if(document.getElementById("input-n").value != ""){
		n = document.getElementById("input-n").value;
	}
	
	if(n % 1 === 0 && n > 0){
		document.getElementById('state').style.backgroundColor = "orange";
		document.getElementById('state').innerHTML = "Executing...";
		fizzBuzzAsync(1, n);
	} else {
		document.getElementById('state').style.backgroundColor = "red";
		document.getElementById('state').innerHTML = "N format is incorrect, please input a positive integer greater than 0.";
	}
}

function fizzBuzzAsync(i, n) {
	setTimeout(function () {
		if (i % 3 === 0 && i % 5 === 0) {
			document.getElementById('result').innerHTML += "FizzBuzz<br>";
		} else if (i % 3 === 0) {
			document.getElementById('result').innerHTML += "Fizz<br>";
		} else if (i % 5 === 0) {
			document.getElementById('result').innerHTML += "Buzz<br>";
		} else {
			document.getElementById('result').innerHTML += i + "<br>";
		}

		i++;

		if (i <= n) {
			fizzBuzzAsync(i, n);
		} else {
			document.getElementById('state').style.backgroundColor = "green";
			document.getElementById('state').innerHTML = "Done";
		}
	}, 0);
}