function init(){
	const length = 40;
	const lifeTime = 300;
	document.body.addEventListener("mousemove", ({x, y}) => {
		let div = document.createElement("div");
		div.classList.add("trail");
		div.style.left = x + "px";
		div.style.top = y + "px";
		document.body.appendChild(div);
		div.clientWidth;
		div.style.opacity  = 0;
		setTimeout(() => {
			document.body.removeChild(div);
		}, lifeTime);
	});
}
init();
