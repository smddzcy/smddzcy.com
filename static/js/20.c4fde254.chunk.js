(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{100:function(n,a,s){"use strict";function t(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}s.d(a,"a",function(){return t})},101:function(n,a,s){"use strict";function t(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function e(n,a,s){return a&&t(n.prototype,a),s&&t(n,s),n}s.d(a,"a",function(){return e})},102:function(n,a,s){"use strict";function t(n){return(t=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}s.d(a,"a",function(){return t})},103:function(n,a,s){"use strict";function t(n){return(t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function e(n){return(e="function"===typeof Symbol&&"symbol"===t(Symbol.iterator)?function(n){return t(n)}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":t(n)})(n)}function p(n,a){return!a||"object"!==e(a)&&"function"!==typeof a?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):a}s.d(a,"a",function(){return p})},104:function(n,a,s){"use strict";function t(n,a){return(t=Object.setPrototypeOf||function(n,a){return n.__proto__=a,n})(n,a)}function e(n,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),a&&t(n,a)}s.d(a,"a",function(){return e})},125:function(n,a,s){"use strict";s.r(a),s.d(a,"readingTime",function(){return k}),s.d(a,"default",function(){return m}),s.d(a,"tableOfContents",function(){return d}),s.d(a,"frontMatter",function(){return g});var t=s(19),e=s(100),p=s(101),o=s(103),c=s(102),l=s(104),u=s(0),i=s.n(u),r=s(28),k={text:"5 min read",minutes:4.425,time:265500,words:885},m=function(n){function a(n){var s;return Object(e.a)(this,a),(s=Object(o.a)(this,Object(c.a)(a).call(this,n))).layout=null,s}return Object(l.a)(a,n),Object(p.a)(a,[{key:"render",value:function(){var n=this.props,a=n.components;Object(t.a)(n,["components"]);return i.a.createElement(r.MDXTag,{name:"wrapper",components:a},i.a.createElement("div",null,i.a.createElement(r.MDXTag,{name:"p",components:a},"Last time I\u2019ve talked about ",i.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/posts/2016-06-03/streams-in-java-8"}},"Streams in Java 8")," and now it\u2019s time to talk about ",i.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"interface default methods"),"."),i.a.createElement(r.MDXTag,{name:"p",components:a},'We all know that we should code to interfaces. Interfaces give the clients all they need, without giving any detail about its implementation at all. (Known as "',i.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://en.wikipedia.org/wiki/Loose_coupling"}},"Loose coupling"),'") Because of this, designing clean and long-lasting interfaces is an important aspect of programming. But, what happens as our project & implementations grow and we need to add new behaviors to those interfaces ? Well, ',i.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"default methods")," to rescue."),i.a.createElement(r.MDXTag,{name:"blockquote",components:a},i.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"blockquote"},"Default methods enable you to add new functionality to the interfaces of your libraries and ensure binary compatibility with code written for older versions of those interfaces.")),i.a.createElement(r.MDXTag,{name:"p",components:a},"That\u2019s what Java says on its ",i.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://docs.oracle.com/javase/tutorial/java/IandI/defaultmethods.html"}},i.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"a"},"official documentation")),". Default methods are the methods you can include in interfaces with their ",i.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"implementation details"),". Let\u2019s continue with examples to understand it better."),i.a.createElement(r.MDXTag,{name:"pre",components:a},i.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-java","data-language":"java","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n    <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n'}}})),i.a.createElement(r.MDXTag,{name:"p",components:a},"Let\u2019s say that you have this interface and there are millions of people out there using it and building on top of it. If default methods were not an option, when you add a new behavior, all of the classes built on top of it would have to implement this or ",i.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"they wouldn\u2019t work"),". With default methods, ",i.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"you can easily expand your interfaces"),". Let\u2019s add a new behavior to our interface, of course with its implementation."),i.a.createElement(r.MDXTag,{name:"pre",components:a},i.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-java","data-language":"java","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n    <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">default</span> <span class="token class-name">String</span> <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token string">"No message"</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">implements</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> name<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> age<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InterfaceDefaultMethods</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Student</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"Bob"</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "No message"</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n'}}})),i.a.createElement(r.MDXTag,{name:"p",components:a},"That\u2019s it. Nothing is broken and everybody enjoys their new feature. Also they can change the behavior of that method too by overriding it."),i.a.createElement(r.MDXTag,{name:"pre",components:a},i.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-java","data-language":"java","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">implements</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n  \n    <span class="token comment">// ...</span>\n\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token string">"Name: "</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">" - Age: "</span> <span class="token operator">+</span> age<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InterfaceDefaultMethods</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Student</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"Bob"</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "Name: Bob - Age: 19"</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n'}}})),i.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"conflicts-with-multiple-interfaces"}},"Conflicts with Multiple Interfaces"),i.a.createElement(r.MDXTag,{name:"p",components:a},"Java always had ",i.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"multiple inheritance of type"),", but with Java 8 and default methods, now it has ",i.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},i.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"strong"},"multiple inheritance of behavior")),". But along with all the goodness, that brings in some problems too."),i.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"1-ambiguity-in-default-methods-with-same-signature"}},"#1: Ambiguity in Default Methods with Same Signature"),i.a.createElement(r.MDXTag,{name:"p",components:a},"Since classes can implement multiple interfaces, there could be a situation where 2 interfaces have a default method with the ",i.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"same signature"),". This causes a ",i.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},i.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"strong"},"conflict"))," and results in a compilation error since Java doesn\u2019t know what to do."),i.a.createElement(r.MDXTag,{name:"pre",components:a},i.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-java","data-language":"java","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n    <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">default</span> <span class="token class-name">String</span> <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token string">"No message"</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">interface</span> <span class="token class-name">Citizen</span> <span class="token punctuation">{</span>\n    <span class="token keyword">default</span> <span class="token class-name">String</span> <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token string">"Citizen message"</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">implements</span> <span class="token class-name">Person</span><span class="token punctuation">,</span> <span class="token class-name">Citizen</span> <span class="token punctuation">{</span>\n\n<span class="token comment">// ...</span>\n\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InterfaceDefaultMethods</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Student</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"Samed"</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Compilation error</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n'}}})),i.a.createElement(r.MDXTag,{name:"pre",components:a},i.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},'Exception in thread "main" java.lang.Error: Unresolved compilation problem:\n    Duplicate default methods named getMessage with the parameters () and () are inherited from the types Citizen and Person\n')),i.a.createElement(r.MDXTag,{name:"p",components:a},"We can fix this problem by overriding the method, then choosing one of the implementations or implement our own."),i.a.createElement(r.MDXTag,{name:"pre",components:a},i.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-java","data-language":"java","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">implements</span> <span class="token class-name">Person</span><span class="token punctuation">,</span> <span class="token class-name">Citizen</span> <span class="token punctuation">{</span>\n\n    <span class="token comment">// ...</span>\n\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token class-name">Citizen</span><span class="token punctuation">.</span><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Choose Citizen\'s default method. Yes, "super" keyword is necessary.</span>\n    <span class="token comment">// return Person.super.getMessage(); // Choose Person\'s default method</span>\n    <span class="token comment">// return "Wow what a message"; // Or implement our own</span>\n    <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InterfaceDefaultMethods</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Student</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"Samed"</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "Citizen message"</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n'}}})),i.a.createElement(r.MDXTag,{name:"h4",components:a,props:{id:"2-more-specific-interface-problem"}},"#2: More Specific Interface Problem"),i.a.createElement(r.MDXTag,{name:"p",components:a},"In the case where an interface is more specific than the other, Java ",i.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"automatically chooses")," its default method and ",i.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"you can\u2019t bypass that by choosing the less specific interface\u2019s default method"),"."),i.a.createElement(r.MDXTag,{name:"pre",components:a},i.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-java","data-language":"java","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">interface</span> <span class="token class-name">Citizen</span> <span class="token punctuation">{</span>\n    <span class="token keyword">default</span> <span class="token class-name">String</span> <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token string">"Citizen message"</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">interface</span> <span class="token class-name">TurkCitizen</span> <span class="token keyword">extends</span> <span class="token class-name">Citizen</span> <span class="token punctuation">{</span>\n    <span class="token keyword">default</span> <span class="token class-name">String</span> <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token string">"Turk citizen message"</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">implements</span> <span class="token class-name">TurkCitizen</span><span class="token punctuation">,</span> <span class="token class-name">Citizen</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InterfaceDefaultMethods</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Student</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "Turk citizen message"</span>\n    <span class="token punctuation">}</span>\n'}}})),i.a.createElement(r.MDXTag,{name:"p",components:a},"If you try to bypass this and choose ",i.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Citizen"),"s default method, that results in another beautiful ",i.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"compilation error"),"."),i.a.createElement(r.MDXTag,{name:"pre",components:a},i.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-java","data-language":"java","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">interface</span> <span class="token class-name">Citizen</span> <span class="token punctuation">{</span>\n    <span class="token keyword">default</span> <span class="token class-name">String</span> <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token string">"Citizen message"</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">interface</span> <span class="token class-name">TurkCitizen</span> <span class="token keyword">extends</span> <span class="token class-name">Citizen</span> <span class="token punctuation">{</span>\n    <span class="token keyword">default</span> <span class="token class-name">String</span> <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token string">"Turk citizen message"</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">implements</span> <span class="token class-name">TurkCitizen</span><span class="token punctuation">,</span> <span class="token class-name">Citizen</span> <span class="token punctuation">{</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token class-name">Citizen</span><span class="token punctuation">.</span><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InterfaceDefaultMethods</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Student</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Compilation error</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n'}}})),i.a.createElement(r.MDXTag,{name:"pre",components:a},i.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},'Exception in thread "main" java.lang.Error: Unresolved compilation problem:\n    Illegal reference to super type Citizen, cannot bypass the more specific direct super type Java8.TurkCitizen\n')),i.a.createElement(r.MDXTag,{name:"p",components:a},"That\u2019s all. This was a simple & quick guide and I hope you\u2019ve enjoyed it. Next time I\u2019ll be looking at ",i.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"optionals"),". Have a good day !")))}}]),a}(i.a.Component),d=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return[{id:"conflicts-with-multiple-interfaces",level:2,title:"Conflicts with Multiple Interfaces",children:[]}]},g={}}}]);
//# sourceMappingURL=20.c4fde254.chunk.js.map