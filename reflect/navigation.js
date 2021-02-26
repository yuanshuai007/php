let navigation = document.getElementById("navigation");
let navigation_list = "";

const navigations = [
  {id: "title", val: '函数反射'},
  {id: "a", val: '获取反射对象'},
	{id: "ab", val: '获取函数有几个形参'},
	{id: "title", val: '函数反射对象--$reflect'},
	{id: "b", val: 'getNumberOfParameters()'},
	{id: "ba", val: 'getParameters()'},
	{id: "title", val: '形参对象--$param'},
	{id: "c", val: 'getName()'},
	{id: "ca", val: 'getClass()'},
	{id: "title", val: '形参类型对象--$class'},
	{id: "d", val: 'getName()'},
	{id: "title", val: '类反射'},
	{id: "e", val: '获取反射对象'},
	{id: "title", val: '类的反射对象$reflect'},
	{id: "f", val: 'hasMethod()'},
	{id: "fa", val: 'getMethod()'},
	{id: "fb", val: 'newInstanceArgs()'},
	{id: "title", val: '类的方法对象$method'},
	{id: "h", val: 'isPublic()'},
	{id: "ha", val: 'isStatic()'},
	{id: "hb", val: 'invokeArgs()'},
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