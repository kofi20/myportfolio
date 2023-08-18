"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[413],{2612:function(e,t,a){a.d(t,{Z:function(){return m}});var i=a(2791),r=a(3313),n=a(6408),s=a(184),o=function(e){var t=e.title,a=e.category,i=e.image,r=e.linkTo;return(0,s.jsx)(n.E.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:(0,s.jsx)("a",{href:r,target:"_blank",rel:"noopener noreferrer","aria-label":"Single Project",children:(0,s.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,s.jsx)("img",{src:i,className:"rounded-t-xl border-none",alt:"Single Project",style:{height:"300px",width:"auto"}})}),(0,s.jsxs)("div",{className:"text-center px-4 py-6",children:[(0,s.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),(0,s.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:a})]})]})})})},l=a(5780),c=["Web Application","Mobile Application","UI/UX Design","Data Science & ML","No Code"],d=function(e){var t=e.setSelectProject;return(0,s.jsxs)("select",{onChange:function(e){t(e.target.value)},className:"font-general-medium  px-4 sm:px-6 py-2 border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",children:[(0,s.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),c.map((function(e){return(0,s.jsx)("option",{className:"text-normal sm:text-md",children:e},e)}))]})},m=function(){var e=(0,i.useContext)(l.v),t=e.projects,a=e.searchProject,n=e.setSearchProject,c=e.searchProjectsByTitle,m=e.selectProject,g=e.setSelectProject,x=e.selectProjectsByCategory;return(0,s.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[(0,s.jsx)("div",{className:"text-center",children:(0,s.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),(0,s.jsxs)("div",{className:"mt-10 sm:mt-16",children:[(0,s.jsx)("h3",{className:"font-general-regular  text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3 ",children:"Search projects by title or filter by category"}),(0,s.jsxs)("div",{className:" flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3 ",children:[(0,s.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,s.jsx)("span",{className:" hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer ",children:(0,s.jsx)(r.jRj,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),(0,s.jsx)("input",{onChange:function(e){n(e.target.value)},className:"font-general-medium  pl-3 pr-1 sm:px-4 py-2 border  border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),(0,s.jsx)(d,{setSelectProject:g})]})]}),(0,s.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:m?x.map((function(e){return(0,s.jsx)(o,{title:e.title,category:e.category,image:e.img,linkTo:e.linkTo},e.id)})):a?c.map((function(e){return(0,s.jsx)(o,{title:e.title,category:e.category,image:e.img,linkTo:e.linkTo},e.id)})):t.map((function(e){return(0,s.jsx)(o,{title:e.title,category:e.category,image:e.img,linkTo:e.linkTo},e.id)}))})]})}},5780:function(e,t,a){a.d(t,{v:function(){return m},V:function(){return g}});var i=a(9439),r=a(2791),n=a.p+"static/media/landing.56dac1b5cc253275165b.jpg",s=a.p+"static/media/me.41cb394f77ba02538b7c.jpg",o=a(6566),l=a.p+"static/media/h1.5ab72aede83e3306a0b1.jpg",c=[{id:1,title:"My Portfolio",category:"Web Application",img:s,linkTo:"#",ProjectHeader:{title:"Project Management UI - From Context",publishDate:"Jul 26, 2021",tags:"UI / Frontend"}},{id:2,title:"Crypto App",category:"Mobile Application",img:a.p+"static/media/wallet.89dbae8a25636fee2523.gif",linkTo:"https://github.com/kofi20/landing_page"},{id:3,title:"Movie Streaming Website UI",category:"UI/UX Design",img:a.p+"static/media/movie.f22c50c4c3200a8c392f.jpg",linkTo:"https://www.figma.com/file/bmBvWvsvGMXDvlqU87YiQT/Video-Streaming-Website---Responsive-web-app-prototype-(Community)?type=design&node-id=2%3A1293&mode=design&t=jAxzcOmYVf9iAORG-1"},{id:4,title:"Next Media Dashboard UI",category:"UI/UX Design",img:a.p+"static/media/next.81d219cff729f499502a.jpg",linkTo:"https://www.figma.com/file/nTZmrewx5FYZP5T4qhr8KP/MediaCp-UI?type=design&node-id=35%3A3&mode=design&t=rBpj7mLEV2prkijs-1"},{id:5,title:"Price Forecasting",category:"Data Science & ML",img:o,linkTo:"https://github.com/kofi20/price-forecasting"},{id:6,title:"Landing Page",category:"Web Application",img:n,linkTo:""},{id:7,title:"Taban Pal",category:"No Code",img:a.p+"static/media/tb.a4d76bb2db16ecd8dec0.jpg",linkTo:"https://tabanpal.webflow.io/"},{id:8,title:"Notion Template",category:"No Code",img:a.p+"static/media/an.09bd33672c5e74268c37.jpg",linkTo:"https://rainy-bosworth-094.notion.site/Anaan-ee10f214a98f4157b8abbc83cf949ba9?pvs=4"},{id:9,title:"Movie Recommendation System",category:"Data Science & ML",img:l,linkTo:"https://github.com/kofi20/movie-recommendation-system"}],d=a(184),m=(0,r.createContext)(),g=function(e){var t=(0,r.useState)(c),a=(0,i.Z)(t,2),n=a[0],s=a[1],o=(0,r.useState)(""),l=(0,i.Z)(o,2),g=l[0],x=l[1],p=(0,r.useState)(""),u=(0,i.Z)(p,2),y=u[0],h=u[1],f=n.filter((function(e){return e.title.toLowerCase().includes(g.toLowerCase())||""===g?e:""})),j=n.filter((function(e){return(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(y)}));return(0,d.jsx)(m.Provider,{value:{projects:n,setProjects:s,searchProject:g,setSearchProject:x,searchProjectsByTitle:f,selectProject:y,setSelectProject:h,selectProjectsByCategory:j},children:e.children})}},6762:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var i=a(1087),r=a(9439),n=a(5558),s=a(3313),o=a.p+"static/media/1.5395f925506303aaabea.png",l=a(6408),c=a(184),d=function(){var e=(0,n.Z)();(0,r.Z)(e,1)[0];return(0,c.jsxs)(l.E.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2",children:[(0,c.jsxs)("div",{className:"w-full md:w-1/3 text-left",children:[(0,c.jsx)(l.E.h1,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.1},className:"font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase",children:"Hi, Iam Isadru Santos"}),(0,c.jsx)(l.E.p,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200",children:"A versatile computer scientist experienced in data science, machine learning, and full stack development, driven by a passion for innovative problem-solving."}),(0,c.jsx)(l.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.3},className:"flex justify-center sm:block",children:(0,c.jsxs)("a",{download:"Santos-Resume.pdf",href:"/files/Santos-Resume.pdf",className:"font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500","aria-label":"Download Resume",children:[(0,c.jsx)(s.UJB,{className:"mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"}),(0,c.jsx)("span",{className:"text-sm sm:text-lg font-general-medium duration-100",children:"Download CV"})]})})]}),(0,c.jsx)(l.E.div,{initial:{opacity:0,y:-180},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0",children:(0,c.jsx)("img",{src:o,alt:"Developer",style:{display:"block",margin:"0 auto",marginTop:"-50px",maxWidth:"60%",height:"auto"}})})]})},m=a(2612),g=a(5780),x=a(992),p=function(){return(0,c.jsxs)("div",{className:"container mx-auto",children:[(0,c.jsx)(d,{}),(0,c.jsx)(g.V,{children:(0,c.jsx)(m.Z,{})}),(0,c.jsx)("div",{className:"mt-8 sm:mt-10 flex justify-center",children:(0,c.jsx)(i.rU,{to:"/projects",className:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects",children:(0,c.jsx)(x.Z,{title:"More Projects"})})})]})}},6566:function(e,t,a){e.exports=a.p+"static/media/mobile-project-1.0aa0cb76fed1b95c21d8.jpg"}}]);
//# sourceMappingURL=413.b076efd0.chunk.js.map