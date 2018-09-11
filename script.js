function randomImage() {
			var images = [
				'../Images/1.jpg',
				'../Images/2.jpg',
				'../Images/3.jpg',
				'../Images/4.jpg'
				];
			var size = images.length;
			var x = Math.floor(size * Math.random());
			console.log(x);
			var element = document.getElementsByClassName('home-intro');
			console.log(element);
			element[0].style["background-image"] = "url(" + images[x] + ")";
		}

		document.addEventListener("DOMContentLoaded", randomImage);
