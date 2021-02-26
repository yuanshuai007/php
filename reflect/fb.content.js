//  
const content_fb = `
  <div>
	  <p>生成一个对象</p>
		<p>$reflect->newInstanceArgs(array $args=?)</p>
	</div>
  <pre><code>
class A {
  public $a;
  // 默认是拆开接收
  function __construct ($a) {
    $this->a = $a;
  }
}

$reflect = new ReflectionClass("A");

$ret = $reflect->newInstanceArgs(["a"]);

var_dump($ret);
//
object(A)#2 (1) {
  ["a"]=>
  string(2) "aa"
}
	</code></pre>
`;