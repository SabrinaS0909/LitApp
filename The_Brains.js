const item = new Array (
	document.getElementById('itemOne'),
	document.getElementById('itemTwo'),
	document.getElementById('itemThree'),
	document.getElementById('itemFour'),
	document.getElementById('itemFive'),
	document.getElementById('itemSix'),
	document.getElementById('itemSeven'),
	document.getElementById('itemEight'),
	document.getElementById('itemNine'),
	document.getElementById('itemTen'),
	document.getElementById('itemEleven'),
	document.getElementById('itemTwelve'),
	document.getElementById('itemThirteen'),
	document.getElementById('itemFourteen'),
	document.getElementById('itemFifteen'),
	document.getElementById('itemSixteen'),
	document.getElementById('itemSeventeen'),
	document.getElementById('itemEighteen'),
	document.getElementById('itemNineteen'),
	document.getElementById('itemTwenty'),
	document.getElementById('itemTwentyOne'),
	document.getElementById('itemTwentyTwo'),
	document.getElementById('itemTwentyThree'),
	document.getElementById('itemTwentyFour'),
	document.getElementById('itemTwentyFive'),
	document.getElementById('itemTwentySix'),
	document.getElementById('itemTwentySeven'),
	document.getElementById('itemTwentyEight')
);

let listItem = document.getElementById('toDoItem-get');

window.onload = function() {
	for (i = 0; i < item.length; i++) {
		console.log(i);
	}
}