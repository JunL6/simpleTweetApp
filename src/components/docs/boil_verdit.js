import React, { Component } from 'react';

export default function BoilVerdit(props) {
    if(props.cel >= 100) {
        return <div>The water would boil</div>;
    } else {
        return <div>The water would not boil</div>;
    }
}