import{_ as S,o as v,c as w,a as e,t as o,b as c,d as D,r as U,e as T,w as I,f as O,g as N,h as f,v as q,i as A,u as J,n as _,j as K,p as y,k as P,l as W,F as B,m as R,q as G,s as Q,x as b,y as g,z as X,A as $,B as Y,C as Z,D as ee,E as te}from"./index-a95d3b96.js";import{_ as H,k as se}from"./contact-bottom-00fe31bd.js";/* empty css                                                                     */import{e as oe,s as ae}from"./sweetalert.min-271bc229.js";const le="/assets/herosec_main_photo-41534306.png",ie="/assets/herosec_main_button_svg-02f7eb1d.svg",ne="/assets/2-e430cd3d.jpg",de="/assets/1-74bded77.jpg",re="/assets/3-8078c792.jpg",ce="/assets/combined-service-06e2cf70.jpg",me="/assets/house-aboutus-home-f1e44459.svg",ue="/assets/info-aboutus-home-e515cec5.svg",he={},pe={class:"w-full flex justify-center items-center mb-[5em]"},be={class:"flex w-[1280px] justify-center flex-col items-center max-[1100px]:w-full px-2"},xe={class:"flex items-center justify-center flex-col pb-[25px]"},fe={class:"flex gap-[1em] my-8 flex-row items-center"},_e=e("img",{src:H,alt:"",class:"w-[34px]"},null,-1),ve={class:"rubik-font text-[18px] font-semibold text-[#3A4268]"},we={class:"text-[#082680] text-[36px] font-extrabold flex flex-col text-center max-[640px]:flex max-[640px]:items-center max-[640px]:justify-center max-[302px]:px-2"},ge={class:"font-normal mb-[14px]"},ke={class:"text-center text-[16px] leading-[27px] text-[#3A4268] w-[600px] font-light mt-4 max-[640px]:w-[90%]"},ye={class:"flex gap-[2em] mt-[3em] max-[950px]:flex-col max-[950px]:justify-center max-[950px]:items-center"},$e={class:"w-[340px] h-[320px] box-shadow-aboutus rounded-[10px] flex justify-center items-center flex-col text-center max-[1100px]:w-full max-[950px]:w-[90%] max-[320px]:h-[360px]"},je=e("img",{src:me,alt:"",class:"cssdottedborder mb-[14px]"},null,-1),Ce={class:"text-[#082680] text-[20px] font-bold pb-[17px] mb-[14px] w-[80%]"},Ie={class:"w-[80%] rubik-font text-[#3A4268] text-[14px]"},Le={class:"w-[340px] h-[320px] box-shadow-aboutus rounded-[10px] flex justify-center items-center flex-col text-center max-[1100px]:w-full max-[950px]:w-[90%] max-[320px]:h-[360px]"},Se=e("img",{src:ue,alt:"",class:"cssdottedborder mb-[14px]"},null,-1),De={class:"text-[#082680] text-[20px] font-bold pb-[17px] mb-[14px] w-[80%]"},Te={class:"w-[80%] rubik-font text-[#3A4268] text-[14px]"};function Ae(a,t){return v(),w("div",pe,[e("div",be,[e("div",xe,[e("div",fe,[_e,e("p",ve,o(a.$t("aboutus_service.naslov")),1)]),e("div",we,[c(o(a.$t("aboutus_service.naslov2"))+" ",1),e("small",ge,o(a.$t("aboutus_service.naslov3")),1),e("div",ke,o(a.$t("aboutus_service.naslov4")),1)])]),e("div",ye,[e("div",$e,[je,e("p",Ce,o(a.$t("aboutus_service.opis1_naslov")),1),e("p",Ie,o(a.$t("aboutus_service.opis1_opis")),1)]),e("div",Le,[Se,e("p",De,o(a.$t("aboutus_service.opis3_naslov")),1),e("p",Te,o(a.$t("aboutus_service.opis3_opis")),1)])])])])}const Be=S(he,[["render",Ae]]),M=Symbol("addTab"),E=Symbol("updateTab"),F=Symbol("deleteTab"),V=Symbol("tabsProvider");function j(a,t){const s=G(a,t);if(typeof s>"u")throw new Error(`Could not resolve ${a.description}`);return s}const He=["data-tab-id","aria-hidden"],Me=D({__name:"Tab",props:{panelClass:{default:"tabs-component-panel"},id:{default:void 0},name:null,prefix:{default:""},suffix:{default:""},isDisabled:{type:Boolean,default:!1},navItemClass:{default:void 0},navItemLinkClass:{default:void 0}},setup(a,{expose:t}){const s=a,n=U(!1),l=j(V),x=j(M),h=j(E),p=j(F),r=s.prefix+s.name+s.suffix,m=s.id?s.id:s.name.toLowerCase().replace(/ /g,"-"),i=m+"-pane",u=T(()=>"#"+(s.isDisabled?"":m));return I(()=>l.activeTabHash,()=>{n.value=u.value===l.activeTabHash}),I(()=>Object.assign({},s),()=>{h(m,{name:s.name,header:s.prefix+s.name+s.suffix,isDisabled:s.isDisabled,hash:u.value,index:l.tabs.length,computedId:m,paneId:i,navItemClass:s.navItemClass,navItemLinkClass:s.navItemLinkClass})}),O(()=>{x({name:s.name,header:r,isDisabled:s.isDisabled,hash:u.value,index:l.tabs.length,computedId:m,paneId:i,navItemClass:s.navItemClass,navItemLinkClass:s.navItemLinkClass})}),N(()=>{p(m)}),t({header:r,computedId:m,paneId:i,hash:u,isActive:n}),(k,C)=>f((v(),w("section",{ref:"tab",id:i,"data-tab-id":J(m),"aria-hidden":!n.value,class:_(a.panelClass),role:"tabpanel",tabindex:"-1"},[A(k.$slots,"default")],10,He)),[[q,n.value]])}});class Ee{get(t){const s=localStorage.getItem(t);if(s===null)return null;const n=JSON.parse(s);return n?new Date(n.expires)<new Date?(localStorage.removeItem(t),null):n.value:null}set(t,s,n){const l=new Date().getTime(),x=new Date(l+n*6e4);localStorage.setItem(t,JSON.stringify({value:s,expires:x}))}}const L=new Ee,Fe=["id"],Ve=["aria-controls","aria-selected","href","onClick","innerHTML"],ze=D({__name:"Tabs",props:{id:{default:void 0},cacheLifetime:{default:5},options:{default:()=>({useUrlFragment:!0,defaultTabHash:void 0,storageKey:void 0})},wrapperClass:{default:"tabs-component"},panelsWrapperClass:{default:"tabs-component-panels"},navClass:{default:"tabs-component-tabs"},navItemClass:{default:"tabs-component-tab"},navItemDisabledClass:{default:"is-disabled"},navItemActiveClass:{default:"is-active"},navItemInactiveClass:{default:"is-inactive"},navItemLinkClass:{default:"tabs-component-tab-a"},navItemLinkActiveClass:{default:"is-active"},navItemLinkInactiveClass:{default:"is-inactive"},navItemLinkDisabledClass:{default:"is-disabled"}},emits:["changed","clicked"],setup(a,{expose:t,emit:s}){const n=a,l=K({activeTabHash:"",lastActiveTabHash:"",tabs:[]});y(V,l),y(M,r=>{l.tabs.push(r)}),y(E,(r,m)=>{const i=l.tabs.findIndex(u=>u.computedId===r);m.isActive=l.tabs[i].isActive,l.tabs[i]=m}),y(F,r=>{const m=l.tabs.findIndex(i=>i.computedId===r);l.tabs.splice(m,1)});const x=T(()=>{let r;return n.options.storageKey&&(r=n.options.storageKey),!r&&n.id&&(r=`vue-tabs-component.${n.id}.cache.${window.location.host}${window.location.pathname}`),r||(r=`vue-tabs-component.cache.${window.location.host}${window.location.pathname}`),r}),h=(r,m)=>{m&&!n.options.useUrlFragment&&m.preventDefault();const i=p(r);if(i){if(m&&i.isDisabled){m.preventDefault();return}if(l.lastActiveTabHash===i.hash){s("clicked",{tab:i});return}l.tabs.forEach(u=>{u.isActive=u.hash===i.hash}),s("changed",{tab:i}),l.lastActiveTabHash=l.activeTabHash=i.hash,!(n.cacheLifetime<=0)&&L.set(x.value,i.hash,n.cacheLifetime)}},p=r=>l.tabs.find(m=>m.hash===r);return P(()=>{if(l.tabs.length){if(window.addEventListener("hashchange",()=>h(window.location.hash)),p(window.location.hash)){h(window.location.hash);return}if(n.cacheLifetime>0){const r=L.get(x.value);if(r!==null&&p(r)){h(r);return}}if(n.options.defaultTabHash&&p("#"+n.options.defaultTabHash)){h("#"+n.options.defaultTabHash);return}h(l.tabs[0].hash)}}),t({...W(l),selectTab:h,findTab:p}),(r,m)=>(v(),w("div",{class:_(a.wrapperClass),id:a.id},[e("ul",{role:"tablist",class:_(a.navClass)},[(v(!0),w(B,null,R(l.tabs,(i,u)=>{var k,C;return v(),w("li",{key:u,class:_([(k=i.navItemClass)!=null?k:a.navItemClass,i.isDisabled?a.navItemDisabledClass:"",i.isActive?a.navItemActiveClass:i.isDisabled?"":a.navItemInactiveClass]),role:"presentation"},[e("a",{role:"tab",class:_([(C=i.navItemLinkClass)!=null?C:a.navItemLinkClass,i.isDisabled?a.navItemLinkDisabledClass:"",i.isActive?a.navItemLinkActiveClass:i.isDisabled?"":a.navItemLinkInactiveClass]),"aria-controls":i.paneId,"aria-selected":i.isActive,href:i.hash,onClick:z=>h(i.hash,z),innerHTML:i.header,tabindex:"0"},null,10,Ve)],2)}),128))],2),e("div",{class:_(a.panelsWrapperClass)},[A(r.$slots,"default")],2)],10,Fe))}});const d=a=>(Z("data-v-55e8fde7"),a=a(),ee(),a),Ue=d(()=>e("img",{src:le,alt:"",class:"object-cover w-full h-[1020px]"},null,-1)),Oe={class:"w-full"},Ne={class:"absolute top-[0%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between gap-[0.5em] mt-[40em] w-[1280px] max-[1340px]:w-full max-[1100px]:mt-[0em] max-[1340px]:px-2 max-[1100px]:flex-col max-[1100px]:items-center"},qe={class:"text-white w-[900px] max-[1100px]:w-full max-[1100px]:mt-[80em] max-[754px]:text-center max-[754px]:w-[400px] max-[460px]:w-full"},Je={class:"text-[60px] font-bold leading-[1.2em] max-[754px]:text-[35px]"},Ke={class:"text-[18px] py-8 w-[600px] max-[1100px]:w-full max-[754px]:text-[14px]"},Pe=d(()=>e("div",{id:"dub-arrow"},[e("img",{src:ie,alt:""})],-1)),We={href:"#",class:"font-bold"},Re={class:"bg-linear-css w-[400px] h-[800px] top-[-10em] relative max-[1100px]:top-[25em] max-[1100px]:w-full max-[1100px]:bg-[#007CFB] max-[1100px]:h-auto max-[1100px]:py-8 max-[460px]:w-full"},Ge={class:"mt-[100px] max-[1100px]:mt-[0px] flex px-[30px] text-white flex flex-col"},Qe={class:"text-[24px] font-semibold mb-[24px]"},Xe=te('<option value="" disabled selected hidden data-v-55e8fde7>Pick service*</option><option value="Dubinsko čišcenje tapiciranog namještaja i tepiha" data-v-55e8fde7>Dubinsko čišcenje tapiciranog namještaja i tepiha</option><option value="Čišcenje stanova i kuća" data-v-55e8fde7>Čišcenje stanova i kuća</option><option value="Čišcenje nakon adaptacije i gtađevinski radova" data-v-55e8fde7>Čišcenje nakon adaptacije i gtađevinski radova</option><option value="Čišćenje poslovnih prostora, ureda, firmi, ordinacija...(po dogovoru)" data-v-55e8fde7>Čišćenje poslovnih prostora, ureda, firmi, ordinacija...(po dogovoru)</option><option value="Ostalo" data-v-55e8fde7>Ostalo...</option>',6),Ye=[Xe],Ze={class:"button",id:"button-7",type:"submit",value:"Send"},et={id:"dub-arrow",class:"font-bold"},tt={href:"#",class:"font-bold"},st={class:"max-[1100px]:mt-[30em]"},ot={class:"flex justify-center items-center py-24 bg-gradient-to-b from-blue-50 to-white"},at={class:"flex flex-col items-center w-full max-w-7xl px-4"},lt={class:"flex flex-col md:flex-row md:justify-between w-full gap-6 items-center md:items-start"},it={class:"flex flex-col items-center md:items-start"},nt={class:"rubik-font text-lg font-semibold text-blue-700 flex gap-2 items-center"},dt=d(()=>e("img",{src:H,alt:"Stars Icon",class:"w-8"},null,-1)),rt={class:"text-3xl font-extrabold text-blue-900 mt-4 text-center md:text-left"},ct={class:"font-normal text-xl block mt-2"},mt={class:"w-full md:w-2/5 text-blue-700 rubik-font text-center md:text-left"},ut={class:"py-4 text-sm opacity-70 text-center px-4 text-blue-600"},ht={class:"flex flex-wrap justify-center w-full gap-6 mt-10 mb-24"},pt={class:"bg-white border border-blue-300 rounded-lg shadow hover:shadow-xl transition-shadow duration-300 w-full max-w-sm"},bt=d(()=>e("a",{href:"#"},[e("img",{class:"rounded-t-lg w-full h-48 object-cover",src:ne,alt:"Service 2",loading:"lazy"})],-1)),xt={class:"p-6"},ft={href:"#"},_t={class:"mb-3 text-2xl font-bold text-blue-800"},vt={class:"mb-4 font-normal text-blue-700 space-y-2"},wt=d(()=>e("b",{class:"ml-2"},"13€/h",-1)),gt=d(()=>e("b",{class:"ml-2"},"4€/m²",-1)),kt=d(()=>e("b",{class:"ml-2"},"2€/m²",-1)),yt=d(()=>e("svg",{class:"w-4 h-4 ml-2","aria-hidden":"true",fill:"none",viewBox:"0 0 14 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})],-1)),$t={class:"bg-white border-4 border-blue-500 rounded-lg shadow-lg w-full max-w-sm transform hover:scale-105 transition-transform duration-300"},jt=d(()=>e("a",{href:"#"},[e("img",{class:"rounded-t-lg w-full h-48 object-cover",src:de,alt:"Service 1",loading:"lazy"})],-1)),Ct={class:"p-6"},It={href:"#"},Lt={class:"mb-3 text-2xl font-bold text-blue-800"},St={class:"mb-4 font-normal text-blue-700 space-y-2"},Dt=d(()=>e("b",{class:"ml-2"},"45€",-1)),Tt=d(()=>e("b",{class:"ml-2"},"55€",-1)),At=d(()=>e("svg",{class:"w-4 h-4 ml-2","aria-hidden":"true",fill:"none",viewBox:"0 0 14 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})],-1)),Bt={class:"bg-white border border-blue-300 rounded-lg shadow hover:shadow-xl transition-shadow duration-300 w-full max-w-sm"},Ht=d(()=>e("a",{href:"#"},[e("img",{class:"rounded-t-lg w-full h-48 object-cover",src:re,alt:"Service 3",loading:"lazy"})],-1)),Mt={class:"p-6"},Et={href:"#"},Ft={class:"mb-3 text-2xl font-bold text-blue-800"},Vt={class:"mb-4 font-normal text-blue-700 space-y-2"},zt=d(()=>e("b",{class:"ml-2"},"5€/m²",-1)),Ut=d(()=>e("b",{class:"ml-2"},"4€/m²",-1)),Ot=d(()=>e("svg",{class:"w-4 h-4 ml-2","aria-hidden":"true",fill:"none",viewBox:"0 0 14 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})],-1)),Nt={class:"flex flex-wrap justify-center w-full gap-6"},qt={class:"bg-white border border-blue-300 rounded-lg shadow hover:shadow-xl transition-shadow duration-300 w-full max-w-7xl"},Jt=d(()=>e("a",{href:"#"},[e("img",{class:"rounded-t-lg w-full h-64 object-cover",src:ce,alt:"Combined Services",loading:"lazy"})],-1)),Kt={class:"p-6"},Pt=d(()=>e("a",{href:"#"},[e("h5",{class:"mb-3 text-2xl font-bold text-blue-800"},"OSTALO")],-1)),Wt={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},Rt={class:"text-lg font-semibold text-blue-700 mb-2"},Gt={class:"mb-4 font-normal text-blue-700 space-y-2"},Qt={class:"flex justify-between"},Xt=d(()=>e("b",null,"35€",-1)),Yt={class:"flex justify-between"},Zt=d(()=>e("b",null,"30€",-1)),es={class:"flex justify-between"},ts=d(()=>e("b",null,"15€",-1)),ss={class:"flex justify-between"},os=d(()=>e("b",null,"10€",-1)),as=d(()=>e("h6",{class:"text-lg font-semibold text-blue-700 mb-9"},null,-1)),ls={class:"mb-4 font-normal text-blue-700 space-y-2"},is={class:"flex justify-between"},ns=d(()=>e("b",null,"15€",-1)),ds={class:"flex justify-between"},rs=d(()=>e("b",null,"30€",-1)),cs={class:"flex justify-between"},ms=d(()=>e("b",null,"45€",-1)),us={class:"flex justify-between"},hs=d(()=>e("b",null,"4€/m²",-1)),ps={class:"flex justify-start mt-6"},bs=d(()=>e("svg",{class:"w-4 h-4 ml-2","aria-hidden":"true",fill:"none",viewBox:"0 0 14 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})],-1)),xs={components:{Tabs:ze,Tab:Me},data(){return{ime:"",email:"",poruka:"",brojmobitela:"",usluga:""}},methods:{sendEmail(){const a={ime:this.ime,brojmobitela:this.brojmobitela,email:this.email,usluga:this.usluga,poruka:this.poruka};oe.send("service_clwuk55","template_owzjwz9",a,"6y58hytHJtD9eVBSB").then(t=>{console.log("SUCCESS!",t.text),ae({title:"Success!",text:"Thank you for your message",icon:"success"}).then(function(){location.reload()})},t=>{console.log("FAILED...",t.text)})}}},fs=Object.assign(xs,{__name:"home",setup(a){return(t,s)=>{const n=Q("router-link");return v(),w(B,null,[Ue,e("div",Oe,[e("div",Ne,[e("div",qe,[e("p",Je,o(t.$t("home.naslov_hero_veliki")),1),e("p",Ke,o(t.$t("home.naslov_hero_mali")),1),b(n,{to:"/aboutus",class:"button",id:"button-7"},{default:g(()=>[Pe,e("a",We,o(t.$t("home.hero_button")),1)]),_:1})]),e("div",Re,[e("div",Ge,[e("p",Qe,o(t.$t("home.usluga")),1),e("form",{ref:"form",onSubmit:s[5]||(s[5]=X((...l)=>t.sendEmail&&t.sendEmail(...l),["prevent"]))},[f(e("input",{type:"text",required:"",name:"ime","onUpdate:modelValue":s[0]||(s[0]=l=>t.ime=l),class:"mb-[18px] h-[46px] bg-[#007CFB] border border-[white] py-[6px] px-[22px] text-[15px] w-full text-white rounded-[5px]",placeholder:"Name*"},null,512),[[$,t.ime]]),f(e("input",{type:"text",required:"",name:"brojmobitela","onUpdate:modelValue":s[1]||(s[1]=l=>t.brojmobitela=l),class:"mb-[18px] h-[46px] bg-[#007CFB] border border-[white] py-[6px] px-[22px] text-[15px] w-full text-white rounded-[5px]",placeholder:"Telephone*"},null,512),[[$,t.brojmobitela]]),f(e("input",{type:"text",required:"",name:"email","onUpdate:modelValue":s[2]||(s[2]=l=>t.email=l),class:"mb-[18px] h-[46px] bg-[#007CFB] border border-[white] py-[6px] px-[22px] text-[15px] w-full text-white rounded-[5px]",placeholder:"Email*"},null,512),[[$,t.email]]),f(e("select",{required:"",name:"usluga","onUpdate:modelValue":s[3]||(s[3]=l=>t.usluga=l),class:"mb-[18px] h-[46px] bg-[#007CFB] border border-[white] py-[6px] px-[22px] text-[15px] w-full text-white rounded-[5px]"},Ye,512),[[Y,t.usluga]]),f(e("textarea",{name:"poruka","onUpdate:modelValue":s[4]||(s[4]=l=>t.poruka=l),class:"mb-[18px] h-[100px] max-h-[100px] bg-[#007CFB] border border-[white] py-[15px] px-[22px] text-[15px] w-full text-white rounded-[5px]",placeholder:"Message"},null,512),[[$,t.poruka]]),e("button",Ze,[e("div",et,o(t.$t("home.service_button2")),1),e("a",tt,o(t.$t("home.service_button1")),1)])],544)])])]),e("div",st,[b(Be)]),e("div",ot,[e("div",at,[e("div",lt,[e("div",it,[e("p",nt,[dt,c(" "+o(t.$t("home.info1_naslov1")),1)]),e("p",rt,[c(o(t.$t("home.info1_naslov2"))+" ",1),e("small",ct,o(t.$t("home.info1_naslov3")),1)])]),e("p",mt,o(t.$t("home.info1_naslov4")),1)]),e("p",ut,o(t.$t("home.info1_informativno")),1),e("div",ht,[e("div",pt,[bt,e("div",xt,[e("a",ft,[e("h5",_t,o(t.$t("home.tab_header2")),1)]),e("ul",vt,[e("li",null,[c(o(t.$t("home.tab_header2_desc1"))+" ",1),wt]),e("li",null,[c(o(t.$t("home.tab_header2_desc2"))+" ",1),gt]),e("li",null,[c(o(t.$t("home.tab_header2_desc3"))+" ",1),kt])]),b(n,{to:"/kontakt",class:"inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition"},{default:g(()=>[c(o(t.$t("home.javitese"))+" ",1),yt]),_:1})])]),e("div",$t,[jt,e("div",Ct,[e("a",It,[e("h5",Lt,o(t.$t("home.tab_header1")),1)]),e("ul",St,[e("li",null,[c(o(t.$t("home.tab_header1"))+" ",1),e("p",null,[c(o(t.$t("home.tab_header1_desc2"))+" ",1),Dt]),e("p",null,[c(o(t.$t("home.tab_header1_desc3"))+" ",1),Tt])])]),b(n,{to:"/kontakt",class:"inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition"},{default:g(()=>[c(o(t.$t("home.javitese"))+" ",1),At]),_:1})])]),e("div",Bt,[Ht,e("div",Mt,[e("a",Et,[e("h5",Ft,o(t.$t("home.tab_header3")),1)]),e("ul",Vt,[e("li",null,[c(o(t.$t("home.tab_header3_desc1"))+" 500m²: ",1),zt]),e("li",null,[c(o(t.$t("home.tab_header3_desc2"))+" 500m²: ",1),Ut])]),b(n,{to:"/kontakt",class:"inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition"},{default:g(()=>[c(o(t.$t("home.javitese"))+" ",1),Ot]),_:1})])])]),e("div",Nt,[e("div",qt,[Jt,e("div",Kt,[Pt,e("div",Wt,[e("div",null,[e("h6",Rt,o(t.$t("home.tab_header4")),1),e("ul",Gt,[e("li",Qt,[c(o(t.$t("home.tab_header4_desc1")),1),Xt]),e("li",Yt,[c(o(t.$t("home.tab_header4_desc2")),1),Zt]),e("li",es,[c(o(t.$t("home.tab_header4_desc3")),1),ts]),e("li",ss,[c(o(t.$t("home.tab_header4_desc4")),1),os])])]),e("div",null,[as,e("ul",ls,[e("li",is,[c(o(t.$t("home.tab_header4_desc5")),1),ns]),e("li",ds,[c(o(t.$t("home.tab_header4_desc6")),1),rs]),e("li",cs,[c(o(t.$t("home.tab_header4_desc7")),1),ms]),e("li",us,[c(o(t.$t("home.tab_header4_desc8")),1),hs])])])]),e("div",ps,[b(n,{to:"/kontakt",class:"inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition"},{default:g(()=>[c(o(t.$t("home.javitese"))+" ",1),bs]),_:1})])])])])])]),b(se)])],64)}}}),ks=S(fs,[["__scopeId","data-v-55e8fde7"]]);export{ks as default};