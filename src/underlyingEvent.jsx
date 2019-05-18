import positionInDay from './positionInDay';

export default function underlyingEvent(date, position, events, timeZone) {
  // check if underlying event
  const today = new Date(date);
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(1);

  const hasEvent = events.find( (ev, index) => {
    const positionStart = positionInDay(today, ev.start, timeZone);
    const positionEnd = positionInDay(today, ev.end, timeZone);

    if (!(position >= positionStart && position < positionEnd) || ev.allDay) {
      return false;
    } else {
      return true;
    }
  });

  return hasEvent;
}
