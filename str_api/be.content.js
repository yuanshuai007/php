// bind函数
const content_be = `
  <div></div>
<pre><code class="php">
    /**
     * 获取对象类型的参数值
     * @access protected
     * @param string $className 类名
     * @param array  $vars      参数
     * @return mixed
     */
    // 如果参数数组里面不是类的实例，则make一个
    protected function getObjectParam(string $className, array &$vars)
    {
        $array = $vars;
        // 数组的第一个值
        $value = array_shift($array);
        // 如果数组的第一个值是实例的话，返回第一个值
        if ($value instanceof $className) {
            $result = $value;
            array_shift($vars);
        } else {
            $result = $this->make($className);
        }

        return $result;
    }

</code></pre>
`;