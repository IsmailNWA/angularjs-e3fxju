import {Subject} from 'rxjs';

export const scopeWatcher = ($scope, propToWatch) => {
    const subject = new Subject();
    const watcher = $scope.$watch(propToWatch, (value) => {
        subject.next(value);
    });


    return subject.asObservable();
}