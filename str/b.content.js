const content_b = `
  <div>参数1：正则表达式</div>
	<div>参数2：替换匹配上的字符串，$1对应正则的一个()</div>
	<div>参数3：要操作的字符串</div>
	<pre><code>
$str = "aaBbCc";
$str = preg_replace("/(.)(?=[A-Z])/", "$1_", $str);
echo $str; // aa_Bb_Cc
	</code></pre>
`;