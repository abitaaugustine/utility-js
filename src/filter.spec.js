const filter = require('./filter');

describe('Filter', () => {

    it('Filter of [],x=>true is []', () => {
    	const trueVal = (value) =>{
    		return true;
    	}
        expect(filter([], trueVal)).toEqual([]);
    });

    it('Filter of [1,2,3],x=>true is [1,2,3]', () => {
    	const trueVal = (value) =>{
    		return true;
    	}
        expect(filter([1,2,3], trueVal)).toEqual([1,2,3]);
    });

    it('Filter of [1,2,3],x=>false is []', () => {
    	const falseVal = (value) =>{
    		return false;
    	}
        expect(filter([1,2,3], falseVal)).toEqual([]);
    });

    it('Filter of [\'a\',\'B\',\'c\',\'D\'],filterUpperCase is []', () => {
    	const filterUpperCase = (value) =>{
    		return value === value.toUpperCase();
    	}
        expect(filter(['a','B','c','D'], filterUpperCase)).toEqual(['B','D']);
    });

    it('Filter of [1,2,3],x=>x>1 is [2,3]', () => {
    	const greaterThan = (arrval) =>{
    		return arrval>1;
    	}
        expect(filter([1,2,3], greaterThan)).toEqual([2,3]);
    });


})