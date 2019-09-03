import React from 'react';
import classNames from 'classnames';
import { Spinner } from 'components';
import { IButton, IButtonList } from './Button.interfaces';
import styles from './Button.module.scss';

const Button = (props: IButton) => {
  const {
    caption,
    className,
    disabled = false,
    loading = false,
    form,
    onClick,
    outline = false,
    alt = caption,
    type = 'button'
  } = props;

  const isClickable = !disabled && !loading;

  const onClickHandler = () => {
    if (isClickable) {
      onClick();
    }
  }

  return <button
    className={classNames(
      styles.btn,
      outline && styles.btn__outline,
      caption && styles.btn__hasCaption,
      loading && styles.btn__isLoading,
      disabled && styles.btn__disabled,
      className
    )}
    type={type}
    aria-label={alt}
    form={form}
    onClick={onClick && onClickHandler}
    disabled={disabled}
  >
    {caption}
    {loading && <Spinner className={styles.btn_spinner} />}
  </button>
}

const ButtonList = ({ children, className }: IButtonList) => (
  <div className={classNames(styles.btnList, className)} >
    {children}
  </div>
);

Button.List = ButtonList;

export { Button }