const isSuccess=!1,promise=new Promise(((e,o)=>{setTimeout((()=>{o("Error")}),2e3)}));console.log("before promise .then"),promise.then((e=>{console.log("On resolve inside promise"),console.log("value",e)}),(e=>{console.log("On reject inside promise"),console.log("error",e)}));
//# sourceMappingURL=mod-9.c1269851.js.map
