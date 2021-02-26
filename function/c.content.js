const content_c = `
	<pre><code class="php">
/*
 * 普通函数使用global导入
 * 匿名函数使用use
*/
$a = 1;
function foo () {
  global $a;
	echo $a;
}
foo(); // 1

	</code></pre>
`;