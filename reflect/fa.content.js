//  getMethod
const content_fa = `
  <div>
	  <p>类方法的反射对象</p>
	</div>
  <pre><code>
class A {
  public function func () {
	  
  }
}

$reflect = new ReflectionClass("A");

$ret = $reflect->getMethod("func");

var_dump($ret); 
// result
object(ReflectionMethod)#2 (2) {
  ["name"]=>
  string(4) "func"
  ["class"]=>
  string(1) "A"
}
	</code></pre>
`;