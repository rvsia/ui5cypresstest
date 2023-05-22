import React, { useState } from 'react'

import {
    Popover,
    Button,
    List,
    StandardListItem,
    Input,
    IllustratedMessage,
} from '@ui5/webcomponents-react'

import '@ui5/webcomponents-icons/dist/slim-arrow-down'
import '@ui5/webcomponents-icons/dist/search'
import '@ui5/webcomponents-fiori/dist/illustrations/NoSearchResults'

const BreadcrumbItemList = ({ onClick, noItems }: any) => {
    const [isOpen, open] = useState(false)

    return (
        <>
            <Button
                design="Transparent"
                icon="slim-arrow-down"
                id={'some id'}
                onClick={() => open(!isOpen)}
            />
            <Popover
                open={isOpen}
                placementType="Bottom"
                opener={'some id'}
                onAfterClose={() => open(false)}
                header={
                    <header>
                        <Input />
                    </header>
                }
            >
                <List>
                    {new Array(100).fill(5).map((_, index) => (
                        <StandardListItem key={index} onClick={onClick}>
                            {index} item
                        </StandardListItem>
                    ))}
                    {noItems && (
                        <IllustratedMessage
                            name="NoSearchResults"
                            size="Base"
                        />
                    )}
                </List>
            </Popover>
        </>
    )
}

export default BreadcrumbItemList
