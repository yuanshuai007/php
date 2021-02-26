// 
const content_c = `
  <div>通过文件名获取文件</div>
	<div>文件名可以是纯文件名，带后缀的文件名，带路径的文件名</div>
	<div>glob(string $file):array</div>
	<pre><code>
// 输出值就是替换通配符
$ret = glob("*.php");
var_dump($ret);
// 
array(1) {
  [0]=>
  string(8) "test.php"
}

	</code></pre>
`;