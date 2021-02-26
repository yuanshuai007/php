//  
const content_a = `
  <div>
	  删除数组中的第一个值，并返回，改变原数组
	</div>
  <pre><code>
$arr = ["a", "b", "c"];
$ret = array_shift($arr);
var_dump($ret, $arr);

string(1) "a"
array(2) {
  [0]=>
  string(1) "b"
  [1]=>
  string(1) "c"
}
	</code></pre>
`;