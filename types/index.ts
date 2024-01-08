interface AttributeProps
  extends JSX.IntrinsicAttributes,
  React.ClassAttributes<HTMLHeadingElement>,
  React.HTMLAttributes<HTMLHeadingElement> { }

export interface ComponentProps extends AttributeProps {
  children?: React.ReactNode;
  className?: string;
}
