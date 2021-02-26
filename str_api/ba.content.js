// has
const content_ba = `
  <div></div>
<pre><code>
/**
 * 判断容器中是否存在类及标识
 * @access public
 * @param string $abstract 类名或者标识
 * @return bool
 */
public function has(string $abstract): bool
{
  // bind数组和instances数组里面是否存在相应的值
  return isset($this->bind[$abstract]) || isset($this->instances[$abstract]);
}

</code></pre>
`;