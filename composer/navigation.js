let navigation = document.getElementById("navigation");
let navigation_list = "";

const navigations = [
  {id: "e", val: '初始化一个项目'},
  {id: "title", val: '包'},
  {id: "a", val: '安装一个包'},
	{id: "ab", val: '包名字'},
	{id: "ac", val: '包的命名空间'},
	{id: "title", val: 'composer.json'},
	{id: "d", val: '通用'},
	{id: "da", val: '注解'},
	{id: "title", val: '命令'},
	{id: "b", val: '修改autoload后'},
	{id: "title", val: '声明'},
	{id: "c", val: '--use'},
];

navigations.forEach(item => {
   if (item.id === "title") {
     navigation_list += `<h4 id="${item.id}">${item.val}</h4>`;
   } else {
		 navigation_list += `
			<div id="${item.id}" class="navigation-item">${item.val}</div>
		 `;  
	 }

});

navigation.innerHTML = navigation_list;