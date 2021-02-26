// 判断是否是匿名函数
const content_b = `
  <div>匿名函数既是函数又是对象</div>
	<pre><code>
$func = function () {
  echo '111';
};
var_dump(is_object($func)); // true
var_dump($func instanceof Closure); // true
	</code></pre>
`;