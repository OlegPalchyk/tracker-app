import React, {Component} from 'react';
import '../../containers/deviceList/DeviceList.css';
import DeviceItem from "../../components/deviceList/deviceItem";
import { Scrollbars } from 'react-custom-scrollbars';


class DeviceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openTrigger : null,
        }
    }
    changeTrigger(id){
        if(id === this.state.openTrigger){
            this.setState({
                openTrigger : null
            })
        }else {
            this.setState({
                openTrigger : id
            })
        }

    }

    render() {
        let items =[];
        if(this.props.loaded){
            items = this.props.items.map((item, index) => {
                return <DeviceItem item={item}
                                   key={item.id}
                                   changeMap={()=> this.props.changeMapDirection(item.id)}
                                   active={item.id === this.props.activeItemId}
                                   changeTrigger={()=>this.changeTrigger(item.id)}
                                   openTrigger={this.state.openTrigger}
                                   showHistory={(value)=>this.props.showHistory(item.id, value)}

                />
            });
        }
        const myScrollbar = {
            width: "100%",
            height: "100%",
        };
        return !this.props.loaded?null :
                <div className={`device-list-wrap ${this.props.showList?'active':''}`}>
                    <ul className='list-of-devices'>
                        <Scrollbars style={myScrollbar}>
                            <p className='device-list-title'>Devices : {this.props.items.length}</p>
                            {items}
                        </Scrollbars>
                    </ul>
                </div>
    }
}


export default (DeviceList)

