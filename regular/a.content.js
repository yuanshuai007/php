//  \s
const content_a = `
  <div>
	  <p>\\s 表示空字符</p>
	</div>
  <pre><code>
$ret = preg_match("/\s/", "s ");
var_dump($ret); // int(1)
	</code></pre>
`;