// 
const content_bc = `
  <div></div>
<pre><code>
/**
* 调用反射执行类的实例化 支持依赖注入
* @access public
* @param string $class 类名
* @param array  $vars  参数
* @return mixed
*/
public function invokeClass(string $class, array $vars = [])
{
  try {
    $reflect = new ReflectionClass($class);
  } catch (ReflectionException $e) {
    throw new ClassNotFoundException('class not exists: ' . $class, $class, $e);
  }
  // 如果类里面有__make方法，执行
  if ($reflect->hasMethod('__make')) {
    $method = $reflect->getMethod('__make');
    if ($method->isPublic() && $method->isStatic()) {
      $args = $this->bindParams($method, $vars);
      return $method->invokeArgs(null, $args);
    }
  }
  // new一个class
  $constructor = $reflect->getConstructor();

  $args = $constructor ? $this->bindParams($constructor, $vars) : [];

  $object = $reflect->newInstanceArgs($args);

  $this->invokeAfter($class, $object);

  return $object;
}
</code></pre>
`;