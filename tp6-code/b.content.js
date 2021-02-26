// bind函数
const content_b = `
  <div></div>
<pre><code class="php">
/**
 * 绑定一个类、闭包、实例、接口实现到容器
 * @access public
 * @param string|array $abstract 类标识、接口
 * @param mixed        $concrete 要绑定的类、闭包或者实例
 * @return $this
 */
 // 如果是实例，存到instances数组里面，其他的存到bind数组里面
public function bind($abstract, $concrete = null)
{
	if (is_array($abstract)) {

		foreach ($abstract as $key => $val) {
			$this->bind($key, $val);
		}

	} elseif ($concrete instanceof Closure) {

		$this->bind[$abstract] = $concrete;

	} elseif (is_object($concrete)) {

		$this->instance($abstract, $concrete);

	} else {

		$abstract = $this->getAlias($abstract);
		if ($abstract != $concrete) {
			$this->bind[$abstract] = $concrete;
		}
	}
	return $this;
}

</code></pre>
`;