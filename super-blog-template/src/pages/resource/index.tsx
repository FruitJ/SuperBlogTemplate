import React, { Component } from 'react';

export interface IResourceProps {
    
}
 
export interface IResourceState {
    
}
 
class Resource extends React.Component<IResourceProps, IResourceState> {
    constructor(props: IResourceProps) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <div>
                <h1>
                    Resource
                </h1>
            </div>
        );
    }
}
 
export default Resource;