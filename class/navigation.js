let navigation = document.getElementById("navigation");
let navigation_list = "";

const navigations = [
  {id: "title", val: '权限控制'},
  {id: "a", val: 'public'},
	{id: "ab", val: '获取当前指针指向'},
	{id: "title", val: '关键词'},
	{id: "b", val: 'static'},
	{id: "ba", val: 'self'},
	{id: "title", val: '删除元素'},
	{id: "c", val: '删除第一个元素，并返回删除的元素'},
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