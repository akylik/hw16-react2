(this["webpackJsonphw16-react"]=this["webpackJsonphw16-react"]||[]).push([[0],{16:function(e,a,t){},18:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t(3),c=t(5),r=t.n(c);t(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(8),o=t(1),l=t.n(o),h=t(2),m=t(6),u=t(7),d=t(10),f=t(9),p=(t(18),[{firstName:"\u0411\u0430\u0440\u043d\u0435\u0439",lastName:"\u0421\u0442\u0438\u043d\u0441\u043e\u0432\u0441\u044c\u043a\u0438\u0439",phone:"+380956319521",gender:"male"},{firstName:"\u0420\u043e\u0431\u0456\u043d",lastName:"\u0429\u0435\u0440\u0431\u0430\u0442\u0441\u044c\u043a\u0430",phone:"+380931460123",gender:"female"},{firstName:"\u0410\u043d\u043e\u043d\u0456\u043c\u043d\u0438\u0439",lastName:"\u0410\u043d\u043e\u043d\u0456\u043c\u0443\u0441",phone:"+380666666666"},{firstName:"\u041b\u0456\u043b\u0456\u044f",lastName:"\u041e\u043b\u0434\u0440\u043e\u0432\u043d\u0430",phone:"+380504691254",gender:"female"},{firstName:"\u041c\u0430\u0440\u0448\u0435\u043d",lastName:"\u0415\u0440\u0456\u043a\u0441\u043e\u043d\u044f\u043d",phone:"+380739432123",gender:"male"},{firstName:"\u0422\u0435\u043e\u0434\u043e\u0440",lastName:"\u041c\u043e\u0442\u0441\u0431\u0435\u0441",phone:"+380678123456",gender:"male"}]);function j(e){var a="";switch(e){case"male":a="\u2642";break;case"female":a="\u2640"}return a}var x=function(e){Object(d.a)(t,e);var a=Object(f.a)(t);function t(){var e;Object(m.a)(this,t);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).state={contacts:[].concat(p),filtered:[].concat(p),search:"",isMale:!0,isFemale:!0,isUnisex:!0},e.isMale=Object(h.a)(l.a.mark((function a(){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.setState({isMale:!e.state.isMale});case 2:e.filterData();case 3:case"end":return a.stop()}}),a)}))),e.isFemale=Object(h.a)(l.a.mark((function a(){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.setState({isFemale:!e.state.isFemale});case 2:e.filterData();case 3:case"end":return a.stop()}}),a)}))),e.isUnisex=Object(h.a)(l.a.mark((function a(){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.setState({isUnisex:!e.state.isUnisex});case 2:e.filterData();case 3:case"end":return a.stop()}}),a)}))),e.handleSearchChange=function(){var a=Object(h.a)(l.a.mark((function a(t){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.setState({search:t.target.value});case 2:e.filterData();case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.filterData=Object(h.a)(l.a.mark((function a(){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.setState((function(){var a=e.state.search.toLowerCase(),t=e.state.contacts.filter((function(a){return"male"===a.gender&&e.state.isMale||"female"===a.gender&&e.state.isFemale||void 0===a.gender&&e.state.isUnisex})).filter((function(e){return e.firstName.toLowerCase().includes(a)||e.lastName.toLowerCase().includes(a)||e.phone.toLowerCase().includes(a)}));return console.log(t),{filtered:Object(i.a)(t)}}));case 2:case"end":return a.stop()}}),a)}))),e}return Object(u.a)(t,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"bg",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"search",children:[Object(s.jsx)("input",{className:"search__btn",type:"search",placeholder:"Search...",value:this.state.search,onChange:this.handleSearchChange}),Object(s.jsxs)("label",{className:"check",id:"man",onChange:this.isMale,children:[Object(s.jsx)("input",{type:"checkbox",name:"man",checked:this.state.isMale}),"\u2642"]}),Object(s.jsxs)("label",{className:"check",id:"woman",onChange:this.isFemale,children:[Object(s.jsx)("input",{type:"checkbox",name:"woman",checked:this.state.isFemale}),"\u2640"]}),Object(s.jsxs)("label",{className:"check",id:"unisex",onChange:this.isUnisex,children:[Object(s.jsx)("input",{type:"checkbox",name:"unisex",checked:this.state.isUnisex}),"undefined"]})]}),Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("span",{className:"name",children:"First Name"}),Object(s.jsx)("span",{className:"name",children:"Last Name"}),Object(s.jsx)("span",{className:"phone",children:"Phone"}),Object(s.jsx)("span",{className:"sex",children:"Sex"})]}),this.state.filtered.map((function(e){return Object(s.jsxs)("div",{className:"contacts",children:[Object(s.jsx)("span",{className:"name",children:e.firstName}),Object(s.jsx)("span",{className:"name",children:e.lastName}),Object(s.jsx)("span",{className:"phone",children:e.phone}),Object(s.jsx)("span",{className:"sex",children:j(e.gender)}),"  "]})}))]})})}}]),t}(n.Component);r.a.render(Object(s.jsx)(x,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.bb3fd3c8.chunk.js.map