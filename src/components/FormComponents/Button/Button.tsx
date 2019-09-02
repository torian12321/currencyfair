import classNames from 'classnames';
import React from 'react';
// import { prefixClassName } from 'framework/components/ui/_conf';
// import { Icon, Text } from 'ui';
import { IButton } from './Button.interface';
// import './Button.styles.scss';
import styles from './Button.module.scss';

// const clx = prefixClassName('btn');
const clx = 'btn';

const Button = (props: IButton) => {
  const {
    caption,
    className,
    color,
    disabled = false,
    form,
    onClick,
    outline = false,
    alt = caption,
    type = 'button'
  } = props;

  const onClickHandler = () => {
    onClick();
  }

  return <button
    className={classNames(
      styles.btn,
      outline && `${clx}--outline`,
      color && `${clx}--${color}`,
      caption ? `${clx}--has-caption` : null,
      // icon && [
      //   `${clx}--icon`,
      //   `${clx}--icon--${icon}`,
      //   `${clx}--icon-position-${iconPosition}`
      // ],
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
  </button>
}

export { Button }