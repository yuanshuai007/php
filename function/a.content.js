//  获取函数的形参数量
const content_a = `
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
// 通过函数的反射对象获取形参数
$num = $reflect->getNumberOfParameters();
echo $num;	//2
	</code></pre>
`;