let navigation = document.getElementById("navigation");
let navigation_list = "";

const navigations = [
  {id: "title", val: '字母'},
  {id: "a", val: '\\s'},
	{id: "title", val: '字符--天然具有特殊意义'},
	{id: "b", val: '?'},
	{id: "ba", val: '.'},
  {id: "title", val: '字符组合'},
	{id: "c", val: '?='},
	{id: "title", val: '修辞符'},
	{id: 'd', val: "小写u"}
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