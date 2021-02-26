//  
const content_a = `
  <pre><code class="php">
/*
 * 如果要改变值，复制引用 &$val
 * array_walk($arr, function ($val, $key) {})
*/
$arr = [1, 2, 3];
array_walk($arr, function (&$val, $key) {
  $val++;
});
var_dump($arr);
//
array(3) {
  [0]=>
  int(2)
  [1]=>
  int(3)
  [2]=>
  int(4)
}

	</code></pre>
`;