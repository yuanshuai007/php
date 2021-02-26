// 
const content_b = `
  <div></div>
	<pre><code class="php">
/*
 * array_filter(array $arr, callable|null $callback=null, int $mode=0) : array
 * 不改变原数组，返回新数组
 * array_filter($arr, function ($val, $key) {}, ARRAY_FILTER_USE_BOTH)
*/
$arr = [1, 2, 3, 4];
$ret = array_filter($arr, function ($val, $key) {
  return $val > 3;
}, ARRAY_FILTER_USE_BOTH);
var_dump($ret);
//
array(1) {
  [3]=>
  int(4)
}
	</code></pre>
`;