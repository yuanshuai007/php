// 
const content_d = `
  <pre><code class="php">
    /**
     * 初始化应用
     * @access public
     * @return $this
     */
    public function initialize()
    {
        $this->initialized = true;
        // 时间戳
        $this->beginTime = microtime(true);
        // php程序内存占用的空间
        $this->beginMem  = memory_get_usage();

        // 加载环境变量
        if (is_file($this->rootPath . '.env')) {
            $this->env->load($this->rootPath . '.env');
        }

        $this->configExt = $this->env->get('config_ext', '.php');

        $this->debugModeInit();

        // 加载全局初始化文件
        $this->load();

        // 加载框架默认语言包
        $langSet = $this->lang->defaultLangSet();

        $this->lang->load($this->thinkPath . 'lang' . DIRECTORY_SEPARATOR . $langSet . '.php');

        // 加载应用默认语言包
        $this->loadLangPack($langSet);

        // 监听AppInit
        $this->event->trigger(AppInit::class);

        date_default_timezone_set($this->config->get('app.default_timezone', 'Asia/Shanghai'));

        // 初始化
        foreach ($this->initializers as $initializer) {
            $this->make($initializer)->init($this);
        }

        return $this;
    }

	</code></pre>
`;