//  获取形参的字符串名字
const content_ac = `
  <div>
	  
	</div>
  <pre><code>
// 先获取形参组成的json
$params = $reflect->getParameters();

foreach ($params as $param) {
   $name = $param->getName();
   echo $name; // a b
}
	</code></pre>

`;