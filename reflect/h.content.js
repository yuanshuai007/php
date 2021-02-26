// 
const content_h = `
  <div>
	  <p>方法是否是public</p>
	</div>
  <pre><code>
class A {
  public function func () {
	  
  }
}

$reflect = new ReflectionClass("A");

$func = $reflect->getMethod("func");

$ret = $func->isPublic();

var_dump($ret); // bool(true)

	</code></pre>
`;