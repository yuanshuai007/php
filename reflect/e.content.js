//  获取类的反射
const content_e = `
  <div>
	  <p></p>
	</div>
  <pre><code>
class A {

}

$reflect = new ReflectionClass("A");

var_dump($reflect);
//
object(ReflectionClass)#1 (1) {
  ["name"]=>
  string(1) "A"
}
	</code></pre>
`;