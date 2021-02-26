//  
const content_e = `
  <div>
	  判断对象是否是实例
	</div>
	<div>
	  右边可以是类，也可以是字符串变量
	</div>
  <pre><code>
class A {}

$a = new A;
$className = "a"; 

var_dump($a instanceof $className); // bool(true)
	</code></pre>
`;