"use strict";

/**
 * 以 $ 开头的字段为可直接替换的标签。如果某个 field 字
 * 段中含有 s% 则必须在 Format 下创建该 field 的默认配
 * 置信息（default）。 请参考 puhtime 
 * 
 */

var salt = function(){
	var _core = {},
		_temp = '';
	var	config = {
		
		fname :	'曾赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水符窦章云苏潘葛奚范彭郎鲁韦昌马苗凤花方俞任' +
				'袁柳酆鲍史唐费廉岑薛雷贺倪汤滕殷罗毕郝号邬安常乐于时傅皮卞齐康伍余元卜顾孟平黄和穆萧尹姚邵湛汪祁毛禹狄米贝明臧计伏成戴语' +
				'谈宋茅庞熊纪舒屈项祝董梁杜阮蓝闵席季麻强贾路娄危江童颜郭梅盛林刁徐邱骆高夏蔡田言樊胡凌霍虞万支柯昝管卢莫经房裘缪干解应宗' +
				'丁宣邓贲郁单杭洪包诸左石崔吉钮龚程嵇邢象滑裴陆荣翁荀羊於惠甄麴家封芮羿储靳汲邴糜松段富巫乌焦巴弓牧隗山谷关妫桂国海侯后形' +
				'弘庚巩贡古甘郜戈艾文丰鄂法都钭堵扶符楚从苍池仇是党东白班暴敖能聂牛农薄步边晁巢钱车查柴荆居盖蒯夔利连廖蔺刘龙乜蒙禄劳满那' +
				'宓宁隆栾终仲阎晏燕翟欧竺訾祖越宰黎厉郦大景鞠空寇匡赖简暨冀郏姬桓益仉仰养伊易鱼雍卓钟印叶庄旷邝来操承浮洑蓬朋朴詹游芈睦尹' +
				'冒门慕谬麦南区苟光刚归宦荤户蹇翦揭矫鹿楼励商尚韶萨赛桑沙璩茹戎容融曲瞿全权阙冉看让饶慈屠寿旧长孙单于第五东郭独孤段干公孙' +
				'公西谷梁皇甫乐正令狐慕容欧阳漆雕上官司罢空申屠司寇司马司徒太叔拓跋万俟微生尉迟闻人巫马西门夏侯鲜于轩辕羊舌宇文宰父钟离视' +
				'仲孙诸葛子车宗政左丘谌多逄公藩冠过官秋闻况乔谭宿邰碧鲁额尔德雨赫舍里库雅喇纳喇觉钮祜禄萨克达疏束图门喜塔腊相里叶赫纳拉依' +
				'尔觉悟罗伊雨根觉罗章佳仲长东门东方澹台表淳于百里爪雨佳端木公良公羊公冶赫连夹谷梁丘濮阳闾丘南宫壤驷清图像箇前行所属去处义',
				
		word:	'个上们来到时大地为子中你说生国年着就那和要她出也得里后自以会家可下而过天去能对小多然于心学么之都好看起发当没成只如事把还' + 
				'用第样道想作种开美总从无情己面最女但现前些所同手又行意动方期它头经长儿回位分爱老因很给名法间斯知世什两次使身者被有高已亲' + 
				'其进此话常与活正感见明问力理尔点文几定本公特做外孩相西果走将月十实向声车全信重三机工物气每并别真打太新比才便夫再书部水像' + 
				'眼等体却加电主界门利海受听表德少克代员许稜先口由安写性马光白或住难望教命花结乐色更拉东神记处让母父应直字场平报友关放至这' + 
				'张认接告入笑内英军候民岁往何度山觉路带万男边风解叫任金快原吃妈变通师立象数四失满战远格士音轻目条呢病始达深完今提求清王化' + 
				'空业思切怎非找片罗钱紶吗语元喜曾离飞科言干流欢约各即指合反题必该论交终林请医晚制球决窢传画保读运及则房早院量苦火布品近坐' + 
				'产答星精视五连司巴奇管类未朋且婚台夜青北队久乎越观落尽形影红爸百令周吧识步希亚术留市半热送兴造谈容极随演收首根讲整式取照' + 
				'办强石古华諣拿计您装似足双妻尼转诉米称丽客南领节衣站黑刻统断福城故历惊脸选包紧争另建维绝树系伤示愿持千史谁准联妇纪基买志' + 
				'静阿诗独复痛消社算义竟确酒需单治卡幸兰念举仅钟怕共毛句息功官待究跟穿室易游程号居考突皮哪费倒价图具刚脑永歌响商礼细专黄块' + 
				'脚味灵改据般破引食仍存众注笔甚某沉血备习校默务土微娘须试怀料调广蜖苏显赛查密议底列富梦错座参八除跑亮假印设线温虽掉京初养' + 
				'香停际致阳纸李纳验助激够严证帝饭忘趣支春集丈木研班普导顿睡展跳获艺六波察群皇段急庭创区奥器谢弟店否害草排背止组州朝封睛板' + 
				'角况曲馆育忙质河续哥呼若推境遇雨标姐充围案伦护冷警贝著雪索剧啊船险烟依斗值帮汉慢佛肯闻唱沙局伯族低玩资屋击速顾泪洲团圣旁' + 
				'堂兵七露园牛哭旅街劳型烈姑陈莫鱼异抱宝权鲁简态级票怪寻杀律胜份汽右洋范床舞秘午登楼贵吸责例追较职属渐左录丝牙党继托赶章智' + 
				'冲叶胡吉卖坚喝肉遗救修松临藏担戏善卫药悲敢靠伊村戴词森耳差短祖云规窗散迷油旧适乡架恩投弹铁博雷府压超负勒杂醒洗采毫嘴毕九' + 
				'冰既状乱景席珍童顶派素脱农疑练野按犯拍征坏骨余承置臓彩灯巨琴免环姆暗换技翻束增忍餐洛塞缺忆判欧层付阵玛批岛项狗休懂武革良' + 
				'恶恋委拥娜妙探呀营退摇弄桌熟诺宣银势奖宫忽套康供优课鸟喊降夏困刘罪亡鞋健模败伴守挥鲜财孤枪禁恐伙杰迹妹藸遍盖副坦牌江顺秋' + 
				'萨菜划授归浪听凡预奶雄升碃编典袋莱含盛济蒙棋端腿招释介烧误的一是了我不人在他',
		
		english: 'abcdefghijklmnopqrstuvwxyz',
		lang:"en",
		
		dateTime:{
			Y:'2016',
			M:'03',
			D:'30 ',
			h:'17',
			m:'21',
			s:'16'
		},

		dirlength:{
			fname	:599,
			word	:997,
		}
	}

	_core.setLang = function(lang){
		config.lang = lang;
	}
	
	function getRandom(max, min){
		min = min || 0;
		return  Math.round(Math.random() * max + min );
	}

	function getEnglishWords(length){
		var _i =0;
		var _x = getRandom(8, 2);
		_temp = '';

		for (var index = 0; index < length; index++) {
			if (index ==0){
				_temp = config.english[getRandom(25)].toUpperCase();
			}
			
			if (_i != _x){
				_i++;
			}else{
				_temp+= ' ';
				_i = 0;
				_x = getRandom(8, 2);
				continue;
			}

			_temp += config.english[getRandom(25)];

		}
		return _temp;
	}

	
	function getWords(dir, length) {		
		_temp = '';

		if (config.lang == 'cn') {
			for (var index = 0; index < length; index++) {
				_temp += config[dir][getRandom(config.dirlength[dir])];
			}
		}else{
			getEnglishWords(length);
		}
		
		return _temp;
	}
	
	_core.text = function (length) {
		return getWords('word',length);
	}
	
	_core.nickname = function (number) {
		var list = '';
		for (var index = 0; index < number; index++) {
			list += getWords('fname',1) + getWords('word',2) + ' ';
		}
		return list;
	}
	
	_core.number = function (digit) {
		digit = parseInt(digit);
		return getRandom(Math.pow(10, digit)-1,Math.pow(10, digit-1)).toString();
	}

	_core.dateTime = function(param){		
		return param.replace(/[a-zA-Z]/g, function (letter) {
			return config.dateTime[letter];
		});
	}
	
	_core.content = function (number) {
		_temp = '';
		for (var index = 0; index < number; index++) {
			_temp += '<p>' + getWords('word',getRandom(300,60)) + '。</p>\n';
		}
		return _temp;
	}
	
	
	return _core;
}
module.exports = salt();