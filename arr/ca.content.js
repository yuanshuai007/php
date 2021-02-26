// 
const content_ca = `
  <div></div>
	<pre><code class="php">
/*
 * 删除指定元素
 * unset($var1, [$var2, [$var3, ...]])
*/
$arr = ["a" => "1", "b" => "2"];

unset($arr["a"], $arr["b"]);

var_dump($arr); // []
	</code></pre>
`;