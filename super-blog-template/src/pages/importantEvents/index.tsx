import React, { Component } from 'react';

export interface IImportantEventsProps {
    
}
 
export interface IImportantEventsState {
    
}
 
class ImportantEvents extends React.Component<IImportantEventsProps, IImportantEventsState> {
    constructor(props: IImportantEventsProps) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <div>
                <h1>ImportantEvents</h1>
            </div>
        );
    }
}
 
export default ImportantEvents;