const content_ca = `
  <div>获取形参的类型对象</div>
	<pre><code>
class A {
 
}
function foo(A $a, $b) {
  echo 11;
};

$reflect = new ReflectionFunction("foo");
$params = $reflect->getParameters();
foreach($params as $param) {
  $class = $param->getClass();
  var_dump($class);	
}
// result
object(ReflectionClass)#4 (1) {
  ["name"]=>
  string(1) "A"
}
NULL

	</code></pre>
`;