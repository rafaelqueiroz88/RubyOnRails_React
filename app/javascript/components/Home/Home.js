import React, { Component } from 'react'
import Jumbotron from "./Jumbotron"

class Home extends  Component {

    constructor() {
        super()

        this.state = {
            course_modules: [
                {
                    id: 1,
                    title: 'Setting up RoR with React',
                    description: 'oi',
                    active: false
                },
                {
                    id: 2,
                    title: 'Add react to rails',
                    description: 'tudo',
                    active: false
                },
                {
                    id: 3,
                    title: 'Rails + React',
                    description: 'bem',
                    active: false
                },
                {
                    id: 4,
                    title: 'Building HELLO WORLD App',
                    description: '?',
                    active: false
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <Jumbotron/>
            </div>
        )
    }
}

export default Home