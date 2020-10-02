!function(e){var o={};function n(t){if(o[t])return o[t].exports;var s=o[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=o,n.d=function(e,o,t){n.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,o){if(1&o&&(e=n(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var s in e)n.d(t,s,function(o){return e[o]}.bind(null,s));return t},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.p="",n(n.s=3)}([function(e,o){e.exports=require("express")},function(e,o){e.exports=require("body-parser")},function(e,o){e.exports=require("mongodb")},function(e,o,n){"use strict";n.r(o);var t=n(0),s=n(1),u=n(2),r={useNewUrlParser:!0,useUnifiedTopology:!0},i=function(e){u.MongoClient.connect("mongodb://localhost:27017open-sample",r,(function(o,n){o?e(o,null,null):e(null,n,n.db("open-sample"))}))},a=t.Router();a.post("/",(function(e,o,n){var t=e.body.goods_id,s=e.body.name,u=e.body.size,r=e.body.amount,a=e.body.note;if(void 0===t||void 0===s)return o.status(400).json({message:"Require Parameter."}),n();i((function(e,i,c){if(e)return i.close(),o.status(500).json({message:e.message}),n(e);c.collection("goods",(function(e,c){c.insertOne({name:s,goods_id:t,size:u,amount:r,note:a},(function(e,t){if(e)return i.close(),o.status(500).json({message:e.message}),n(e);o.json(t.insertedCount)}))}))}))})),a.put("/:goods_id",(function(e,o,n){var t=e.body.goods_id,s=e.body.name,u=e.body.size,r=e.body.amount,a=e.body.note;i((function(e,i,c){if(e)return i.close(),o.status(500).json({message:e.message}),n(e);c.collection("goods",(function(e,c){c.updateOne({goods_id:t},{$set:{name:s,size:u,amount:r,note:a}},(function(e,t){if(e)return i.close(),o.status(500).json({message:e.message}),n(e);o.json(t)}))}))}))})),a.get("/:goods_id",(function(e,o,n){var t=e.params.goods_id;i((function(e,s,u){if(e)return s.close(),o.status(500).json({message:e.message}),n(e);u.collection("goods",(function(e,u){u.findOne({goods_id:t},(function(e,t){return e?(s.close(),o.status(500).json({message:e.message}),n(e)):null==t?(o.status(404).json({message:"Not found."}),n(e)):void o.json(t)}))}))}))})),a.post("/search",(function(e,o,n){i((function(e,t,s){if(e)return t.close(),o.status(500).json({message:e.message}),n(e);s.collection("goods",(function(e,s){s.find((function(e,s){return e?(t.close(),o.status(500).json({message:e.message}),n(e)):null==s?(o.status(404).json({message:"Not found."}),n(e)):void s.toArray((function(e,t){if(e)return o.status(500).json({message:e.message}),n(e);o.json(t)}))}))}))}))}));var c=a,d=t();d.listen(3e3),d.use(s.urlencoded({extended:!0})),d.use(s.json()),d.use((function(e,o,n){o.header("Access-Control-Allow-Origin","*"),o.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept"),n()})),d.use(t.static("./front")),d.use("/goods",c),d.use((function(e,o){o.status(404).json({message:"Not Found API."})}));o.default=d}]);
//# sourceMappingURL=server.js.map