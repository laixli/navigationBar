/*初始化*/
window.onload = function(){
	/*获取组件*/
	bar = document.getElementById("nav1_2");
	/*鼠标移入，显示子导航栏*/
	bar.onmouseover = function(){
		bar.children[1].style.display = "block";
	}
	/*鼠标移出，子导航栏消失*/
	bar.onmouseout = function(){
		bar.children[1].style.display = "none";
	}
}
