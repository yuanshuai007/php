// 获取函数有几个形参
const content_b = `
  <div>获取函数有几个形参</div>
	<pre><code>
function foo($a, $b) {
  echo 11;
};

$reflect = new ReflectionFunction("foo");
$ret = $reflect->getNumberOfParameters();
var_dump($ret); //int(2)
	</code></pre>
`;