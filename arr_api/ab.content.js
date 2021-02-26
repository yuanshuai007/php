//  
const content_ab = `
  <div>
	  
	</div>
  <pre><code class="php">
/*
 * 合并后返回新数组，不改变原数组
*/
$arr = ["a", "b"];
$brr = ["c", "d"];

$ret = array_merge($arr, $brr);

var_dump($ret); 
//
array(4) {
  [0]=>
  string(1) "a"
  [1]=>
  string(1) "b"
  [2]=>
  string(1) "c"
  [3]=>
  string(1) "d"
}


	</code></pre>
`;