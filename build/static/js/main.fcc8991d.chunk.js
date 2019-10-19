(this.webpackJsonpcryptography=this.webpackJsonpcryptography||[]).push([[0],{13:function(e,t,a){e.exports=a(24)},18:function(e,t,a){},19:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),i=a.n(l),c=(a(18),a(2)),o=a(3),s=a(5),m=a(4),u=a(6),p=(a(19),a(11)),h=a(1),d=a(7),f=a(10),y=a.n(f);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={inputText:"",inputCryptogram:"",cipherType:"",inputFile:"",cryptogramFile:""},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a.handleTextFile=a.handleTextFile.bind(Object(h.a)(a)),a.handleCryptoFile=a.handleCryptoFile.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(d.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t,a=y()();t=(e.target.file,v({},this.state,{key:a,id:a})),this.props.createTask(t),this.setState({inputText:"",inputCryptogram:"",inputFile:"",cryptogramFile:""})}},{key:"handleTextFile",value:function(e){var t,a=this,n=e.target.files,r=new FileReader;r.readAsText(n[0]),r.onload=function(e){t=r.result,console.log(t),a.setState({inputText:t})}}},{key:"handleCryptoFile",value:function(e){var t,a=this,n=e.target.files,r=new FileReader;r.readAsText(n[0]),r.onload=function(e){t=r.result,console.log(t),a.setState({inputCryptogram:t})}}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit,className:"newTaskForm col-md-6 offset-md-3"},r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{htmlFor:"inputText",className:"col-sm-2 col-form-label col-form-label"},"Text: "),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{type:"text",placeholder:"inputText",id:"inputText",name:"inputText",value:this.state.inputText.toLowerCase(),onChange:this.handleChange,className:"form-control"}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{htmlFor:"inputFile",className:"col-sm-2 col-form-label col-form-label"},"File with text: "),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{type:"file",name:"inputFile",onChange:this.handleTextFile,value:this.state.inputFile,className:"custom-file"}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{htmlFor:"inputCryptogram",className:"col-sm-2 col-form-label col-form-label"},"Cryptogram: "),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{type:"text",placeholder:"inputCryptogram",id:"inputCryptogram",name:"inputCryptogram",value:this.state.inputCryptogram.toLowerCase(),onChange:this.handleChange,className:"form-control",disabled:!0}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{htmlFor:"cryptogramFile",className:"col-sm-2 col-form-label col-form-label"},"File with cryptogram: "),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{type:"file",name:"cryptogramFile",onChange:this.handleCryptoFile,value:this.state.cryptogramFile,className:"custom-file",disabled:!0}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{htmlFor:"cipherType",className:"col-sm-2 col-form-label col-form-label"},"Cypher type: "),r.a.createElement("div",{className:"col-sm-1"},r.a.createElement("select",{value:this.state.cipherType,className:"custom-select mr-sm-2",onChange:this.handleChange,name:"cipherType"},r.a.createElement("option",{value:""}),r.a.createElement("option",{value:"homophonic"},"?")))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("button",{className:"btn btn-light"},"Submit"))))}}]),t}(n.Component),E=a(12),O=function(){function e(t){Object(c.a)(this,e),this.input=t,this.alphabet=new Map([["a","ki"],["b","d"],["c",","],["d","z"],["e","apof"],["f","e"],["g","g"],["h","q"],["i","y"],["j","w"],["k","m"],["l",":"],["m","u"],["n","h"],["o","bc"],["p","v"],["q","j"],["r","-"],["s","h"],["t","rst"],["u","l"],["v","y"],["w","5"],["x","n"],["y","x"],["z","0"],[" ","["],[".","2"],[",","7"],["-","]"],[":","8"]]),this.cyphered=this.cypher()}return Object(o.a)(e,[{key:"cypher",value:function(){for(var e=Array.from(this.input),t=0;t<e.length;t++)e[t]=this.swap(e[t]);return e.join("")}},{key:"decypher",value:function(){for(var e=Array.from(this.cyphered),t=0;t<this.cyphered.length;t++)e[t]=this.reswap(e[t]);return e.join("")}},{key:"swap",value:function(e){var t=this.alphabet.get(e);if(void 0===t)return"?";var a=Math.floor(Math.random()*t.length);return t.charAt(a)}},{key:"reswap",value:function(e){var t;if(void 0===e||"E"===e)return"?";var a=!0,n=!1,r=void 0;try{for(var l,i=this.alphabet.entries()[Symbol.iterator]();!(a=(l=i.next()).done);a=!0){var c=l.value,o=Object(E.a)(c,2),s=o[0];o[1].includes(e)&&(t=s)}}catch(m){n=!0,r=m}finally{try{a||null==i.return||i.return()}finally{if(n)throw r}}return t}}]),e}(),j=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).saveFile=e.saveFile.bind(Object(h.a)(e)),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"saveFile",value:function(e,t){var a="Text:"+this.props.inputText+"\nCoded message:"+t+"\nDecoded message for validity check:"+e,n=document.createElement("a"),r="data:text/plain;base64,"+btoa(a);n.href=r,n.download="output.txt";var l=document.createEvent("MouseEvents");l.initMouseEvent("click",!0,!1,document.defaultView,0,0,0,0,0,!1,!1,!1,!1,0,null),n.dispatchEvent(l)}},{key:"render",value:function(){var e=this,t=new O(this.props.inputText),a=t.decypher(),n=t.cyphered;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 offset-md-3 task"},r.a.createElement("p",null,"Text: ",this.props.inputText),r.a.createElement("p",null,"Coded message: ",n),r.a.createElement("p",null,"Decoded message for validity check: ",a),r.a.createElement("button",{onClick:function(){return e.saveFile(a,n)},className:"btn btn-light"},"Save to File!"),r.a.createElement("hr",null)))}}]),t}(n.Component),w=(a(22),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={TaskList:[]},a.create=a.create.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"create",value:function(e){this.setState({TaskList:[].concat(Object(p.a)(this.state.TaskList),[e])})}},{key:"render",value:function(){var e=this.state.TaskList.map((function(e){return r.a.createElement(j,{inputText:e.inputText,inputCryptogram:e.inputCryptogram,cipherType:e.cipherType,key:e.key,id:e.key})}));return r.a.createElement("div",{className:"TaskList"},r.a.createElement("div",{className:"row"},r.a.createElement(g,{createTask:this.create})),e)}}]),t}(n.Component)),k=(a(23),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App text-center container-fluid"},r.a.createElement("h1",null,"Cypherio"),r.a.createElement(w,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.fcc8991d.chunk.js.map