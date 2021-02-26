// 
const content_bb = `
  <div></div>
<pre><code>
/**
 * 创建类的实例 已经存在则直接获取
 * @access public
 * @param string $abstract    类名或者标识
 * @param array  $vars        变量
 * @param bool   $newInstance 是否每次创建新的实例
 * @return mixed
 */
public function make(string $abstract, array $vars = [], bool $newInstance = false)
{
  $abstract = $this->getAlias($abstract);
  // 如果存在实例，直接返回
  if (isset($this->instances[$abstract]) && !$newInstance) {
    return $this->instances[$abstract];
  }
  // 如果bind里面存在相应的值，并且值是闭包，直接调用
  if (isset($this->bind[$abstract]) && $this->bind[$abstract] instanceof Closure) {
    $object = $this->invokeFunction($this->bind[$abstract], $vars);
  } else {
  // 生成一个类 
    $object = $this->invokeClass($abstract, $vars);
  }

  if (!$newInstance) {
    $this->instances[$abstract] = $object;
}

  return $object;
}
</code></pre>
`;