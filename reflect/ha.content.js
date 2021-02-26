//  hasMethod
const content_ha = `
  <div>
	  <p>方法是否是static</p>
	</div>
  <pre><code>
class A {
  public static function func () {
	  
  }
}

$reflect = new ReflectionClass("A");

$func = $reflect->getMethod("func");

$ret = $func->isStatic();

var_dump($ret); // bool(true)
	</code></pre>
`;