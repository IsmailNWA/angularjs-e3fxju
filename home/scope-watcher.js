import { Subject } from 'rxjs';

export const scopeWatcher = ($scope, propToWatch) => {
  const subject = new Subject();
  const unregisterWatcher = $scope.$watch(propToWatch, (newValue, oldValue) => {
    subject.next({ newValue, oldValue });
  });

  return subject.asObservable().pipe(
    finalize(() => {
      unregisterWatcher();
    })
  );
};
