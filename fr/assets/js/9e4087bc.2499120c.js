"use strict";(self.webpackChunkprogrammation_ci_docs=self.webpackChunkprogrammation_ci_docs||[]).push([[2711],{9331:(e,r,a)=>{a.r(r),a.d(r,{default:()=>h});a(6540);var s=a(5489),t=a(1312),i=a(1003),c=a(8244),n=a(1107),l=a(4848);function o(e){let{year:r,posts:a}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.A,{as:"h3",id:r,children:r}),(0,l.jsx)("ul",{children:a.map((e=>(0,l.jsx)("li",{children:(0,l.jsxs)(s.A,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function d(e){let{years:r}=e;return(0,l.jsx)("section",{className:"margin-vert--lg",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:r.map(((e,r)=>(0,l.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,l.jsx)(o,{...e})},r)))})})})}function h(e){let{archive:r}=e;const a=(0,t.T)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),s=(0,t.T)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),o=function(e){const r=e.reduce(((e,r)=>{const a=r.metadata.date.split("-")[0],s=e.get(a)??[];return e.set(a,[r,...s])}),new Map);return Array.from(r,(e=>{let[r,a]=e;return{year:r,posts:a}}))}(r.blogPosts);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.be,{title:a,description:s}),(0,l.jsxs)(c.A,{children:[(0,l.jsx)("header",{className:"hero hero--primary",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(n.A,{as:"h1",className:"hero__title",children:a}),(0,l.jsx)("p",{className:"hero__subtitle",children:s})]})}),(0,l.jsx)("main",{children:o.length>0&&(0,l.jsx)(d,{years:o})})]})]})}}}]);