function init(){
	const length = 40;
	const lifeTime = 300;
	let trail = [];
	document.body.addEventListener("mousemove", ({x, y}) => {
		let div = document.createElement("div");
		div.classList.add("trail");
		div.style.left = x + "px";
		div.style.top = y + "px";
		document.body.appendChild(div);
		div.clientWidth;
		div.style.opacity  = 0;
		if (!trail.length) setTimeout(deleteOldestDiv, lifeTime);
		trail.push([div, Date.now() + lifeTime]);
	});
	
	function deleteOldestDiv(){
		let [div, time] = trail.shift();
		document.body.removeChild(div);
		if (trail.length){
			time = trail[0][1];
			setTimeout(deleteOldestDiv, Math.max(time - Date.now(),1));
		}
	}
}
init();
