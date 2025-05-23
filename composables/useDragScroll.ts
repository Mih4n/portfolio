const infoList: Map<HTMLElement, { startX: number; scrollLeft: number; isDragging: boolean }> = new Map();

const getPageX = (e: MouseEvent | TouchEvent) => {
  if ('touches' in e && e.touches.length > 0) {
    return e.touches[0].pageX;
  }
  return (e as MouseEvent).pageX;
};

const startDrag = (e: MouseEvent | TouchEvent) => {
    const element = e.currentTarget as HTMLElement;
    const info = infoList.get(element);
    if (!info) return;

    info.isDragging = true;
    info.startX = getPageX(e);
    info.scrollLeft = element.scrollLeft;
    element.classList.add('dragging');
};

const dragging = (e: MouseEvent | TouchEvent) => {
    const element = e.currentTarget as HTMLElement;
    const info = infoList.get(element);
    if (!info || !info.isDragging) return;

    const walk = getPageX(e) - info.startX;
    element.scrollLeft = info.scrollLeft - walk;
};

const dragStop = (e: MouseEvent | TouchEvent) => {
    const element = e.currentTarget as HTMLElement;
    const info = infoList.get(element);
    if (!info) return;

    info.isDragging = false;
    element.classList.remove('dragging');
};

export const useDragScroll = () => {
    const tracks = document.getElementsByClassName("carousel-track");

    for (let i = 0; i < tracks.length; i++) {
        const trackElement = tracks[i] as HTMLElement;

        infoList.set(trackElement, {
            startX: 0,
            scrollLeft: 0,
            isDragging: false
        });

        // Mouse events
        trackElement.addEventListener('mousedown', startDrag);
        trackElement.addEventListener('mousemove', dragging);
        trackElement.addEventListener('mouseup', dragStop);
        trackElement.addEventListener('mouseleave', dragStop);

        // Touch events
        trackElement.addEventListener('touchstart', startDrag);
        trackElement.addEventListener('touchmove', dragging);
        trackElement.addEventListener('touchend', dragStop);
        trackElement.addEventListener('touchcancel', dragStop);
    }
};
