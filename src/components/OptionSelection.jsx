import React from 'react';

function OptionSelection({ arrayItems, selectOption }) {
    return (
        <>
            <h1 className="app">-- React AI APP --</h1>
            
            <div className="grid-parent">
                {arrayItems.map(item => {
                    return (
                        <div className='grid-child' key={item.id} onClick={() => selectOption(item.option)}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default OptionSelection;