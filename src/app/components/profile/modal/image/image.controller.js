(function() {
    'use strict';

    angular
        .module('xyz-cv-ui.profile.modal')
        .controller('ImageController', ImageController);

    function ImageController(ImageModal, ImageUploader, Users, block, user, callback, $timeout, $scope) {
            var vm = this;

            vm.user = {};
            vm.uploader = {};
            vm.profileImage = '';
            vm.active = false;

            vm.upload = upload;
            vm.save = save;
            vm.hideModal = hideModal;

            activate();

            //////////////

            function activate() {
                Users.get({_id: user._id}).$promise
                    .then(function(user) {
                        vm.user = user;
                        setUploader();
                        vm.active = true;
                    });
            }

            function save() {
                vm.user.$save()
                  .then(vm.hideModal)
                  .then(callback);
            }

            function upload() {
                vm.uploader.uploadAll();
            }

            function hideModal() {
                vm.active = false;
                $timeout(function() {
                    ImageModal.deactivate();
                }, 150);
            }

            function setUploader() {
                vm.uploader = new ImageUploader($scope);
                vm.uploader.onSuccessItem = onSuccessItem;
            }

            function onSuccessItem(item, response) {
                vm.user.profileImage = response;
                save();
            }

        }
})();
