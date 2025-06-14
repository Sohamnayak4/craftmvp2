'use client'

import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        default: 'bg-primary-600 text-white hover:bg-primary-700 glow-button',
        secondary: 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20',
        outline: 'border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white',
        ghost: 'hover:bg-white/10 text-white',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-12 px-8 rounded-md text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants } 