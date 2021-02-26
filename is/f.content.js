//  
const content_f = `
  <pre><code class="php">
/*
 * property_exists(object $obj, string $pro) : bool
 * 对象是否有这个属性
 * property_exists($obj, $pro)
*/
class A {
  public $a = 1;
}
$obj = new A();
$ret = property_exists($obj, 'a');
var_dump($ret); // bool(true)
	</code></pre>
`;