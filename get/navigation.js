let navigation = document.getElementById("navigation");
let navigation_list = "";

const navigations = [
  {id: "a", val: '获取时间戳'},
	{id: "b", val: '获取php程序占用的内存'},
	{id: "c", val: '获取系统环境变量getenv()'},
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