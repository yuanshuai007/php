const content_d = `
  <div>获取形参类型的字符串名字</div>
	<pre><code>
class A {
 
}
function foo(A $a, $b) {
  echo 11;
};

$reflect = new ReflectionFunction("foo");
$params = $reflect->getParameters();
foreach($params as $param) {
  $ret = $param->getClass();
  // 如果存在形参类型的话
  if ($ret) {
    var_dump($ret->getName()); // string "A"
  }
	
}
	</code></pre>
`;