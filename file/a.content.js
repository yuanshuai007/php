//  
const content_a = `
  <div>
	  parse_ini_file($file, bool);  
	</div>
	<p>读取配置文件，返回一个数组</p>
	<p>false返回一个一维数组</p>
	<p>true可以返回一个二维数组</p>
  <pre><code class="php">
// 文件
[word]
a = 1
b = 2
c = 3

// 代码
$ret = parse_ini_file("file.ini", bool);
var_dump($ret);
// false
array(3) {
  ["a"]=>
  string(1) "1"
  ["b"]=>
  string(1) "2"
  ["c"]=>
  string(1) "3"
}
// true
array(1) {
  ["word"]=>
  array(3) {
    ["a"]=>
    string(1) "1"
    ["b"]=>
    string(1) "2"
    ["c"]=>
    string(1) "3"
  }
}

	</code></pre>
`;