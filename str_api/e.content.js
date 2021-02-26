// 
const content_e = `
  <div></div>
  <pre><code>
/**
 * 读取环境变量定义文件
 * @access public
 * @param string $file 环境变量定义文件
 * @return void
 */
// 将配置文件变成二维数组
// [APP]
// DEFAULT_TIMEZONE = Asia/Shanghai
// 变成
// [ APP => [ "DEFAULT_TIMEZONE" => "Asia/Shanghai" ] ]

public function load(string $file): void
{
  $env = parse_ini_file($file, true) ?: [];
  $this->set($env);
}
  </code></pre>
`;