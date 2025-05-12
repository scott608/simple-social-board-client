import { Image } from 'react-bootstrap';
import type { IconType } from 'react-icons';

interface AvatarOrIconProps {
  imgSrc?: string;
  icon: IconType;
  size?: number; // px 單位
  rounded?: boolean;
  bgColor?: string;
  textColor?: string;
}

export default function AvatarOrIcon({
  imgSrc,
  icon: Icon,
  size = 40,
  rounded = true,
  bgColor = '#e4e6eb', // 淺灰背景
  textColor = '#555',
}: AvatarOrIconProps) {
  return imgSrc ? (
    <Image
      src={imgSrc}
      width={size}
      height={size}
      roundedCircle={rounded}
      style={{ objectFit: 'cover' }}
    />
  ) : (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        width: size,
        height: size,
        borderRadius: rounded ? '50%' : '6px',
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      <Icon size={size * 0.6} />
    </div>
  );
}
