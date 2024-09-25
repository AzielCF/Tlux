const CLASS_NAME_SHOW="show",CLASS_NAME_SHOWING="showing",CLASS_NAME_HIDING="hiding",CLASS_NAME_ACTIVE="active";class Navbar{navbar=document.querySelector("header.nav");navbarbrand=this.navbar.querySelector(".brand");navbarToggle=this.navbar.querySelector(".toggle");navbarMenu=this.navbar.querySelector(".menu");body=document.querySelector("body");animating=!1;constructor(){this.initNavbar()}#t(){const t=this.navbar.getAttribute("bg-color"),a=document.createElement("div");this.navbarMenu.parentNode.insertBefore(a,this.navbarMenu),a.appendChild(this.navbarbrand),a.appendChild(this.navbarToggle),a.appendChild(this.navbarMenu),a.classList.add("nav-main"),t?a.classList.add("bg-"+t):a.classList.add("bg-primary")}#a(){this.navbarToggle.addEventListener("click",(()=>{this.animating||(this.animating=!0,this.navbarToggle.classList.toggle("active"),this.navbarMenu.classList.contains("show")?this.#e():this.#s())}))}#s(){this.#i(),this.navbarMenu.classList.add("show","showing"),setTimeout((()=>{this.navbarMenu.classList.remove("showing"),this.animating=!1}),300);const t=this.navbar.getAttribute("data-toggle");if("start"==t)this.body.style.overflow="hidden",this.body.style.paddingRight="15px";else if("end"==t){this.body.style.overflow="hidden";this.navbar.getAttribute("scroll");this.body.style.paddingRight="15px"}}#e(){this.#n(),this.navbarMenu.classList.add("hiding"),setTimeout((()=>{this.body.removeAttribute("style"),this.navbarMenu.classList.remove("hiding","show"),this.animating=!1}),300)}#r(){document.addEventListener("click",(t=>{const a=t.target,e=document.querySelector(".nav-main");this.navbarMenu.classList.contains("show")&&(e.contains(a)||(this.navbarToggle.classList.remove("active"),this.#n(),this.navbarMenu.classList.add("hiding"),setTimeout((()=>{this.body.removeAttribute("style"),this.navbarMenu.classList.remove("hiding","show")}),300)))}))}#o(){window.addEventListener("resize",(()=>{if(document.documentElement.clientWidth>=769){document.querySelector(".nav-main");this.navbarMenu.classList.contains("show")&&(this.navbarToggle.classList.remove("active"),this.#n(),this.navbarMenu.classList.add("hiding"),setTimeout((()=>{this.body.removeAttribute("style"),this.navbarMenu.classList.remove("hiding","show")}),300))}}))}#i(){const t=document.createElement("div");t.classList.add("backdrop");const a=this.navbar.getAttribute("backdrop");"none"!==a&&(a?t.classList.add(a):t.classList.add("opacity"),this.navbar.insertBefore(t,this.navbar.firstChild))}#n(){const t=this.navbar.querySelector(".backdrop");t&&t.remove()}initNavbar(){this.#t(),this.#a(),this.#r(),this.#o();const t=this.navbar.getAttribute("data-toggle");"show"===t?this.navbarToggle.addEventListener("click",(()=>{this.body.style.overflow=this.navbarMenu.classList.contains("show")?"hidden":""})):["start","end"].includes(t)&&this.navbarMenu.classList.add("toggle-"+t)}}export default Navbar;