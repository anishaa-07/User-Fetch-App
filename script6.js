  const body=document.getElementById('userBody')
  const refresh=document.getElementById('refresh')
  const loader=document.getElementById('loader')

  async function loadUsers(){
    loader.style.display="block"
    body.innerHTML=""
    const res=await fetch("https://jsonplaceholder.typicode.com/users")
    const data=await res.json()
    loader.style.display="none"
    data.forEach(u=>{
      body.innerHTML+=`<tr><td>${u.name}</td><td>${u.email}</td><td>${u.address.city}</td></tr>`
    })
  }

  refresh.addEventListener('click',loadUsers)

  loadUsers()
