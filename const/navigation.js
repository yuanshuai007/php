let navigation = document.getElementById("navigation");
let navigation_list = "";

const navigations = [
  {id: "a", val: '__DIR__'},
	{id: "b", val: 'php方法'},
	{id: "c", val: 'php对象'},
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