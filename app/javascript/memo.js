function post (){
  const form = document.getElementById("form");
  form.addEventListener("submit",(e) => {
    e.prebentDefault();
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true)
    XHR.responseType = "Json";
    XHR.send(formData);
  });
 };
 
 window.addEventListener('turbo:load', post);