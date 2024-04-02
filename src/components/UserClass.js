import React from 'react';

class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            count: 0,
            data : {
                name: "Dummy Name",
                location: "Dummy loc",
                avatar_url : "Dummy Img"
                
            },
        }
        console.log("Constructor")
    }

    async componentDidMount(){
        console.log("Mounting")
        const data = await fetch("https://api.github.com/users/nexfreak07");
        const json = await data.json()
        this.setState({data:json})
    }

    componentDidUpdate(){
        console.log("Component Did Update");
    }

    componentWillUnmount(){
        console.log("Unmounting");
    }

    render(){

        console.log("Rendering")
        const {name, location, avatar_url} = this.state.data;

        const clickHandler = () => {
            this.setState({count: count + 1,})
        }
        return(
            <div className='user-card'>
                <img src={avatar_url}  />
                <h2>Name : {name}</h2>
                <h2>Location: {location}</h2>
                <h2>Contact: 9764824078</h2>
            </div>
          )
    }
}

export default UserClass