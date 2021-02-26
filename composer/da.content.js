// json是没有注释的
const content_da = `
  <div>json是没有注释的，下面的注释是错的，是为了方便记录</div>
	<pre><code class="json">
{
    // 供应商名/项目名
    "name": "topthink/think",
    "description": "the new thinkphp framework",
    // 包是一个项目而不是库
    "type": "project",
    // 用于composer搜索
    "keywords": [
        "framework",
        "thinkphp",
        "ORM"
    ],
    "homepage": "http://thinkphp.cn/",
    // 授权许可，规定了用户的权利
    // 允许修改，再发布（作为开源和商业软件）
    "license": "Apache-2.0",
    "authors": [
        {
            "name": "liu21st",
            "email": "liu21st@gmail.com"
        },
        {
            "name": "yunwuxin",
            "email": "448901948@qq.com"
        }        
    ],
    // 依赖
    "require": {
        "php": ">=7.1.0",
        // ^表示只有大版本号不能变，其余的都可以变
        // 6.0.0<=版本号<7.0.0
        "topthink/framework": "^6.0.0",
        // 1.2<=版本号<1.3
        "monolog/monolog": "1.2.*"
    },
    "require-dev": {
        "symfony/var-dumper": "^4.2",
        "topthink/think-trace":"^1.0"
    },
    // 定义命名空间和以及它对应的路径
    "autoload": {
         // 优先使用此规范
        "psr-4": {
            // 命名空间要以\\\\结束
            "app\\\\": "app/"
        },  
        "psr-0": {	
            // 任何命名空间的备用目录
            "": "extend/"
        }
    },
    "config": {
         // 安装包的模式
         // dist: 下载zip包，并缓存到本地
         // 不保留.git文件夹，没有版本信息
         // 适合不修改包
         // https://www.jianshu.com/p/30e475683629
        "preferred-install": "dist"
    },
    "scripts": {
        // 在自动加载器被转储后触发，无论是install/update/dump-autoload命令都会触发
        "post-autoload-dump": [
            // 执行命令 对应的文件在
            // vendor/topthink/framework/src/think/console/command/ServiceDiscover.php
            "@php think service:discover",
            "@php think vendor:publish"
        ]
    }
}
	</code></pre>
`;