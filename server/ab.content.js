//  app实例如何获取到http对象
const content_ab = `
  <div>$http = (new App())->http;</div>
  <div></div>
  <pre><code>
// 1. 由于$app没有http属性，所以会触发__get函数
// 2. 由里面的make函数生成$http对象
/**
 * 获取容器中的对象实例
 * @access public
 * @param string $abstract 类名或者标识
 * @return object
 */
public function __get($abstract)
{
  if ($this->has($abstract)) {
    return $this->make($abstract);
  }

  throw new ClassNotFoundException('class not exists: ' . $abstract, $abstract);
}
	</code></pre>
`;