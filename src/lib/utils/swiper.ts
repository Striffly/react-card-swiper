import { CardEvent, CardId, CardMetaData, SwipeAction, SwipeOperation, SwiperProps } from '../types/types'

interface StartPoint {
  x: number
  y: number
}

export class Swiper implements SwiperProps {
  element: HTMLDivElement
  id: CardId
  meta: CardMetaData
  onDismiss?: CardEvent

  constructor({ element, id, meta, onDismiss }: SwiperProps) {
    this.id = id
    this.meta = meta
    this.element = element
    this.onDismiss = onDismiss

    this.init()
  }

  // private properties
  private startPoint: StartPoint | null = { x: 0, y: 0 }
  private offsetX = 0
  private offsetY = 0
  private useMouseMoveEvent = false
  private useTouchMoveEvent = false
  private isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0

  private init = () => {
    if (this.isTouchDevice) {
      this.listenToTouchEvents()
    } else {
      this.listenToMouseEvents()
    }
  }

  private listenToTouchEvents = () => {
    this.element.addEventListener('touchstart', this.handleTouchStart.bind(this))
  }

  private listenToMouseEvents = () => {
    this.element.addEventListener('mousedown', this.handleMouseDown.bind(this))

    // prevent card from being dragged
    this.element.addEventListener('dragstart', this.handleDragStart.bind(this))
  }

  private handleMove = (x: number, _y: number) => {
    if (!this.startPoint) return
    this.showRibbons()

    this.offsetX = x - this.startPoint.x
    const rotate = this.offsetX * 0.07
    this.element.style.transform = `translate(${this.offsetX}px,0) rotate(${rotate}deg)`
    // dismiss card
    if (Math.abs(this.offsetX) > this.element.clientWidth * 0.4) {
      this.dismiss(this.offsetX > 0 ? 1 : -1)
    }
  }

  private showRibbons = () => {
    const ribbonLike = this.element.querySelector('.swipe-card__ribbon-like')
    const ribbonDislike = this.element.querySelector('.swipe-card__ribbon-dislike')

    if (this.offsetX > 10) {
      ribbonLike?.classList.add('show')
      ribbonDislike?.classList.remove('show')
    } else if (this.offsetX < -10) {
      ribbonLike?.classList.remove('show')
      ribbonDislike?.classList.add('show')
    } else {
      ribbonLike?.classList.remove('show')
      ribbonDislike?.classList.remove('show')
    }
  }

  private hideRibbons = () => {
    const ribbonLike = this.element.querySelector('.swipe-card__ribbon-like')
    const ribbonDislike = this.element.querySelector('.swipe-card__ribbon-dislike')

    ribbonLike?.classList.remove('show')
    ribbonDislike?.classList.remove('show')
  }

  handleDragStart = (e: MouseEvent) => {
    if (this.isTouchDevice) return

    e.preventDefault()
  }

  handleMouseDown = (e: MouseEvent) => {
    if (this.isTouchDevice) return

    const { clientX, clientY } = e
    this.startPoint = { x: clientX, y: clientY }
    this.useMouseMoveEvent = true
    this.element.style.transition = 'transform 0s'
  }

  // mouse event handlers
  handleMouseMove = (e: MouseEvent) => {
    if (this.isTouchDevice) return
    if (!this.useMouseMoveEvent) return

    e.preventDefault()
    if (!this.startPoint) return
    const { clientX, clientY } = e
    this.handleMove(clientX, clientY)
  }

  handleMoveUp = () => {
    if (this.isTouchDevice) return

    this.startPoint = null
    this.useMouseMoveEvent = false
    this.element.style.transform = ''
    this.element.style.transition = 'all .5s'
    this.hideRibbons()
  }

  handleTouchStart = (e: TouchEvent) => {
    if (!this.isTouchDevice) return

    const touch = e.changedTouches[0]
    if (!touch) return
    const { clientX, clientY } = touch
    this.startPoint = { x: clientX, y: clientY }
    this.useTouchMoveEvent = true
    this.element.style.transition = 'transform 0s'
  }

  // touch event handlers
  handleTouchMove = (e: TouchEvent) => {
    if (!this.useTouchMoveEvent) return
    if (!this.startPoint) return
    const touch = e.changedTouches[0]
    if (!touch) return
    const { clientX, clientY } = touch
    this.handleMove(clientX, clientY)
  }

  handleTouchEnd = () => {
    if (!this.isTouchDevice) return

    this.startPoint = null
    this.useTouchMoveEvent = false
    this.element.style.transform = ''
    this.element.style.transition = 'all .5s'
    this.hideRibbons()
  }

  private dismiss = (direction: number, swipeOperation: SwipeOperation = SwipeOperation.SWIPE) => {
    this.startPoint = null
    if (this.isTouchDevice) this.element.removeEventListener('touchstart', this.handleTouchStart.bind(this))
    if (!this.isTouchDevice) this.element.removeEventListener('mousedown', this.handleMouseDown.bind(this))
    if (!this.isTouchDevice) this.element.removeEventListener('dragstart', this.handleDragStart.bind(this))
    this.element.style.transition = 'all 0.6s'
    this.element.style.transform = `translate(${direction * window.innerWidth * 2}px, ${this.offsetY}px) rotate(${
      60 * direction
    }deg)`
    this.element.classList.add('dismissing')
    setTimeout(() => this.element.remove(), 300)

    if (typeof this.onDismiss === 'function') {
      const swipeDirection = direction === 1 ? SwipeAction.LIKE : SwipeAction.DISLIKE
      this.onDismiss(this.element, this.meta, this.id, swipeDirection, swipeOperation)
    }
  }

  dismissById = (direction: number) => {
    this.dismiss(direction, SwipeOperation.CLICK)
  }
}
