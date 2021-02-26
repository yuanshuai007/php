// bind函数
const content_bd = `
  <div></div>
<pre><code class="php">
    /**
     * 执行函数或者闭包方法 支持参数调用
     * @access public
     * @param string|Closure $function 函数或者闭包
     * @param array          $vars     参数
     * @return mixed
     */
    protected function bindParams(ReflectionFunctionAbstract $reflect, array $vars = []): array
    {
        // 获取函数的形参数
        if ($reflect->getNumberOfParameters() == 0) {
            return [];
        }

        // 判断数组类型 数字数组时按顺序绑定参数
        reset($vars);
        $type   = key($vars) === 0 ? 1 : 0;

        // 获取形参组成的json
        $params = $reflect->getParameters();
        $args   = [];

        foreach ($params as $param) {

            // 获取形参的字符串名字
            $name      = $param->getName();
            // 把字符串从驼峰转为下划线
            $lowerName = Str::snake($name);
            // 获取形参的类型--返回值是一个对象
            $class     = $param->getClass();
            // 如果形参有类型说明
            if ($class) {
                // 获取形参类型对应的对象
                $args[] = $this->getObjectParam($class->getName(), $vars);
                // 1是数字数组
            } elseif (1 == $type && !empty($vars)) {
                $args[] = array_shift($vars);
            } elseif (0 == $type && array_key_exists($name, $vars)) {
                $args[] = $vars[$name];
            } elseif (0 == $type && array_key_exists($lowerName, $vars)) {
                $args[] = $vars[$lowerName];
            } elseif ($param->isDefaultValueAvailable()) {
                $args[] = $param->getDefaultValue();
            } else {
                throw new InvalidArgumentException('method param miss:' . $name);
            }
        }

        return $args;
    }


</code></pre>
`;