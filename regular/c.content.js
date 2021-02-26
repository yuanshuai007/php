// ?=
const content_c = `
  <div>?= 表示限定</div>
	<pre><code>
// 匹配的是a,后面跟了b的a
$ret1 = preg_match("/a(?=b)/", "ab");
$ret2 = preg_match("/a(?=b)/", "ac");
var_dump($ret1, $ret2); // int(1) int(0)
	</code></pre>
`;