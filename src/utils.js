import moment from 'moment';
require("moment/locale/vi");

export function isSameDay(currentMessage = {}, diffMessage = {}) {
  if (!diffMessage.createdAt) {
    return false;
  }

  const currentCreatedAt = moment(currentMessage.createdAt);
  const diffCreatedAt = moment(diffMessage.createdAt);

  if (!currentCreatedAt.isValid() || !diffCreatedAt.isValid()) {
    return false;
  }

  return currentCreatedAt.isSame(diffCreatedAt, "day");
}

export function isSameHour(currentMessage = {}, diffMessage = {}) {
  if (!diffMessage.createdAt) {
    return false;
  }

  const currentCreatedAt = moment(currentMessage.createdAt);
  const diffCreatedAt = moment(diffMessage.createdAt);

  if (!currentCreatedAt.isValid() || !diffCreatedAt.isValid()) {
    return false;
  }
  // return currentCreatedAt.isSame(diffCreatedAt,'minute')
  return currentCreatedAt.isBetween(
    diffCreatedAt,
    diffCreatedAt + 10 * 60 * 1000,
    '[]'
  );
}

export function isSameUser(currentMessage = {}, diffMessage = {}) {
  return !!(
    diffMessage.user &&
    currentMessage.user &&
    diffMessage.user._id === currentMessage.user._id
  );
}
