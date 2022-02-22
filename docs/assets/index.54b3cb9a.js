import{j as h,L as o,u,a as f,B as x,R as b,b as d,c as y}from"./vendor.bb749911.js";const N=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}};N();const e=h.exports.jsx,a=h.exports.jsxs,v=()=>e("div",{className:"flex justify-center mt-24 lg:mt-36 animate__animated animate__slideInDown",children:a("div",{children:[e("img",{className:"rounded-full border-2 w-40 mx-auto",src:"assets/profile.jpg",alt:"profile picture"}),e("h2",{className:"text-slate-50 text-base md:text-xl text-center mt-8 tracking-widest",children:"ANDERSON VALLEJO"}),a("div",{className:"flex gap-8 justify-center mt-4",children:[e("img",{className:"cursor-pointer",src:"assets/linkedin.svg"}),e("img",{className:"cursor-pointer",src:"assets/twitter.svg"})]}),e("a",{href:"https://drive.google.com/file/d/1OXjHTYrVEANlgE4dmfHZjEn-gyaFA04a/view?usp=sharing",target:"_blannk",children:e("p",{className:"text-slate-50 border-2 text-center px-16 py-4 mt-24 text-base md:text-xl cursor-pointer hover:bg-white hover:text-black tracking-widest",children:"DOWNLOAD CV"})})]})}),w=()=>a("div",{className:"text-slate-50 text-center mt-48 lg:mt-72 animate__animated animate__slideInDown",children:[a("h1",{className:"font-monserrat text-4xl md:text-7xl",children:[e("span",{className:"font-bold",children:"FRONT-END "}),e("span",{className:"font-light",children:"DEVELOPER"})]}),a("div",{className:"mt-8 text-base md:text-xl tracking-wide",children:[e("p",{className:"font-medium font-raleway",children:"I'm Anderson Vallejo, self-taught front-end developer."}),e("p",{className:"font-medium font-raleway",children:"I love coding and solving problems."})]}),e(o,{to:"/projects",children:e("div",{className:"text-slate-50 border-2 inline-block px-16 py-4 mt-12 text-base md:text-xl cursor-pointer hover:bg-white hover:text-black tracking-widest",children:"PROJECTS"})})]}),j=()=>e("div",{className:"font-raleway tracking-wider",children:a("ul",{className:"flex justify-center lg:justify-start gap-16 lg:pl-28 pt-16 text-slate-50 text-sm md:text-base",children:[e(o,{to:"/",className:"font-extrabold cursor-pointer hover:-translate-y-2 transition ease-in-out delay-150",children:"AV"}),e(o,{to:"/projects",className:"font-medium cursor-pointer hover:-translate-y-2 transition ease-in-out delay-150",children:"PROJECTS"}),e(o,{to:"/contact",className:"font-medium cursor-pointer hover:-translate-y-2 transition ease-in-out delay-150",children:"CONTACT"})]})}),p=[{id:"001",name:"Ranty E-commerce",website:"https://ranty-ecommerce.netlify.app",github:"https://github.com/Vallejoanderson/ranty-ecommerce",description:"A friendly E-commerce website built in React that allows you to buy all you need",technical__sheet:{HTML:"HTML",CSS:"CSS",TAILWINDCSS:"TaillwindCSS",JAVASCRIPT:"JavaScript",REACTJS:"React",VITE:"Vite"}},{id:"002",name:"Books Finder",website:"https://mybooksfinder.netlify.app",github:"https://github.com/Vallejoanderson/recomendador-de-libros",description:"Books Finder built in React that allows you to find books according to your interests",technical__sheet:{HTML:"HTML",CSS:"CSS",TAILWINDCSS:"TaillwindCSS",JAVASCRIPT:"JavaScript",REACTJS:"React",VITE:"Vite"}},{id:"003",name:"Moover: Delivery",website:"https://yourmooverapp.netlify.app",github:"https://github.com/Vallejoanderson/MooverApp",description:"Make a delivery order and track it from your home",technical__sheet:{HTML:"HTML",CSS:"CSS",TAILWINDCSS:"TaillwindCSS",JAVASCRIPT:"JavaScript",REACTJS:"React",VITE:"Vite"}}],S=()=>p,k=()=>{const i=S();let n=u();return e("div",{className:"flex justify-center flex-wrap gap-32 mx-8 mt-48",children:i.map(s=>a("div",{className:"animate__animated animate__slideInDown shadow-inner",onClick:()=>n(`${s.id}`),children:[e("p",{className:"text-white text-center text-lg font-medium tracking-widest bg-gray-500",children:s.name}),a("div",{className:"group relative flex justify-center mb-8",children:[e("img",{className:"border-2",src:`assets/project${s.id}.png`}),e("a",{className:"absolute grid justify-center items-center w-full h-full rounded-xl bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 cursor-pointer",children:a("div",{className:"flex flex-col",children:[e("div",{className:"animate__animated animate__bounceInLeft flex flex-wrap gap-4 justify-center",children:Object.values(s.technical__sheet).map(l=>e("div",{className:"bg-white/90 text-black px-2 rounde font-bold tracking-wide shadow-xl",children:l},s.id+l))}),e("div",{className:"bg-sky-900 w-1/4 text-center text-white px-2 rounde font-bold tracking-wider shadow-2xl	mx-auto mt-16",children:"More..."})]})})]})]},s.id))})},T=(i="")=>(console.log("You called getProjectById with id: ",i),p.find(n=>n.id===i)),_=()=>{let i=u(),{projectId:n}=f();const{id:s,name:l,description:t,technical__sheet:r,website:c,github:g}=T(n);return a("div",{className:"text-white mx-8 mt-8 text-center animate__animated animate__pulse",children:[e("div",{onClick:()=>{i(-1)},className:"text-left cursor-pointer",children:e("i",{class:"las la-angle-left la-2x"})}),e("h2",{className:"text-center font-medium mb-1 text-xl",children:l}),e("h3",{className:"italic text-center text-sm mb-2 text-gray-300",children:t}),a("a",{href:c,target:"blank",className:"flex justify-center gap-44 mb-2 mt-8 mx-auto",children:[a("div",{className:"flex bg-gray-500 rounded px-2 cursor-pointer",children:[e("i",{class:"las la-share-square la-2x"}),e("p",{className:"mt-1 ml-2 text-sm pt-1",children:"VISIT THE WEBSITE"})]}),e("a",{href:g,target:"_blank",className:"cursor-pointer",children:e("i",{class:"lab la-github la-2x"})})]}),e("img",{className:"border-2 border-white rounded mx-auto",src:`/assets/project${s}.png`}),e("h2",{className:"text-xl font-medium mt-8 mb-4",children:"Technical Sheet"}),e("h3",{className:"text-sm text-gray-200 text-gray-300 mb-4",children:"Code Technologies I got involved while working on this project."}),e("ul",{className:"mt-2",children:Object.values(r).map(m=>e("li",{className:"list-disc list-inside text-gray-300",children:m},s+m))})]})},I=()=>a(x,{children:[e(j,{}),a(b,{className:"bg-deskImage",children:[e(d,{path:"/projects/:projectId",element:e(_,{})}),e(d,{path:"/contact",element:e(v,{})}),e(d,{path:"/projects",element:e(k,{})}),e(d,{path:"/",element:e(w,{})})]})]}),C=()=>e("div",{className:" bg-deskImage bg-center bg-cover bg-fixed bg-black w-screen h-screen select-none",children:e("div",{className:"bg-black/75 bg-cover w-screen h-screen",children:e(I,{})})});y.render(e(C,{}),document.getElementById("root"));
