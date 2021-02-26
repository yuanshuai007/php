//  
const content_fe = `
 
  <pre><code class="php">
/*
 * app\\event.php
 * 
 * 把文件里面的数组存起来
*/
// 代码
        if (isset($event['bind'])) {
            $this->event->bind($event['bind']);
        }
	  
        // listener = [ 'AppInit'  => [], 'HttpRun'  => [], ...]
        if (isset($event['listen'])) {
            $this->event->listenEvents($event['listen']);
        }

        if (isset($event['subscribe'])) {
            $this->event->subscribe($event['subscribe']);
        }
	</code></pre>
`;