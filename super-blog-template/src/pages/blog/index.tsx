import React, { Component } from 'react';

export interface IBlogProps {
    
}
 
export interface IBlogState {
    
}
 
class Blog extends React.Component<IBlogProps, IBlogState> {
    constructor(props: IBlogProps) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <div>
                <h1>Blog</h1>
            </div>
        );
    }
}
 
export default Blog;