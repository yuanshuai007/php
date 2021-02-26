//  
const content_ff = `
 
  <pre><code class="php">
/*
 * app\\service.php
 *
*/
// 文件
use app\AppService;

// 系统服务定义文件
// 服务在完成全局初始化之后执行
return [
    AppService::class,
];

// 代码
        // 把app\\service.php里面的类，new出对象存到app里面的services数组里面
        // 并执行对象里面的register方法
        if (is_file($appPath . 'service.php')) {
            $services = include $appPath . 'service.php';
            foreach ($services as $service) {
                $this->register($service);
            }
        }
        // 初始化 会执行服务对象里面的boot方法
        foreach ($this->initializers as $initializer) {
            $this->make($initializer)->init($this);
        }
	</code></pre>
`;