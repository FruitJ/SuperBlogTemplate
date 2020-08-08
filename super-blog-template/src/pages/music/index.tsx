import React, { Component } from 'react';

export interface IMusicProps {
    
}
 
export interface IMusicState {
    
}
 
class Music extends React.Component<IMusicProps, IMusicState> {
    constructor(props: IMusicProps) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <div>
                <h1>Music</h1>
            </div>
        );
    }
}
 
export default Music;