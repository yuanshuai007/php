let navigation = document.getElementById("navigation");
let navigation_list = "";

const navigations = [
  {id: "title", val: '脚本'},
  {id: "a", val: '启动自带的服务器'},
	{id: "ab", val: '获取到http对象'},
	{id: "ac", val: '执行http的run方法'},
	{id: "title", val: '事件'},
	{id: "f", val: '自定义事件'},
	{id: "fa", val: '.env'},
  {id: "title", val: '控制器'},
	{id: "ba", val: '基础'},
	{id: "bb", val: 'make'},
	{id: "b", val: 'bind'},
	{id: "be", val: 'getObjectParam'},
	{id: "bd", val: 'bindParams'},
	{id: "bc", val: 'invokeClass'},
	{id: "c", val: 'invokeFunction'},
	{id: "title", val: 'app'},
	{id: "d", val: 'initialize'},
  {id: "title", val: 'env'},
	{id: "e", val: 'load'},
	{id: "ea", val: 'set'},
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