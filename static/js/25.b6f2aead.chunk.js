(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{100:function(n,a,s){"use strict";function t(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}s.d(a,"a",function(){return t})},101:function(n,a,s){"use strict";function t(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function e(n,a,s){return a&&t(n.prototype,a),s&&t(n,s),n}s.d(a,"a",function(){return e})},102:function(n,a,s){"use strict";function t(n){return(t=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}s.d(a,"a",function(){return t})},103:function(n,a,s){"use strict";function t(n){return(t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function e(n){return(e="function"===typeof Symbol&&"symbol"===t(Symbol.iterator)?function(n){return t(n)}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":t(n)})(n)}function o(n,a){return!a||"object"!==e(a)&&"function"!==typeof a?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):a}s.d(a,"a",function(){return o})},104:function(n,a,s){"use strict";function t(n,a){return(t=Object.setPrototypeOf||function(n,a){return n.__proto__=a,n})(n,a)}function e(n,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),a&&t(n,a)}s.d(a,"a",function(){return e})},133:function(n,a,s){"use strict";s.r(a),s.d(a,"readingTime",function(){return h}),s.d(a,"default",function(){return f}),s.d(a,"tableOfContents",function(){return y}),s.d(a,"frontMatter",function(){return b});var t=s(19),e=s(100),o=s(101),p=s(103),c=s(102),l=s(104),i=s(0),u=s.n(i),r=s(28),m=s(134),k=s.n(m),g=s(135),d=s.n(g),h={text:"5 min read",minutes:4.405,time:264300,words:881},f=function(n){function a(n){var s;return Object(e.a)(this,a),(s=Object(p.a)(this,Object(c.a)(a).call(this,n))).layout=null,s}return Object(l.a)(a,n),Object(o.a)(a,[{key:"render",value:function(){var n=this.props,a=n.components;Object(t.a)(n,["components"]);return u.a.createElement(r.MDXTag,{name:"wrapper",components:a},u.a.createElement("div",null,u.a.createElement(r.MDXTag,{name:"p",components:a},"3D modeling is hard, but 3D modeling in Javascript is even ",u.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"harder"),". Javascript is easy and effective for many problems you need to tackle in your web apps; but when it comes to processing & displaying 3D models, it seems like it doesn\u2019t have the best set of tools."),u.a.createElement(r.MDXTag,{name:"p",components:a},"Thankfully, there\u2019s a very good API for creating/displaying 3D models, which is ",u.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://threejs.org/"}},"three.js"),". I\u2019m not gonna talk about three.js in general today, but I\u2019m gonna explain how I used three.js to engrave a 3D model with a small hack, but with great success."),u.a.createElement(r.MDXTag,{name:"hr",components:a}),u.a.createElement(r.MDXTag,{name:"p",components:a},"I\u2019m freelancing for a couple of big fashion firms at the moment. A few weeks ago, I took this project of customizing (i.e. putting custom engravings on) 3D objects on web in real-time. We were already doing 2D engravings, but 3D was a whole new field. At first I didn\u2019t think it was feasible, at least in real-time. But after lots of trials and errors with a 3D designer friend, we found a really good solution."),u.a.createElement(r.MDXTag,{name:"p",components:a},"We first thought we could dynamically change the texture file and re-apply it on the object to engrave whichever place we want on the object. It sounds like a good and feasible solution, and it might be feasible for some cases, but in our case it was not. The issue is, since the objects we\u2019re going to engrave are complex and not identical (they\u2019re basically built by putting together a bunch of images or a video of the product we got from the studio), texture files are entirely different. To achieve what we wanted, we needed to find the coordinates/angles/etc. of the engraving area for each product, so it wasn\u2019t really feasible."),u.a.createElement(r.MDXTag,{name:"p",components:a},"Another possible solution was creating a mesh of our engraving dynamically and putting that on the object. But it was really hard to do, again, since the objects were really complex and not identical. We couldn\u2019t possibly find the place to put that mesh dynamically, and even if we did, we could ",u.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"never")," place it perfectly on those complex surfaces."),u.a.createElement(r.MDXTag,{name:"p",components:a},"Our clever solution was adding an empty mesh on each 3D model that covers the entire engraving area, and later on replacing that using three.js with the dynamically-created mesh that contains our engraving. This way we didn\u2019t need to know anything about the texture file nor the object file in Javascript."),u.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"object-and-font-preparation"}},"Object and Font Preparation"),u.a.createElement(r.MDXTag,{name:"p",components:a},"First step is super simple: using any 3D software (e.g. Blender, 3ds Max), just put an empty mesh that covers the whole surface of your engraving area. Later on, we will create a dynamic mesh that contains our engraving using three.js and replace that mesh."),u.a.createElement("img",{src:k.a,alt:"",style:{marginBottom:"1.5rem"}}),u.a.createElement(r.MDXTag,{name:"p",components:a},"An optional step is ",u.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"font preparation"),". If you\u2019re using images for each letter in your 2D engravings (just like us) because you want to have textures/gradients etc. in your letters, sadly you\u2019ll need to have an actual font file instead of images. You should turn those images into a font using any software or online tool."),u.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"javascript-part"}},"Javascript Part"),u.a.createElement(r.MDXTag,{name:"p",components:a},"First step is to load the font file in CSS: (if you want to use a custom font)"),u.a.createElement(r.MDXTag,{name:"pre",components:a},u.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-css","data-language":"css","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>\n      <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"Engraving"</span><span class="token punctuation">;</span>\n      <span class="token property">src</span><span class="token punctuation">:</span>  <span class="token url">url("font.otf")</span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"opentype"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            <span class="token url">url("font.ttf")</span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"truetype"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token property">text-rendering</span><span class="token punctuation">:</span> optimizeLegibility<span class="token punctuation">;</span>\n      <span class="token property">font-feature-settings</span><span class="token punctuation">:</span> <span class="token string">"kern"</span> 1<span class="token punctuation">;</span>\n      <span class="token property">font-kerning</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n'}}})),u.a.createElement(r.MDXTag,{name:"p",components:a},"Then create a basic scene in three.js. I\u2019m skipping this since it\u2019s explained in the official docs & many other blogs."),u.a.createElement(r.MDXTag,{name:"p",components:a},"After creating your scene; create a canvas for the engraving material, and create the engraving material:"),u.a.createElement(r.MDXTag,{name:"pre",components:a},u.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> textCanvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'#text-canvas\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> engravedText <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Texture</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> engravingMaterial <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshPhongMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  map<span class="token punctuation">:</span> engravedText<span class="token punctuation">,</span>\n  <span class="token comment">// set the material settings so that your engraving will look good</span>\n  <span class="token comment">// under different angles/lightings</span>\n  color<span class="token punctuation">:</span> <span class="token number">0x969696</span><span class="token punctuation">,</span>\n  reflectivity<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  shininess<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n  flatShading<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  fog<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  refractionRatio<span class="token punctuation">:</span> <span class="token number">0.98</span><span class="token punctuation">,</span>\n  skinning<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  specular<span class="token punctuation">:</span> <span class="token number">0x000000</span><span class="token punctuation">,</span>\n  depthFunc<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n  blendDst<span class="token punctuation">:</span> <span class="token number">205</span><span class="token punctuation">,</span>\n  blendSrc<span class="token punctuation">:</span> <span class="token number">204</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// make it transparent so the only visible thing is the engraving</span>\nengravingMaterial<span class="token punctuation">.</span>transparent <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n'}}})),u.a.createElement(r.MDXTag,{name:"p",components:a},"Load your model using three.js and replace the dummy material (which is the engraving area) with the engraving material we just created:"),u.a.createElement(r.MDXTag,{name:"pre",components:a},u.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MTLLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">setPath</span><span class="token punctuation">(</span><span class="token string">\'/\'</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">\'obj.mtl\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">materials</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          materials<span class="token punctuation">.</span><span class="token function">preload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token keyword">const</span> manager <span class="token operator">=</span> <span class="token function">initLoadingManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>OBJLoader</span><span class="token punctuation">(</span>manager<span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">setMaterials</span><span class="token punctuation">(</span>materials<span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">setPath</span><span class="token punctuation">(</span><span class="token string">\'/\'</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">\'obj.obj\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              mainObject <span class="token operator">=</span> object<span class="token punctuation">;</span>\n              <span class="token comment">// replace the dummy material with our custom engraving material</span>\n              mainObject<span class="token punctuation">.</span>children<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>material <span class="token operator">=</span> backMaterial<span class="token punctuation">;</span>\n              mainObject<span class="token punctuation">.</span>children<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>material<span class="token punctuation">.</span>needsUpdate <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n              <span class="token operator">...</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n'}}})),u.a.createElement(r.MDXTag,{name:"p",components:a},"Now everything is set. There are 3 steps to apply an engraving;"),u.a.createElement(r.MDXTag,{name:"ul",components:a},u.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Fill the ",u.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"textCanvas")," with your engraving text."),u.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Apply the canvas to the ",u.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"engravedText")," texture."),u.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Apply the ",u.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"engravingMaterial")," to the main object and re-render.")),u.a.createElement(r.MDXTag,{name:"p",components:a},"Simple enough. Here\u2019s how it looks like in code:"),u.a.createElement(r.MDXTag,{name:"pre",components:a},u.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">function</span> <span class="token function">engraveText</span><span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> context <span class="token operator">=</span> textCanvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// clear the canvas</span>\n  textCanvas<span class="token punctuation">.</span>width <span class="token operator">=</span> textCanvas<span class="token punctuation">.</span>width<span class="token punctuation">;</span>\n  context<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>textCanvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span>textCanvas<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// put the engraving on the canvas</span>\n  context<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">"170px Engraving"</span><span class="token punctuation">;</span>\n  context<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">"#d2c2af"</span><span class="token punctuation">;</span>\n  context<span class="token punctuation">.</span>textAlign <span class="token operator">=</span> <span class="token string">"center"</span><span class="token punctuation">;</span>\n  context<span class="token punctuation">.</span>textBaseline <span class="token operator">=</span> <span class="token string">"middle"</span><span class="token punctuation">;</span>\n  context<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span>text<span class="token punctuation">.</span><span class="token function">toLocaleUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> textCanvas<span class="token punctuation">.</span>scrollWidth <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span> textCanvas<span class="token punctuation">.</span>scrollHeight <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// patch the canvas onto the 3d object</span>\n  engravedText<span class="token punctuation">.</span>image <span class="token operator">=</span> textCanvas<span class="token punctuation">;</span>\n  engravedText<span class="token punctuation">.</span>needsUpdate <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n  mainObject<span class="token punctuation">.</span>children<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>material <span class="token operator">=</span> engravingMaterial<span class="token punctuation">;</span>\n  mainObject<span class="token punctuation">.</span>children<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>material<span class="token punctuation">.</span>needsUpdate <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n'}}})),u.a.createElement(r.MDXTag,{name:"p",components:a},"Voila. And you should see your text engraved on the object."),u.a.createElement("img",{src:d.a,alt:"",style:{marginBottom:"1.5rem"}}),u.a.createElement(r.MDXTag,{name:"p",components:a},"You can let me know if you have any issues or questions using the comment box below.")))}}]),a}(u.a.Component),y=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return[{id:"object-and-font-preparation",level:2,title:"Object and Font Preparation",children:[]},{id:"javascript-part",level:2,title:"Javascript Part",children:[]}]},b={}},134:function(n,a,s){n.exports=s.p+"static/media/bag.7e08a934.png"},135:function(n,a,s){n.exports=s.p+"static/media/3d-test.d6f4858e.png"}}]);
//# sourceMappingURL=25.b6f2aead.chunk.js.map