import '../main.css'

import { useEffect, useMemo, useState, useRef } from 'react'
import { useCardSwiper } from '../hooks/useCardSwiper'
import { CardSwiperProps, SwipeAction, SwipeDirection } from '../types/types'
import { Swiper } from '../utils/swiper'
import CardSwiperActionButton from './CardSwiperActionButton'
import CardSwiperEmptyState from './CardSwiperEmptyState'
import { CardSwiperLeftActionButton } from './CardSwiperLeftActionButton'
import CardSwiperRibbons from './CardSwiperRibbons'
import { CardSwiperRightActionButton } from './CardSwiperRightActionButton'
import { gsap } from 'gsap'

export const CardSwiper = (props: CardSwiperProps) => {
  const { data, likeButton, dislikeButton, withActionButtons = false, emptyState, onDismiss, onFinish, onEnter } = props
  const { handleEnter, handleClickEvents, handleNewCardSwiper, dynamicData, isFinish, swiperIndex, swiperElements } =
    useCardSwiper({
      onDismiss,
      onFinish,
      onEnter,
      data,
    })
  const [currentSwiper, setCurrentSwiper] = useState<Swiper | undefined>(swiperElements.current[swiperIndex])
  const [hideActionButtons, setHideActionButtons] = useState('')

  useEffect(() => {
    setCurrentSwiper(swiperElements.current[swiperIndex - 1])
  }, [swiperElements, swiperIndex])

  useEffect(() => {
    currentSwiper && handleEnter(currentSwiper.element, currentSwiper.meta, currentSwiper.id)
  }, [currentSwiper])

  const CardComponents = useMemo(
    () =>
      dynamicData.map(({ id, header, src, content, meta }) => (
        <div
          key={id}
          ref={(ref) => handleNewCardSwiper(ref, id, meta)}
          className="swipe-card__container"
          id="swipe-card__container"
        >
          {header && (
            <div className="swipe-card__header-container" id="swipe-card__header-container">
              <h2 id="swipe-card__header">{header}</h2>
            </div>
          )}
          {props.withRibbons && (
            <CardSwiperRibbons
              likeRibbonText={props.likeRibbonText}
              dislikeRibbonText={props.dislikeRibbonText}
              ribbonColors={props.ribbonColors}
            />
          )}

          <div className="swipe-card__image-container">
            <img className="swipe-card__image" src={src} alt={src} id="swipe-card__image" />
          </div>
          {content && <div className="swipe-card__content">{content}</div>}
        </div>
      )),
    [],
  )

  useEffect(() => {
    if (isFinish) setHideActionButtons('hide-action-buttons')
  }, [isFinish])

  useEffect(() => {
    const handleWindowBlur = () => {
      currentSwiper?.handleTouchEnd()
      currentSwiper?.handleMoveUp()
    }

    window.addEventListener('blur', handleWindowBlur)

    return () => window.removeEventListener('blur', handleWindowBlur)
  }, [currentSwiper])

  const onMouseUpRef = useRef<(e: MouseEvent) => void>()
  const onMouseMoveRef = useRef<(e: MouseEvent) => void>()
  const onTouchEndRef = useRef<(e: TouchEvent) => void>()
  const onTouchMoveRef = useRef<(e: TouchEvent) => void>()
  const onCancelRef = useRef<() => void>()
  const handleMoveRef = useRef<() => void>()

  useEffect(() => {
    onMouseUpRef.current = () => {
      swiperElements.current[swiperIndex - 1]?.handleMoveUp()
    }
    onMouseMoveRef.current = (e: MouseEvent) => {
      swiperElements.current[swiperIndex - 1]?.handleMouseMove(e)
    }
    onTouchEndRef.current = () => {
      swiperElements.current[swiperIndex - 1]?.handleTouchEnd()
    }
    onTouchMoveRef.current = (e: TouchEvent) => {
      swiperElements.current[swiperIndex - 1]?.handleTouchMove(e)
    }
    onCancelRef.current = () => {
      swiperElements.current[swiperIndex - 1]?.handleTouchEnd()
    }
    handleMoveRef.current = () => {
      swiperElements.current[swiperIndex - 1]?.handleMove()
    }
  }, [swiperIndex, swiperElements])

  useEffect(() => {
    const onMouseUp = (e: MouseEvent) => onMouseUpRef.current?.(e)
    const onMouseMove = (e: MouseEvent) => onMouseMoveRef.current?.(e)
    const onTouchEnd = (e: TouchEvent) => onTouchEndRef.current?.(e)
    const onTouchMove = (e: TouchEvent) => onTouchMoveRef.current?.(e)
    const onCancel = () => onCancelRef.current?.()

    const handleMove = () => handleMoveRef.current?.()

    if (isFinish) {
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('touchend', onTouchEnd)
      document.removeEventListener('touchmove', onTouchMove)
      document.removeEventListener('cancel', onCancel)
      gsap.ticker.remove(handleMove)
    } else {
      document.addEventListener('mouseup', onMouseUp)
      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('touchend', onTouchEnd)
      document.addEventListener('touchmove', onTouchMove)
      document.addEventListener('cancel', onCancel)
      gsap.ticker.add(handleMove)
    }

    // Retourner une fonction de nettoyage pour supprimer les écouteurs d'événements
    return () => {
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('touchend', onTouchEnd)
      document.removeEventListener('touchmove', onTouchMove)
      document.removeEventListener('cancel', onCancel)
      gsap.ticker.remove(handleMove)
    }
  }, [isFinish])

  return (
    <div className="swipe-card" id="swipe-card">
      <div className="swipe-card__cards" id="swipe-card__cards">
        {CardComponents}
        {emptyState && isFinish && <CardSwiperEmptyState children={emptyState} isFinish={isFinish} />}
      </div>
      {withActionButtons && (
        <div className={`swipe-card__children ${hideActionButtons}`} id="swipe-card__children">
          {likeButton && dislikeButton ? (
            <>
              <CardSwiperActionButton
                isCustom
                direction={SwipeDirection.LEFT}
                action={SwipeAction.DISLIKE}
                onClick={handleClickEvents}
                buttonContent={dislikeButton}
              />
              <CardSwiperActionButton
                isCustom
                direction={SwipeDirection.RIGHT}
                action={SwipeAction.LIKE}
                onClick={handleClickEvents}
                buttonContent={likeButton}
              />
            </>
          ) : (
            <>
              <CardSwiperActionButton
                direction={SwipeDirection.LEFT}
                action={SwipeAction.DISLIKE}
                onClick={handleClickEvents}
                buttonContent={<CardSwiperLeftActionButton />}
              />
              <CardSwiperActionButton
                direction={SwipeDirection.RIGHT}
                action={SwipeAction.LIKE}
                onClick={handleClickEvents}
                buttonContent={<CardSwiperRightActionButton />}
              />
            </>
          )}
        </div>
      )}
    </div>
  )
}
