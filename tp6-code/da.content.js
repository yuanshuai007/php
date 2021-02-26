// 
const content_da = `
  <pre><code class="php">
    /**
     * 加载应用文件和配置
     * @access protected
     * @return void
     */
    protected function load(): void
    {
        $appPath = $this->getAppPath();

        if (is_file($appPath . 'common.php')) {
            include_once $appPath . 'common.php';
        }

        include_once $this->thinkPath . 'helper.php';
        // D:\\软件\\thinkphp6\\tp\\config\\
        $configPath = $this->getConfigPath();

        $files = [];

        if (is_dir($configPath)) {
            // 获取config目录下所有的文件名
            // $this->configExt = ".php"
            // $files = ["D:\\软件\\thinkphp6\\tp\\config\\app.php", ...]
            $files = glob($configPath . '*' . $this->configExt);
        }
        
        foreach ($files as $file) {
            $this->config->load($file, pathinfo($file, PATHINFO_FILENAME));
        }
        // 把事件存起来
        if (is_file($appPath . 'event.php')) {
            $this->loadEvent(include $appPath . 'event.php');
        }
        // 把app\\service.php里面的类，new出对象存到app里面的services数组里面
        if (is_file($appPath . 'service.php')) {
            $services = include $appPath . 'service.php';
            foreach ($services as $service) {
                $this->register($service);
            }
        }
    }

	</code></pre>
`;