//  new App()里面的构造函数
const content_a = `
  <div></div>
  <pre><code class="php">
// 1. 把provide文件里面的类存到bind数组里面
// 2. 把$this存到instances数组里面
public function __construct(string $rootPath = '')
{
  // think文件夹所在的目录 ...tp\\vendor\\topthink\\framework\\src\\
  $this->thinkPath = dirname(__DIR__) . DIRECTORY_SEPARATOR;

  $this->rootPath = $rootPath ? rtrim($rootPath, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR 
                      : $this->getDefaultRootPath();

  $this->appPath = $this->rootPath . 'app' . DIRECTORY_SEPARATOR;

  $this->runtimePath = $this->rootPath . 'runtime' . DIRECTORY_SEPARATOR;

  if (is_file($this->appPath . 'provider.php')) {
    $this->bind(include $this->appPath . 'provider.php');
  }

  static::setInstance($this);

  $this->instance('app', $this);
  $this->instance('think\Container', $this);
}

	</code></pre>
`;