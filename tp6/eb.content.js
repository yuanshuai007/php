// 
const content_eb = `
  <div></div>
  <pre><code>
    /*
     * @param string|array $env   环境变量
     * @param mixed        $value 值
     */
    // 将二维数组变一维
    // [ "DATABASE" => [ "TYPE" => "mysql" ] ]
    // 变成
    // [ "DATABASE_TYPE" => "mysql" ]
    public function set($env, $value = null): void
    {
        if (is_array($env)) {
            $env = array_change_key_case($env, CASE_UPPER);

            foreach ($env as $key => $val) {
                if (is_array($val)) {
                    foreach ($val as $k => $v) {
                        $this->data[$key . '_' . strtoupper($k)] = $v;
                    }
                } else {
                    $this->data[$key] = $val;
                }
            }
        } else {
            $name = strtoupper(str_replace('.', '_', $env));

            $this->data[$name] = $value;
        }
    }

  </code></pre>
`;