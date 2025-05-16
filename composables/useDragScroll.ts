const infoList: Map<HTMLElement, { startX: number; scrollLeft: number; isDragging: boolean }> = new Map();

const startDrag = (e: MouseEvent) => {
    const element = e.currentTarget as HTMLElement;
    const info = infoList.get(element);
    if (!info) return;

    info.isDragging = true;
    info.startX = e.pageX;
    info.scrollLeft = element.scrollLeft;
    element.classList.add('dragging');
};

const dragging = (e: MouseEvent) => {
    const element = e.currentTarget as HTMLElement;
    const info = infoList.get(element);
    if (!info || !info.isDragging) return;

    const walk = e.pageX - info.startX;
    element.scrollLeft = info.scrollLeft - walk;
};

const dragStop = (e: MouseEvent) => {
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

        trackElement.addEventListener('mousedown', startDrag);
        trackElement.addEventListener('mousemove', dragging);
        trackElement.addEventListener('mouseup', dragStop);
        trackElement.addEventListener('mouseleave', dragStop);
    }
};
