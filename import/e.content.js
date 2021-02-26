// 
const content_e = `
  <div>数组赋值是值传递</div>
	<pre><code>
$arr = ["a", "b"];
$brr = $arr;

array_shift($arr);

var_dump($arr, $brr);

array(1) {
  [0]=>
  string(1) "b"
}
array(2) {
  [0]=>
  string(1) "a"
  [1]=>
  string(1) "b"
}

	</code></pre>
`;