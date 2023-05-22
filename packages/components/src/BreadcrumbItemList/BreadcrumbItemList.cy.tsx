import React from 'react'
import BreadcrumbItemList from './BreadcrumbItemList'

describe('BreadcrumbItemList', () => {
    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('onClick works', () => {
        cy.mount(<BreadcrumbItemList onClick={cy.stub().as('onClick')} />)
        cy.get('button').click()

        cy.get('[role="listitem"]').first().click({ force: true })

        cy.get('@onClick').should('have.been.called')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')

        cy.wait(1000)
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')
    })

    it('test 1', () => {
        cy.wait(1000)

        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('onClick works', () => {
        cy.mount(<BreadcrumbItemList onClick={cy.stub().as('onClick')} />)
        cy.get('button').click()

        cy.get('[role="listitem"]').first().click({ force: true })

        cy.get('@onClick').should('have.been.called')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.wait(1000)

        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.wait(1000)

        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('onClick works', () => {
        cy.mount(<BreadcrumbItemList onClick={cy.stub().as('onClick')} />)
        cy.get('button').click()

        cy.get('[role="listitem"]').first().click({ force: true })

        cy.get('@onClick').should('have.been.called')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.wait(1000)

        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('onClick works', () => {
        cy.mount(<BreadcrumbItemList onClick={cy.stub().as('onClick')} />)
        cy.get('button').click()

        cy.get('[role="listitem"]').first().click({ force: true })

        cy.get('@onClick').should('have.been.called')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('onClick works', () => {
        cy.mount(<BreadcrumbItemList onClick={cy.stub().as('onClick')} />)
        cy.get('button').click()

        cy.get('[role="listitem"]').first().click({ force: true })

        cy.get('@onClick').should('have.been.called')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('onClick works', () => {
        cy.mount(<BreadcrumbItemList onClick={cy.stub().as('onClick')} />)
        cy.get('button').click()

        cy.get('[role="listitem"]').first().click({ force: true })

        cy.get('@onClick').should('have.been.called')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList noItems/>)
        cy.get('button').click()

        cy.get('button').click()

        cy.contains('I am a happy custom message').should('exist')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList noItems/>)
        cy.get('button').click()

        cy.get('button').click()

        cy.contains('I am a happy custom message').should('exist')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('onClick works', () => {
        cy.mount(<BreadcrumbItemList onClick={cy.stub().as('onClick')} />)
        cy.get('button').click()

        cy.get('[role="listitem"]').first().click({ force: true })

        cy.get('@onClick').should('have.been.called')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')

        cy.wait(1000)
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')
    })

    it('test 1', () => {
        cy.wait(1000)

        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('onClick works', () => {
        cy.mount(<BreadcrumbItemList onClick={cy.stub().as('onClick')} />)
        cy.get('button').click()

        cy.get('[role="listitem"]').first().click({ force: true })

        cy.get('@onClick').should('have.been.called')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.wait(1000)

        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.wait(1000)

        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList noItems/>)
        cy.get('button').click()

        cy.get('button').click()

        cy.contains('I am a happy custom message').should('exist')
    })

    it('onClick works', () => {
        cy.mount(<BreadcrumbItemList onClick={cy.stub().as('onClick')} />)
        cy.get('button').click()

        cy.get('[role="listitem"]').first().click({ force: true })

        cy.get('@onClick').should('have.been.called')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.wait(1000)

        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('onClick works', () => {
        cy.mount(<BreadcrumbItemList onClick={cy.stub().as('onClick')} />)
        cy.get('button').click()

        cy.get('[role="listitem"]').first().click({ force: true })

        cy.get('@onClick').should('have.been.called')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('onClick works', () => {
        cy.mount(<BreadcrumbItemList onClick={cy.stub().as('onClick')} />)
        cy.get('button').click()

        cy.get('[role="listitem"]').first().click({ force: true })

        cy.get('@onClick').should('have.been.called')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList noItems/>)
        cy.get('button').click()

        cy.get('button').click()

        cy.contains('I am a happy custom message').should('exist')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('onClick works', () => {
        cy.mount(<BreadcrumbItemList onClick={cy.stub().as('onClick')} />)
        cy.get('button').click()

        cy.get('[role="listitem"]').first().click({ force: true })

        cy.get('@onClick').should('have.been.called')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList noItems/>)
        cy.get('button').click()

        cy.get('button').click()

        cy.contains('I am a happy custom message').should('exist')
    })

    it('test 1', () => {
        cy.mount(<BreadcrumbItemList />)
        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('contains.text', '1 item')

        cy.get('button').click()

        cy.get('[accessible-role="list"]').should('not.be.visible')
    })
})
