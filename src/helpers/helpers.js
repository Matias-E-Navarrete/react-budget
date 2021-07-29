export const budgetObserver = (budget, leftOver) => {
    let customClass;

    if ((budget / 4) > leftOver) {
        customClass = 'alert alert-danger';
    } else if ((budget / 2) > leftOver) {
        customClass = 'alert alert-warning';
    } else {
        customClass = 'alert alert-success';
    }
    return customClass;
}