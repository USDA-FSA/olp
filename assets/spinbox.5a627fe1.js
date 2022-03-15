import{u as h}from"./useErrorState.fdb6210a.js";import{_ as C}from"./index.8a14d8cd.js";import{g as u,j as w,o,f as l,l as i,y as _,A as f,t as b}from"./vendor.85acd1c6.js";function y(s,a=null){return{stepUp:()=>{document.getElementById(s).stepUp()},stepDown:()=>{document.getElementById(s).stepDown()}}}const A={props:{ID:String,INPUT_VALUE:String,LABEL_TITLE:String,ERROR_CLASS:String,INPUT_ERROR_CLASS:String,STEP:String,USE_PREFIX:String,PREFIX:String,USE_SUFFIX:String,SUFFIX:String,USE_ICON:String,ICON_PATH:String,ICON_SIZE_CLASS:String,ARIA_DESCRIBEDBY:String},setup(s,{emit:a}){const e=s.INPUT_ERROR_CLASS?s.INPUT_ERROR_CLASS:u("fsa-input--error"),t=u(!1),S=u(!1),{hasError:c,setHasError:r}=h(),I=u(null),{stepUp:E,stepDown:x}=y(s.ID,s.STEP),d=n=>{a("emitSpin",{id:s.ID,dir:n,val:parseInt(document.getElementById(s.ID).value)})},m=n=>{n=="up"&&E(),n=="down"&&x(),d(n),I.value=parseInt(document.getElementById(s.ID).value)},g=n=>{n.keyCode===38&&n.key=="ArrowUp"&&(n.preventDefault(),E(),d("up")),n.keyCode===40&&n.key=="ArrowDown"&&(n.preventDefault(),x(),d("down"))},v=()=>{let n=parseInt(document.getElementById(s.ID).value);I.value>n?d("up"):d("down"),I.value=n};return w(()=>{t.value=s.USE_PREFIX=="true",S.value=s.USE_SUFFIX=="true"}),{hasError:c,setHasError:r,spin:m,handleKeydown:g,handleBlur:v,hasError:c,inputErrorClass:e,usePrefix:t,useSuffix:S}}},R={class:"fsa-spinbox__number"},U={class:"fsa-affix fsa-affix--fill"},D=["title"],B=["d"],P={key:1},L=["value","step","id","aria-describedby","name"],T=["for","title"],N=["d"],k={key:1},O={class:"fsa-spinbox__actions","aria-hidden":"true"};function F(s,a,e,t,S,c){return o(),l("div",{class:_("fsa-spinbox "+(t.hasError?e.ERROR_CLASS:""))},[i("div",R,[i("span",U,[t.usePrefix?(o(),l("label",{key:0,for:+"-prefix-label",class:"fsa-affix__prefix","aria-hidden":"true",title:e.LABEL_TITLE},[e.USE_ICON=="true"?(o(),l("svg",{key:0,class:_("fsa-icon "+e.ICON_SIZE_CLASS),"aria-hidden":"true",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[i("path",{d:e.ICON_PATH},null,8,B)],2)):f("",!0),t.usePrefix?(o(),l("span",P,b(e.PREFIX),1)):f("",!0)],8,D)):f("",!0),i("input",{onBlur:a[0]||(a[0]=(...r)=>t.handleBlur&&t.handleBlur(...r)),onKeydown:a[1]||(a[1]=(...r)=>t.handleKeydown&&t.handleKeydown(...r)),class:_("fsa-input fsa-field__item fsa-spinbox__input "+(t.usePrefix||t.useSuffix?"fsa-affix__item":"")+(t.hasError?" "+t.inputErrorClass:"")),type:"number",value:e.INPUT_VALUE,step:e.STEP,id:e.ID,"aria-describedby":e.ARIA_DESCRIBEDBY,name:e.ID},null,42,L),t.useSuffix?(o(),l("label",{key:1,for:e.ID+"-suffix-label",class:"fsa-affix__suffix","aria-hidden":"true",title:e.LABEL_TITLE},[e.USE_ICON=="true"?(o(),l("svg",{key:0,class:_("fsa-icon "+e.ICON_SIZE_CLASS),"aria-hidden":"true",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[i("path",{d:e.ICON_PATH},null,8,N)],2)):f("",!0),t.useSuffix?(o(),l("span",k,b(e.SUFFIX),1)):f("",!0)],8,T)):f("",!0)])]),i("div",O,[i("button",{onClick:a[2]||(a[2]=r=>t.spin("up")),tabindex:"-1",class:"fsa-spinbox__btn fsa-spinbox__btn--increment",type:"button","data-behavior":"spinbox-spin",title:"Increase"}),i("button",{onClick:a[3]||(a[3]=r=>t.spin("down")),tabindex:"-1",class:"fsa-spinbox__btn fsa-spinbox__btn--decrement",type:"button","data-behavior":"spinbox-spin",title:"Decrease"})])],2)}var j=C(A,[["render",F]]);export{j as default};