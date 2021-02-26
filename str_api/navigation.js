let navigation = document.getElementById("navigation");
let navigation_list = "";

const navigations = [
  {id: "a", val: 'strpos'},
	{id: "ab", val: '获取到http对象'},
	{id: "ac", val: '执行http的run方法'},
	{id: "title", val: '文件加载'},
	{id: "f", val: 'provider.php'},
	{id: "fa", val: '.env'},
	{id: "fb", val: 'common.php'},
	{id: "fc", val: 'helper.php'},
	{id: "fd", val: 'config\\*.php'},
	{id: "fe", val: 'event.php'},
	{id: "ff", val: 'service.php'},
  {id: "title", val: 'container'},
	{id: "ba", val: 'has'},
	{id: "bb", val: 'make'},
	{id: "b", val: 'bind'},
	{id: "be", val: 'getObjectParam'},
	{id: "bd", val: 'bindParams'},
	{id: "bc", val: 'invokeClass'},
	{id: "c", val: 'invokeFunction'},
	{id: "title", val: 'app'},
	{id: "d", val: 'initialize'},
	{id: "da", val: 'load'},
	{id: "db", val: 'register'},
  {id: "title", val: 'env'},
	{id: "e", val: 'load'},
	{id: "ea", val: 'set'},
	{id: "title", val: 'event'},
	{id: "h", val: 'trigger'},
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