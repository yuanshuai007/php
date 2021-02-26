// rtrim
const content_b = `
  <div>作用：切除字符串最后的几个字符</div>
	<div>返回切除后的字符串，不改变原字符串</div>
  <pre><code class="php">
$str = "abc";

echo rtrim($str, 'c');  // ab
echo rtrim($str, 'bc');  // a

	</code></pre>
`;  