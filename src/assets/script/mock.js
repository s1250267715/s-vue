// 使用 Mock
const Mock = require('mockjs')

const obj = {
	a: "你后退半步的动作是认真的么?",
	b: "黑夜给了我黑色的眼睛，我却用它来寻找光明",
	c: "什么？你说是我的？哦，老天，怪不得它看上去是那么熟悉！"
}
const mockData = Mock.mock({
	// 属性 list 的值是一个数组，随机生成 1 到 10 个元素
	'list|1-10': [{
		'name': '@cname', // 中文名称
		'id|+1': 88, // 属性值自动加 1，初始值为88
		'age|18-28': 0, // 18至28以内随机整数, 0只是用来确定类型
		'birthday': '@date("yyyy-MM-dd")', // 日期
		'city': '@city(true)', // 中国城市
		'color': '@color', // 16进制颜色
		'bool|1': true, // 布尔值
		'isSth|1-2': true, // true的概率是1/3
		'obj|2': obj, // 从obj对象中随机获取2个属性
		'obj2|1-3': obj, // 从obj对象中随机获取1至3个属性
		'brother|1': ['jack', 'jim'], // 随机选取 1 个元素
		'sister|+1': ['jack', 'jim', 'lily'], // array中顺序选取元素作为结果
		'friends|2': ['jack', 'jim'] // 重复2次属性值生成一个新数组
	}]
})
export default mockData