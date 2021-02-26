let navigation = document.getElementById("navigation");
let navigation_list = "";

const navigations = [
  {id: "title", val: '读取'},
  {id: "a", val: '读取配置文件'},
	{id: "ab", val: '获取当前指针指向的key'},
	{id: "title", val: '手动加载'},
	{id: "b", val: '手动加载'},
	{id: "title", val: '获取匹配的文件名'},
	{id: "c", val: 'glob'},
	{id: "title", val: '获取'},
	{id: "d", val: '获取第一个元素'},
	{id: "da", val: '获取第一个key'},
	{id: "e", val: '赋值='},
];

// 渲染列表
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