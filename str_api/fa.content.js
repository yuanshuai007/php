//  new App()里面的构造函数
const content_fa = `
 
  <pre><code class="php">
/*
 * tp\\.env
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

// 获取环境变量，优先获取自定义的，然后是系统环境变量
// 第二个参数是获取不到后的默认值
// 环境变量文件有没有定义config_ext（配置文件的后缀）
// 没有的话，默认是.php
$this->configExt = $this->env->get('config_ext', '.php');

$this->debugModeInit();

	</code></pre>
`;