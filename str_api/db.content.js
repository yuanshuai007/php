// 
const content_db = `
  <pre><code class="php">
    /**
     * 注册服务
     * @access public
     * @param Service|string $service 服务
     * @param bool           $force   强制重新注册
     * @return Service|null
     */
    public function register($service, bool $force = false)
    {
        // $service是服务类
        // $this->services = [服务对象1, ...]
        // 如果$this->services里面存在服务类的对象，则返回，否则返回null
        $registered = $this->getService($service);

        if ($registered && !$force) {
            return $registered;
        }

        if (is_string($service)) {
            $service = new $service($this);
        }

        if (method_exists($service, 'register')) {
            $service->register();
        }

        if (property_exists($service, 'bind')) {
            $this->bind($service->bind);
        }

        $this->services[] = $service;
    }
	</code></pre>
`;