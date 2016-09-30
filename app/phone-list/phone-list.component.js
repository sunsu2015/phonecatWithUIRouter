/**
 * Created by sunsu on 2016/7/14.
 */
angular.module('phoneList').component('phoneList',{
        templateUrl:'phone-list/phone-list.html',
        controller:function phoneListController(Phone,$scope){
            $scope.phones = Phone.query();
            $scope.orderProp = 'age';
        }
});