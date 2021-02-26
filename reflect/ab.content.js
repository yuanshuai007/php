// 获取函数有几个形参
const content_ab = `
  <div>获取函数有几个形参</div>
	<pre><code>
function foo($a, $b) {
  echo 11;
};

$reflect = new ReflectionFunction("foo");

var_dump($reflect->getNumberOfParameters()); //2
	</code></pre>
`;