import { cn } from '@/lib/utils'
interface Attributes {
    children: React.ReactNode,
    className?: string,
  
}

const Container = ({children, className} : Attributes) => {
  return (
    <div className={cn('max-w-screen-2xl  mx-auto px-4', className)}>
        {children}
    </div>
  )
}

export default Container