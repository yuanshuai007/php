//  
const content_f = `
 
  <pre><code class="php">
/*
 * app\\provider.php
 * 把app目录里面provider里面的数组存到bind数组里面
 * 供make函数使用
 */

// 文件
use app\\ExceptionHandle;
use app\\Request;

return [
    'think\\Request'          => Request::class,
    'think\\exception\Handle' => ExceptionHandle::class,
];

// 代码
if (is_file($this->appPath . 'provider.php')) {
  $this->bind(include $this->appPath . 'provider.php');
}

	</code></pre>
`;