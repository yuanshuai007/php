// 
const content_cb = `
  <div></div>
	<pre><code class="php">
/*
 * array_filter($arr);
 * 不改变数组
*/

$arr = ['a', '', '0', 0, 'b'];
$ret = array_filter($arr);
var_dump($ret);
//
array(2) {
  [0]=>
  string(1) "a"
  [4]=>
  string(1) "b"
}
	</code></pre>
`;