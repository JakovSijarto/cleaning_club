import{_ as D,o as _,c as g,a as e,t as r,b as u,d as A,r as U,e as S,w as L,f as z,g as O,h as w,v as q,i as B,u as P,n as v,j as K,p as y,k as W,l as R,F as H,m as G,q as Z,s as Q,x as m,y as f,z as X,A as j,B as I,C as Y,D as ee}from"./index-1c14a80f.js";import{_ as M,k as te}from"./contact-bottom-ecca2aef.js";/* empty css                                                                     */import{e as ae,s as se}from"./sweetalert.min-271bc229.js";const oe="/cleaning_club/assets/herosec_main_photo-41534306.png",le="/cleaning_club/assets/herosec_main_button_svg-02f7eb1d.svg",ie="/cleaning_club/assets/1-74bded77.jpg",ne="/cleaning_club/assets/2-e430cd3d.jpg",de="/cleaning_club/assets/3-8078c792.jpg",re="/cleaning_club/assets/4-b138b190.jpg",ce="/cleaning_club/assets/nasafilozofija-home-9cdffa99.jpg",pe="/cleaning_club/assets/house-aboutus-home-f1e44459.svg",ue="/cleaning_club/assets/info-aboutus-home-e515cec5.svg",xe={},me={class:"w-full flex justify-center items-center mb-[5em]"},be={class:"flex w-[1280px] justify-center flex-col items-center max-[1100px]:w-full px-2"},he={class:"flex items-center justify-center flex-col pb-[25px]"},fe={class:"flex gap-[1em] my-8 flex-row items-center"},ve=e("img",{src:M,alt:"",class:"w-[34px]"},null,-1),_e={class:"rubik-font text-[18px] font-semibold text-[#3A4268]"},ge={class:"text-[#082680] text-[36px] font-extrabold flex flex-col text-center max-[640px]:flex max-[640px]:items-center max-[640px]:justify-center max-[302px]:px-2"},we={class:"font-normal mb-[14px]"},ke={class:"text-center text-[16px] leading-[27px] text-[#3A4268] w-[600px] font-light mt-4 max-[640px]:w-[90%]"},ye={class:"flex gap-[2em] mt-[3em] max-[950px]:flex-col max-[950px]:justify-center max-[950px]:items-center"},je={class:"w-[340px] h-[320px] box-shadow-aboutus rounded-[10px] flex justify-center items-center flex-col text-center max-[1100px]:w-full max-[950px]:w-[90%] max-[320px]:h-[360px]"},Ce=e("img",{src:pe,alt:"",class:"cssdottedborder mb-[14px]"},null,-1),Ie={class:"text-[#082680] text-[20px] font-bold pb-[17px] mb-[14px] w-[80%]"},$e={class:"w-[80%] rubik-font text-[#3A4268] text-[14px]"},Le={class:"w-[340px] h-[320px] box-shadow-aboutus rounded-[10px] flex justify-center items-center flex-col text-center max-[1100px]:w-full max-[950px]:w-[90%] max-[320px]:h-[360px]"},Te=e("img",{src:ue,alt:"",class:"cssdottedborder mb-[14px]"},null,-1),De={class:"text-[#082680] text-[20px] font-bold pb-[17px] mb-[14px] w-[80%]"},Ae={class:"w-[80%] rubik-font text-[#3A4268] text-[14px]"};function Se(a,o){return _(),g("div",me,[e("div",be,[e("div",he,[e("div",fe,[ve,e("p",_e,r(a.$t("aboutus_service.naslov")),1)]),e("div",ge,[u(r(a.$t("aboutus_service.naslov2"))+" ",1),e("small",we,r(a.$t("aboutus_service.naslov3")),1),e("div",ke,r(a.$t("aboutus_service.naslov4")),1)])]),e("div",ye,[e("div",je,[Ce,e("p",Ie,r(a.$t("aboutus_service.opis1_naslov")),1),e("p",$e,r(a.$t("aboutus_service.opis1_opis")),1)]),e("div",Le,[Te,e("p",De,r(a.$t("aboutus_service.opis3_naslov")),1),e("p",Ae,r(a.$t("aboutus_service.opis3_opis")),1)])])])])}const Be=D(xe,[["render",Se]]),F=Symbol("addTab"),V=Symbol("updateTab"),E=Symbol("deleteTab"),J=Symbol("tabsProvider");function C(a,o){const t=Z(a,o);if(typeof t>"u")throw new Error(`Could not resolve ${a.description}`);return t}const He=["data-tab-id","aria-hidden"],Me=A({__name:"Tab",props:{panelClass:{default:"tabs-component-panel"},id:{default:void 0},name:null,prefix:{default:""},suffix:{default:""},isDisabled:{type:Boolean,default:!1},navItemClass:{default:void 0},navItemLinkClass:{default:void 0}},setup(a,{expose:o}){const t=a,i=U(!1),s=C(J),h=C(F),x=C(V),b=C(E),n=t.prefix+t.name+t.suffix,d=t.id?t.id:t.name.toLowerCase().replace(/ /g,"-"),l=d+"-pane",p=S(()=>"#"+(t.isDisabled?"":d));return L(()=>s.activeTabHash,()=>{i.value=p.value===s.activeTabHash}),L(()=>Object.assign({},t),()=>{x(d,{name:t.name,header:t.prefix+t.name+t.suffix,isDisabled:t.isDisabled,hash:p.value,index:s.tabs.length,computedId:d,paneId:l,navItemClass:t.navItemClass,navItemLinkClass:t.navItemLinkClass})}),z(()=>{h({name:t.name,header:n,isDisabled:t.isDisabled,hash:p.value,index:s.tabs.length,computedId:d,paneId:l,navItemClass:t.navItemClass,navItemLinkClass:t.navItemLinkClass})}),O(()=>{b(d)}),o({header:n,computedId:d,paneId:l,hash:p,isActive:i}),(k,$)=>w((_(),g("section",{ref:"tab",id:l,"data-tab-id":P(d),"aria-hidden":!i.value,class:v(a.panelClass),role:"tabpanel",tabindex:"-1"},[B(k.$slots,"default")],10,He)),[[q,i.value]])}});class Fe{get(o){const t=localStorage.getItem(o);if(t===null)return null;const i=JSON.parse(t);return i?new Date(i.expires)<new Date?(localStorage.removeItem(o),null):i.value:null}set(o,t,i){const s=new Date().getTime(),h=new Date(s+i*6e4);localStorage.setItem(o,JSON.stringify({value:t,expires:h}))}}const T=new Fe,Ve=["id"],Ee=["aria-controls","aria-selected","href","onClick","innerHTML"],Je=A({__name:"Tabs",props:{id:{default:void 0},cacheLifetime:{default:5},options:{default:()=>({useUrlFragment:!0,defaultTabHash:void 0,storageKey:void 0})},wrapperClass:{default:"tabs-component"},panelsWrapperClass:{default:"tabs-component-panels"},navClass:{default:"tabs-component-tabs"},navItemClass:{default:"tabs-component-tab"},navItemDisabledClass:{default:"is-disabled"},navItemActiveClass:{default:"is-active"},navItemInactiveClass:{default:"is-inactive"},navItemLinkClass:{default:"tabs-component-tab-a"},navItemLinkActiveClass:{default:"is-active"},navItemLinkInactiveClass:{default:"is-inactive"},navItemLinkDisabledClass:{default:"is-disabled"}},emits:["changed","clicked"],setup(a,{expose:o,emit:t}){const i=a,s=K({activeTabHash:"",lastActiveTabHash:"",tabs:[]});y(J,s),y(F,n=>{s.tabs.push(n)}),y(V,(n,d)=>{const l=s.tabs.findIndex(p=>p.computedId===n);d.isActive=s.tabs[l].isActive,s.tabs[l]=d}),y(E,n=>{const d=s.tabs.findIndex(l=>l.computedId===n);s.tabs.splice(d,1)});const h=S(()=>{let n;return i.options.storageKey&&(n=i.options.storageKey),!n&&i.id&&(n=`vue-tabs-component.${i.id}.cache.${window.location.host}${window.location.pathname}`),n||(n=`vue-tabs-component.cache.${window.location.host}${window.location.pathname}`),n}),x=(n,d)=>{d&&!i.options.useUrlFragment&&d.preventDefault();const l=b(n);if(l){if(d&&l.isDisabled){d.preventDefault();return}if(s.lastActiveTabHash===l.hash){t("clicked",{tab:l});return}s.tabs.forEach(p=>{p.isActive=p.hash===l.hash}),t("changed",{tab:l}),s.lastActiveTabHash=s.activeTabHash=l.hash,!(i.cacheLifetime<=0)&&T.set(h.value,l.hash,i.cacheLifetime)}},b=n=>s.tabs.find(d=>d.hash===n);return W(()=>{if(s.tabs.length){if(window.addEventListener("hashchange",()=>x(window.location.hash)),b(window.location.hash)){x(window.location.hash);return}if(i.cacheLifetime>0){const n=T.get(h.value);if(n!==null&&b(n)){x(n);return}}if(i.options.defaultTabHash&&b("#"+i.options.defaultTabHash)){x("#"+i.options.defaultTabHash);return}x(s.tabs[0].hash)}}),o({...R(s),selectTab:x,findTab:b}),(n,d)=>(_(),g("div",{class:v(a.wrapperClass),id:a.id},[e("ul",{role:"tablist",class:v(a.navClass)},[(_(!0),g(H,null,G(s.tabs,(l,p)=>{var k,$;return _(),g("li",{key:p,class:v([(k=l.navItemClass)!=null?k:a.navItemClass,l.isDisabled?a.navItemDisabledClass:"",l.isActive?a.navItemActiveClass:l.isDisabled?"":a.navItemInactiveClass]),role:"presentation"},[e("a",{role:"tab",class:v([($=l.navItemLinkClass)!=null?$:a.navItemLinkClass,l.isDisabled?a.navItemLinkDisabledClass:"",l.isActive?a.navItemLinkActiveClass:l.isDisabled?"":a.navItemLinkInactiveClass]),"aria-controls":l.paneId,"aria-selected":l.isActive,href:l.hash,onClick:N=>x(l.hash,N),innerHTML:l.header,tabindex:"0"},null,10,Ee)],2)}),128))],2),e("div",{class:v(a.panelsWrapperClass)},[B(n.$slots,"default")],2)],10,Ve))}});const c=a=>(Y("data-v-092d774d"),a=a(),ee(),a),Ne=c(()=>e("img",{src:oe,alt:"",class:"object-cover w-full h-[1020px]"},null,-1)),Ue={class:"w-full"},ze={class:"absolute top-[0%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between gap-[0.5em] mt-[40em] w-[1280px] max-[1340px]:w-full max-[1100px]:mt-[0em] max-[1340px]:px-2 max-[1100px]:flex-col max-[1100px]:items-center"},Oe={class:"text-white w-[900px] max-[1100px]:w-full max-[1100px]:mt-[80em] max-[754px]:text-center max-[754px]:w-[400px] max-[460px]:w-full"},qe={class:"text-[60px] font-bold leading-[1.2em] max-[754px]:text-[35px]"},Pe={class:"text-[18px] py-8 w-[600px] max-[1100px]:w-full max-[754px]:text-[14px]"},Ke=c(()=>e("div",{id:"dub-arrow"},[e("img",{src:le,alt:""})],-1)),We={href:"#",class:"font-bold"},Re={class:"bg-linear-css w-[400px] h-[800px] top-[-10em] relative max-[1100px]:top-[25em] max-[1100px]:w-full max-[1100px]:bg-[#007CFB] max-[1100px]:h-auto max-[1100px]:py-8 max-[460px]:w-full"},Ge={class:"mt-[100px] max-[1100px]:mt-[0px] flex px-[30px] text-white flex flex-col"},Ze={class:"text-[24px] font-semibold mb-[24px]"},Qe=I('<select required class="mb-[18px] h-[46px] bg-[#007CFB] border border-[white] py-[6px] px-[22px] text-[15px] w-full text-white rounded-[5px]" data-v-092d774d><option value="" disabled selected hidden data-v-092d774d>Pick service*</option><option value="Dubisnko čišcenje tapiciranog namještaja i tepiha" name="usluga" data-v-092d774d>Dubisnko čišcenje tapiciranog namještaja i tepiha</option><option value="Čišcenje stanova i kuća" name="usluga" data-v-092d774d>Čišcenje stanova i kuća</option><option value="Čišcenje nakon adaptacije i gtađevinski radova" name="usluga" data-v-092d774d>Čišcenje nakon adaptacije i gtađevinski radova</option><option value="Čišćenje poslovnih prostora, ureda, firmi, ordinacija...(po dogovoru)" name="usluga" data-v-092d774d>Čišćenje poslovnih prostora, ureda, firmi, ordinacija...(po dogovoru)</option><option value="Ostalo" name="usluga" data-v-092d774d>Ostalo...</option></select>',1),Xe={class:"button",id:"button-7",type:"submit",value:"Send"},Ye={id:"dub-arrow",class:"font-bold"},et={href:"#",class:"font-bold"},tt={class:"max-[1100px]:mt-[30em]"},at={class:"flex justify-center items-center pt-[95px]"},st={class:"flex flex-col items-center w-full max-w-[1200px] px-4"},ot={class:"flex w-full justify-between gap-[1em] items-center max-[1200px]:flex-col max-[1200px]:text-center"},lt={class:"max-[1200px]:flex max-[1200px]:flex-col max-[1200px]:items-center"},it={class:"rubik-font text-[18px] font-semibold text-[#3A4268] flex gap-[1em] items-center"},nt=c(()=>e("img",{src:M,alt:"",class:"w-[34px]"},null,-1)),dt={class:"text-[#082680] text-[36px] font-extrabold flex flex-col text-start mt-[15px] max-[1200px]:text-center"},rt={class:"font-normal mb-[14px]"},ct={class:"w-[430px] text-[#3A4268] rubik-font max-[1200px]:w-[90%] max-[670px]:w-full"},pt=c(()=>e("p",{class:"py-4 text-[15px] opacity-[50%] text-center px-4"},"(Sve cijene su informativnog karaktera. Za točnu cijenu potrebno je napraviti procjenu mjesta predviđenog za čišćenje.)",-1)),ut={class:"flex max-[840px]:flex-col justify-center w-full gap-[2em] items-center mt-[42px] mb-[100px] max-[850px]:mb-[20px]"},xt={class:"bg-white border border-gray-200 rounded-lg h-[500px] max-[440px]:h-auto shadow dark:bg-gray-800 dark:border-gray-700 w-full max-w-[400px]"},mt=c(()=>e("a",{href:"#"},[e("img",{class:"rounded-t-lg w-full",src:ie,alt:""})],-1)),bt={class:"p-5"},ht=I('<a href="#" data-v-092d774d><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" data-v-092d774d>Tapicirani namještaj i tepih</h5></a><ul class="mb-3 font-normal text-white py-4" data-v-092d774d><li data-v-092d774d>Kutna garnitura: <p data-v-092d774d>Mala:<b class="tracking-[1px] pl-2" data-v-092d774d>45€</b></p><p data-v-092d774d>Velika:<b class="tracking-[1px] pl-2" data-v-092d774d>55€</b></p></li></ul>',2),ft=c(()=>e("svg",{class:"rtl:rotate-180 w-3.5 h-3.5 ms-2","aria-hidden":"true",xmlns:"",fill:"none",viewBox:"0 0 14 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})],-1)),vt={class:"bg-white border border-gray-200 rounded-lg h-[500px] max-[440px]:h-auto shadow dark:bg-gray-800 dark:border-gray-700 w-full max-w-[400px] mx-12"},_t=c(()=>e("div",null,[e("img",{class:"rounded-t-lg w-full",src:ne,alt:""})],-1)),gt={class:"p-5"},wt=I('<div data-v-092d774d><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" data-v-092d774d>Čiščenje stanova i kuća </h5></div><ul class="mb-3 font-normal text-white py-4 pt-12 max-[850px]:pt-4" data-v-092d774d><li data-v-092d774d>Čišćenje:<b class="tracking-[1px] pl-2" data-v-092d774d>13€/h</b></li><li data-v-092d774d>Generalno čišćenje:<b class="tracking-[1px] pl-2" data-v-092d774d>4€/m2</b></li><li data-v-092d774d>Prozori:<b class="tracking-[1px] pl-2" data-v-092d774d>2€/m2</b></li></ul>',2),kt=c(()=>e("svg",{class:"rtl:rotate-180 w-3.5 h-3.5 ms-2","aria-hidden":"true",xmlns:"",fill:"none",viewBox:"0 0 14 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})],-1)),yt={class:"bg-white border border-gray-200 h-[500px] max-[440px]:h-auto rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full max-w-[400px]"},jt=c(()=>e("div",null,[e("img",{class:"rounded-t-lg w-full",src:de,alt:""})],-1)),Ct={class:"p-5"},It=c(()=>e("div",null,[e("h5",{class:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},"Čišćenje nakon adaptacije i građevinskih radova")],-1)),$t=c(()=>e("ul",{class:"mb-3 font-normal text-white py-4"},[e("li",null,[u("Prostor do 500m2:"),e("b",{class:"tracking-[1px] pl-2"},"5€/m2")]),e("li",null,[u("Prostor veći od 500m2:"),e("b",{class:"tracking-[1px] pl-2"},"4€/m2")])],-1)),Lt=c(()=>e("svg",{class:"rtl:rotate-180 w-3.5 h-3.5 ms-2","aria-hidden":"true",xmlns:"",fill:"none",viewBox:"0 0 14 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})],-1)),Tt={class:"flex flex-row pb-12 w-[80%] justify-between gap-5 max-[600px]:flex-col max-[600px]:w-full max-[600px]:items-center"},Dt={class:"bg-white border border-gray-200 h-auto max-w-[400px] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full"},At=c(()=>e("div",null,[e("img",{class:"rounded-t-lg w-full",src:re,alt:""})],-1)),St={class:"p-5"},Bt=I('<div data-v-092d774d><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" data-v-092d774d>Namještaj:</h5></div><ul class="mb-3 font-normal text-white py-4" data-v-092d774d><li class="flex justify-between" data-v-092d774d>Trosjed :<b class="tracking-[1px] pl-2" data-v-092d774d>35€</b></li><li class="flex justify-between" data-v-092d774d>Dvosjed:<b class="tracking-[1px] pl-2" data-v-092d774d>30€</b></li><li class="flex justify-between" data-v-092d774d>Fotelja:<b class="tracking-[1px] pl-2" data-v-092d774d>15€</b></li><li class="flex justify-between" data-v-092d774d>Tabure:<b class="tracking-[1px] pl-2" data-v-092d774d>10€</b></li><li class="flex justify-between" data-v-092d774d>Madrac 1 osoba:<b class="tracking-[1px] pl-2" data-v-092d774d>15€</b></li><li class="flex justify-between" data-v-092d774d>Bračni madrac:<b class="tracking-[1px] pl-2" data-v-092d774d>30€</b></li><li class="flex justify-between" data-v-092d774d>Box krevet sa madracem:<b class="tracking-[1px] pl-2" data-v-092d774d>45€</b></li><li class="flex justify-between" data-v-092d774d>Tepih:<b class="tracking-[1px] pl-2" data-v-092d774d>4€/m2</b></li></ul>',2),Ht=c(()=>e("svg",{class:"rtl:rotate-180 w-3.5 h-3.5 ms-2","aria-hidden":"true",xmlns:"",fill:"none",viewBox:"0 0 14 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})],-1)),Mt={class:"bg-white border border-gray-200 h-[500px] max-[440px]:h-auto rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full max-w-[400px]"},Ft=c(()=>e("div",null,[e("img",{class:"rounded-t-lg w-full",src:ce,alt:""})],-1)),Vt={class:"p-5"},Et=c(()=>e("div",null,[e("h5",{class:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},"Ostalo")],-1)),Jt=c(()=>e("ul",{class:"mb-3 font-normal text-white py-4"},[e("li",null,"Čišćenje poslovnih prostora, ureda, firmi, ordinacija po dogovoru")],-1)),Nt=c(()=>e("svg",{class:"rtl:rotate-180 w-3.5 h-3.5 ms-2","aria-hidden":"true",xmlns:"",fill:"none",viewBox:"0 0 14 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})],-1)),Ut={components:{Tabs:Je,Tab:Me},data(){return{ime:"",email:"",poruka:"",brojmobitela:""}},methods:{sendEmail(){ae.sendForm("service_clwuk55","template_owzjwz9",this.$refs.form,"6y58hytHJtD9eVBSB").then(a=>{console.log("SUCCESS!",a.text),se({title:"Uspješno!",text:"Hvala Na poruci",type:"success"}).then(function(){location.reload()})},a=>{console.log("FAILED...",a.text)})}}},zt=Object.assign(Ut,{__name:"home",setup(a){return(o,t)=>{const i=Q("router-link");return _(),g(H,null,[Ne,e("div",Ue,[e("div",ze,[e("div",Oe,[e("p",qe,r(o.$t("home.naslov_hero_veliki")),1),e("p",Pe,r(o.$t("home.naslov_hero_mali")),1),m(i,{to:"/aboutus",class:"button",id:"button-7"},{default:f(()=>[Ke,e("a",We,r(o.$t("home.hero_button")),1)]),_:1})]),e("div",Re,[e("div",Ge,[e("p",Ze,r(o.$t("home.usluga")),1),e("form",{ref:"form",onSubmit:t[4]||(t[4]=X((...s)=>o.sendEmail&&o.sendEmail(...s),["prevent"]))},[w(e("input",{type:"text",required:"",name:"ime","onUpdate:modelValue":t[0]||(t[0]=s=>o.ime=s),class:"mb-[18px] h-[46px] bg-[#007CFB] border border-[white] py-[6px] px-[22px] text-[15px] w-full text-white rounded-[5px]",placeholder:"Name*"},null,512),[[j,o.ime]]),w(e("input",{type:"text",required:"",name:"brojmobitela","onUpdate:modelValue":t[1]||(t[1]=s=>o.brojmobitela=s),class:"mb-[18px] h-[46px] bg-[#007CFB] border border-[white] py-[6px] px-[22px] text-[15px] w-full text-white rounded-[5px]",placeholder:"Telephone*"},null,512),[[j,o.brojmobitela]]),w(e("input",{type:"text",required:"",name:"email","onUpdate:modelValue":t[2]||(t[2]=s=>o.email=s),class:"mb-[18px] h-[46px] bg-[#007CFB] border border-[white] py-[6px] px-[22px] text-[15px] w-full text-white rounded-[5px]",placeholder:"Email*"},null,512),[[j,o.email]]),Qe,w(e("textarea",{name:"poruka",id:"","onUpdate:modelValue":t[3]||(t[3]=s=>o.poruka=s),class:"mb-[18px] h-[100px] max-h-[100px] bg-[#007CFB] border border-[white] py-[15px] px-[22px] text-[15px] w-full text-white rounded-[5px]",placeholder:"Message"},null,512),[[j,o.poruka]]),e("button",Xe,[e("div",Ye,r(o.$t("home.service_button2")),1),e("a",et,r(o.$t("home.service_button1")),1)])],544)])])]),e("div",tt,[m(Be)]),e("div",at,[e("div",st,[e("div",ot,[e("div",lt,[e("p",it,[nt,u(r(o.$t("home.info1_naslov1")),1)]),e("p",dt,[u(r(o.$t("home.info1_naslov2"))+" ",1),e("small",rt,r(o.$t("home.info1_naslov3")),1)])]),e("p",ct,r(o.$t("home.info1_naslov4")),1)]),pt,e("div",ut,[e("div",xt,[mt,e("div",bt,[ht,m(i,{to:"/kontakt",class:"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},{default:f(()=>[u(" Javite se "),ft]),_:1})])]),e("div",vt,[_t,e("div",gt,[wt,m(i,{to:"/kontakt",class:"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},{default:f(()=>[u(" Javite se "),kt]),_:1})])]),e("div",yt,[jt,e("div",Ct,[It,$t,m(i,{to:"/kontakt",class:"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},{default:f(()=>[u(" Javite se "),Lt]),_:1})])])]),e("div",Tt,[e("div",Dt,[At,e("div",St,[Bt,m(i,{to:"/kontakt",class:"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},{default:f(()=>[u(" Javite se "),Ht]),_:1})])]),e("div",Mt,[Ft,e("div",Vt,[Et,Jt,m(i,{to:"/kontakt",class:"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},{default:f(()=>[u(" Javite se "),Nt]),_:1})])])])])]),m(te)])],64)}}}),Wt=D(zt,[["__scopeId","data-v-092d774d"]]);export{Wt as default};
