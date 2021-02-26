// 驼峰转下划线
const content_a = `
  <div>
	  
	</div>
  <pre><code>
$str = "aaBbCc";
$str = preg_replace("/(.)(?=[A-Z])/", "$1_", $str);
echo strtolower($str); // aa_bb_cc
	</code></pre>
`;