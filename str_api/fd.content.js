//  
const content_fd = `
 
  <pre><code class="php">
/*
 * tp\\config\\*.php
 * 把配置文件里面的数组存到（Config类）config数组里面
 * [ "app" => ['app_namespace' => '', ...], ...]
*/
// D:\\软件\\thinkphp6\\tp\\config\\
$configPath = $this->getConfigPath();

$files = [];

if (is_dir($configPath)) {
  // 获取config目录下所有的文件名
  // $this->configExt = ".php"
  // $files = ["D:\\软件\\thinkphp6\\tp\\config\\app.php", ...] 
  $files = glob($configPath . '*' . $this->configExt);
}

foreach ($files as $file) {
  // pathinfo($file, PATHINFO_FILENAME) config目录下的文件名 app
  // $file 带路径和后缀的文件名 "D:\\软件\\thinkphp6\\tp\\config\\app.php"
  // 把配置文件里面的数组存到 config数组里面
  // [ "app" => ['app_namespace' => '', ...], ...]
  $this->config->load($file, pathinfo($file, PATHINFO_FILENAME));
}
	</code></pre>
`;