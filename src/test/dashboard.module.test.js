describe('xyz-cv-ui.dashboard', function() {

    describe('module', function() {

        var module;
        before(function() {
            module = angular.module('xyz-cv-ui.dashboard');
        });

        it('should be registered', function() {
            expect(module).not.to.equal(null);
        });
    });

    describe('controller', function() {

        var module;
        before(function() {
            module = angular.module('xyz-cv-ui.dashboard');
        });

        it('should have a dashboard controller', function() {
            expect(module.DashboardController).not.to.equal(null);
        });

        //TODO: test controller logic

    });

    //route


    // //HTTP calls
    // describe('HTTP calls', function() {
    //     var mockSkillResource;
    //     var $httpBackend;

    //     beforeEach(angular.mock.module('xyz-cv-ui'));

    //     beforeEach(function() {
    //         angular.mock.inject(function($injector) {
    //             $httpBackend = $injector.get('$httpBackend');
    //             mockSkillResource = $injector.get('skill');
    //         })
    //     });

    //     describe('getSkills', function() {
    //         it('should call getSkills', inject(function(getSkills) {
    //             $httpBackend.expectGet('api/skill')
    //                 .response([{
    //                     name: 'test'
    //                 }]);

    //                 var result = mockSkillResource.getSkills();

    //                 $httpBackend.flush();

    //                 expect(result[0].name).to.equal('test');
    //         }));
    //     });
    // });

});
