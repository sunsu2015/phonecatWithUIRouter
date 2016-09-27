/**
 * Created by sunsu on 2016/7/18.
 */
describe('checkmark',function(){
    beforeEach(module('core'));

    it('should convert boolean values to unicode',inject(function(checkmarkFilter){
        expect(checkmarkFilter(true)).toBe('\u2713');
        expect(checkmarkFilter(false)).toBe('\u2718');
    }));
})