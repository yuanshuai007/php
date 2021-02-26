// 获取形参组成的json
const content_ba = `
  <div>获取形参组成的json</div>
	<pre><code>
function foo($a, $b) {
  echo 11;
};

$reflect = new ReflectionFunction("foo");
$ret = $reflect->getParameters();
var_dump($ret); 

array(2) {
  [0]=>
  object(ReflectionParameter)#2 (1) {
    ["name"]=>
    string(1) "a"
  }
  [1]=>
  object(ReflectionParameter)#3 (1) {
    ["name"]=>
    string(1) "b"
  }
}

	</code></pre>
`;