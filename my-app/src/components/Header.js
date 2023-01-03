import React from 'react'

export const Header = () => {

    const headerStyle = {

        width: '100%',
        padding: '2%',
        backgroundColor: "rgb(45, 45, 195)",
        color: 'white',
        textAlign: 'center'
    }

    return(
        <div style={headerStyle}>
            <h1>Expense-Tracker</h1>
        </div>
    )
}