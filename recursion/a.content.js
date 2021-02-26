//  打印出数组中的每一个项
const content_a = `
  <div>
	  打印出数组中的每一个项
	</div>
	<div>
	  思路: 遍历数组，如果里面的项是数组，递归
		不是，进行接下来的操作
	</div>
  <pre><code class="php">
function recursion_arr($arr) {
  foreach ($arr as $key => $val) {
    if (is_array($val)) {
      recursion_arr($val);
    } else {
      var_dump($val);
    }
  }
}
recursion_arr([1, 2, 3, [4, 5], 6]); // 1,2,3,4,5,6
	</code></pre>
`;