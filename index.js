// 右边的内容dom
const dom_content = document.getElementById("content");
dom_content.innerHTML = "";
// 左边导航栏项的dom
let dom_item = null;

	// 切换右边的内容
function switch_content(e) {
	// console.dir(e.target);
	if (e.target.id !== 'title') {
		// 点击导航栏添加高亮
		if (dom_item) {
			dom_item.setAttribute( "class", "navigation-item" );
		}
		dom_item = e.target;
		e.target.setAttribute( "class", "navigation-item navigation-highlight" );
		// 点击导航栏切换内容
		dom_content.innerHTML = contents[e.target.id];
	}
	const code = document.querySelector('pre code');
	// console.log(code);
	if (code) {
		hljs.highlightBlock(code);
	}
}