 

var show = document.getElementById('show');
var showUl = document.getElementById('showul');
var liArr = showUl.children;
var imgWidth = liArr[0].offsetWidth;
var control = document.getElementById('control');
var controlArr  = control.children;
controlArr[0].className = 'active'
for (var i = 0; i < controlArr.length; i++) {
	controlArr[i].index = i;
	controlArr[i].onmouseover = function() {
		
		for (var j = 0; j < controlArr.length; j++) {
			controlArr[j].className = '';
		}
		controlArr[this.index].className = 'active';
		showUl.style.left = -imgWidth*(this.index)+"px"
		key = squere = this.index;
	}
}
//添加定时器
var timer = setInterval(autoplay, 2000)

var key =0;
var squere = 0;

function autoplay() {
	key++
	showUl.className = 'showul showul2'
	if(key>controlArr.length){
		showUl.className = 'showul'
		showUl.style.left = "0px";
		key=1
		if (key=1) {
		showUl.style.left = -imgWidth*key+"px"
		}
	}
	 
		showUl.style.left = -imgWidth*key+"px"
 
	squere++
	for (var i = 0; i < controlArr.length; i++) {
		controlArr[i].className='';
	}
	if (squere>controlArr.length-1) {
		squere=0
	}
	controlArr[squere].className='active';
}

 



