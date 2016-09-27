/**
 * Created by sunsu on 2016/7/14.
 */
angular.module('phoneDetail').component('phoneDetail',{
    templateUrl:'phone-detail/phone-detail.html',
    controller:function(Phone,$stateParams,$scope){
        var _this = this;
        $scope.setImg = function(img){
            $scope.mainImageUrl = img;
        };
        $scope.phone = Phone.get({phoneId:$stateParams.phoneId},function(phone){
            $scope.setImg(phone.images[0]);
        });
    }
})