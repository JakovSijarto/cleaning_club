import{_ as p,o as r,c as m,a as e,t as d,z as u,h as l,A as i,x as c,F as x,E as f,C as v,D as h}from"./index-6b651989.js";import{_}from"./herosec_about_kontakt-10b415bc.js";import{k as b}from"./contact-bottom-e5c40474.js";import{e as k,s as g}from"./sweetalert.min-271bc229.js";const n=s=>(v("data-v-2d8e94d5"),s=s(),h(),s),w={class:"pt-[112px] max-[571px]:pt-[81px]"},j={class:"w-full flex justify-center items-center bg-black"},y=n(()=>e("img",{src:_,alt:"",class:"h-[300px] w-full object-cover opacity-[0.4]"},null,-1)),S={class:"absolute text-[60px] font-bold text-white max-[310px]:text-[40px] tracking-[5px] text-center"},E={class:"h-[50em] w-full relative z-3 flex justify-center items-center max-[630px]:h-[60em]"},V={class:"font-bold mb-[50px] leading-[3rem] text-[#3A4268] text-[1.5em] font-extrabold max-[330px]:text-[1.3em]"},z={class:"flex justify-between max-[630px]:flex-col"},D={class:"w-[49%] max-[630px]:w-full"},I=f('<select required name="usluga" class="w-[49%] max-[630px]:w-full border-b-2 border-[#3A4268] py-[15px] max-[630px]:pt-[25px]" data-v-2d8e94d5><option value="" disabled selected hidden data-v-2d8e94d5>Izaberi uslugu*</option><option value="" disabled selected hidden data-v-2d8e94d5>Pick service*</option><option value="Dubisnko čišcenje tapiciranog namještaja i tepiha" name="usluga" data-v-2d8e94d5>Dubisnko čišcenje tapiciranog namještaja i tepiha</option><option value="Čišcenje stanova i kuća" name="usluga" data-v-2d8e94d5>Čišcenje stanova i kuća</option><option value="Čišcenje nakon adaptacije i gtađevinski radova" name="usluga" data-v-2d8e94d5>Čišcenje nakon adaptacije i gtađevinski radova</option><option value="Čišćenje poslovnih prostora, ureda, firmi, ordinacija...(po dogovoru)" name="usluga" data-v-2d8e94d5>Čišćenje poslovnih prostora, ureda, firmi, ordinacija...(po dogovoru)</option><option value="Ostalo" name="usluga" data-v-2d8e94d5>Ostalo...</option></select>',1),U={class:"flex justify-between max-[630px]:flex-col"},A={class:"w-[49%] max-[630px]:w-full my-[1rem]"},B={class:"w-[49%] max-[630px]:w-full my-[1rem] max-[630px]:mb-[16px] max-[630px]:mt-[0px]"},q=n(()=>e("input",{type:"submit",value:"Send",class:"float-right h-[50px] cursor-pointer max-[630px]:!w-full"},null,-1)),F=n(()=>e("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d177883.636774055!2d15.799556701221881!3d45.84265628694488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d692c902cc39%3A0x3a45249628fbc28a!2sZagreb!5e0!3m2!1shr!2shr!4v1706640895484!5m2!1shr!2shr",width:"100%",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},null,-1)),N={data(){return{ime:"",email:"",poruka:"",brojmobitela:""}},methods:{sendEmail(){k.sendForm("service_clwuk55","template_owzjwz9",this.$refs.form,"6y58hytHJtD9eVBSB").then(s=>{console.log("SUCCESS!",s.text),g({title:"Uspješno!",text:"Hvala Na poruci",type:"success"}).then(function(){location.reload()})},s=>{console.log("FAILED...",s.text)})}}},C=Object.assign(N,{__name:"kontakt",setup(s){return(a,t)=>(r(),m(x,null,[e("div",w,[e("div",j,[y,e("p",S,d(a.$t("kontakt.naslov1")),1)])]),e("section",E,[e("form",{ref:"form",onSubmit:t[4]||(t[4]=u((...o)=>a.sendEmail&&a.sendEmail(...o),["prevent"])),class:"w-[1200px] mx-8 max-[1350px]:w-full"},[e("p",V,d(a.$t("kontakt.naslov")),1),e("div",z,[e("div",D,[l(e("input",{type:"text",name:"ime",placeholder:"Ime",required:"","onUpdate:modelValue":t[0]||(t[0]=o=>a.ime=o)},null,512),[[i,a.ime]])]),I]),e("div",U,[e("div",A,[l(e("input",{type:"email",name:"email",placeholder:"Email",required:"","onUpdate:modelValue":t[1]||(t[1]=o=>a.email=o)},null,512),[[i,a.email]])]),e("div",B,[l(e("input",{type:"tel",name:"brojmobitela",placeholder:"Telefon",required:"","onUpdate:modelValue":t[2]||(t[2]=o=>a.telefon=o)},null,512),[[i,a.telefon]])])]),l(e("textarea",{name:"poruka",placeholder:"Poruka za nas!","onUpdate:modelValue":t[3]||(t[3]=o=>a.poruka=o),class:"mt-[30px] p-[15px] min-h-[200px] text-[#000] bg-transparent max-h-[250px] mb-[1rem]"},null,512),[[i,a.poruka]]),q],544)]),c(b),F],64))}}),P=p(C,[["__scopeId","data-v-2d8e94d5"]]);export{P as default};