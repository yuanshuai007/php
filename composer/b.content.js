// 
const content_b = `
  <div>composer dump-autoload</div>
	<pre><code>
// 修改完autoload后要执行composer dump-autoload更新自动加载文件
"autoload": {
    "psr-4": {"Monolog\\\\": "src/Monolog/"}
},
	</code></pre>
`;