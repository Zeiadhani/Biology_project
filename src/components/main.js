import React, { Component } from 'react'

export class Main extends Component {
    state={'btnTextShadow':'3px 3px 4px rgb(146, 146, 146) , -3px -3px 4px #fff',btnShadow:`5px 5px 10px rgb(146, 146, 146) , -5px -5px 10px #fff`}
    manager=()=>{
        this.setState({'btnTextShadow':'0px 0px 4px rgb(146, 146, 146) , 0px 0px 4px #fff',btnShadow:`inset 5px 5px 10px rgb(146, 146, 146) ,inset -5px -5px 10px #fff`})
        setTimeout(()=>{this.props.activation('viewer')},15)
    }
    render() {
        var styles = {
            vid:{
                
                position: "fixed",
                left: '50%',
                top: '50%',
                minWidth: '100vw',
                height: '100vh',
                objectFit:'cover',
                transform:'translate(-50%,-50%)',
                zIndex:-1
                  
            },
            col1:{
                flex: 1.75,
                display: "flex",
                flexDirection: 'column',
                height: '100vh',
                width: '100vw'
            },
            col2:{
                flex:1.25,
                display: "flex",
                flexDirection: 'column',
                height: '100vh',
                width: '100vw'
            },
            row1:{
                marginTop: '1vh',
                marginLeft:'1vw',
                display: "flex",
                flexDirection: 'row',
                flex: 9,
                justifyContent: 'left',
                alignItems: 'top'
            },
            row2:{
                marginBottom: '1vh',
                marginLeft:'1vw',
                display: "flex",
                flexDirection: 'row',
                flex: 1,
            },
            title:{
                margin:'0px',
                fontFamily: 'Patua One',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '10vh',
                color:'#e1e1e1',
                textShadow:'3px 3px 4px rgb(146, 146, 146) , -3px -3px 4px #fff'
            },
            name:{
                margin:'0px',
                fontFamily: 'Patua One',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '3vh',
                color:'#e1e1e1',
                textShadow:'1px 1px 2px rgb(146, 146, 146) , -1px -1px 2px #fff'
            },
            btn:{
                display: 'flex',
                flex:'2.125',
                marginRight:'5vw',
                boxShadow:this.state.btnShadow,
                justifyContent:'center',
                alignItems:'center',
                borderRadius:'2vw'
        },
            btnText:{
                margin:'0px',
                fontFamily: 'Patua One',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '10vh',
                color:'#e1e1e1',
                textShadow:this.state.btnTextShadow,
                justifyContent:'center'
            }
        }
        return (
            <div style={{display:'flex'}}>
                <video style={styles.vid} autoPlay loop>
                    <source src={"evee.mp4"} type={"video/mp4"}/>
                </video>
                <div style={styles.col1}>
                    
                    <div style={styles.row1}>
                        <p style={styles.title}> DNA<br/> structure<br/> viewer </p>
                    </div>
                    
                    <div style={styles.row2}>
                        <p style={styles.name}> Done by: Zeiad Hani<br/>Section: 10 pears</p>
                    </div>
                
                </div>
                <div style={styles.col2} >
                   <div style={{flex:'6'}}>{' '}</div> 
                   <div style={styles.btn} onClick={this.manager}>
                        <p style={styles.btnText}>View!</p>
                   </div>
                   <div style={{flex:'0.85'}}>{' '}</div> 
                   
                
                </div>
            </div>
        )
    }
}

export default Main
