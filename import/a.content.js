//  
const content_a = `
  <div>
	  <p></p>
	</div>
  <pre><code class="php">
// 1. 最标椎的写法
namespace think;

use Closure;

$a = function () {};

var_dump($a instanceof Closure);

// 2. 没有命名空间
$a = function () {};

var_dump($a instanceof Closure);

// 3. 有命名空间，但不用use取别名
// \\Closure表示没有命名空间
// 不加\\，Closure的名称是think\\Closure
namespace think;

$a = function () {};

var_dump($a instanceof \Closure);
	</code></pre>
`;