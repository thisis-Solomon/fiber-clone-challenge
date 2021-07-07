function showNavBar(toggleBtn){
    const btn = document.getElementById(toggleBtn)
    setTimeout(()=>{
        console.log(btn)
    },3000)
    btn.addEventListener("clicked", ()=>{
        console.log(btn)
    })
}

showNavBar("hamburger")