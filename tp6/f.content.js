//  
const content_f = `
 
  <pre><code class="php">
// 1. 定义事件
// (1) 生成事件类文件
php think make:listener UserLogin
// (2) 在事件类的handle函数中，编写逻辑
public function handle($event)
{
  echo "aaa";
}

// 2. 存储事件
// (1) 系统初始化的时候
'listen'    => [
  'UserLogin' => ['app\listener\UserLogin']
],

// 3. 触发事件
event("UserLogin");
	</code></pre>
`;