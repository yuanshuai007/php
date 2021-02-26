let navigation = document.getElementById("navigation");
let navigation_list = "";

const navigations = [
  {id: "title", val: '类'},
  {id: "a", val: '导入系统类'},
	{id: "ab", val: '导入自己写的类'},
	{id: "ac", val: '导入包里面的类'},
	{id: "title", val: '--删除元素'},
	{id: "c", val: '--删除第一个元素，并返回删除的元素'},
	{id: "title", val: '--获取'},
	{id: "d", val: '--获取第一个元素'},
	{id: "da", val: '--获取第一个key'},
	{id: "e", val: '--赋值='},
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