(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{100:function(n,a,s){"use strict";function e(n,a){for(var s=0;s<a.length;s++){var e=a[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function t(n,a,s){return a&&e(n.prototype,a),s&&e(n,s),n}s.d(a,"a",function(){return t})},101:function(n,a,s){"use strict";function e(n){return(e=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}s.d(a,"a",function(){return e})},102:function(n,a,s){"use strict";function e(n){return(e="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function t(n){return(t="function"===typeof Symbol&&"symbol"===e(Symbol.iterator)?function(n){return e(n)}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":e(n)})(n)}function p(n,a){return!a||"object"!==t(a)&&"function"!==typeof a?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):a}s.d(a,"a",function(){return p})},103:function(n,a,s){"use strict";function e(n,a){return(e=Object.setPrototypeOf||function(n,a){return n.__proto__=a,n})(n,a)}function t(n,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),a&&e(n,a)}s.d(a,"a",function(){return t})},121:function(n,a,s){"use strict";s.r(a),s.d(a,"readingTime",function(){return g}),s.d(a,"default",function(){return y}),s.d(a,"tableOfContents",function(){return f}),s.d(a,"frontMatter",function(){return T});var e=s(17),t=s(99),p=s(100),o=s(102),c=s(101),l=s(103),r=s(0),i=s.n(r),u=s(26),m=s(122),k=s.n(m),d=s(123),h=s.n(d),g={text:"7 min read",minutes:6.305,time:378299.99999999994,words:1261},y=function(n){function a(n){var s;return Object(t.a)(this,a),(s=Object(o.a)(this,Object(c.a)(a).call(this,n))).layout=null,s}return Object(l.a)(a,n),Object(p.a)(a,[{key:"render",value:function(){var n=this.props,a=n.components;Object(e.a)(n,["components"]);return i.a.createElement(u.MDXTag,{name:"wrapper",components:a},i.a.createElement("div",null,i.a.createElement(u.MDXTag,{name:"p",components:a},"Today I\u2019m going to talk a little bit about ",i.a.createElement(u.MDXTag,{name:"strong",components:a,parentName:"p"},"multithreading in Java"),"."),i.a.createElement(u.MDXTag,{name:"p",components:a},"A ",i.a.createElement(u.MDXTag,{name:"em",components:a,parentName:"p"},"thread")," is a small component of a ",i.a.createElement(u.MDXTag,{name:"em",components:a,parentName:"p"},"process"),", that can run concurrently with the other components (threads). It differs from a ",i.a.createElement(u.MDXTag,{name:"em",components:a,parentName:"p"},"process")," in several ways but the most important thing is; ",i.a.createElement(u.MDXTag,{name:"strong",components:a,parentName:"p"},"threads share the same state, while processes are independent units"),". This means that all threads of a process share the same process state, memory space and resources.  "),i.a.createElement("img",{src:k.a,alt:"Threads of a process",style:{maxWidth:320,marginTop:"2rem",marginBottom:"2rem"}}),i.a.createElement(u.MDXTag,{name:"p",components:a},"You can think of it as a worker, working in parallel with other workers. Let\u2019s say that your house needs painting. If you hire 1 worker, it\u2019d take him 10 hours to paint the entire house. But if you hire 5 workers, and if all of them work concurrently on different parts of the house, it\u2019d take only 2 hours. Also, they share the same resources (paint) and the same space (house). This is just how the threads work."),i.a.createElement(u.MDXTag,{name:"h2",components:a,props:{id:"life-cycle-of-a-thread"}},"Life Cycle of a Thread"),i.a.createElement(u.MDXTag,{name:"p",components:a},"A thread\u2019s lifecycle consists of different stages. For example; a thread ",i.a.createElement(u.MDXTag,{name:"em",components:a,parentName:"p"},"starts"),", ",i.a.createElement(u.MDXTag,{name:"em",components:a,parentName:"p"},"waits")," for another thread to perform a necessary task, ",i.a.createElement(u.MDXTag,{name:"em",components:a,parentName:"p"},"executes")," its task, and ",i.a.createElement(u.MDXTag,{name:"em",components:a,parentName:"p"},"dies"),". It can be in only one stage at a given time. The life cycle of a thread is controlled by JVM."),i.a.createElement("img",{src:h.a,alt:"Diagram - Life cycle of a thread"}),i.a.createElement(u.MDXTag,{name:"p",components:a},"Here are the stages in detail:"),i.a.createElement(u.MDXTag,{name:"ul",components:a},i.a.createElement(u.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(u.MDXTag,{name:"strong",components:a,parentName:"li"},"New"),": A ",i.a.createElement(u.MDXTag,{name:"em",components:a,parentName:"li"},"born thread"),". It is the stage before the program starts the thread."),i.a.createElement(u.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(u.MDXTag,{name:"strong",components:a,parentName:"li"},"Runnable"),": After the program starts the thread, it becomes ",i.a.createElement(u.MDXTag,{name:"em",components:a,parentName:"li"},"runnable"),". It means that it is executing its task in JVM."),i.a.createElement(u.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(u.MDXTag,{name:"strong",components:a,parentName:"li"},"Non-Runnable (Blocked)"),": The thread is still alive, but it is not eligible to execute its task. It is currently waiting for an object\u2019s monitor (for details: ",i.a.createElement(u.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://en.wikipedia.org/wiki/Mutual_exclusion"}},"Mutual exclusion"),"). It mostly happens when the thread is waiting for access to synchronized code."),i.a.createElement(u.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(u.MDXTag,{name:"strong",components:a,parentName:"li"},"Waiting"),": The thread is waiting for another thread to complete a task."),i.a.createElement(u.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(u.MDXTag,{name:"strong",components:a,parentName:"li"},"Timed Waiting"),": The thread is waiting for another thread to complete a task, but up to a certain amount of time. It\u2019ll go back to runnable stage when that time interval expires or the other thread completes its task."),i.a.createElement(u.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(u.MDXTag,{name:"strong",components:a,parentName:"li"},"Terminated (Dead)"),": The thread has completed its task or it is terminated.")),i.a.createElement(u.MDXTag,{name:"p",components:a},"Now, let\u2019s get to our main subject: ",i.a.createElement(u.MDXTag,{name:"em",components:a,parentName:"p"},"multithreading"),"."),i.a.createElement(u.MDXTag,{name:"p",components:a},"Multithreading is the process of running multiple threads of a process at the same time. Let me start by creation of a thread."),i.a.createElement(u.MDXTag,{name:"h2",components:a,props:{id:"creating-a-thread"}},"Creating a Thread"),i.a.createElement(u.MDXTag,{name:"p",components:a},"There are some useful methods of ",i.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Thread")," class which we are going to use:"),i.a.createElement(u.MDXTag,{name:"ul",components:a},i.a.createElement(u.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"start()"),": Begins the execution, JVM calls the run() method of this thread."),i.a.createElement(u.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"join()")," or ",i.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"join(long millis)"),": Waits for the thread to die. The one takes an argument waits for a maximum of millis milliseconds. (if 0, waits forever - same as join())"),i.a.createElement(u.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"setPriority(int newPriority)"),": Sets the priority of this thread."),i.a.createElement(u.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"getPriority()"),": Returns the priority of this thread. setName(String name): Sets the name of this thread."),i.a.createElement(u.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"getName()"),": Returns the name of this thread."),i.a.createElement(u.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"isAlive()"),": Returns a boolean indicating if the thread is alive or not."),i.a.createElement(u.MDXTag,{name:"li",components:a,parentName:"ul"},i.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"stop()"),": Stops the thread. This method ",i.a.createElement(u.MDXTag,{name:"em",components:a,parentName:"li"},"currently")," exists but ",i.a.createElement(u.MDXTag,{name:"strong",components:a,parentName:"li"},"don\u2019t use it to stop threads"),", since it\u2019s deprecated and its usage is not recommended. If you want to stop a thread, see ",i.a.createElement(u.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://docs.oracle.com/javase/1.5.0/docs/guide/misc/threadPrimitiveDeprecation.html"}},"Java docs"),".")),i.a.createElement(u.MDXTag,{name:"h3",components:a,props:{id:"option-1-extending-the-thread-class"}},"Option 1: Extending the Thread Class"),i.a.createElement(u.MDXTag,{name:"p",components:a},"It is as simple as extending the Thread class and overriding the run method. Example:"),i.a.createElement(u.MDXTag,{name:"pre",components:a},i.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-java","data-language":"java","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">MyThread</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" is running."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">Thread</span> t1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token string">"Thread 1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">Thread</span> t2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token string">"Thread 2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    t1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    t2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n'}}})),i.a.createElement(u.MDXTag,{name:"p",components:a},"Output:"),i.a.createElement(u.MDXTag,{name:"pre",components:a},i.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"Thread 1 is running.\nThread 2 is running.\n")),i.a.createElement(u.MDXTag,{name:"h3",components:a,props:{id:"option-2-implementing-the-runnable-interface"}},"Option 2: Implementing the Runnable Interface"),i.a.createElement(u.MDXTag,{name:"p",components:a},"Actually, what we did above was just implementing the Runnable interface. It is also possible to explicitly implement that and create a Thread object with that implementation. The Thread class has a constructor which accepts a Runnable object. Example:"),i.a.createElement(u.MDXTag,{name:"pre",components:a},i.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-java","data-language":"java","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">MyWorker</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token class-name">MyWorker</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">" is running."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">Runnable</span> worker1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyWorker</span><span class="token punctuation">(</span><span class="token string">"Worker 1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">Runnable</span> worker2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyWorker</span><span class="token punctuation">(</span><span class="token string">"Worker 2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token class-name">Thread</span> t1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>worker1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">Thread</span> t2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>worker2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    t1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    t2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n'}}})),i.a.createElement(u.MDXTag,{name:"p",components:a},"Output:"),i.a.createElement(u.MDXTag,{name:"pre",components:a},i.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"Worker 1 is running.\nWorker 2 is running.\n")),i.a.createElement(u.MDXTag,{name:"p",components:a},"There are also other ways to run these workers. One of them is creating a ",i.a.createElement(u.MDXTag,{name:"em",components:a,parentName:"p"},"thread pool"),". I\u2019m not getting into its details but here is a simple example with the same ",i.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"MyWorker")," class:"),i.a.createElement(u.MDXTag,{name:"pre",components:a},i.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-java","data-language":"java","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">Runnable</span> worker1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyWorker</span><span class="token punctuation">(</span><span class="token string">"Worker 1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">Runnable</span> worker2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyWorker</span><span class="token punctuation">(</span><span class="token string">"Worker 2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// This creates a fixed size thread poll.</span>\n    <span class="token comment">// You can also create a single thread executor with</span>\n    <span class="token comment">// \\`Executors.newSingleThreadExecutor()\\` and an expandable</span>\n    <span class="token comment">// thread pool with \\`Executors.newCachedThreadPool()\\`</span>\n    <span class="token class-name">ExecutorService</span> e <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    e<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>worker1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    e<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>worker2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// Previously submitted tasks will be executed,</span>\n    <span class="token comment">// but no new tasks will be accepted after this.</span>\n    e<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n'}}})),i.a.createElement(u.MDXTag,{name:"p",components:a},"See for details: ",i.a.createElement(u.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://docs.oracle.com/javase/tutorial/essential/concurrency/pools.html"}},"https://docs.oracle.com/javase/tutorial/essential/concurrency/pools.html")),i.a.createElement(u.MDXTag,{name:"h3",components:a,props:{id:"option-3-using-anonymous-class"}},"Option 3: Using Anonymous Class"),i.a.createElement(u.MDXTag,{name:"p",components:a},"It is the dirty way of creating a thread. Same as option 2, but just ",i.a.createElement(u.MDXTag,{name:"em",components:a,parentName:"p"},"dirtier"),". Example:"),i.a.createElement(u.MDXTag,{name:"pre",components:a},i.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-java","data-language":"java","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">Thread</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token annotation punctuation">@Override</span>\n        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Thread is executing its task."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token function">dummyTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Thread is finished its task."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">dummyTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">11</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    t<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Test string"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n'}}})),i.a.createElement(u.MDXTag,{name:"p",components:a},"Output:"),i.a.createElement(u.MDXTag,{name:"pre",components:a},i.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"Test string\nThread is executing its task.\n0 1 2 3 4 5 6 7 8 9 10\nThread is finished its task.\n")),i.a.createElement(u.MDXTag,{name:"h2",components:a,props:{id:"thread-priority"}},"Thread Priority"),i.a.createElement(u.MDXTag,{name:"p",components:a},"We say that all threads run concurrently; but in reality, it is not the case. It feels like it is a concurrent environment, but your system cannot run all of your threads simultaneously. There is a ",i.a.createElement(u.MDXTag,{name:"strong",components:a,parentName:"p"},"thread scheduler")," in JVM that decides which thread to run, based on many factors including ",i.a.createElement(u.MDXTag,{name:"em",components:a,parentName:"p"},"priority"),". Every thread in Java has a priority between ",i.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"MIN_PRIORITY")," and ",i.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"MAX_PRIORITY"),". If you don\u2019t set it, its default is ",i.a.createElement(u.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"NORM_PRIORITY"),"."),i.a.createElement(u.MDXTag,{name:"pre",components:a},i.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-java","data-language":"java","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token comment">/**\n * The minimum priority that a thread can have.\n */</span>\n<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token keyword">int</span> MIN_PRIORITY <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * The default priority that is assigned to a thread.\n */</span>\n<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token keyword">int</span> NORM_PRIORITY <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * The maximum priority that a thread can have.\n */</span>\n<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token keyword">int</span> MAX_PRIORITY <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>\n'}}})),i.a.createElement(u.MDXTag,{name:"p",components:a},"It ",i.a.createElement(u.MDXTag,{name:"em",components:a,parentName:"p"},"hopefully")," determines the order of execution of the threads; however, ",i.a.createElement(u.MDXTag,{name:"strong",components:a,parentName:"p"},"it doesn\u2019t guarantee it"),". As I\u2019ve said, it\u2019s just one of those ",i.a.createElement(u.MDXTag,{name:"em",components:a,parentName:"p"},"many factors"),". Example of thread priority:"),i.a.createElement(u.MDXTag,{name:"pre",components:a},i.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-java","data-language":"java","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">MyThread</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> priority<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">setName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">setPriority</span><span class="token punctuation">(</span>priority<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">dummyJob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" is finished."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">dummyJob</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            s <span class="token operator">+=</span> <span class="token string">"dummy"</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> s<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">Thread</span> t1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token string">"Priority:1"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">Thread</span> t2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token string">"Priority:5"</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">Thread</span> t3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token string">"Priority:10"</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    t1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    t2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    t3<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n'}}})),i.a.createElement(u.MDXTag,{name:"p",components:a},"Output:"),i.a.createElement(u.MDXTag,{name:"pre",components:a},i.a.createElement(u.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"Priority:10 is finished.\nPriority:5 is finished.\nPriority:1 is finished.\n")),i.a.createElement(u.MDXTag,{name:"p",components:a},"This is it for now. Next time I\u2019ll get into the details of multithreading and talk about ",i.a.createElement(u.MDXTag,{name:"strong",components:a,parentName:"p"},"java.util.concurrent")," package. Have a great day!")))}}]),a}(i.a.Component),f=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return[{id:"life-cycle-of-a-thread",level:2,title:"Life Cycle of a Thread",children:[]},{id:"creating-a-thread",level:2,title:"Creating a Thread",children:[{id:"option-1-extending-the-thread-class",level:3,title:"Option 1: Extending the Thread Class",children:[]},{id:"option-2-implementing-the-runnable-interface",level:3,title:"Option 2: Implementing the Runnable Interface",children:[]},{id:"option-3-using-anonymous-class",level:3,title:"Option 3: Using Anonymous Class",children:[]}]},{id:"thread-priority",level:2,title:"Thread Priority",children:[]}]},T={}},122:function(n,a,s){n.exports=s.p+"static/media/thread-figure.8eeed9fd.png"},123:function(n,a,s){n.exports=s.p+"static/media/diagram-thread-life-cycle.ac488442.png"},99:function(n,a,s){"use strict";function e(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}s.d(a,"a",function(){return e})}}]);
//# sourceMappingURL=19.9b18ebac.chunk.js.map