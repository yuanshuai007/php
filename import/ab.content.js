//  
const content_ab = `
  <div>
	  <p>注意，同一目录下，use可省略</p>
	</div>
  <pre><code class="php">
// 1. 设置composer.json
"autoload": {
  "psr-4": {
    "think\\\\": "think/"
  }
}

// 2. 更新autoload文件
composer dump-autoload

// 3. 使用自动加载
namespace think;

require("vendor/autoload.php");

use think\\A;

$a = new A();

var_dump($a);

	</code></pre>
`;