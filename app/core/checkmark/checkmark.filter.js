/**
 * Created by sunsu on 2016/7/14.
 */
angular.module('core').filter('checkmark',function () {
    return function(input){
        return input?'\u2713':'\u2718';
    }
})