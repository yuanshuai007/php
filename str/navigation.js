let navigation = document.getElementById("navigation");
let navigation_list = "";

const navigations = [
	{id: "title", val: '替换'},
	{id: "b", val: "正则替换"},
  {id: "title", val: '连接方式'},
  {id: "a", val: '驼峰转下划线'},
	{id: "ab", val: '下划线转驼峰'},
	{id: "title", val: '大小写互转'},
	{id: "c", val: '大小写互转'},
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