"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[832],{832:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r=t(9434),i=t(1295),a=t(4087),l=t(9229),o=t(6564),s=t(5029),u=t(4942),c=t(1413),d=t(9439),p=t(2791),m={email:"",password:""},f=t(2361),h=t(5420),v=t(2701),x=t(4585),Z=t(6069),g=t(311),j=t(7806),I=t(4224),y=t(184),N=function(e){var n=e.onSubmit,t=(0,p.useState)((0,c.Z)({},m)),r=(0,d.Z)(t,2),i=r[0],a=r[1],l=(0,p.useState)(!1),o=(0,d.Z)(l,2),s=o[0],N=o[1],w=(0,p.useCallback)((function(e){var n=e.target,t=n.name,r=n.value;a((function(e){return(0,c.Z)((0,c.Z)({},e),{},(0,u.Z)({},t,r))}))}),[a]),b=i.email,_=i.password;return(0,y.jsx)("form",{onSubmit:function(e){e.preventDefault(),n((0,c.Z)({},i)),a((0,c.Z)({},m))},children:(0,y.jsxs)(v.NI,{boxSize:"400",display:"flex",flexDirection:"column",isRequired:!0,children:[(0,y.jsx)(x.l,{mt:"4",htmlFor:"email",children:"Email"}),(0,y.jsx)(Z.I,{focusBorderColor:"green.300",id:"email",type:"email",placeholder:"Enter email",onChange:w,value:b,name:"email",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",title:"Password must be include @  and ."}),(0,y.jsx)(x.l,{mt:"4",htmlFor:"password",children:"Password"}),(0,y.jsxs)(g.B,{size:"md",children:[(0,y.jsx)(Z.I,{focusBorderColor:"green.300",id:"password",pr:"4.5rem",type:s?"text":"password",placeholder:"Enter password",onChange:w,value:_,name:"password",pattern:"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{7,}$",title:"Password must be at least 7 characters long, include letters and numbers"}),(0,y.jsx)(j.x,{width:"4.5rem",children:(0,y.jsx)(I.z,{h:"1.75rem",size:"sm",onClick:function(){return N(!s)},children:s?(0,y.jsx)(f.t,{}):(0,y.jsx)(h.O,{})})})]}),(0,y.jsx)(I.z,{type:"submit",mr:"auto",ml:"auto",mt:"10",colorScheme:"green",children:"Login"})]})})},w=t(9869),b=function(){var e=(0,i.p)(),n=(0,r.v9)(w.xU),t=(0,r.I0)();return(0,y.jsxs)(a.xu,{mt:"60px",display:"flex",alignItems:"center",flexDirection:"column",children:[n&&(0,y.jsx)(o.Z,{color:"#007D34",cssOverride:{position:"absolute",display:"block"},size:100}),(0,y.jsx)(l.x,{textAlign:"center",fontSize:"22",mb:"5",fontWeight:"500",children:"Login"}),(0,y.jsx)(N,{onSubmit:function(n){t((0,s.jL)(n)).unwrap().then((function(){e({description:"You are successfully logged in",position:"top",status:"success"})})).catch((function(){return e({description:"Something went wrong...Try reloading the page and enter valid email, password",position:"top",status:"error"})}))}})]})}},4585:function(e,n,t){t.d(n,{l:function(){return m}});var r=t(1413),i=t(5987),a=t(2701),l=t(7872),o=t(9084),s=t(2996),u=t(2952),c=t(6992),d=t(184),p=["className","children","requiredIndicator","optionalIndicator"],m=(0,l.G)((function(e,n){var t,l=(0,o.mq)("FormLabel",e),m=(0,s.Lr)(e),h=(m.className,m.children),v=m.requiredIndicator,x=void 0===v?(0,d.jsx)(f,{}):v,Z=m.optionalIndicator,g=void 0===Z?null:Z,j=(0,i.Z)(m,p),I=(0,a.NJ)(),y=null!=(t=null==I?void 0:I.getLabelProps(j,n))?t:(0,r.Z)({ref:n},j);return(0,d.jsxs)(u.m.label,(0,r.Z)((0,r.Z)({},y),{},{className:(0,c.cx)("chakra-form__label",m.className),__css:(0,r.Z)({display:"block",textAlign:"start"},l),children:[h,(null==I?void 0:I.isRequired)?x:g]}))}));m.displayName="FormLabel";var f=(0,l.G)((function(e,n){var t=(0,a.NJ)(),i=(0,a.e)();if(!(null==t?void 0:t.isRequired))return null;var l=(0,c.cx)("chakra-form__required-indicator",e.className);return(0,d.jsx)(u.m.span,(0,r.Z)((0,r.Z)({},null==t?void 0:t.getRequiredIndicatorProps(e,n)),{},{__css:i.requiredIndicator,className:l}))}));f.displayName="RequiredIndicator"},5903:function(e,n,t){t.d(n,{I:function(){return s}});var r=t(1413),i=t(4363),a=t(7872),l=t(2791),o=t(184);function s(e){var n=e.viewBox,t=void 0===n?"0 0 24 24":n,s=e.d,u=e.displayName,c=e.defaultProps,d=void 0===c?{}:c,p=l.Children.toArray(e.path),m=(0,a.G)((function(e,n){return(0,o.jsx)(i.J,(0,r.Z)((0,r.Z)((0,r.Z)({ref:n,viewBox:t},d),e),{},{children:p.length?p:(0,o.jsx)("path",{fill:"currentColor",d:s})}))}));return m.displayName=u,m}},2361:function(e,n,t){t.d(n,{t:function(){return a}});var r=t(5903),i=t(184),a=(0,r.I)({displayName:"ViewOffIcon",path:(0,i.jsxs)("g",{fill:"currentColor",children:[(0,i.jsx)("path",{d:"M23.2,10.549a20.954,20.954,0,0,0-4.3-3.6l4-3.995a1,1,0,1,0-1.414-1.414l-.018.018a.737.737,0,0,1-.173.291l-19.5,19.5c-.008.007-.018.009-.026.017a1,1,0,0,0,1.631,1.088l4.146-4.146a11.26,11.26,0,0,0,4.31.939h.3c4.256,0,8.489-2.984,11.051-5.8A2.171,2.171,0,0,0,23.2,10.549ZM16.313,13.27a4.581,4.581,0,0,1-3,3.028,4.3,4.3,0,0,1-3.1-.19.253.253,0,0,1-.068-.407l5.56-5.559a.252.252,0,0,1,.407.067A4.3,4.3,0,0,1,16.313,13.27Z"}),(0,i.jsx)("path",{d:"M7.615,13.4a.244.244,0,0,0,.061-.24A4.315,4.315,0,0,1,7.5,12,4.5,4.5,0,0,1,12,7.5a4.276,4.276,0,0,1,1.16.173.244.244,0,0,0,.24-.062l1.941-1.942a.254.254,0,0,0-.1-.421A10.413,10.413,0,0,0,12,4.75C7.7,4.692,3.4,7.7.813,10.549a2.15,2.15,0,0,0-.007,2.9,21.209,21.209,0,0,0,3.438,3.03.256.256,0,0,0,.326-.029Z"})]})})},5420:function(e,n,t){t.d(n,{O:function(){return a}});var r=t(5903),i=t(184),a=(0,r.I)({displayName:"ViewIcon",path:(0,i.jsxs)("g",{fill:"currentColor",children:[(0,i.jsx)("path",{d:"M23.432,10.524C20.787,7.614,16.4,4.538,12,4.6,7.6,4.537,3.213,7.615.568,10.524a2.211,2.211,0,0,0,0,2.948C3.182,16.351,7.507,19.4,11.839,19.4h.308c4.347,0,8.671-3.049,11.288-5.929A2.21,2.21,0,0,0,23.432,10.524ZM7.4,12A4.6,4.6,0,1,1,12,16.6,4.6,4.6,0,0,1,7.4,12Z"}),(0,i.jsx)("circle",{cx:"12",cy:"12",r:"2"})]})})},311:function(e,n,t){t.d(n,{B:function(){return I},m:function(){return j}});var r=t(1413),i=t(5987),a=t(9439),l=t(9886),o=t(7200),s=t(7872),u=t(9084),c=t(2996),d=t(2952),p=t(6992),m=t(5246),f=t(2791),h=t(184),v=["children","className"],x=(0,l.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),Z=(0,a.Z)(x,2),g=Z[0],j=Z[1],I=(0,s.G)((function(e,n){var t=(0,u.jC)("Input",e),a=(0,c.Lr)(e),l=a.children,s=a.className,x=(0,i.Z)(a,v),Z=(0,p.cx)("chakra-input__group",s),j={},I=(0,o.W)(l),y=t.field;I.forEach((function(e){var n,r;t&&(y&&"InputLeftElement"===e.type.id&&(j.paddingStart=null!=(n=y.height)?n:y.h),y&&"InputRightElement"===e.type.id&&(j.paddingEnd=null!=(r=y.height)?r:y.h),"InputRightAddon"===e.type.id&&(j.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(j.borderStartRadius=0))}));var N=I.map((function(n){var t,r,i=(0,m.oA)({size:(null==(t=n.props)?void 0:t.size)||e.size,variant:(null==(r=n.props)?void 0:r.variant)||e.variant});return"Input"!==n.type.id?(0,f.cloneElement)(n,i):(0,f.cloneElement)(n,Object.assign(i,j,n.props))}));return(0,h.jsx)(d.m.div,(0,r.Z)((0,r.Z)({className:Z,ref:n,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate"},"data-group":!0},x),{},{children:(0,h.jsx)(g,{value:t,children:N})}))}));I.displayName="InputGroup"},6069:function(e,n,t){t.d(n,{I:function(){return m}});var r=t(1413),i=t(5987),a=t(2657),l=t(7872),o=t(9084),s=t(2996),u=t(2952),c=t(6992),d=t(184),p=["htmlSize"],m=(0,l.G)((function(e,n){var t=e.htmlSize,l=(0,i.Z)(e,p),m=(0,o.jC)("Input",l),f=(0,s.Lr)(l),h=(0,a.Y)(f),v=(0,c.cx)("chakra-input",e.className);return(0,d.jsx)(u.m.input,(0,r.Z)((0,r.Z)({size:t},h),{},{__css:m.field,ref:n,className:v}))}));m.displayName="Input",m.id="Input"},7806:function(e,n,t){t.d(n,{Z:function(){return v},x:function(){return x}});var r=t(4942),i=t(1413),a=t(5987),l=t(311),o=t(2952),s=t(7872),u=t(6992),c=t(184),d=["placement"],p=["className"],m=["className"],f=(0,o.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),h=(0,s.G)((function(e,n){var t,o,s,u=e.placement,p=void 0===u?"left":u,m=(0,a.Z)(e,d),h=(0,l.m)(),v=h.field,x="left"===p?"insetStart":"insetEnd",Z=(0,i.Z)((t={},(0,r.Z)(t,x,"0"),(0,r.Z)(t,"width",null!=(o=null==v?void 0:v.height)?o:null==v?void 0:v.h),(0,r.Z)(t,"height",null!=(s=null==v?void 0:v.height)?s:null==v?void 0:v.h),(0,r.Z)(t,"fontSize",null==v?void 0:v.fontSize),t),h.element);return(0,c.jsx)(f,(0,i.Z)({ref:n,__css:Z},m))}));h.id="InputElement",h.displayName="InputElement";var v=(0,s.G)((function(e,n){var t=e.className,r=(0,a.Z)(e,p),l=(0,u.cx)("chakra-input__left-element",t);return(0,c.jsx)(h,(0,i.Z)({ref:n,placement:"left",className:l},r))}));v.id="InputLeftElement",v.displayName="InputLeftElement";var x=(0,s.G)((function(e,n){var t=e.className,r=(0,a.Z)(e,m),l=(0,u.cx)("chakra-input__right-element",t);return(0,c.jsx)(h,(0,i.Z)({ref:n,placement:"right",className:l},r))}));x.id="InputRightElement",x.displayName="InputRightElement"},7200:function(e,n,t){t.d(n,{W:function(){return i}});var r=t(2791);function i(e){return r.Children.toArray(e).filter((function(e){return(0,r.isValidElement)(e)}))}},1295:function(e,n,t){t.d(n,{p:function(){return s}});var r=t(1413),i=t(4125),a=t(5581),l=t(3142),o=t(2791);function s(e){var n=(0,l.uP)().theme,t=(0,i.OX)();return(0,o.useMemo)((function(){return(0,a.Cj)(n.direction,(0,r.Z)((0,r.Z)({},t),e))}),[e,n.direction,t])}}}]);
//# sourceMappingURL=832.0020af55.chunk.js.map