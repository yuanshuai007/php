// invokeFunction
const content_c = `
  <div>自定义调用函数</div>
  <pre><code>
    /**
     * 执行函数或者闭包方法 支持参数调用
     * @access public
     * @param string|Closure $function 函数或者闭包
     * @param array          $vars     参数
     * @return mixed
     */
    public function invokeFunction($function, array $vars = [])
    {
        try {
            $reflect = new ReflectionFunction($function);
        } catch (ReflectionException $e) {
            throw new FuncNotFoundException("function not exists: {$function}()", $function, $e);
        }

        $args = $this->bindParams($reflect, $vars);

        return $function(...$args);
    }

  </code></pre>
`;