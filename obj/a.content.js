//  对象访问不能访问的属性
const content_a = `
  <div>
	  <p>1. 当对象访问private,protected实例属性时</p>
		<p>2. 当对象访问不存在的属性时</p>
		<p>都会触发魔术方法__get</p>
	</div>
  <pre><code class="php">
class TEST {
  private $a = 11;
  function __get($attr) {
    return 'aaaa';
  }
}

$obj = new TEST();
echo $obj->a; // aaaa
echo $obj->c; // aaaa		
	</code></pre>
`;