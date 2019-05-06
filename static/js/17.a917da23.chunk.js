(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{100:function(n,e,a){"use strict";function t(n){return(t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function s(n){return(s="function"===typeof Symbol&&"symbol"===t(Symbol.iterator)?function(n){return t(n)}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":t(n)})(n)}function o(n,e){return!e||"object"!==s(e)&&"function"!==typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}a.d(e,"a",function(){return o})},101:function(n,e,a){"use strict";function t(n,e){return(t=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function s(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&t(n,e)}a.d(e,"a",function(){return s})},117:function(n,e,a){"use strict";a.r(e),a.d(e,"readingTime",function(){return u}),a.d(e,"default",function(){return g}),a.d(e,"tableOfContents",function(){return k}),a.d(e,"frontMatter",function(){return d});var t=a(17),s=a(97),o=a(98),p=a(100),c=a(99),r=a(101),l=a(0),i=a.n(l),m=a(26),u={text:"3 min read",minutes:2.995,time:179700.00000000003,words:599},g=function(n){function e(n){var a;return Object(s.a)(this,e),(a=Object(p.a)(this,Object(c.a)(e).call(this,n))).layout=null,a}return Object(r.a)(e,n),Object(o.a)(e,[{key:"render",value:function(){var n=this.props,e=n.components;Object(t.a)(n,["components"]);return i.a.createElement(m.MDXTag,{name:"wrapper",components:e},i.a.createElement("div",null,i.a.createElement(m.MDXTag,{name:"p",components:e},"Last time I\u2019ve talked about\xa0",i.a.createElement(m.MDXTag,{name:"a",components:e,parentName:"p",props:{href:"/posts/2016-05-15/lambdas-in-java-8",title:"Lambda Expressions in Java 8"}},"Lambda Expressions in Java 8")," and now it\u2019s time to talk about ",i.a.createElement(m.MDXTag,{name:"strong",components:e,parentName:"p"},"streams"),"."),i.a.createElement(m.MDXTag,{name:"p",components:e},"Lambdas give us the ability to pass behavior by using functional interfaces, which removes the need for extra classes. They are already great; they make the code cleaner and more\xa0understandable, but they are greater if we make use of them\xa0while creating APIs.\xa0An example to such an API is the ",i.a.createElement(m.MDXTag,{name:"strong",components:e,parentName:"p"},"Stream API")," in ",i.a.createElement(m.MDXTag,{name:"em",components:e,parentName:"p"},"JDK 8"),"."),i.a.createElement(m.MDXTag,{name:"p",components:e},"We use streams to construct a pipeline of operations on a ",i.a.createElement(m.MDXTag,{name:"em",components:e,parentName:"p"},"Collection"),". Let\u2019s take a look at a simple example."),i.a.createElement(m.MDXTag,{name:"pre",components:e},i.a.createElement(m.MDXTag,{name:"code",components:e,parentName:"pre",props:{className:"language-java","data-language":"java","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token class-name">List</span> l <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">"A"</span><span class="token punctuation">,</span> <span class="token string">"AB"</span><span class="token punctuation">,</span> <span class="token string">"C"</span><span class="token punctuation">,</span> <span class="token string">"D"</span><span class="token punctuation">,</span> <span class="token string">"EFG"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nl<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>s <span class="token operator">-></span> s<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>s <span class="token operator">-></span> s<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n <span class="token punctuation">.</span><span class="token function">sorted</span><span class="token punctuation">(</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> <span class="token operator">-></span> s1<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> s2<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">:</span><span class="token operator">:</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n'}}})),i.a.createElement(m.MDXTag,{name:"ul",components:e},i.a.createElement(m.MDXTag,{name:"li",components:e,parentName:"ul"},i.a.createElement(m.MDXTag,{name:"inlineCode",components:e,parentName:"li"},"stream()"),": Creates a stream pipeline on the given collection, which is a ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:e,parentName:"li"},"List")," in this case."),i.a.createElement(m.MDXTag,{name:"li",components:e,parentName:"ul"},i.a.createElement(m.MDXTag,{name:"inlineCode",components:e,parentName:"li"},"map(Function)"),": Applies the given ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:e,parentName:"li"},"Function")," on all elements of this stream and returns a new stream. Lambda expression ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:e,parentName:"li"},"s -> s.toLowerCase()")," creates a ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:e,parentName:"li"},"Function")," to convert all elements to lower-case."),i.a.createElement(m.MDXTag,{name:"li",components:e,parentName:"ul"},i.a.createElement(m.MDXTag,{name:"inlineCode",components:e,parentName:"li"},"filter(Predicate)"),": Filters the stream by the given ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:e,parentName:"li"},"Predicate")," and returns a new stream. Lambda expression ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:e,parentName:"li"},'s -> s.contains("a")')," creates a ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:e,parentName:"li"},"Predicate")," to filter all elements which doesn\u2019t contain ",i.a.createElement(m.MDXTag,{name:"em",components:e,parentName:"li"},"\u201ca\u201d"),"."),i.a.createElement(m.MDXTag,{name:"li",components:e,parentName:"ul"},i.a.createElement(m.MDXTag,{name:"inlineCode",components:e,parentName:"li"},"sorted(Comparator)"),": Sorts all elements of this stream by the given ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:e,parentName:"li"},"Comparator"),". Lambda expression ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:e,parentName:"li"},"(s1, s2) -> s1.length() - s2.length()")," creates a ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:e,parentName:"li"},"Comparator")," to sort all elements by their length in ascending order."),i.a.createElement(m.MDXTag,{name:"li",components:e,parentName:"ul"},i.a.createElement(m.MDXTag,{name:"inlineCode",components:e,parentName:"li"},"forEach(Consumer)"),": Performs an action on all elements of this stream. This is a ",i.a.createElement(m.MDXTag,{name:"strong",components:e,parentName:"li"},"terminal operation"),", which means it doesn\u2019t return a stream. Lambda expression ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:e,parentName:"li"},"System.out::println")," creates a ",i.a.createElement(m.MDXTag,{name:"em",components:e,parentName:"li"},"Consumer")," to print all elements line-by-line. This is exactly the same with writing ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:e,parentName:"li"},"s -> System.out.println(s)"),", just a shorter form.")),i.a.createElement(m.MDXTag,{name:"p",components:e},"Stream operations can be performed sequentially or in parallel. ",i.a.createElement(m.MDXTag,{name:"strong",components:e,parentName:"p"},"One thing to keep in mind is that stream is not a data structure, it is just ",i.a.createElement(m.MDXTag,{name:"em",components:e,parentName:"strong"},"higher level abstraction"),".")," Streams do not store any data."),i.a.createElement(m.MDXTag,{name:"p",components:e},"Streams are ",i.a.createElement(m.MDXTag,{name:"strong",components:e,parentName:"p"},"lazy"),", means they are only computed when accessed. ",i.a.createElement(m.MDXTag,{name:"em",components:e,parentName:"p"},"Intermediate operations")," like ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:e,parentName:"p"},"map(Function)"),", ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:e,parentName:"p"},"filter(Predicate)"),", ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:e,parentName:"p"},"sorted(Comparator)")," actually ",i.a.createElement(m.MDXTag,{name:"strong",components:e,parentName:"p"},i.a.createElement(m.MDXTag,{name:"em",components:e,parentName:"strong"},"does nothing"))," until the stream is accessed by a ",i.a.createElement(m.MDXTag,{name:"em",components:e,parentName:"p"},"terminal operation"),", ie. ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:e,parentName:"p"},"forEach(Consumer)")," operation on the example shown above. This allows us to produce infinite streams of data."),i.a.createElement(m.MDXTag,{name:"pre",components:e},i.a.createElement(m.MDXTag,{name:"code",components:e,parentName:"pre",props:{className:"language-java","data-language":"java","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token class-name">IntStream</span> infiniteStream <span class="token operator">=</span> <span class="token class-name">IntStream</span><span class="token punctuation">.</span><span class="token function">iterate</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> el <span class="token operator">-></span> el <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>\n                              <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>el <span class="token operator">-></span> el <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n'}}})),i.a.createElement(m.MDXTag,{name:"p",components:e},"Code shown above creates an infinite integer stream, and filters the odd ones. One might expect that when we execute this code, it will cause an infinite loop, eventually fill the whole memory and then crash. But since the streams are ",i.a.createElement(m.MDXTag,{name:"em",components:e,parentName:"p"},"lazy")," and only evaluated when accessed, this code doesn\u2019t cause any problem. But if we add a terminal operation like this:"),i.a.createElement(m.MDXTag,{name:"pre",components:e},i.a.createElement(m.MDXTag,{name:"code",components:e,parentName:"pre",props:{className:"language-java","data-language":"java","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> infiniteStream <span class="token operator">=</span> <span class="token class-name">IntStream</span><span class="token punctuation">.</span><span class="token function">iterate</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> el <span class="token operator">-></span> el <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>\n                                  <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>el <span class="token operator">-></span> el <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>\n                                  <span class="token punctuation">.</span><span class="token function">boxed</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n                                  <span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n'}}})),i.a.createElement(m.MDXTag,{name:"p",components:e},"It ",i.a.createElement(m.MDXTag,{name:"em",components:e,parentName:"p"},"does")," cause an infinite loop and the program eventually crashes with a beautiful exception: ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:e,parentName:"p"},'Exception in thread "main" java.lang.OutOfMemoryError: Java heap space'),"."),i.a.createElement(m.MDXTag,{name:"p",components:e},"By the way, there are so many readily accessible intermediate operations you can use and I simply can\u2019t explain them all, but let me explain the ones I used above."),i.a.createElement(m.MDXTag,{name:"ul",components:e},i.a.createElement(m.MDXTag,{name:"li",components:e,parentName:"ul"},i.a.createElement(m.MDXTag,{name:"inlineCode",components:e,parentName:"li"},"boxed()"),": Returns a new stream consisting all elements of this stream boxed to an ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:e,parentName:"li"},"Integer"),"."),i.a.createElement(m.MDXTag,{name:"li",components:e,parentName:"ul"},i.a.createElement(m.MDXTag,{name:"inlineCode",components:e,parentName:"li"},"collect(Collector)"),": Collects all elements of this stream by using the given ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:e,parentName:"li"},"Collector"),". The one used above collects this stream to a ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:e,parentName:"li"},"List"),".")),i.a.createElement(m.MDXTag,{name:"p",components:e},"This was a simple & quick guide and there is much more to learn. I strongly suggest you to dig into it and learn ",i.a.createElement(m.MDXTag,{name:"em",components:e,parentName:"p"},"creating streams from different data sources"),", ",i.a.createElement(m.MDXTag,{name:"em",components:e,parentName:"p"},"parallel streams")," etc. Next time I\u2019ll be looking at ",i.a.createElement(m.MDXTag,{name:"strong",components:e,parentName:"p"},"interface default methods"),". Have a good day!")))}}]),e}(i.a.Component),k=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return[]},d={}},97:function(n,e,a){"use strict";function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}a.d(e,"a",function(){return t})},98:function(n,e,a){"use strict";function t(n,e){for(var a=0;a<e.length;a++){var t=e[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function s(n,e,a){return e&&t(n.prototype,e),a&&t(n,a),n}a.d(e,"a",function(){return s})},99:function(n,e,a){"use strict";function t(n){return(t=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}a.d(e,"a",function(){return t})}}]);
//# sourceMappingURL=17.a917da23.chunk.js.map