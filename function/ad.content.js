//  &--引用传递
const content_ad = `
  <div>
	  引用传递，让形参和实参指向共同的变量
	</div>
  <pre><code>
function func(&$a) {
  $a++;
}

$b = 1;
func($b);
echo $b; // 2


	</code></pre>

`;