const content_c = `
  <div></div>
	<pre><code>
// 1. 获取全部的系统变量
getenv();
//
[ "ACLOCAL_PATH" => "/mingw32/share/aclocal:/usr/share/aclocal", ...]

// 2. 获取单个系统变量
getenv("ACLOCAL_PATH");
// 
"/mingw32/share/aclocal:/usr/share/aclocal"
	</code></pre>
`;