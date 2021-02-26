let navigation = document.getElementById("navigation");
let navigation_list = "";

const navigations = [
  {id: "title", val: "类型判断"},
  {id: "a", val: '数组'},
	{id: "b", val: '匿名函数'},
	{id: "e", val: '对象instanceof'},
	{id: "title", val: "值判断"},
	{id: "c", val: '赋值isset()'},
	{id: "d", val: '空empty()'},
	{id: "title", val: "对象"},
	{id: "f", val: '属性'},
	{id: "fa", val: '方法'},
	{id: "title", val: "字符串"},
	{id: "g", val: '以什么字符开头'},
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