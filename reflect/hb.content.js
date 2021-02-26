//  
const content_hb = `
  <div>
	  <p>方法对象被调用</p>
		<p>$method->invokeArgs($obj, $arr)</p>
		<p>1. $method是静态方法，$obj为null，实例方法为，new Class()</p>
		<p>2. $arr是一个一个的传过去，要用...$arr接收</p>
	</div>
  <pre><code>
class A {
  public static function foo (...$arr) {
    var_dump($arr);
  }
  public function bar (...$arr) {
    var_dump($arr);
  }
}

$reflect = new ReflectionClass("A");

$foo = $reflect->getMethod("foo");
$bar = $reflect->getMethod("bar");

//静态方法
$foo->invokeArgs(null, [1, 2]);
// 实例方法
$bar->invokeArgs(new A(), [1, 2]);
//
array(2) {
  [0]=>
  int(1)
  [1]=>
  int(2)
}
array(2) {
  [0]=>
  int(1)
  [1]=>
  int(2)
}
	</code></pre>
`;