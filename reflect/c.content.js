const content_c = `
  <div>获取形参的字符串名字</div>
	<pre><code>
function foo($a, $b) {
  echo 11;
};

$reflect = new ReflectionFunction("foo");
$params = $reflect->getParameters();
foreach($params as $param) {
  $ret = $param->getName();
	var_dump($ret); 
}

//string(1) "a"
//string(1) "b"
	</code></pre>
`;