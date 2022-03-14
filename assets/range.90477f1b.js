import{_ as H,a as N}from"./index.8a14d8cd.js";import{u as w}from"./useErrorState.fdb6210a.js";import{u as V}from"./usePopoverControls.d469eb65.js";import{h as b,g as c,j as X,r as B,o as l,f as r,l as n,B as L,t as h,A as I,y as C,C as x,k as u}from"./vendor.85acd1c6.js";function y(){let t={};const a=(E,i,_,o)=>{t.low=parseInt(i.value);let R=parseInt(_.value),d=parseInt(o);return E.val+d>=R?(_.value=E.val+d,t.high=parseInt(_.value)):t.high=R,s()},e=(E,i,_,o)=>{t.high=parseInt(_.value);let R=parseInt(i.value),d=parseInt(o);return E.val-d<=R?(i.value=E.val-d,t.low=parseInt(i.value)):t.low=R,s()},s=()=>t;return{setSpinboxLow:a,setSpinboxHigh:e,getRangeValues:s}}const k=b(()=>N(()=>import("./spinbox.5a627fe1.js"),["assets/spinbox.5a627fe1.js","assets/useErrorState.fdb6210a.js","assets/vendor.85acd1c6.js","assets/vendor.af231b2f.css","assets/index.8a14d8cd.js","assets/index.fac3a5f5.css"])),z={props:{ID:String,EXTRA_FIELD_CLASSES:String,REQUIRED:String,RANGE_LABEL:String,HIGH_VALUE:String,HIGH_LABEL_TITLE:String,LOW_VALUE:String,LOW_LABEL_TITLE:String,STEP:String,USE_PREFIX:String,PREFIX:String,USE_SUFFIX:String,SUFFIX:String,USE_ICON:String,ICON_PATH:String,ICON_SIZE_CLASS:String,FIELD_ERROR_CLASS:String,ARIA_REQUIRED:String,ARIA_DESCRIBEDBY:String,HELP_MESSAGE:String,ERROR_MESSAGE:String,HAS_ERROR:String,USE_POPOVER:String,POPOVER_TYPE:String,POPOVER_CLASSES:String,POPOVER_ID:String,POPOVER_HEADER:String},components:{spinbox:k},setup(t,{emit:a}){const e=t.FIELD_ERROR_CLASS?t.FIELD_ERROR_CLASS:c("fsa-field--error"),s=t.INPUT_ERROR_CLASS?t.INPUT_ERROR_CLASS:c("fsa-input--error"),{showPopover:E,hidePopover:i}=V(),{hasError:_,setHasError:o,errorMessage:R,setErrorMessage:d}=w(),{initRange:Ie,setSpinboxLow:v,setSpinboxHigh:U,getRangeValues:Re}=y(),g=c(null),P=c(null),F=S=>A(v,S),T=S=>A(U,S),A=(S,f)=>{let m=S(f,document.getElementById(t.ID+"-low"),document.getElementById(t.ID+"-high"),t.STEP),O=f;O.range=m,a("emitRangeChange",O)},D=S=>{g.value.setHasError(S),P.value.setHasError(S)};return X(()=>{t.HAS_ERROR=="true"&&o(!0)}),{hasError:_,setHasError:o,lowRangeRef:g,highRangeRef:P,hasErrorCaller:D,handleSpinboxLow:F,handleSpinboxHigh:T,fieldErrorClass:e,inputErrorClass:s,showPopover:E,hidePopover:i}}},G=["for","id"],M={key:0,class:"fsa-field__label-desc"},Y={key:1,class:"fsa-field__label-desc fsa-m-l--xxs"},Z=["data-target"],j={key:0,class:"fsa-icon fsa-icon--size-1","aria-hidden":"true",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},W=n("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"},null,-1),Q=[W],q={key:1,class:"fsa-icon fsa-icon--size-1","aria-hidden":"true",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},J=n("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"},null,-1),K=[J],p=["id"],$={class:"fsa-popover__content"},ee={class:"fsa-popover__hd"},te={class:"fsa-level@m fsa-level--justify-between"},ne={class:"fsa-popover__title"},se=n("svg",{class:"fsa-icon fsa-icon--size-2","aria-hidden":"false",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[n("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})],-1),_e=[se],ae={class:"fsa-popover__bd"},Ee=L("Help text body content"),ie={class:"fsa-level"},oe=n("div",null," - ",-1),Se=["id"],le=["id"];function re(t,a,e,s,E,i){const _=B("spinbox");return l(),r("div",{class:C("fsa-field "+(s.hasError?s.fieldErrorClass:"")+" "+e.EXTRA_FIELD_CLASSES)},[n("label",{class:"fsa-field__label",for:e.ID,id:e.ID+"_label"},[L(h(e.RANGE_LABEL)+" ",1),e.REQUIRED=="true"?(l(),r("span",M,"Required")):I("",!0),e.USE_POPOVER=="true"?(l(),r("span",Y,[n("button",{onClick:a[0]||(a[0]=o=>s.showPopover(e.POPOVER_ID)),class:"fsa-btn fsa-btn--flat","data-behavior":"toggle-popover","data-target":e.POPOVER_ID},[e.POPOVER_TYPE=="help"?(l(),r("svg",j,Q)):I("",!0),e.POPOVER_TYPE=="info"?(l(),r("svg",q,K)):I("",!0)],8,Z)])):I("",!0)],8,G),e.USE_POPOVER?(l(),r("div",{key:0,class:C("fsa-popover "+e.POPOVER_CLASSES),id:e.POPOVER_ID,"aria-hidden":"true"},[n("div",$,[n("div",ee,[n("div",te,[n("span",ne,h(e.POPOVER_HEADER),1),n("button",{onClick:a[1]||(a[1]=o=>s.hidePopover(e.POPOVER_ID)),class:"",type:"button"},_e)])]),n("div",ae,[x(t.$slots,"default",{},()=>[Ee])])])],10,p)):I("",!0),n("div",ie,[u(_,{ID:e.ID+"-low",INPUT_VALUE:e.LOW_VALUE,LABEL_TITLE:e.LOW_LABEL_TITLE,HAS_ERROR:e.HAS_ERROR,ERROR_CLASS:"fsa-spinbox--error",INPUT_ERROR_CLASS:"fsa-input--error",STEP:e.STEP,USE_PREFIX:e.USE_PREFIX,PREFIX:e.PREFIX,USE_SUFFIX:e.USE_SUFFIX,SUFFIX:e.SUFFIX,USE_ICON:e.USE_ICON,ICON_PATH:e.ICON_PATH,ICON_SIZE_CLASS:e.ICON_SIZE_CLASS,onEmitSpin:s.handleSpinboxLow,ARIA_DESCRIBEDBY:e.ID+"-low",ref:"lowRangeRef"},null,8,["ID","INPUT_VALUE","LABEL_TITLE","HAS_ERROR","STEP","USE_PREFIX","PREFIX","USE_SUFFIX","SUFFIX","USE_ICON","ICON_PATH","ICON_SIZE_CLASS","onEmitSpin","ARIA_DESCRIBEDBY"]),oe,u(_,{ID:e.ID+"-high",INPUT_VALUE:e.HIGH_VALUE,LABEL_TITLE:e.HIGH_LABEL_TITLE,HAS_ERROR:e.HAS_ERROR,ERROR_CLASS:"fsa-spinbox--error",INPUT_ERROR_CLASS:"fsa-input--error",STEP:e.STEP,USE_PREFIX:e.USE_PREFIX,PREFIX:e.PREFIX,USE_SUFFIX:e.USE_SUFFIX,SUFFIX:e.SUFFIX,USE_ICON:e.USE_ICON,ICON_PATH:e.ICON_PATH,ICON_SIZE_CLASS:e.ICON_SIZE_CLASS,onEmitSpin:s.handleSpinboxHigh,ARIA_DESCRIBEDBY:e.ID+"-high",ref:"highRangeRef"},null,8,["ID","INPUT_VALUE","LABEL_TITLE","HAS_ERROR","STEP","USE_PREFIX","PREFIX","USE_SUFFIX","SUFFIX","USE_ICON","ICON_PATH","ICON_SIZE_CLASS","onEmitSpin","ARIA_DESCRIBEDBY"])]),e.HELP_MESSAGE?(l(),r("span",{key:1,id:e.ID+"__help",class:"fsa-field__help"},h(e.HELP_MESSAGE),9,Se)):I("",!0),s.hasError?(l(),r("span",{key:2,id:e.ID+"__error-message",class:"fsa-field__message",role:"alert"},h(e.ERROR_MESSAGE),9,le)):I("",!0)],2)}var Pe=H(z,[["render",re]]);export{Pe as default};
