(function(e){function t(t){for(var l,i,r=t[0],u=t[1],o=t[2],f=0,d=[];f<r.length;f++)i=r[f],n[i]&&d.push(n[i][0]),n[i]=0;for(l in u)Object.prototype.hasOwnProperty.call(u,l)&&(e[l]=u[l]);a&&a(t);while(d.length)d.shift()();return c.push.apply(c,o||[]),s()}function s(){for(var e,t=0;t<c.length;t++){for(var s=c[t],l=!0,r=1;r<s.length;r++){var u=s[r];0!==n[u]&&(l=!1)}l&&(c.splice(t--,1),e=i(i.s=s[0]))}return e}var l={},n={app:0},c=[];function i(t){if(l[t])return l[t].exports;var s=l[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=l,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)i.d(s,l,function(t){return e[t]}.bind(null,l));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vampidice/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=t,r=r.slice();for(var o=0;o<r.length;o++)t(r[o]);var a=u;c.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var l=s("c21b"),n=s.n(l);n.a},"0bf9":function(e,t,s){},"31f3":function(e,t,s){},"3a73":function(e,t,s){},4984:function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("097d");var l=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[e.results?e._e():s("RollBank",{model:{value:e.selectedDice,callback:function(t){e.selectedDice=t},expression:"selectedDice"}}),e.results?e._e():s("Difficulty",{model:{value:e.selectedLevel,callback:function(t){e.selectedLevel=t},expression:"selectedLevel"}}),e.results?s("Results",{attrs:{results:e.results}}):e._e(),e.results?s("Reset",{on:{reset:e.handleReset}}):e._e(),e.results?e._e():s("Roll",{attrs:{difficulty:e.selectedLevel,rolls:e.selectedDice},on:{"roll-results":e.handleRollResults}})],1)},c=[],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a",{staticClass:"roll",on:{click:e.handleRoll}},[e._v("Бросить")])},r=[],u=function(e,t){for(var s={successRolls:0,failureRolls:0,successes:0,epicFailure:!1,rollLog:[],difficulty:e,rolls:t+1},l=0;l<=t;l++){var n=Math.floor(10*Math.random()+1);n>=e?(s.successRolls+=1,s.successes+=1,s.rollLog.push("Rolled ".concat(n," -> SUCCESS!"))):1===n?(s.successes-=1,s.rollLog.push("Rolled CRITICAL FAILURE!")):s.rollLog.push("Rolled ".concat(n," -> Failure"))}return s.successes<0&&(s.epicFailure=!0),s},o={name:"Roll",props:["difficulty","rolls"],methods:{handleRoll:function(){this.$emit("roll-results",u(this.difficulty,this.rolls))}}},a=o,f=(s("db92"),s("2877")),d=Object(f["a"])(a,i,r,!1,null,"c7587608",null);d.options.__file="Roll.vue";var v=d.exports,p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"roll-bank"},[s("h2",[e._v("Количество бросков")]),s("div",{staticClass:"dice-list"},e._l(e.numbers,function(t){return s("Dice",{key:t,attrs:{number:t,selected:e.value===t},on:{"dice-selected":e.handleDiceSelected}})}))])},h=[],_=(s("ac6a"),s("1c4c"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"dice",class:e.selected?"selected":"",on:{click:e.handleClick}},[e._v("\n  "+e._s(e.number+1)+"\n")])}),m=[],b={name:"Dice",props:["number","selected"],methods:{handleClick:function(){this.$emit("dice-selected",this.number)}}},y=b,R=(s("75ac"),Object(f["a"])(y,_,m,!1,null,"6f40f04a",null));R.options.__file="Dice.vue";var D=R.exports,C={name:"RollBank",components:{Dice:D},props:["value"],data:function(){return{numbers:Array.from(Array(12).keys())}},methods:{handleDiceSelected:function(e){this.$emit("input",e)}}},k=C,g=(s("70a3"),Object(f["a"])(k,p,h,!1,null,"7c175e4e",null));g.options.__file="RollBank.vue";var L=g.exports,S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"difficulty"},[s("h2",[e._v("Сложность")]),s("div",{staticClass:"level-list"},e._l(e.numbers,function(t){return s("DifficultyLevel",{key:t,attrs:{number:t,selected:e.value===t},on:{"difficulty-selected":e.handleDifficultySelected}})}))])},O=[],j=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"difficulty",class:e.selected?"selected":"",on:{click:e.handleClick}},[e._v("\n  "+e._s(e.number)+"\n")])},x=[],$={name:"DifficultyLevel",props:["number","selected"],methods:{handleClick:function(){this.$emit("difficulty-selected",this.number)}}},E=$,w=(s("81e4"),Object(f["a"])(E,j,x,!1,null,"79d18499",null));w.options.__file="DifficultyLevel.vue";var F=w.exports,P={name:"Difficulty",components:{DifficultyLevel:F},props:["value"],data:function(){return{numbers:[2,3,4,5,6,7,8,9,10]}},methods:{handleDifficultySelected:function(e){this.$emit("input",e)}}},A=P,M=(s("d153"),Object(f["a"])(A,S,O,!1,null,"64190a47",null));M.options.__file="Difficulty.vue";var I=M.exports,B=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"results"},[s("div",{staticClass:"results-short",class:e.resultShortClass},[e._v("\n    "+e._s(e.resultShort)+"\n    "),s("div",{staticClass:"short-desc"},[e._v("\n      "+e._s(e.shortDesc)+"\n    ")])]),s("div",{staticClass:"log"},[s("h2",[e._v(e._s(e.results.rolls+" бросков со сложностью "+e.results.difficulty))]),e._l(e.results.rollLog,function(t){return s("div",{key:t},[e._v("\n      "+e._s(t)+"\n    ")])})],2)])},T=[],J={name:"Results",props:["results"],computed:{resultShort:function(){var e=this.results,t=e.successes,s=e.epicFailure;return s?"EPIC FAIL ".concat(-t):0===t?"Неудача (0)":1===t?"Незначительный успех (1)":2===t?"Средний успех (2)":3===t?"Отличный успех (3)":4===t?"Выдающийся успех (4)":t>=4?"Феноменально (".concat(t,")"):void 0},shortDesc:function(){var e=this.results.successes;return 1===e?"поддерживать сломанный холодильник в рабочем состоянии, пока не приедет мастер":2===e?"смастерить что-то отвратительное, но полезное":3===e?"отремонтировать что-то, чтобы оно стало как новенькое":4===e?"увеличить эффективность вашей машины в процессе ее ремонта":e>=4?"создать шедевр":void 0},resultShortClass:function(){var e=this.results,t=e.epicFailure,s=e.successes;return{"epic-fail":t,failure:0===s,success:s>0&&s<3,"good-success":s>=3&&s<5,"epic-success":s>=5}}}},U=J,q=(s("a8f4"),Object(f["a"])(U,B,T,!1,null,"edba8626",null));q.options.__file="Results.vue";var z=q.exports,G=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a",{staticClass:"reset",on:{click:e.handleClick}},[e._v("Roll again")])},H=[],K={name:"Reset",methods:{handleClick:function(){this.$emit("reset")}}},N=K,Q=(s("8e7f"),Object(f["a"])(N,G,H,!1,null,"0f741e70",null));Q.options.__file="Reset.vue";var V=Q.exports,W={name:"app",data:function(){return{selectedDice:0,selectedLevel:2,results:void 0}},components:{RollBank:L,Difficulty:I,Roll:v,Results:z,Reset:V},methods:{handleDiceSelected:function(e){this.selectedDice=e},handleDifficultySelected:function(e){this.selectedLevel=e},handleRollResults:function(e){this.results=e},handleReset:function(){this.results=void 0}}},X=W,Y=(s("034f"),Object(f["a"])(X,n,c,!1,null,null,null));Y.options.__file="App.vue";var Z=Y.exports;l["a"].config.productionTip=!1,new l["a"]({render:function(e){return e(Z)}}).$mount("#app")},"67c3":function(e,t,s){},"70a3":function(e,t,s){"use strict";var l=s("31f3"),n=s.n(l);n.a},"75ac":function(e,t,s){"use strict";var l=s("0bf9"),n=s.n(l);n.a},"81e4":function(e,t,s){"use strict";var l=s("3a73"),n=s.n(l);n.a},"8e7f":function(e,t,s){"use strict";var l=s("dc94"),n=s.n(l);n.a},a8f4:function(e,t,s){"use strict";var l=s("4984"),n=s.n(l);n.a},c21b:function(e,t,s){},c4f1:function(e,t,s){},d153:function(e,t,s){"use strict";var l=s("67c3"),n=s.n(l);n.a},db92:function(e,t,s){"use strict";var l=s("c4f1"),n=s.n(l);n.a},dc94:function(e,t,s){}});
//# sourceMappingURL=app.2c90c014.js.map