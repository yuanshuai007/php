//  
const content_fa = `
  <pre><code class="php">
/*
 * method_exists(object $obj, string $pro) : bool
 * 对象是否有这个方法
 * method_exists($obj, $pro)
*/
class A {
  public $a = 1;
  public function foo () {}
}
$obj = new A();
$ret = method_exists($obj, 'foo');
var_dump($ret); // bool(true)
	</code></pre>
`;