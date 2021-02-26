//  
const content_ac = `
  <div>
	</div>
  <pre><code class="php">
// 1. 安装包---会自动更新autoload文件
composer require monolog/monolog

// 2. 查看命名空间和对应的路径
"autoload": {
  "psr-4": {"Monolog\\\\": "src/Monolog"}
},

// 3. 导入类
namespace think;

require("vendor/autoload.php");
// 导入”Monolog“目录下的Logger文件
use Monolog\\Logger;

var_dump(new Logger("aaa"));
	</code></pre>
`;