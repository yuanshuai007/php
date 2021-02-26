// .
const content_ba = `
  <div>匹配除了换行符和回车符以外的其他所有字符</div>
	<pre><code>
$ret = preg_match("/./", " "); // int(1)
	</code></pre>
`;