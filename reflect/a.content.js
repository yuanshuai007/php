//  获取函数的反射
const content_a = `
  <div>
	  <p>$function可以是字符串函数名，也可以是闭包</p>
	</div>
  <pre><code>
try {
  $reflect = new ReflectionFunction($function);
} catch (ReflectionException $e) {
  throw new FuncNotFoundException("function not exists: {$function}()", $function, $e);
}
	</code></pre>
`;