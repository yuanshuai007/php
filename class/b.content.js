// 
const content_b = `
  
	<pre><code class="php">
/*
 * 总的来说，static代指本类
*/
// 1. 修辞静态属性和方法
class A {
  static $a = 1;
	static function foo () {
	}
}

// 2. 访问静态属性，静态方法
class A {
  static $a = 1;
	static function foo () {
	  echo static::$a;
	}
	static function bar () {
	  static::foo();
	}
}

// 3. 生成一个实例对象
class A {
	static function foo () {
	  return new static();
	}
}
	</code></pre>
`;