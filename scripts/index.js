const teamMembers = document.getElementsByClassName("team-member");
const close = document.getElementsByClassName("close")[0];
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
Array.from(teamMembers).forEach(member => member.addEventListener('click', openModal));

function openModal(e){
  const target = (e.target.tagName === "H3")? e.target.parentNode.parentNode : e.target.parentNode;
  const name = target.getElementsByTagName("H3")[0].innerText;
  const img = target.getElementsByTagName("IMG")[0].src;
  const bio = target.getElementsByClassName("bio")[0].innerHTML;
  modalContent.getElementsByTagName("IMG")[0].src = img;
  modalContent.getElementsByTagName("H3")[0].innerText = name;
  modalContent.getElementsByClassName("modal-bio")[0].innerHTML = bio;
  modalContent.getElementsByTagName("IMG")[0].style.objectPosition = target.getElementsByTagName("IMG")[0].style.objectPosition;
  modal.style.display = "flex";
}

close.addEventListener("click", (e) => {
  modal.style.display = "none";
})

window.addEventListener('click', (e) => {
  if(e.target == modal){
    modal.style.display = "none";
  }
})