//  
const content_h = `
  <div></div>
  <pre><code class="php">
    /**
     * 触发事件
     * @access public
     * @param string|object $event  事件名称
     * @param mixed         $params 传入参数
     * @param bool          $once   只获取一个有效返回值
     * @return mixed
     */
    // 执行listener里面的函数
    // 如果是类，则执行类里面的handle函数
    public function trigger($event, $params = null, bool $once = false)
    {
        if (is_object($event)) {
            $params = $event;
            $event  = get_class($event);
        }

        if (isset($this->bind[$event])) {
            $event = $this->bind[$event];
        }

        $result    = [];
        $listeners = $this->listener[$event] ?? [];
        $listeners = array_unique($listeners, SORT_REGULAR);

        foreach ($listeners as $key => $listener) {
            $result[$key] = $this->dispatch($listener, $params);

            if (false === $result[$key] || (!is_null($result[$key]) && $once)) {
                break;
            }
        }

        return $once ? end($result) : $result;
    }
	</code></pre>
`;