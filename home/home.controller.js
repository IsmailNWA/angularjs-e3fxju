import { scopeWatcher } from './scope-watcher';
import { first } from 'rxjs/operators';
import { isEqual } from 'lodash';
class HomeCtrl {
  constructor($scope) {
    'ngInject';
    console.log(isEqual([], []));
    this.name = 'AngularJS';
    this.$scope = $scope;
  }

  $onInit() {
    scopeWatcher(this.$scope, () => this.name)
      .pipe(first())
      .subscribe((value) => {
        console.log(value);
      });
  }
}

export default HomeCtrl;
