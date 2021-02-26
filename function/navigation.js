let navigation = document.getElementById("navigation");
let navigation_list = "";

const navigations = [
  {id: "title", val: '形参'},
  {id: "a", val: '获取形参的数量'},
	{id: "ab", val: '获取形参组成的json'},
	{id: "ac", val: '获取形参的字符串名字'},
	{id: "title", val: '关键词'},
	{id: "ad", val: '&'},
	{id: "b", val: 'use'},
	{id: "title", val: '作用域'},
  {id: "c", val: '使用外部变量'},
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