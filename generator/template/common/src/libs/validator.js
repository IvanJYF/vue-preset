/******** 检验身份证开始 ********/
var checkProv = function (val) {
    var pattern = /^[1-9][0-9]/;
    var provs = {11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门"};
    if(pattern.test(val)) {
        if(provs[val]) {
            return true;
        }
    }
    return false;
}
var checkDate = function (val) {
    var pattern = /^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/;
    if(pattern.test(val)) {
        var year = val.substring(0, 4);
        var month = val.substring(4, 6);
        var date = val.substring(6, 8);
        var date2 = new Date(year+"-"+month+"-"+date);
        if(date2 && date2.getMonth() == (parseInt(month) - 1)) {
            return true;
        }
    }
    return false;
}
var checkCode = function (val) {
    var p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
    var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
    var code = val.substring(17);
    if(p.test(val)) {
        var sum = 0;
        for(var i=0;i<17;i++) {
            sum += val[i]*factor[i];
        }
        if(parity[sum % 11] == code.toUpperCase()) {
            return true;
        }
    }
    return false;
}
export function checkID(val) {
    if(checkCode(val)) {
        var date = val.substring(6,14);
        if(checkDate(date)) {
            if(checkProv(val.substring(0,2))) {
                return true;
            }
        }
    }
    return false;
}
/******** 检验身份证结束 ********/

/******** 手机号校验 ********/
export function checkPhone(value,rule) {
    var reg = rule || /1([38][0-9]|4[5-9]|5[0-3,5-9]|6[56]|7[0-8]|9[189])\d{8}/;
    return reg.test(value.toString());
}

/******** 固号校验 ********/
export function validateTelphone(value,rule) {
    const reg = rule || /0\d{2}-\d{7,8}/;
    return reg.test(value.toString());
}

/******** 校验是否手机号码或者固话 ********/
export function validatePhoneTwo(value,rule) {
    const reg = rule || /^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/;
    return reg.test(value.toString());
}

/******** 校验邮箱 ********/
export function validateEMail(value,rule) {
    const reg = rule || /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/;
    return reg.test(value.toString());
}

/******** 校验密码 ********/
export function checkPassword(value,rule) {
    const reg = rule || /^[_a-zA-Z0-9]{8,16}$/;
    return reg.test(value.toString());
}
/******** 校验用户名 ********/
export function checkUser(value,rule) {
    const reg = rule || /^[a-zA-Z]\w{4,15}$/;
    return reg.test(value.toString());
}

/******** 校验是不是一个小数 ********/
export function isFloat(value,rule) {
    const reg = rule || /^[0-9]+.[0-9]+$/;
    return reg.test(value.toString());
}
/******** 校验邮政编码 ********/
export function valiPostal(value) {
    const reg = /^(?!(\d)\1{5})\d{6}$/;
    const reg2 = /^(?!(\d)\1{2}(?!\1)(\d)\2{2})\d{6}$/;
    return reg.test(value.toString()) && reg2.test(value.toString());
}


class validator {
    /******** 判空 ********/
	isEmpty(str) {
		if ("" === str || "undefined" === str || null == str || "null" === str) {
			return true;
		} else {
			return false;
		}
	}
	/**
	 * 判断是否为身份证
	 * @param {string} str 身份证号
	 */
	isIdCard(str) {
		var reg =
			/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
		return reg.test(str)
	}
	/*
	 * @parme String value:手机号
	 * @desc 手机号校验
	 */
	isPhone(value) {
		var reg = /1([38][0-9]|4[5-9]|5[0-3,5-9]|6[56]|7[0-8]|9[189])\d{8}/;
		return reg.test(value.toString());
	}
	/*
	 * @parme String email:邮箱
	 * @desc 邮箱校验
	 */
	isEmail(email) {
		var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
		return reg.test(email);
	}
	/******** 校验是不是一个小数 ********/
	isFloat(value, rule) {
		const reg = rule || /^[0-9]+.[0-9]+$/;
		return reg.test(value.toString());
	}
}
