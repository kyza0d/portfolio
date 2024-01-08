import React from 'react';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  children?: React.ReactNode;
  className?: string;
}

const fontSizeClasses = {
  xs: "mb-0.5 text-xs",
  sm: "mb-1 text-sm",
  md: "mb-1 text-md",
  lg: "mb-2 text-lg",
  xl: "mb-2 text-xl",
  "2xl": "mb-3 text-2xl",
  "3xl": "mb-4 text-3xl",
  "4xl": "mb-5 text-4xl",
  "5xl": "mb-6 text-5xl",
};

/**
 * Creates a typography component with a specified tag, size, and bold option.
 * @param Tag The HTML tag to be used for the component.
 * @param defaultSize The default size of the typography.
 * @param bold Whether the text is bold.
 * @returns A React component with the specified properties.
 */
const createComponent = (
  Tag: React.ElementType,
  defaultSize: keyof typeof fontSizeClasses = "md",
  bold: boolean = false
) => {
  return ({ children, size = defaultSize, className = "", ...props }: TypographyProps) => {
    const variant = `${fontSizeClasses[size]}${bold ? " font-bold" : ""}`;
    return <Tag className={`${variant} ${className}`} {...props}>{children}</Tag>;
  };
};

export const Paragraph = createComponent('p', 'lg');
export const Heading = createComponent('h1', "lg", true);
export const Small = createComponent('small', "xs");
