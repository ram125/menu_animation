let btn = document.getElementById("menu_btn")
let body = document.getElementById("menu_body")
btn.addEventListener("click", ()=>{
	if(body.classList.contains("active")){
		body.classList.remove("active")
	}else{
		body.classList.add("active")
	}
})