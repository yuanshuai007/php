//  new App()里面的构造函数
const content_fa = `
 
  <pre><code class="php">
/*
 * 
 * 
 */

// 文件
[DATABASE]
TYPE = mysql

// 代码
// 将文件变成 [ "DATABASE_TYPE" => "mysql" ]
if (is_file($this->rootPath . '.env')) {
  $this->env->load($this->rootPath . '.env');
}


$this->configExt = $this->env->get('config_ext', '.php');

$this->debugModeInit();

	</code></pre>
`;