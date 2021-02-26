//  hasMethod
const content_f = `
  <div>
	  <p>类是否有这个方法</p>
	</div>
  <pre><code>
class A {
  public function func () {
	  
  }
}

$reflect = new ReflectionClass("A");

$ret = $reflect->hasMethod("func");

var_dump($ret); // bool(true)
	</code></pre>
`;