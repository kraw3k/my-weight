(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t,a){e.exports=a(279)},276:function(e,t,a){},279:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(137),s=a.n(r),l=a(88),c=a.n(l),o=a(138),u=a(13),h=a(14),m=a(16),d=a(15),p=a(17),g=a(7),f=a(68),w=a.n(f);w.a.initializeApp({apiKey:"AIzaSyBY75N82W9sEeBSqTD84kW7jwDKLcln7dU",authDomain:"weightapp-kraw3k.firebaseapp.com",databaseURL:"https://weightapp-kraw3k.firebaseio.com",projectId:"weightapp-kraw3k",storageBucket:"weightapp-kraw3k.appspot.com",messagingSenderId:"117373306078"});var b=w.a.auth(),E=w.a,v=a(89),W=a.n(v),O=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){var e={callbacks:{signInSuccessWithAuthResult:function(e,t){return!0},uiShown:function(){document.getElementById("loader").style.display="none",document.getElementsByClassName("firebaseui-tospp-full-message")[0]&&(document.getElementsByClassName("firebaseui-tospp-full-message")[0].innerHTML="<h4>Registration is required to store your weight.</h4><h4>Don't worry, we won't send spam.</h4>")}},signInFlow:"popup",signInSuccessUrl:"".concat("/my-weight","/list"),signInOptions:[E.auth.GoogleAuthProvider.PROVIDER_ID,E.auth.EmailAuthProvider.PROVIDER_ID],tosUrl:"#",privacyPolicyUrl:"#"},t=W.a.auth.AuthUI.getInstance();t||(t=new W.a.auth.AuthUI(E.auth())),t.start("#firebaseui-auth-container",e),b.onAuthStateChanged(function(e){e&&a.setState({user:e})})},a.state={user:null},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"authDiv"},i.a.createElement("div",{className:"welcome"},i.a.createElement("h1",null,"Weight app"),i.a.createElement("h3",null,"Easily controll your weight")),i.a.createElement("div",{id:"firebaseui-auth-container"}),i.a.createElement("div",{id:"loader"},"Loading..."))}}]),t}(n.Component),y=a(296),j=a(300),N=a(280),k=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={showUpdateWeightUI:!1},a.timezoneOffset=new Date(a.props.data.timestamp).getTimezoneOffset(),a.handleSubmit=a.handleSubmit.bind(Object(g.a)(Object(g.a)(a))),a.newDateValue=i.a.createRef(),a.newWeightValue=i.a.createRef(),a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.updateWeight({oldTimestamp:this.props.data.timestamp,newTimestamp:new Date(this.newDateValue.current.value).getTime(),newWeight:this.newWeightValue.current.value}),this.setState({showUpdateWeightUI:!1})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"weightListItem"},i.a.createElement("div",{className:"main"},i.a.createElement("p",{className:"weight"},this.props.data.weight," kg"),i.a.createElement("div",{className:"date"},i.a.createElement("h5",null,new Date(this.props.data.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),i.a.createElement("h4",null,"".concat(new Date(this.props.data.timestamp).toLocaleDateString()," "))),i.a.createElement("button",{type:"button",onClick:function(){window.confirm("Are you sure you wish to delete this item?")&&e.props.deleteWeight(e.props.data.timestamp)}},i.a.createElement("i",{className:"material-icons"},"delete"),i.a.createElement("p",null,"delete")),i.a.createElement("button",{type:"button",onClick:function(){e.setState({showUpdateWeightUI:!0})}},i.a.createElement("i",{className:"material-icons"},"edit"),i.a.createElement("p",null,"edit"))),this.state.showUpdateWeightUI?i.a.createElement("section",{className:"updateWeight"},i.a.createElement("div",{className:"header"},i.a.createElement("span",null),i.a.createElement("h1",null,"Edit item"),i.a.createElement("i",{className:"material-icons closeIcon",onClick:function(){e.setState({showUpdateWeightUI:!1})}},"close")),i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("span",null),i.a.createElement("input",{type:"datetime-local",defaultValue:new Date(this.props.data.timestamp-6e4*this.timezoneOffset).toISOString().slice(0,-8),ref:this.newDateValue,className:"inputDate",required:!0,min:"2000-01-01T00:00",max:"2100-01-01T00:00"}),i.a.createElement("span",null),i.a.createElement("input",{type:"number",step:"0.1",min:"0.1",max:"200",required:!0,defaultValue:this.props.data.weight,ref:this.newWeightValue,className:"inputNumber"}),i.a.createElement("span",null),i.a.createElement("button",{type:"submit"},i.a.createElement("i",{className:"material-icons"},"check")),i.a.createElement("span",null))):null)}}]),t}(n.Component),U=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){a.setState({inputValue:e.target.value})},a.deleteWeight=function(e){a.props.deleteWeight(e)},a.updateWeight=function(e){a.props.updateWeight(e)},a.addWeight=function(){a.props.addNewWeight(a.state.inputValue),a.setState({showAddWeightUI:!1,inputValue:""})},a.state={showAddWeightUI:!1,inputValue:""},a.handleChange=a.handleChange.bind(Object(g.a)(Object(g.a)(a))),a.deleteWeight=a.deleteWeight.bind(Object(g.a)(Object(g.a)(a))),a.updateWeight=a.updateWeight.bind(Object(g.a)(Object(g.a)(a))),a.addWeight=a.addWeight.bind(Object(g.a)(Object(g.a)(a))),a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("section",{className:"weightList"},this.state.showAddWeightUI?i.a.createElement("section",{className:"addWeight"},i.a.createElement("div",{className:"header"},i.a.createElement("span",null),i.a.createElement("h1",null,"Insert new weight (kg)"),i.a.createElement("i",{className:"material-icons closeIcon",onClick:function(){e.setState({showAddWeightUI:!1})}},"close")),i.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.addWeight()}},i.a.createElement("span",null),i.a.createElement("input",{type:"number",step:"0.1",min:"0.1",max:"200",required:!0,value:this.state.inputValue,onChange:this.handleChange,ref:function(e){null!=e&&e.focus()}}),i.a.createElement("button",{type:"submit"},i.a.createElement("i",{className:"material-icons"},"check")))):i.a.createElement("div",{className:"addWeightIcon",onClick:function(){e.setState({showAddWeightUI:!0})}},i.a.createElement("p",null,"+ Add new weight")),this.props.data.map(function(t,a){return i.a.createElement(k,{data:t,key:a,deleteWeight:e.deleteWeight,updateWeight:e.updateWeight})}))}}]),t}(n.Component),D=a(292),S=a(297),C=a(301),I=a(290),L=a(294),A=a(299),x=a(298),P=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).componentWillMount=function(){var e=a.props.data.map(function(e){return{x:new Date(e.timestamp),y:parseFloat(e.weight)}});a.setState({chartData:e})},a.componentDidMount=function(){a.setState({width:document.getElementsByClassName("graphs")[0].offsetWidth,height:document.getElementsByClassName("graphs")[0].offsetHeight})},a.state={width:null,height:null,zoomDomain:null},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"handleZoom",value:function(e){this.setState({zoomDomain:e})}},{key:"render",value:function(){return i.a.createElement("section",{className:"graphs"},this.state.width?i.a.createElement("div",null,i.a.createElement(D.a,{width:this.state.width,height:.6*this.state.height,scale:{x:"time"},theme:S.a.material,containerComponent:i.a.createElement(C.a,{zoomDimension:"x",zoomDomain:this.state.zoomDomain,onZoomDomainChange:this.handleZoom.bind(this)})},i.a.createElement(I.a,{style:{data:{stroke:"#003c8f"}},data:this.state.chartData,x:"x",y:"y"}),i.a.createElement(L.a,{style:{data:{fill:"#102027"}},size:4,symbol:"square",data:this.state.chartData})),i.a.createElement(D.a,{padding:{top:0,left:50,right:50,bottom:30},width:this.state.width,height:.2*this.state.height,scale:{x:"time"},theme:S.a.material,containerComponent:i.a.createElement(A.a,{brushDimension:"x",brushDomain:this.state.zoomDomain,onBrushDomainChange:this.handleZoom.bind(this)})},i.a.createElement(x.a,null),i.a.createElement(I.a,{style:{data:{stroke:"#003c8f"}},data:this.state.chartData,x:"x",y:"y"}))):null)}}]),t}(n.Component),T=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return console.log(E.auth().currentUser),i.a.createElement("section",{className:"profile"},i.a.createElement("h1",null,E.auth().currentUser.displayName),i.a.createElement("h2",null,E.auth().currentUser.email?E.auth().currentUser.email:null),i.a.createElement("h2",null,E.auth().currentUser.phoneNumber?E.auth().currentUser.phoneNumber:null),i.a.createElement("button",{onClick:function(){e.props.logout()}},i.a.createElement("p",null,"sign out"),i.a.createElement("i",{className:"material-icons"},"exit_to_app")),i.a.createElement("h4",null,"Last sign in: ",E.auth().currentUser.metadata.lastSignInTime),i.a.createElement("h3",null,"author:",i.a.createElement("p",null,i.a.createElement("a",{href:"http://kraw3k.github.io"},"kraw3k.github.io"))))}}]),t}(n.Component),V=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return i.a.createElement("svg",{className:"spinner",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("circle",{className:"path",fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"30"}))}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).reigsterNewUser=function(){a.userPath.child("account").set({isRegistered:!0,displayName:a.currentUser.displayName,email:a.currentUser.email})},a.componentWillMount=function(){a.userPath.child("account").once("value",function(e){if(e.val()&&!0===e.val().isRegistered)return 0;a.reigsterNewUser()})},a.componentDidMount=function(){a.userPath.child("data/weight").on("value",function(e){console.log("event 'on value' works! "),a.setState({isLoadedUserWeight:!1});var t=[];for(var n in e.val())e.val().hasOwnProperty(n)&&t.push(e.val()[n]);a.setState({userWeight:t.reverse(),isLoadedUserWeight:!0})})},a.state={userWeight:{},isLoadedUserWeight:!1},a.reigsterNewUser=a.reigsterNewUser.bind(Object(g.a)(Object(g.a)(a))),a.deleteWeight=a.deleteWeight.bind(Object(g.a)(Object(g.a)(a))),a.updateWeight=a.updateWeight.bind(Object(g.a)(Object(g.a)(a))),a.addNewWeight=a.addNewWeight.bind(Object(g.a)(Object(g.a)(a))),a.currentUser=E.auth().currentUser,a.userPath=E.database().ref().child("users/".concat(a.currentUser.uid)),a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"addNewWeight",value:function(e){var t=Date.now();this.userPath.child("data/weight/".concat(t)).set({weight:e,timestamp:t})}},{key:"deleteWeight",value:function(e){this.userPath.child("data/weight/".concat(e)).remove()}},{key:"updateWeight",value:function(e){this.userPath.child("data/weight/".concat(e.oldTimestamp)).remove(),this.userPath.child("data/weight/".concat(e.newTimestamp)).set({weight:e.newWeight,timestamp:e.newTimestamp})}},{key:"render",value:function(){var e=this;return i.a.createElement(y.a,null,i.a.createElement("div",{className:"app"},i.a.createElement("div",{className:"menu"},i.a.createElement(j.a,{to:"/my-weight/list",activeClassName:"selected"},i.a.createElement("div",null,i.a.createElement("i",{className:"material-icons"},"format_list_bulleted"),i.a.createElement("p",null,"List"))),i.a.createElement(j.a,{to:"/my-weight/graphs",activeClassName:"selected"},i.a.createElement("div",null,i.a.createElement("i",{className:"material-icons"},"timeline"),i.a.createElement("p",null,"Graphs"))),i.a.createElement(j.a,{to:"/my-weight/profile",activeClassName:"selected"},i.a.createElement("div",null,i.a.createElement("i",{className:"material-icons"},"account_circle"),i.a.createElement("p",null,"Profile")))),i.a.createElement("div",{className:"routerContent"},i.a.createElement(N.a,{path:"/my-weight/list",render:function(t){return e.state.isLoadedUserWeight?i.a.createElement(U,Object.assign({},t,{data:e.state.userWeight,addNewWeight:e.addNewWeight,deleteWeight:e.deleteWeight,updateWeight:e.updateWeight})):i.a.createElement(V,null)}}),i.a.createElement(N.a,{path:"/my-weight/graphs",render:function(t){return e.state.isLoadedUserWeight?i.a.createElement(P,Object.assign({},t,{data:e.state.userWeight})):i.a.createElement(V,null)}}),i.a.createElement(N.a,{path:"/my-weight/profile",render:function(){return i.a.createElement(T,{logout:e.props.logout})}}))))}}]),t}(n.Component),z=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=Object(o.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.onAuthStateChanged(function(e){e?a.setState({user:e,isLoaded:!0}):a.setState({isLoaded:!0})});case 2:case"end":return e.stop()}},e,this)})),a.logout=function(){b.signOut().then(function(){a.setState({user:null})})},a.state={user:null,isLoaded:!1},a.logout=a.logout.bind(Object(g.a)(Object(g.a)(a))),a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return this.state.isLoaded?this.state.user?i.a.createElement(R,{logout:this.logout}):i.a.createElement(O,null):null}}]),t}(n.Component),B=(a(276),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function M(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(i.a.createElement(z,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/my-weight",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/my-weight","/service-worker.js");B?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):M(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):M(t,e)})}}()}},[[147,2,1]]]);
//# sourceMappingURL=main.f165904d.chunk.js.map