var link=document.querySelector(".write"),popup=document.querySelector(".modal-content"),close=document.querySelector(".modal-content-close"),login=popup.querySelector(".input-name"),email=popup.querySelector(".input-e-mail"),letter=popup.querySelector("textarea"),form=popup.querySelector("form"),storage=localStorage.getItem("login");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-content-show"),login.focus(),storage?(login.value=storage,email.focus()):login.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-content-show"),popup.classList.remove("modal-error")}),form.addEventListener("submit",function(e){login.value&&email.value&&letter.value?localStorage.setItem("login",login.value):(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"),console.log("Нужно ввести имя, ваш e-mail и текст письма"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&popup.classList.contains("modal-content-show")&&(popup.classList.remove("modal-content-show"),popup.classList.remove("modal-error"))});