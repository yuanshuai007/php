// 判断变量是否为实
const content_c = `
  <div></div>
	<div></div>
	<pre><code class="php">
/*
 * 变量或键有值，为true（值为null视为无值）
*/
$a;
$arr = [];
var_dump(isset($a), isset($arr["a"])); // false, false
	</code></pre>
`;