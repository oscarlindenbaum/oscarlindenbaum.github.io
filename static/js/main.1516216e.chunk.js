(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e){e.exports={name:"About Me",icon:"BiCool",child:[{name:"Medium Posts",icon:"medium",product:[{name:"Tr0ll",link:"https://medium.com/@loscarrubberemail/tr0ll-machine-write-up-oscar-l-868543b061a1",icon:"BiLink"},{name:"VTCSEC",link:"https://medium.com/@loscarrubberemail/vtcsec-write-up-oscar-l-b4619813061b",icon:"BiLink"}]},{name:"Documentation",icon:"BiLibrary",product:[{name:"DragonSkulle",link:"https://github.com/olindenbaum/static/blob/main/DragonSkulleDocumentation.pdf",icon:"BiBook"},{name:"Noteswitch",link:"https://github.com/olindenbaum/static/blob/main/Noteswitch%20NEA.pdf",icon:"BiBook"}]}],parent:[{name:"Repos",icon:"github",link:"https://github.com/olindenbaum",child:[{name:"DragonSkulle",link:"https://github.com/olindenbaum/dragonskulle",icon:"BiGitBranch",child:{name:"Documentation",link:"https://github.com/olindenbaum/static/",icon:"BiGitBranch"}},{name:"SWA",link:"https://github.com/swauk",icon:"BiGitBranch"}]},{name:"Linkedin",icon:"linkedin",link:"https://uk.linkedin.com/in/oscarlindenbaum"}]}},50:function(e,n,t){e.exports=t(76)},58:function(e,n,t){},76:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(39),i=t.n(r),c=(t(58),t(32)),l=t(21),u=t(22),s=t.n(u),m=t(105),d=t(106),p=t(103),b=t(46),h=t.n(b),E=t(107),f=t(99),g=t(40),w=t(36),k=t(95),v=t(74),C=t(100),B=t(41),y=t(104),L=Object(k.a)(function(e){return{root:{background:"white",display:"inline-block",borderRadius:16},expand:{transform:"rotate(0deg)",marginTop:-10,marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.short})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:"#ECECF4"}}});function O(e){var n=e.org,t=e.onCollapse,a=e.collapsed,r=L();return o.a.createElement(m.a,{variant:"outlined",className:r.root,style:{backgroundColor:"white"}},o.a.createElement(y.a,{onClick:function(){return n.link&&window.open(n.link,"_blank")}},o.a.createElement(d.a,{avatar:o.a.createElement(f.a,{style:{cursor:"pointer"},color:"secondary",anchorOrigin:{vertical:"bottom",horizontal:"right"},showZero:!0,invisible:!a,overlap:"circular",badgeContent:s.a.size(n.organizationChildRelationship),onClick:t},o.a.createElement(z,{classes:r,custom:o.a.createElement(S,{name:n.icon?n.icon:null})})),title:n.name})))}function z(e){var n=e.classes,t=e.custom;return o.a.createElement(E.a,{className:n.avatar},t)}function j(e){var n=e.a,t=L();return o.a.createElement(m.a,{variant:"outlined",className:t.root,style:{cursor:"pointer"}},o.a.createElement(y.a,{onClick:function(){return n.link&&window.open(n.link,"_blank")}},o.a.createElement(d.a,{avatar:o.a.createElement(z,{classes:t,custom:o.a.createElement(S,{name:n.icon?n.icon:null})}),title:n.name})))}var S=function(e){var n=e.name,t=w[n];return""!==n&&n?t?o.a.createElement(t,null):o.a.createElement(B.SocialIcon,{network:n}):o.a.createElement(h.a,{color:"primary"})};function F(e){var n=e.p,t=L();return o.a.createElement(m.a,{variant:"outlined",className:t.root},o.a.createElement(y.a,{onClick:function(){return n.link&&window.open(n.link,"_blank")}},o.a.createElement(d.a,{avatar:o.a.createElement(f.a,{style:{cursor:"pointer"},color:"secondary",anchorOrigin:{vertical:"bottom",horizontal:"right"},showZero:!0,overlap:"circular"},o.a.createElement(z,{classes:L(),custom:o.a.createElement(S,{name:n.icon?n.icon:null})})),title:n.name})))}function R(e){var n=e.o,t=e.parent,a=o.a.useState(n.collapsed),r=Object(c.a)(a,2),i=r[0],u=r[1],m=function(){u(!i)};o.a.useEffect(function(){n.collapsed=i});var d=t?l.b:function(e){return o.a.createElement(l.a,Object.assign({},e,{lineWidth:"2px",lineColor:"#bbc",lineBorderRadius:"12px"}),e.children)};return i?o.a.createElement(d,{label:o.a.createElement(O,{org:n,onCollapse:m,collapsed:i})}):o.a.createElement(d,{label:o.a.createElement(O,{org:n,onCollapse:m,collapsed:i})},s.a.map(n.child,function(e){return o.a.createElement(l.b,{label:o.a.createElement(j,{a:e})},s.a.map(e.product,function(e){return o.a.createElement(l.b,{label:o.a.createElement(F,{p:e})})}))}),s.a.map(n.parent,function(e){return o.a.createElement(R,{o:e,parent:n})}))}var x=Object(v.a)({palette:{background:"#ECECF4"},fontFamily:"Roboto, sans-serif"});function D(e){var n=Object(a.useState)(window.innerWidth),t=Object(c.a)(n,2),r=t[0],i=t[1],l=function(){i(window.innerWidth)};Object(a.useEffect)(function(){return window.addEventListener("resize",l),function(){window.removeEventListener("resize",l)}},[]);var u=function(){return window.matchMedia("(orientation:landscape)").matches},s=Object(a.useState)(u()?"landscape":"portrait"),m=Object(c.a)(s,2),d=(m[0],m[1]),b=function(){clearTimeout(window.resizeLag),window.resizeLag=setTimeout(function(){delete window.resizeLag,d(u()?"landscape":"portrait")},200)};Object(a.useEffect)(function(){return b(),window.addEventListener("resize",b),function(){return window.removeEventListener("resize",b)}},[]);var h=r<=768,E=w.BiRotateRight;return h&&!u()?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}},o.a.createElement(E,{size:50}),o.a.createElement("h3",null,"Please rotate your device to view the tree."))):o.a.createElement(C.a,{theme:x},o.a.createElement(p.a,{bgcolor:"background",padding:4,width:"80vw"},o.a.createElement(R,{o:g})))}var N=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,101)).then(function(n){var t=n.getCLS,a=n.getFID,o=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),a(e),o(e),r(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(D,null))),N()}},[[50,3,2]]]);
//# sourceMappingURL=main.1516216e.chunk.js.map