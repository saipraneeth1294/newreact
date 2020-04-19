import React from 'react';

function Loading() {
    return (
        <div>
            <div style={{backgroundColor:'#F8F8F8AD',height:'100%',width:'100%',top:0,left:0,position:'fixed'}}>
                <div className="spinner-border" role="status" style={{left:'50%',right:'50%',zIndex:1000,position:'absolute'}}>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    );
}


export default Loading;