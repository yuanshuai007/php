// 
const content_ba = `
  <div></div>
<pre><code class="php">
// 1. 生成一个控制器文件
php think make:controller User

// 2. 文件函数对应的路径
class User {
  public function login () {
    return 'login';
  }
}
// 对应的路径（在没有设置路由的情况下）
http://localhost/user/login
</code></pre>
`;