var timer = null;
var sliderPage = document.getElementsByClassName('sliderPage')[0];
var moveWidth = sliderPage.children[0].offsetWidth;
var leftBtn = document.getElementsByClassName('leftBtn')[0];
var rightBtn = document.getElementsByClassName('rightBtn')[0];
var oSpanArray = document.getElementsByClassName('sliderIndex')[0].getElementsByTagName('span');
var num = sliderPage.children.length - 1;
var index = 0;
var direction = "left->right";
var timer = null;



function autoMove(direction) {
	clearTimeout(timer)
	if (!direction || direction == 'left->right') {
		index++;
		sliderPage.style.left = sliderPage.offsetLeft - moveWidth + "px";
		if (sliderPage.offsetLeft == -num * moveWidth) {
			index = 0;
			sliderPage.style.left = "0px"
		}
		changeIndex(index);
		timer = setTimeout(autoMove, 1500);
	} else if (direction == "right->left") {
		if (sliderPage.offsetLeft == 0) {
			sliderPage.style.left = -num * moveWidth + "px";
			index = num;
		}
		index--;
		sliderPage.style.left = sliderPage.offsetLeft + moveWidth + "px";
		changeIndex(index);
		timer = setTimeout(autoMove, 1500)
	}
}

leftBtn.onclick = function() {
	// if(index == 0) {}
	autoMove("right->left");
}

rightBtn.onclick = function() {
	autoMove("left->right");
}

function changeIndex(_index) {
	for (var i = 0; i < oSpanArray.length; i++) {
		oSpanArray[i].className = '';
	}
	oSpanArray[_index].className = 'active';
}

timer = setTimeout(autoMove, 1000 / 6)
