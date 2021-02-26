const content_b = `
	<pre><code class="php">
/*
 * 匿名函数使用外部变量
*/
$a = 1;
function foo ($fn) {
  $fn();
}
foo(function () use ($a) {
  echo $a;
}); // 1
	</code></pre>
`;