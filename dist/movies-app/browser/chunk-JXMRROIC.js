var f=Object.defineProperty,g=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var e=(b,a,c)=>a in b?f(b,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):b[a]=c,k=(b,a)=>{for(var c in a||={})i.call(a,c)&&e(b,c,a[c]);if(d)for(var c of d(a))j.call(a,c)&&e(b,c,a[c]);return b},l=(b,a)=>g(b,h(a));var m=(b,a)=>()=>(a||b((a={exports:{}}).exports,a),a.exports);export{k as a,l as b,m as c};