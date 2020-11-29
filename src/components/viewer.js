import React, { Component } from 'react'

export class Viewer extends Component {
	state ={'x':4.23,'y':0.69,'z':14, path:''}
	
    control=(e)=>{
      if (e.keyCode===87) {
        this.setState({'x':this.state.x,'y':this.state.y-0.25,'z':this.state.z})
      }
      if (e.keyCode===83) {
        this.setState({'x':this.state.x,'y':this.state.y+0.25,'z':this.state.z})
      }
      if (e.keyCode===68) {
        this.setState({'x':this.state.x,'y':this.state.y,'z':this.state.z+0.25})
      }
      if (e.keyCode===65) {
        this.setState({'x':this.state.x,'y':this.state.y,'z':this.state.z-0.25})
	  }  
	}
	manager=()=>{
    	this.props.activation('main')
    }
    render(){
        var styles={
          btn:{
			flex:1,
			border:'10px',
			borderRadius:'2vw',
			justifyContent:'center',
			alignItems:'center',
			backgroundColor:'#f00',
			color:'white'
		  },
		  drawer:{
			display:'flex',
			background:'#fff',
			flex:1,
            boxShadow:'4px 4px 10px rgb(146, 146, 146) , -4px -4px 10px rgb(146, 146, 146)',
			borderRadius:'2vw',
			marginLeft:'2vw',
			marginRight:'2vw',
			marginTop:'2vh',
			marginBottom:'2vh',
			maxHeight:'6vh'
          },
          select:{
			flex:1,
			borderRadius:'2vw',
          }
        }
        return(
          <model-viewer onKeyDown={this.control} style={{height:'100vh',width:'100vw',flex:'9'}} src={"DNA.glb"} camera-controls  min-camera-orbit={"auto auto auto"} max-camera-orbit={"auto auto auto"} camera-target={String(this.state.x)+"m "+String(this.state.y)+"m "+String(this.state.z)+"m"} animation-name="Cylinder.003Action.006" exposure="0.64" shadow-intensity="0.7" shadow-softness="0" poster="poster.png" camera-orbit="57.54deg 50.37deg 97.06m" >
			<button className="Hotspot" slot="hotspot-1" data-position="4.042219920298046m 1.8775163498199976m -5.497369697438934m" data-normal="0.7601912816534855m 0.16487151470454833m 0.6284318570354777m" data-visibility-attribute="visible">
        <div className="HotspotAnnotation">Guanine </div>
    </button><button className="Hotspot" slot="hotspot-2" data-position="6.138264966708351m -2.533379016664056m -5.7752459613130185m" data-normal="0.7393609226263936m 0.45709311504815636m -0.4943797227522799m" data-visibility-attribute="visible">
        <div className="HotspotAnnotation">Cytosine</div>
    </button><button className="Hotspot" slot="hotspot-3" data-position="3.6306103501794293m 2.9488966661527196m 15.352140099259453m" data-normal="0.9286703753573399m 0.27508653988835696m 0.24879455280594243m" data-visibility-attribute="visible">
        <div className="HotspotAnnotation">Adenine</div>
    </button><button className="Hotspot" slot="hotspot-4" data-position="5.229100881436855m -2.178368625025659m 15.565058499121466m" data-normal="0.9455725428588992m 0.32012412277119834m -0.05842184703795199m" data-visibility-attribute="visible">
        <div className="HotspotAnnotation">Thymine</div>
    </button><button className="Hotspot" slot="hotspot-5" data-position="4.1821628399483455m 6.054282130039745m 37.18065796722327m" data-normal="0.7691487118117544m 0.0278846488960167m 0.6384612012285984m" data-visibility-attribute="visible">
        <div className="HotspotAnnotation">Strand</div>
    </button>
			<div style={styles.drawer}>
						<button style={styles.btn} onClick={this.manager}>
							X
						</button>
						<div style={{flex:4, textAlign:'center'}}>W: up / S: down / D: right / A: left / mouse scroll whell: zoom in-out</div>
						<select name="Models" style={styles.select} onChange={this.Path}>
							<option value="DNA">DNA</option>
							<optgroup label="Neuclitides">
							<option value="Adenine">Adenine</option>
							<option value="Guanine ">Guanine </option>
							<option value="Cytosine">Cytosine</option>
							<option value="Thymine">Thymine</option>
						</optgroup>
						</select>
				</div>
          </model-viewer>
        )
      }
      
}

export default Viewer
