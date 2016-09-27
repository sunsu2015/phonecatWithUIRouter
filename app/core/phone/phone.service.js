/**
 * Created by sunsu on 2016/7/15.
 */
angular.module('core.phone').
    factory('Phone',function($resource){
        return $resource('phones/:phoneId.json',{phoneId:'phones'});
})