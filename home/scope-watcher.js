import { Subject } from 'rxjs';
import { finalize, distinctUntilChanged } from 'rxjs/operators';
import {isEqual} from 'lodash';

export const scopeWatcher = ($scope, propToWatch) => {
  const subject = new Subject();
  const unregisterWatcher = $scope.$watch(propToWatch, (newValue, oldValue) => {
    if(!isEqual(newValue, oldValue)) {
      subject.next({ newValue, oldValue });
    }
  });

  return subject.asObservable().pipe(
    distinctUntilChanged(isEqual),
    finalize(() => {
      console.log('unsunbscribe')
      unregisterWatcher();
    })
  );
};
