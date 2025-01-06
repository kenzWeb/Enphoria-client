import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/shared/shad-cn/ui/Breadcrumb'
import React from 'react'

interface BreadcrumbProps {
	items: {
		name: string
		href: string
	}[]

	endPage: string
}

export const Breadcrumbs = ({items, endPage}: BreadcrumbProps) => {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				{items.map((item, index) => (
					<React.Fragment key={index}>
						{index > 0 && <BreadcrumbSeparator />}
						<BreadcrumbItem>
							<BreadcrumbLink href={item.href}>{item.name}</BreadcrumbLink>
						</BreadcrumbItem>
					</React.Fragment>
				))}
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage>{endPage}</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	)
}
