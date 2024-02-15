"use strict";(self.webpackChunkprogrammation_ci_docs=self.webpackChunkprogrammation_ci_docs||[]).push([[7889],{9112:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>d,toc:()=>u});var s=i(4848),t=i(8453);const n={sidebar_position:1},o="La demande du client",d={id:"cahier-des-charges/presentation",title:"La demande du client",description:"Nous sommes une entreprise qui propose des solutions p\xe9dagogiques num\xe9riques. Nous souhaitons nous doter d'une version web du jeu du pendu).",source:"@site/docs/cahier-des-charges/presentation.md",sourceDirName:"cahier-des-charges",slug:"/cahier-des-charges/presentation",permalink:"/programmation-ci-docs/fr/docs/cahier-des-charges/presentation",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cahier-des-charges/presentation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Cahier des charges",permalink:"/programmation-ci-docs/fr/docs/category/cahier-des-charges"},next:{title:"Bar\xe8me",permalink:"/programmation-ci-docs/fr/docs/cahier-des-charges/bareme"}},l={},u=[{value:"Principe",id:"principe",level:2},{value:"R\xe9capitulatif",id:"r\xe9capitulatif",level:2}];function a(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"la-demande-du-client",children:"La demande du client"}),"\n",(0,s.jsxs)(r.p,{children:["Nous sommes une entreprise qui propose des solutions p\xe9dagogiques num\xe9riques. Nous souhaitons nous doter d'une version web du ",(0,s.jsx)(r.a,{href:"https://fr.wikipedia.org/wiki/Pendu_(jeu)",children:"jeu du pendu"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"Le jeu devra s'int\xe9grer dans notre environnement technologique existant, ce qui implique :"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["d'\xeatre d\xe9velopp\xe9 en ",(0,s.jsx)(r.strong,{children:"Python 3"})]}),"\n",(0,s.jsxs)(r.li,{children:["d'utiliser le framework ",(0,s.jsx)(r.strong,{children:"Flask"})]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"principe",children:"Principe"}),"\n",(0,s.jsx)(r.p,{children:"Le principe du jeu \xe0 d\xe9velopper est le suivant :"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"Sur la page d'accueil, l'utilisateur est invit\xe9 \xe0 saisir son nom et \xe0 cliquer sur un bouton \"D\xe9marrer\""}),"\n",(0,s.jsx)(r.li,{children:"Le programme tire un mot al\xe9atoire parmi une liste de mots que nous vous fournirons"}),"\n",(0,s.jsx)(r.li,{children:"Le mot tir\xe9 est pr\xe9sent\xe9 \xe0 l'utilisateur sous forme d'indices, c'est \xe0 dire qu'on lui montre le nombre de caract\xe8res \xe0 trouver sans divulger les lettres du mot"}),"\n",(0,s.jsx)(r.li,{children:"L'utilisateur dispose de 5 vies et voit un compteur de ses vies restantes \xe0 l'\xe9cran"}),"\n",(0,s.jsx)(r.li,{children:"L'utilisateur voit une zone de saisie textuelle \xe0 l'\xe9cran"}),"\n",(0,s.jsx)(r.li,{children:'Lorsque l\'utilisateur saisit une lettre dans la zone de saisie, il peut cliquer sur le bouton "Envoyer" (seule la premi\xe8re lettre saisie est prise en compte)'}),"\n",(0,s.jsx)(r.li,{children:"Le programme contr\xf4le la lettre saisie et d\xe9termine si elle fait partie ou non du mot \xe0 deviner"}),"\n",(0,s.jsxs)(r.li,{children:["Le r\xe9sultat est affich\xe9 \xe0 l'utilisateur :","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"si sa tentative est incorrecte, on lui retire une vie et on affiche l'\xe9tat de la potence"}),"\n",(0,s.jsx)(r.li,{children:"si sa tentative est correcte, on ajoute la lettre trouv\xe9e au mot \xe0 deviner"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.li,{children:"Lorsque le compteur de vie est \xe9puis\xe9 ou que le mot est devin\xe9, on affiche le r\xe9sultat et le mot \xe0 deviner \xe0 l'utilisateur"}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"r\xe9capitulatif",children:"R\xe9capitulatif"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\xc9l\xe9ment"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Nom du joueur"})}),(0,s.jsx)(r.td,{children:"On souhaite que le joueur puisse rentrer son nom sur la page d'accueil, lorsqu'il arrive sur le site."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Mot \xe0 deviner"})}),(0,s.jsxs)(r.td,{children:["Chacun des mots \xe0 deviner provient d'un fichier ",(0,s.jsx)(r.em,{children:"dictionnaire"})," qui est fourni au d\xe9veloppeur."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Mot indice"})}),(0,s.jsxs)(r.td,{children:["Le mot \xe0 deviner doit \xeatre pr\xe9sent\xe9 sous forme d'indices au joueur. Par exemple, si le mot est ",(0,s.jsx)(r.code,{children:"\xe2ge"}),", on affichera ",(0,s.jsx)(r.code,{children:"_ _ _"})," au joueur."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Vies"})}),(0,s.jsx)(r.td,{children:"Le joueur dispose de 5 vies par partie. Lorsque le compteur arrive \xe0 0, la partie est perdue. Chaque tentative infructueuse retire 1 vie."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Zone de saisie"})}),(0,s.jsx)(r.td,{children:"Lorsque le joueur d\xe9marre une partie, il dispose d'une zone de saisie pour envoyer la lettre qu'il souhaite deviner."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Indices"})}),(0,s.jsxs)(r.td,{children:["Lorsque le joueur trouve une lettre faisant partie du mot \xe0 devinier, on l'indique dans le mot indice en rempla\xe7ant le ",(0,s.jsx)(r.code,{children:"_"})," par le lettre trouv\xe9e. Par exemple, si le mot est ",(0,s.jsx)(r.code,{children:"\xe2ge"}),", on affichera ",(0,s.jsx)(r.code,{children:"_ g _"})," au joueur qui \xe0 rentr\xe9 la lettre ",(0,s.jsx)(r.code,{children:"g"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"\xc9cran de fin"})}),(0,s.jsx)(r.td,{children:"La partie est termin\xe9e lorsque le nombre de vies tombe \xe0 0 ou si le mot \xe0 deviner est trouv\xe9. On doit afficher si la partie est r\xe9ussie ou perdue \xe0 l'utilisateur et lui proposer de lancer une nouvelle partie."})]})]})]})]})}function c(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,r,i)=>{i.d(r,{R:()=>o,x:()=>d});var s=i(6540);const t={},n=s.createContext(t);function o(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);