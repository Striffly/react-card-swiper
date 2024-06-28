import { CardEvent, CardId, CardMetaData, SwiperProps } from '../types/types';

export declare class Swiper implements SwiperProps {
    element: HTMLDivElement;
    id: CardId;
    meta: CardMetaData;
    onDismiss?: CardEvent;
    constructor({ element, id, meta, onDismiss }: SwiperProps);
    private startPoint;
    private offsetX;
    private offsetY;
    private useMouseMoveEvent;
    private useTouchMoveEvent;
    private isTouchDevice;
    private x;
    private init;
    private listenToTouchEvents;
    private listenToMouseEvents;
    handleMove: () => void;
    private showRibbons;
    private hideRibbons;
    handleDragStart: (e: MouseEvent) => void;
    handleMouseDown: (e: MouseEvent) => void;
    handleMouseMove: (e: MouseEvent) => void;
    handleMoveUp: () => void;
    handleTouchStart: (e: TouchEvent) => void;
    handleTouchMove: (e: TouchEvent) => void;
    handleTouchEnd: () => void;
    private dismiss;
    dismissById: (direction: number) => void;
}
