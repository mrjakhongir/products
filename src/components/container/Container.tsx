import cn from 'classnames'

type ContainerProps = {
	className?: string
	children: React.ReactNode
}

function Container({ className, children }: ContainerProps) {
	return <div className={cn(className, 'max-w-[1340px] mx-auto')}>{children}</div>
}

export default Container
