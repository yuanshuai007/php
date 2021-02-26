//  
const content_ab = `
  <div>
	  get_object_vars($obj)
	</div>
  <pre><code>
class A {
  public $a = 1;
  protected $b = 2;
  private $c = 3;
}
$a = new A();
var_dump(get_object_vars($a));
// 
array(1) {
  ["a"]=>
  int(1)
}
	</code></pre>
`;