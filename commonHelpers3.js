import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{l as r}from"./assets/vendor-78be7656.js";const a=document.querySelector(".feedback-form"),s=a.querySelector('[name="email"]'),l=a.querySelector('[name="message"]'),o="feedback-form-state";let e=JSON.parse(localStorage.getItem(o))||{};(e.email||e.message)&&(s.value=e.email??"",l.value=e.message??"");const c=t=>{const n=t.target.name,m=t.target.value;e[n]=m,localStorage.setItem(o,JSON.stringify(e))},i=t=>{t.preventDefault(),localStorage.removeItem(o),console.log(e),e={},s.value="",l.value=""};a.addEventListener("input",r(c,500));a.addEventListener("submit",i);
//# sourceMappingURL=commonHelpers3.js.map
