(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{228:function(n,a,e){"use strict";function s(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}e.d(a,"a",function(){return s})},229:function(n,a,e){"use strict";function s(n,a){for(var e=0;e<a.length;e++){var s=a[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}function t(n,a,e){return a&&s(n.prototype,a),e&&s(n,e),n}e.d(a,"a",function(){return t})},230:function(n,a,e){"use strict";function s(n){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}e.d(a,"a",function(){return s})},231:function(n,a,e){"use strict";function s(n){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function t(n){return(t="function"===typeof Symbol&&"symbol"===s(Symbol.iterator)?function(n){return s(n)}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":s(n)})(n)}function o(n,a){return!a||"object"!==t(a)&&"function"!==typeof a?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):a}e.d(a,"a",function(){return o})},232:function(n,a,e){"use strict";function s(n,a){return(s=Object.setPrototypeOf||function(n,a){return n.__proto__=a,n})(n,a)}function t(n,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),a&&s(n,a)}e.d(a,"a",function(){return t})},251:function(n,a,e){"use strict";e.r(a),e.d(a,"readingTime",function(){return m}),e.d(a,"default",function(){return k}),e.d(a,"tableOfContents",function(){return d}),e.d(a,"frontMatter",function(){return h});var s=e(50),t=e(228),o=e(229),p=e(231),c=e(230),r=e(232),l=e(0),i=e.n(l),u=e(73),m={text:"3 min read",minutes:2.76,time:165600,words:552},k=function(n){function a(n){var e;return Object(t.a)(this,a),(e=Object(p.a)(this,Object(c.a)(a).call(this,n))).layout=null,e}return Object(r.a)(a,n),Object(o.a)(a,[{key:"render",value:function(){var n=this.props,a=n.components;Object(s.a)(n,["components"]);return i.a.createElement(u.MDXTag,{name:"wrapper",components:a},i.a.createElement("div",null,i.a.createElement(u.MDXTag,{name:"p",components:a},"Almost a year ago, I came across with this ",i.a.createElement(u.MDXTag,{name:"strong",components:a,parentName:"p"},"pThreads")," extension. It\u2019s an extension that makes it possible to create multi-threaded applications in PHP, and I completely fell in love with it! It is not some bullshit like forks; it gives you the ability to use real POSIX threads."),i.a.createElement(u.MDXTag,{name:"blockquote",components:a},i.a.createElement(u.MDXTag,{name:"p",components:a,parentName:"blockquote"},"Absolutely, this is not a hack, we ",i.a.createElement(u.MDXTag,{name:"em",components:a,parentName:"p"},"don\u2019t")," use forking or any other such nonsense, what you create are honest to goodness POSIX threads that are completely compatible with PHP and safe \u2026 this is true multi-threading :)")),i.a.createElement(u.MDXTag,{name:"p",components:a},"As I said before, you\u2019ll be amazed by its speed and easy-to-use structure. Let\u2019s start."),i.a.createElement(u.MDXTag,{name:"h2",components:a,props:{id:"installing"}},"Installing"),i.a.createElement(u.MDXTag,{name:"p",components:a},"It\u2019s a PECL extension. If you have PECL, you can install directly with it."),i.a.createElement(u.MDXTag,{name:"pre",components:a},i.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash","data-language":"bash","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'pecl <span class="token function">install</span> pthreads\n'}}})),i.a.createElement(u.MDXTag,{name:"p",components:a},"Or you can install via Homebrew on macOS."),i.a.createElement(u.MDXTag,{name:"pre",components:a},i.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash","data-language":"bash","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'brew <span class="token function">install</span> php70-pthreads\n'}}})),i.a.createElement(u.MDXTag,{name:"p",components:a},"After installation, check the output of ",i.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"php -m"),". You probably won\u2019t see pThreads there, which means you should add its extension declaration to your ",i.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"php.ini")," to enable it. You have to add something like ",i.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},'extension="PATH-TO-EXTENSION-FILE/pthreads.so or .dll"')," and restart your server. If your server fails to start - which is normal - look for the error it gives. It will say something like this for Apache:"),i.a.createElement(u.MDXTag,{name:"pre",components:a},i.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"PHP Fatal error: The apache2handler SAPI is not supported by pthreads\nPHP Fatal error: Unable to start pthreads module in Unknown on line 0 Unknown(0) : Fatal error - The apache2handler SAPI is not supported by pthreads Unknown(0) : Fatal error - Unable to start pthreads module\n")),i.a.createElement(u.MDXTag,{name:"p",components:a},"It\u2019s because pThreads only works on the CLI side with the recent versions, and you have to disable it for your web server. Make a copy of your php.ini file in the same directory with the default one, name it ",i.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"php-cli.ini"),", then delete the ",i.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},'extension="PATH-TO-EXTENSION-FILE/pthreads.so or .dll"')," declaration from the default ",i.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"php.ini")," file. Try to start your server again; now there shouldn\u2019t be any problem."),i.a.createElement(u.MDXTag,{name:"h2",components:a,props:{id:"usage"}},"Usage"),i.a.createElement(u.MDXTag,{name:"p",components:a},"Let\u2019s look at this simple example."),i.a.createElement(u.MDXTag,{name:"pre",components:a},i.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-php","data-language":"php","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token operator">&lt;</span>php\n\n<span class="token keyword">class</span> <span class="token class-name">SomeThreadedClass</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token variable">$tID</span><span class="token punctuation">;</span>\n    <span class="token keyword">public</span> <span class="token variable">$data</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">__construct</span><span class="token punctuation">(</span>int <span class="token variable">$tID</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">tID</span> <span class="token operator">=</span> <span class="token variable">$tID</span><span class="token punctuation">;</span>\n        <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">data</span> <span class="token operator">=</span> <span class="token variable">$tID</span> <span class="token punctuation">.</span> <span class="token double-quoted-string string">":"</span> <span class="token punctuation">.</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token single-quoted-string string">\'H:i:s\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">echo</span> <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">tID</span> <span class="token punctuation">.</span> <span class="token double-quoted-string string">" started.\\n"</span><span class="token punctuation">;</span>\n        <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">tID</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">echo</span> <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">tID</span> <span class="token punctuation">.</span> <span class="token double-quoted-string string">" ended. "</span> <span class="token punctuation">.</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token single-quoted-string string">\'H:i:s\'</span><span class="token punctuation">)</span> <span class="token punctuation">.</span> <span class="token double-quoted-string string">"\\n"</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token variable">$threads</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token variable">$i</span> <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token variable">$threads</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SomeThreadedClass</span><span class="token punctuation">(</span><span class="token variable">$i</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token variable">$threads</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">// start the job on the background</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token variable">$i</span> <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token variable">$threads</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">// wait until job is finished, </span>\n    <span class="token keyword">echo</span> <span class="token variable">$threads</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">data</span> <span class="token punctuation">.</span> <span class="token double-quoted-string string">"\\n"</span><span class="token punctuation">;</span> <span class="token comment">// then we can access the data</span>\n<span class="token punctuation">}</span>\n'}}})),i.a.createElement(u.MDXTag,{name:"p",components:a},"Create a class that extends ",i.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Thread"),", and override the ",i.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"run")," method. It\u2019s simply all it takes to get a threaded PHP object."),i.a.createElement(u.MDXTag,{name:"pre",components:a},i.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-php","data-language":"php","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token variable">$threads</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n'}}})),i.a.createElement(u.MDXTag,{name:"p",components:a},"This line, the start method, initiates the thread and starts executing your object\u2019s run method."),i.a.createElement(u.MDXTag,{name:"pre",components:a},i.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-php","data-language":"php","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token variable">$threads</span><span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n'}}})),i.a.createElement(u.MDXTag,{name:"p",components:a},"When your thread finishes its task, you can reach to your object after calling the join method. Output of the code above:"),i.a.createElement(u.MDXTag,{name:"pre",components:a},i.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"1 started.\n2 started.\n3 started.\n4 started.\n1 ended. 18:18:52\n1:18:18:51\n2 ended. 18:18:53\n2:18:18:51\n3 ended. 18:18:54\n3:18:18:51\n4 ended. 18:18:55\n4:18:18:51\n")),i.a.createElement(u.MDXTag,{name:"p",components:a},"It looks totally satisfying, doesn\u2019t it ? I suggest you to take a look at its documentation & great examples on its ",i.a.createElement(u.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/krakjoe/pthreads"}},"GitHub page"),". There is also a php.net documentation: ",i.a.createElement(u.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://php.net/manual/en/book.pthreads.php"}},"http://php.net/manual/en/book.pthreads.php"))))}}]),a}(i.a.Component),d=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return[{id:"installing",level:2,title:"Installing",children:[]},{id:"usage",level:2,title:"Usage",children:[]}]},h={}}}]);
//# sourceMappingURL=21.9cc63f72.chunk.js.map