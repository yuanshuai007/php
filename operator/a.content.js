//  
const content_a = `
  <div>
	  
	</div>
  <pre><code class="php">
/*
 * 是null返回后面的值，否则返回前面的值
*/
$a = null;

$ret = $a ?? "yes";

var_dump($ret); // "yes"
	</code></pre>
`;