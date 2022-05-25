import { scopeWatcher } from './scope-watcher';
class HomeCtrl {
  constructor($scope) {
    'ngInject';

    this.name = 'AngularJS';
    this.$scope = $scope;
  }

  $onInit() {
    scopeWatcher(this.$scope, () => this.name).subscribe((value) => {
      console.log(value);
    });
  }
}

export default HomeCtrl;
