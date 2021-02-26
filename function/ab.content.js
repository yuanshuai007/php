//  获取形参组成的json
const content_ab = `
  <div>
	  
	</div>
  <pre><code>
// 定义一个函数
function func($a, $b) {

}
// 获取函数的反射对象
try {
  $reflect = new ReflectionFunction('func');
} catch (ReflectionException $e) {
  throw new FuncNotFoundException("function not exists: {$function}()", $function, $e);
}
// 获取形参组成的json
$params = $reflect->getParameters();
var_dump($params);
/*
array(2) {
  [0]=>
  object(ReflectionParameter)#2 (1) {
    ["name"]=>
    string(1) "a"
  }
  [1]=>
  object(ReflectionParameter)#3 (1) {
    ["name"]=>
    string(1) "b"
  }
}

*/
	</code></pre>
`;