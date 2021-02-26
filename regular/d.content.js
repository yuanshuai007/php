//  小写u
const content_d = `
  <div>
	  <p>表示前面的正则采用utf8编码</p>
		<p>也就是说能匹配到汉字</p>
	</div>
  <pre><code>
$ret1 = preg_match("/\\x{4E00}/", "一"); // int(0)
$ret2 = preg_match("/\\x{4E00}/u", "一"); // int(1)

$ret1 = preg_match("/\\w/", "一"); // int(0)
$ret2 = preg_match("/\\w/u", "一"); // int(1)
	</code></pre>
`;