document.addEventListener("DOMContentLoaded",() => {
  console.log(2)
  const dlt_btns = document.querySelectorAll(".delete")
  dlt_btns.forEach(btn =>{
    btn.addEventListener("click",() => {
        await fetch(`http://localhost:3000/library/${btn.dataset.objectId}`,{
          method: "DELETE"
        });
        btn.parentElement.parentElement.parentElement.parentElement.remove();
    })
  })
})
