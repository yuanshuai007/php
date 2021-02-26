//  public
const content_a = `
  <div>
	  <p>public意味着谁都可以访问</p>
		<p>1. 外面的对象</p>
		<p>2. 类</p>
	</div>
  <pre><code>
class A {
  public function foo () {
    echo "11";
  }
}
$a = new A();
$a->foo(); // 11
A::foo(); // 11
	</code></pre>
`;